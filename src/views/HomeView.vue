<template>
  <div id="home">
    <div v-if="!authState?.isAuthenticated">
      <h1>Welcome To HomePage</h1>
      <br />

      <p>
        🌟 Welcome to our Home Page! 🌟 We're excited to have you here. To get
        started on your journey, simply click the button below to initiate the
        secure login process. Our seamless integration with Okta ensures your
        information is well-protected while granting you access to all the
        amazing features that await you. Click to Login and Explore ➡️ 🚀🔐
      </p>
      <br />
      <button id="login-button" class="" v-on:click="login">Login</button>
    </div>

    <div v-if="authState?.isAuthenticated">
      <h1>Welcome {{ userArray && userArray.name }}!</h1>
      <br />
      <p>
        🎉 Congratulations! 🎉 You're now successfully logged in to your
        account. We're thrilled to have you as part of our community. Your
        journey starts here, and we're here to support you every step of the
        way. To access your account details and explore the exciting features
        that await you, simply click the button below: 🔍 🌟🔐
      </p>
      <br />
      <button v-on:click="gotoProfile" id="">View Your Login Details</button>
    </div>
  </div>
  <br />
</template>

<script>
import router from "../router";

export default {
  name: "home",
  data: function () {
    return {
      userArray: "",
    };
  },
  created() {
    this.userName();
  },
  methods: {
    async userName() {
      if (this.authState?.isAuthenticated) {
        this.userArray = await this.$auth.getUser();
      }
    },
    login() {
      this.$auth.signInWithRedirect();
    },
    gotoProfile() {
      router.push("/details");
    },
  },
};
</script>
