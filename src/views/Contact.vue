<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" v-model="form.name" id="name" required class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" v-model="form.email" id="email" required class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm">
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea v-model="form.message" id="message" required class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Send Message</button>
      </form>
      <p v-if="status" :class="statusClass" class="mt-4">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: '',
      to_name: 'SAIDI Abdelkader'
    });
    const status = ref(false);
    const statusMessage = ref('');
    const statusClass = ref('');

    const sendEmail = () => {
      emailjs.send(
        'service_formatec', // Replace with your service ID
        'template_formatec', // Replace with your template ID
        form.value,
        'Ptc6WiOwNucYepW7Q' // Replace with your Public Key
      )
      .then((response) => {
        status.value = true;
        statusMessage.value = 'Message sent successfully!';
        statusClass.value = 'text-green-500';
        resetForm();
      }, (error) => {
        status.value = true;
        statusMessage.value = 'Failed to send message. Please try again.';
        statusClass.value = 'text-red-500';
      });
    };

    const resetForm = () => {
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    };

    return { form, status, statusMessage, statusClass, sendEmail };
  }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
