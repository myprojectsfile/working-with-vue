<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <input v-model="username" type="text" placeholder="Enter a github username" />
      <button type="submit">Go!</button>
    </form>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>