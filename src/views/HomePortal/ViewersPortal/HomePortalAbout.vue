<template>
    <div class="px-4 py-10 md:px-20 lg:px-40 lg:py-20">
        <!-- Layout Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Left Column -->
            <div class="flex flex-col justify-center">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Mengelola Industri Kayu
                    <br />
                    Never Be That Skibidi Easy
                </h1>
            </div>

            <!-- Right Column -->
            <div class="flex flex-col justify-center">
                <p class="text-xs md:text-sm text-gray-700 mb-6">
                    PT Eksploitasi dan Industri Hutan I (PT Inhutani I) merupakan perusahaan Holding BUMN Kehutanan di
                    bawah naungan Perhutani Group, yang merupakan hasil penggabungan antara PT Inhutani I, PT Inhutani
                    II dan PT Inhutani III. Perusahaan bergerak di bidang pengelolaan hasil hutan kayu dan hasil hutan
                    non kayu yang berlokasi di Pulau Kalimantan dan sebagian Provinsi Sulawesi Selatan, dengan areal
                    kelola seluas 1.045.596 hektar. Selain itu Perusahaan juga mengelola industri kayu yang berlokasi di
                    Juata Kalimantan Utara, Gresik dan Kediri Jawa Timur.
                </p>
                <CustomButton
                    customClasses="inline-flex h-[40px] md:h-[48px] w-40 md:w-52 px-4 md:px-6 py-2 text-[10px] md:text-[12px] font-bold text-white bg-[#079E69] hover:bg-green-700 hover:text-white/100 border rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg items-center justify-center gap-2 flex-shrink-0">
                    Produk Inhutani
                    <template #icon>
                        <img src="@/assets/styles/icons/svg/ArrowLeftUp.svg" alt="Arrow Icon" class="ml-2" />
                    </template>
                </CustomButton>

            </div>
        </div>

        <!-- Image Gallery -->
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="relative flex justify-center items-center">
                <img src="/src/assets/background/Rectangle.png" alt="Image 1"
                    class="w-full h-auto rounded-3xl shadow-md" />
                <!-- Overlay text at bottom-left -->
                <div class="absolute bottom-0 left-0 p-4 text-white text-xl md:text-3xl font-bold">
                    Kayu
                </div>
            </div>
            <div class="relative flex justify-center items-center">
                <img src="/src/assets/background/Rectangle1.png" alt="Image 2"
                    class="w-full h-auto rounded-3xl shadow-md" />
                <div class="absolute bottom-0 left-0 p-4 text-white text-xl md:text-3xl font-bold">
                    Argoforestri
                </div>
            </div>
            <div class="relative flex justify-center items-center">
                <img src="/src/assets/background/Rectangle2.png" alt="Image 3"
                    class="w-full h-auto rounded-3xl shadow-md" />
                <div class="absolute bottom-0 left-0 p-4 text-white text-xl md:text-3xl font-bold">
                    Wisata
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
</script>

<style scoped>
/* Add any additional CSS styles here if needed */
</style>