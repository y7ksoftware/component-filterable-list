
<script>

    import omit from 'lodash/omit';
    import { buildQueryUrl, buildQueryString, getURLHashbangAttributes } from '../utils/url';

    /**
     *
     */
    export default {

        props: {
            loadingUrl: {
                type: String,
                required: true,
            },
            showLoadMore: {
                type: Boolean,
                default: false,
            },
            isLoadingIndicatorDisabled: {
                type: Boolean,
                default: false,
            },
            initialFilter: {
                type: Object,
                default: () => { return {}; },
            },
            loadMoreButtonLabel: {
                type: String,
                default: 'Mehr',
            },
            useUrlHistory: {
                type: Boolean,
                default: false,
            },
        },


        data() {
            return {
                filter: {},
                disabledFields: [],
                chunk: 1,
                isReady: false,
                hasMoreItems: true,
                isLoading: false,
                multiChunk: 0,
            };
        },


        computed: {
            queryUrl() {
                const queryParams = omit(Object.assign({}, this.filter, { chunk: this.chunk, multiChunk: this.multiChunk }), this.disabledFields);
                return buildQueryUrl(this.loadingUrl, queryParams);
            },
        },


        watch: {
            filter: {
                handler() {
                    if (this.isReady) {
                        this.chunk = 1;
                        this.loadItems(true);

                        if (this.useUrlHistory) {
                            this.adjustUrl();
                        }
                    }
                },
                deep: true,
            },
        },


        mounted() {
            this.filter = Object.assign({}, this.initialFilter);

            if (this.useUrlHistory) {
                const hashBangAttributes = getURLHashbangAttributes();
                if (hashBangAttributes) {
                    for (const key of Object.keys(hashBangAttributes)) {
                        let value = decodeURIComponent(hashBangAttributes[key]);

                        if (key === 'chunk') {
                            this.chunk = parseInt(value, 10);
                            if (isNaN(this.chunk)) {
                                this.chunk = 1;
                            }

                            delete hashBangAttributes[key];
                        } else {
                            if (value === 'true') value = true;
                            if (value === 'false') value = false;
                            hashBangAttributes[key] = value;
                        }
                    }
                    this.filter = Object.assign(this.filter, hashBangAttributes);
                    this.multiChunk = this.chunk;
                    this.loadItems(true);
                    this.multiChunk = 0;
                }
            }

            this.$nextTick(() => {
                this.isReady = true;
                this.hasMoreItems = this.$refs.content.querySelector('meta[name="hasNoMore"]') === null;
            });

        },


        methods: {

            setFieldActive(fieldKey, isActive) {
                if (isActive) {
                    this.disabledFields = this.disabledFields.filter(disabledKey => disabledKey !== fieldKey);
                } else {
                    this.disabledFields.push(fieldKey);
                }
            },


            async loadItems(replaceItems = true) {

                this.isLoading = true;

                this.$nextTick(() => {
                    if (replaceItems) {
                        this.$refs.content.children[0].innerHTML = '';
                    }
                });
                const items = await axios.get(this.queryUrl);

                // Replace again, cause of race conditions, maybe after loading
                if (replaceItems) {
                    this.$refs.content.children[0].innerHTML = '';
                }

                this.isLoading = false;
                this.$refs.content.children[0].insertAdjacentHTML('beforeend', items.data);
                this.hasMoreItems = this.$refs.content.querySelector('meta[name="hasNoMore"]') === null;
            },


            loadNextChunk() {
                this.chunk++;
                this.loadItems(false);

                if (this.useUrlHistory) {
                    this.adjustUrl();
                }
            },


            adjustUrl() {
                const queryParams = omit(Object.assign({}, this.filter, { chunk: this.chunk }), this.disabledFields);
                const url = `#${buildQueryString(queryParams)}`;
                window.history.replaceState(queryParams, null, url);
            },
        },
    };

</script>

<template>
    <div class="filterableList">
        <div class="filterableList-loadingIndicator" v-show="isLoading && !isLoadingIndicatorDisabled">
            <div class="filterableList-loadingIndicatorInner">
                <div class="loadingSpinner"></div>
            </div>
        </div>

        <div class="filterableList-filter" v-cloak>
            <slot
                name="filter"
                :filter="filter"
            />
        </div>
        <div
            class="filterableList-content"
            ref="content"
        >
            <slot
                name="content"
                :filter="filter"
            />
        </div>
        <button
            class="filterableList-buttonLoadMore showMore"
            v-if="this.showLoadMore && this.hasMoreItems"
            @click="loadNextChunk"
        >
            {{ loadMoreButtonLabel }}
        </button>
    </div>
</template>
