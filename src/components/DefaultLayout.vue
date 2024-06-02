<template>
  <div>
    <navbar class="fixed z-50 w-full shadow-md" />
    <main class="flex flex-col pt-16">
      <router-view />
    </main>
  </div>
</template>
<script setup>
import Navbar from "./Navbar.vue";
</script>
