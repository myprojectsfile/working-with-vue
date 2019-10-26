import bus from "../bus";
export default {
  name: "GithubOutput",
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
      console.log(this.currentUsername);
    }
  }
};
