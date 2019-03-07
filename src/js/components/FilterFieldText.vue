<script>

    import FilterFieldMixin from './FilterFieldMixin';

    /**
     *
     */
    export default {

        props: {
            placeholder: {
                type: [String],
                default: '',
            },
        },

        mixins: [
            FilterFieldMixin,
        ],

        methods: {
            input(value) {
                this.$emit('input', value);
            },
        },

    };
</script>

<template>
    <div
        class="filterableList-filterItem filterableList-filterFieldText"
        v-show="isVisible"
    >
        <div class="textInput">
            <text-input
                @input="input"
                :placeholder="placeholder"
                :value="value"
            ></text-input>
        </div>
    </div>
</template>
