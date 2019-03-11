<script>

    import { Dropdown } from '@y7k/component-dropdown';
    import FilterFieldMixin from './FilterFieldMixin';

    /**
     *
     */
    export default {

        mixins: [
            FilterFieldMixin,
        ],

        components: {
            Dropdown,
        },

        props: ['options', 'optionsConditional', 'showArrow'],


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
        <dropdown
            :options="activeOptions"
            :value="value"
            @input="input"
            :showArrow="showArrow"
        >
        </dropdown>
    </div>
</template>
