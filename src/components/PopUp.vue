<template>
    <div v-if="showDialog" class="popup-dialog">
      <p>{{ message }}</p>
      <button @click="handleOk">OK</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDialog: false,
        message: '',
      };
    },
    methods: {
      show(message) {
        this.showDialog = true;
        this.message = message;
      },
      hide() {
        this.showDialog = false;
      },
      handleOk() {
        this.hide();
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  