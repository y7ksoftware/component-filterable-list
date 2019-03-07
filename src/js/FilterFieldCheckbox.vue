<script>

    import FilterFieldMixin from 'components/filterableList/FilterFieldMixin';

    /**
     *
     */
    export default {

        mixins: [
            FilterFieldMixin,
        ],

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
