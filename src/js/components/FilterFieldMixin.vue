<script>

    /**
     *
     */
    export default {

        props: {
            fieldKey: String,
            value: {},
            isVisible: {
                type: Boolean,
                default: true,
            },
            isDisabled: {
                type: Boolean,
                default: false,
            },
        },


        watch: {
            isVisible() {
                this.setFieldActive(this.isVisible);
            },

            isDisabled() {
                this.setFieldActive(!this.isDisabled);
            },
        },


        methods: {
            setFieldActive(isActive) {
                this.$parent.setFieldActive(this.fieldKey, isActive);
            },
        },
    };
</script>
