<template>
    <button :class="customClasses">
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>

<script setup>
defineProps({
    customClasses: {
        type: String,
        default: ''
    }
});
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>