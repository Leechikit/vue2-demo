<template>
    <div class="parent">
        I am parent {{ total }}
        <child :pname="name" @increment="incrementTotal"></child>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'parent',
            total: 0
        }
    },
    methods: {
        incrementTotal() {
            this.total += 1;
        }
    }
}
</script>