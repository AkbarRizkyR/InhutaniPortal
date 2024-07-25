<template>
    <div class="px-4 py-8 sm:px-10 lg:px-40">
        <section>
            <div class="flex items-center justify-between mb-8">
                <h2 class="lg:text-xl text-sm font-bold">Unit Bisnis Inhutani</h2>
                <TabsComponent :tabs="tabs" :active-tab="selectedTab" @tab-change="handleTabChange" class="ml-6" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img v-for="(image, index) in currentImages" :key="index" :src="image.src" :alt="image.alt"
                    class="w-full h-auto" />
            </div>
            <div class="mt-8 flex flex-col lg:flex-row justify-between">
                <p class="text-sm lg:text-md font-bold mb-4 lg:mb-0">{{ currentContent }}</p>
                <p class="text-sm lg:text-md font-normal">{{ currentDescription }}</p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TabsComponent from '@/components/TabsComponent.vue';

// Define tabs with their content
const tabs = ref([
    { name: 'Kayu', content: 'Kayu', description: "Produk kayu bulat hutan alam dan hutan tanaman dari berbagai jenis kayu berkualitas yang ada di hutan tropis Kalimantan." },
    { name: 'Industri Kayu', content: 'Industri Kayu', description: "Unit Manajemen Industri di Gresik dan Juata memproduksi kayu gergajian dan kayu olahan berkualitas ekspor. Unit Manajemen Industri di Kediri memproduksi plywood, barecore dan produk kayu olahan lainnya." },
    { name: 'Industri Non Kayu', content: 'Industri Non Kayu', description: "Industri Non Kayu yang diolah oleh PT Inhutani sendiri ialah Bahan Non Kayu seperti Getah Karet, Getah Pinus, Gondorukem (Gumrosin), Terpentin, Minyak Atsiri, dan Minyak Kayu Putih." },
    { name: 'Argoforestri', content: 'Argoforestri', description: "Bekerjasama dengan masyarakat desa sekitar hutan dan mitra profesional mengelola produk agroforestry seperti singkong, jagung dan produk multi usaha kehutanan lainnya." },
    { name: 'Wisata Hutan', content: 'Wisata Hutan', description: "Unit Manajemen Industri Inhutani bekerja sama dalam Pengawasan dan Mengelola destinasi wisata hutan alam di Kalimantan dan Gowa untuk merawat keharmonisan ekosistem." },
]);


const selectedTab = ref(0);

const images = ref([
    [
        { src: '/src/assets/background/Kayu1.png', alt: 'Image 1' },
        { src: '/src/assets/background/Kayu2.png', alt: 'Image 2' },
        { src: '/src/assets/background/Kayu3.png', alt: 'Image 3' },
        { src: '/src/assets/background/Kayu4.png', alt: 'Image 4' },
    ],
    [
        { src: '/src/assets/background/InKayu1.png', alt: 'Image 5' },
        { src: '/src/assets/background/InKayu2.png', alt: 'Image 6' },
        { src: '/src/assets/background/InKayu3.png', alt: 'Image 7' },
        { src: '/src/assets/background/InKayu4.png', alt: 'Image 8' },
    ],
    [
        { src: '/src/assets/background/InNonKayu1.png', alt: 'Image 9' },
        { src: '/src/assets/background/InNonKayu2.png', alt: 'Image 10' },
        { src: '/src/assets/background/InNonKayu3.png', alt: 'Image 11' },
        { src: '/src/assets/background/InNonKayu4.png', alt: 'Image 12' },
    ],
    [
        { src: '/src/assets/background/Argoforestri1.png', alt: 'Image 13' },
        { src: '/src/assets/background/Argoforestri2.png', alt: 'Image 14' },
        { src: '/src/assets/background/Argoforestri3.png', alt: 'Image 15' },
        { src: '/src/assets/background/Argoforestri4.png', alt: 'Image 16' },
    ],
    [
        { src: '/src/assets/background/Argoforestri1.png', alt: 'Image 13' },
        { src: '/src/assets/background/Argoforestri2.png', alt: 'Image 14' },
        { src: '/src/assets/background/Argoforestri3.png', alt: 'Image 15' },
        { src: '/src/assets/background/Argoforestri4.png', alt: 'Image 16' },
    ],
]);


const currentImages = computed(() => {
    return images.value[selectedTab.value] || [];
});


const currentContent = computed(() => {
    return tabs.value[selectedTab.value].content;
});
const currentDescription = computed(() => {
    return tabs.value[selectedTab.value].description;
});


const handleTabChange = (index) => {
    selectedTab.value = index;
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>