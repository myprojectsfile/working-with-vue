<template>
  <div>
    <div v-if="data">
      <h4>Name: {{data.name}}</h4>
      <p>Company: {{data.company}}</p>
      <p>Number of Repos: {{data.public_repos}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubUserData",
  props: {
    data: {}
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>