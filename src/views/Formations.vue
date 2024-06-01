<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                <!-- Start coding here -->
                <div v-for="formation in formationStore.formations"
                    :id="formation.id" 
                    class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden my-6"
                >
                    <FormationCategory :formation="formation" />
                    
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>

import { useFormationStore } from '../stores/FormationStore'
import FormationCategory from '../components/FormationCategory.vue'


const formationStore = useFormationStore();
</script>