<template>
    <router-link :to="{ name: name }"
    :class="classes"
    class="block py-2 px-3 rounded md:p-0" aria-current="page">{{ title }}</router-link>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { name, title} = defineProps({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
})
const route = useRoute();
const classes = computed(() =>
    route.name === name
        ? 'text-white bg-blue-700 font-bold md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' 
        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
);
</script>