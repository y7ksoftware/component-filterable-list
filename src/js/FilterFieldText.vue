<script>

    import FilterFieldMixin from 'components/filterableList/FilterFieldMixin';
    import Magnifier from 'components/text-input/assets/Magnifier';

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

        components: {
            Magnifier,
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
            <magnifier class="textInput-magnifier"></magnifier>
        </div>
    </div>
</template>
