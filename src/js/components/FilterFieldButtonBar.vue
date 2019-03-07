<script>

    import FilterFieldMixin from './FilterFieldMixin';

    /**
     *
     */
    export default {

        mixins: [
            FilterFieldMixin,
        ],

        props: ['options', 'optionsConditional'],


        computed: {
            activeOptions() {
                if (Array.isArray(this.options)) {
                    return this.options;
                }
                return this.options[this.optionsConditional];
            },
        },


        methods: {
            input(value) {
                this.$emit('input', value);
            },
        },

    };
</script>

<template>
    <div
        class="filterableList-filterItem"
        v-show="isVisible"
    >
        <button-bar
            :options="activeOptions"
            :value="value"
            @input="input"
        >
        </button-bar>
    </div>
</template>
