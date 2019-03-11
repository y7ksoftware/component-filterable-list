<script>

    import { NavigationBar } from '@y7k/component-navigation-bar';
    import FilterFieldMixin from './FilterFieldMixin';

    /**
     *
     */
    export default {

        mixins: [
            FilterFieldMixin,
        ],

        components: {
            NavigationBar,
        },

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
        <navigation-bar
            :options="activeOptions"
            :value="value"
            @input="input"
        >
        </navigation-bar>
    </div>
</template>
