<template>
    <div >
      <span>{{ displayedText }}</span><span class="cursor">|</span>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'TextAnimation',
    props: {
    fullText: {
      type: String,
      required: true,
    },
  },
    setup(props) {
      const displayedText = ref('');
      let index = 0;
  
      const typeText = () => {
      if (index < props.fullText.length) {
        displayedText.value += props.fullText.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust the speed by changing the timeout value
      } else {
        // Reset after complete
        setTimeout(() => {
          displayedText.value = '';
          index = 0;
          typeText();
        }, 2000); // Adjust the delay before restarting the animation
      }
    };
  
      onMounted(() => {
        typeText();
      });
  
      return { displayedText };
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
  