<template>
  <nav class="bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div ref="menuContainer">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link :to="{ name: 'home' }" class="flex items-center space-x-3 rtl:space-x-reverse" @click="handleMenuClick">
        <img src="/src/assets/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Formactive Center</span>
      </router-link>
      
        <button  type="button" @click="toggleMenu"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level" :aria-expanded="isMenuOpen"> <!-- data-collapse-toggle="navbar-multi-level"  -->
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div :class="['w-full md:block md:w-auto', isMenuOpen ? 'block' : 'hidden']" id="navbar-multi-level">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Navlink name="home" title="Home" @click="handleMenuClick" />
            </li>
            <li>
              <Navlink name="formations" title="Formations" @click="handleMenuClick" />
            </li>
            <!-- <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Formations
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button> -->
              <!-- Dropdown menu -->
              <!-- <div id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <router-link :to="{name: 'informatique'}"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Informatique</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'formations'}"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Formations</router-link>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Commerce et Marketing</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Management de la qualité</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Management</a>
                  </li>
                </ul>
              </div>
            </li> -->
            <li>
              <Navlink name="langues" title="Langues" @click="handleMenuClick" />
            </li>
            <li>
              <Navlink name="mission" title="Mission" @click="handleMenuClick" />
            </li>
            <li>
              <Navlink name="contact" title="Contact" @click="handleMenuClick"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navlink from './Navlink.vue';

const isMenuOpen  = ref(false);
const menuContainer = ref(null);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const handleMenuClick = () => {
  if (window.innerWidth < 768) {
    closeMenu();
  }
};

const handleClickOutside = (event) => {
  if ((menuContainer.value && !menuContainer.value.contains(event.target)) && isMenuOpen.value ) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
