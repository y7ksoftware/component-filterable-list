<script>

    import FilterFieldMixin from './FilterFieldMixin';

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
