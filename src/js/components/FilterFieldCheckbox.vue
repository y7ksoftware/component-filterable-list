<script>

    import { Checkbox } from '@y7k/component-checkbox';
    import FilterFieldMixin from './FilterFieldMixin';

    /**
     *
     */
    export default {

        mixins: [
            FilterFieldMixin,
        ],

        components: {
            Checkbox,
        },

        props: ['label'],


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
        <checkbox
            :value="value"
            :label="label"
            @input="input"
        >
        </checkbox>
    </div>
</template>
