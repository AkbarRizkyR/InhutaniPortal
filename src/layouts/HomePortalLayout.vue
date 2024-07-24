<template>
    <div class="relative">
        <!-- Header banner that stays in front of the router-view -->
        <HeaderBanners class="absolute z-50 w-full" />
        <router-view />
        <FooterBanner/>
    </div>
</template>

<script>
import HeaderBanners from '@/components/HeaderBanner.vue';
import FooterBanner from '@/components/FooterBanner.vue';

export default {
    name: 'HeaderComponent',
    components: {
        HeaderBanners,
        FooterBanner
    },
};
</script>

<style scoped>
/* Add any additional CSS styles here if needed */
</style>