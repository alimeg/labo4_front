<template>
    <!-- Your template here -->
  </template>
  
  <script>
  import { ref, provide } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const dialog = ref(false);
      const message = ref('');
      const router = useRouter();
  
      const closeDialog = () => {
        dialog.value = false;
      };
  
      const goToLogin = () => {
        router.push('/login');
        closeDialog();
      };
  
      const openDialog = (messageText) => {
        message.value = messageText;
        dialog.value = true;
      };
  
      provide('popUpDialog', { dialog, message, closeDialog, goToLogin, openDialog });
    }
  }
  </script>
  
  <style scoped>
  /* Styles spécifiques si nécessaire */
  </style>
  