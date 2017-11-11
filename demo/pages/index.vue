<template>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
</template>

<script>
    export default {
        computed: {
            counter () {
                return this.$store.state.counter
            }
        }
    }
</script>