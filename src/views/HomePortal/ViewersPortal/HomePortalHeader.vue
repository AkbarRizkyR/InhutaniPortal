<template>
    <div class="relative w-full h-screen bg-cover bg-center flex-shrink-0"
        style="background-image: url('/src/assets/background/BG.png');">
        <div
            class="flex flex-col justify-center items-center absolute inset-0 bg-black bg-opacity-30 text-white p-6 rounded-lg w-full h-full">
            <div class="max-w-screen-lg mx-auto p-6 text-center">
                <h1 class="text-center text-white font-inter font-bold text-[48px] leading-[62.4px] mb-4">
                    Terus Hijaukan Negeri Untuk Kesejahteraan Bangsa
                </h1>
                <p class="text-center text-white font-inter font-medium text-[20px] leading-[26px] mb-6">
                    PT Inhutani I bergerak di bidang pengelolaan hutan alam, <br/> hutan tanaman, hasil hutan non kayu
                </p>
                <div class="flex justify-center items-center gap-4">
                    <CustomButton
                        customClasses="px-6 py-2 text-[14px] font-semibold text-white bg-black hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 hover:text-black border rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center">
                        Get To Know
                        <template #icon>
                            <img src="@/assets/styles/icons/svg/ArrowLeftUp.svg" alt="Arrow Icon" class="ml-2" />
                        </template>
                    </CustomButton>
                    <CustomButton
                        customClasses="px-6 py-2 text-[14px] font-semibold text-black bg-white hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-100 hover:text-white border rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center">
                        Contact Us
                        <template #icon>
                            <img src="@/assets/styles/icons/svg/EmailSend.svg" alt="" class="ml-2" />
                        </template>
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>