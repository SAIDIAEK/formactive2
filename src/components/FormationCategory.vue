<template>
    <div>
        <div @click="toggleForm = !toggleForm" 
            class="flex items-center p-4 cursor-pointer">
            <div class="pr-4">
                <div class="font-bold text-xl">{{ formation.category }}</div>
            </div>
            <div class="text-gray-800">
                <div v-if="!toggleForm" class="flex items-center justify-center">
                    <div class="text-sm font-semibold">(Plus de details)</div>
                    <svg class="w-6 h-6 dark:text-white pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                    </svg>
                </div>
                <div v-else class="flex items-center justify-center">
                    <div class="text-sm font-semibold">(Moin de details)</div>
                    <svg class="w-6 h-6 dark:text-white pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
                    </svg>
                </div>
            </div>

        </div>
        <div class="overflow-x-auto" v-show="toggleForm">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-4 py-3">N°</th>
                        <th scope="col" class="px-4 py-3">Titre de la formation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="theme in formation.themes" :id="theme.id_theme" class="border-b dark:border-gray-700">
                        <td class="px-4 py-3">{{ theme.id_theme }}</td>
                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ theme.name_theme }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const toggleForm = ref(false)

const {formation} = defineProps({
    formation: Object,
})
</script>
