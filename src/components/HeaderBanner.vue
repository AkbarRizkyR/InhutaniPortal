<template>
    <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-transparent fixed top-0 left-0 w-full z-50">
        <div class="logo mb-4 md:mb-0">
            <!-- Ganti dengan logo Anda -->
            <img src="@/assets/styles/icons/png/logo.png" alt="Logo" class="h-12 filter invert brightness-0">
        </div>
        <button @click="toggleMenu" class="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        <nav :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="navigation md:block">
            <ul class="flex flex-col md:flex-row  md:space-x-6">
                <li><a href="#beranda" class="text-white font-medium text-[16px]">Beranda</a></li>
                <li><a href="#tentang-kami" class="text-white font-medium text-[16px]">Tentang Kami</a></li>
                <li><a href="#unit-bisnis" class="text-white font-medium text-[16px]">Unit Bisnis</a></li>
                <li><a href="#kontak" class="text-white font-medium text-[16px]">Kontak</a></li>
                <li><a href="#karir" class="text-white font-medium text-[16px]">Karir</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};
</script>

<style scoped>
/* Gaya tambahan untuk versi mobile */
@media (max-width: 768px) {
    header {
        background-color: rgba(0, 0, 0, 0.8); /* Latar belakang semi-transparan */
        padding: 1rem; /* Padding lebih besar untuk mobile */
    }
    .navigation ul {
        flex-direction: column; /* Kolom untuk mobile */
        align-items: center; /* Pusatkan item */
    }
    .navigation ul li {
        margin-bottom: 1rem; /* Jarak antar item */
    }
}
</style>