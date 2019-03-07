<script>

    import FilterFieldMixin from 'components/filterableList/FilterFieldMixin';

    /**
     *
     */
    export default {

        mixins: [
            FilterFieldMixin,
        ],

    };
</script>

<template>
    <input
        type="hidden"
        :value="value"
    >
</template>
