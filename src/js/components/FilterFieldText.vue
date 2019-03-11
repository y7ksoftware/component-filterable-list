<script>

    import { TextInput } from '@y7k/component-text-input';
    import FilterFieldMixin from './FilterFieldMixin';

    /**
     *
     */
    export default {

        mixins: [
            FilterFieldMixin,
        ],

        components: {
            TextInput,
        },

        props: {
            placeholder: {
                type: [String],
                default: '',
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
