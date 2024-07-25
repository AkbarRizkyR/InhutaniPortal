<template>
    <div>
        <div class="flex flex-wrap border-gray-300">
            <button v-for="(tab, index) in tabs" :key="index"
                :class="['inline-flex h-[48px] w-36 px-6 py-2 text-[9px] font-bold border rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg items-center justify-center gap-2', { 'bg-[#079E69] text-white': selectedTab === index, 'bg-[#F3F3F3] text-black': selectedTab !== index }]"
                @click="selectTab(index)">
                {{ tab.name }}
            </button>
        </div>
        <div class="mt-4">
            <!-- Display content of the currently selected tab -->
            <img :src="tabs[selectedTab]?.image" alt="Tab Image" v-if="tabs[selectedTab]?.image" class="mb-4" />
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    activeTab: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['tab-change']);
const selectedTab = ref(props.activeTab);

const selectTab = (index) => {
    selectedTab.value = index;
    emit('tab-change', index);
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>