<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6">Contacter Nous</h2>
      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
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
    });
    const status = ref(false);
    const statusMessage = ref('');
    const statusClass = ref('');

    const validateEmail = (email) => {
      //const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      return re.test(email);
    };

    const sendEmail = () => {
      if (!validateEmail(form.value.email)) {
        status.value = true;
        statusMessage.value = 'S\'il vous plaît, mettez une adresse email valide.';
        statusClass.value = 'text-red-500';
        return;
      }

      const templateParams = {
        name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
        to_name: 'Formactive Center', // Replace with your recipient name if needed
      };
      emailjs.send(
        'service_formatec', // Replace with your service ID
        'template_formatec', // Replace with your template ID
        templateParams,
        'Ptc6WiOwNucYepW7Q' // Replace with your Public Key
      )
      .then((response) => {
        status.value = true;
        statusMessage.value = 'Message envoyé avec succès!';
        statusClass.value = 'text-green-500';
        resetForm();
      }, (error) => {
        status.value = true;
        statusMessage.value = 'Échec d\'envoi du message. Veuillez réessayer.';
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
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.cursor {
  animation: blink 1s step-start infinite;
}
</style>
