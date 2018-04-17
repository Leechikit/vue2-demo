<template>
    <div class="child">
        I am child from {{pname}}
        <button @click="incrementCounter">CLICK</button>
    </div>
</template>
<script>
export default {
    props: ['pname'],
    data() {
        return {
            name: 'child'
        };
    },
    methods: {
        incrementCounter() {
            this.$emit('increment');
        }
    }
}
</script>