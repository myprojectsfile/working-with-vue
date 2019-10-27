import bus from "../bus";
import Vue from "vue";
import GithubUserData from "../GithubUserData/githubUserData.vue";

export default {
  name: "GithubOutput",
  components: {
    "github-user-data": GithubUserData
  },
  data() {
    return {
      currentUsername: null,
      githubData: {}
    };
  },
  created() {
    bus.$on("new-username", this.onUsernameChange);
  },
  destroyed() {
    bus.$off("new-username", this.onUsernameChange);
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name;
      this.fetchGithubData(this.currentUsername);
    },
    fetchGithubData(name) {
      if (this.githubData.hasOwnProperty(name)) return;
      const url = `https://api.github.com/users/${name}`;
      fetch(url)
        .then(r => r.json())
        .then(data => {
          Vue.set(this.githubData, name, data);
          console.log(this.githubData);
        });
    }
  }
};
