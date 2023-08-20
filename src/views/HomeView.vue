<template>
  <main>
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
      <button v-on:click="userLogin">Login</button>
    </div>

    <div v-if="authState?.isAuthenticated">
      <h1>Welcome {{ userData && userData.name }}!</h1>
      <br />
      <p>
        🎉 Congratulations! 🎉 You're now successfully logged in to your
        account. We're thrilled to have you as part of our community. Your
        journey starts here, and we're here to support you every step of the
        way. To below is your account details. 🔍 🌟🔐
      </p>
      <br />
      <div>
        <h1>User Information</h1>
        <br />
        <table class="detail-table">
          <thead>
            <tr>
              <th>Properties</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(x, index) in userClaims" :key="index">
              <td>{{ x.claimType }}</td>
              <td :id="'id-' + x.claimType">{{ x.claimValue }}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <button class="logoutBtn" v-on:click="userLogout">Logout</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data: function () {
    return {
      userData: null,
      userClaims: [],
    };
  },
  async created() {
    this.userDetails();
  },
  methods: {
    async userDetails() {
      if (this.authState?.isAuthenticated) {
        const authToken = await this.$auth.tokenManager.get("idToken");

        this.userArray = await this.$auth.getUser();
        this.userClaims = Object.entries(authToken.claims).map(
          ([claimType, claimValue]) => ({
            claimType,
            claimValue,
          })
        );
      }
    },
    async userLogout() {
      await this.$auth.signOut();
    },
    async userLogin() {
      await this.$auth.signInWithRedirect();
    },
  },
};
</script>

<style>
.logoutBtn {
  background-color: red;
}

.detail-table {
  font-family: Arial;
  border-collapse: collapse;
  width: 100%;
  color: black;
}

.detail-table td,
.detail-table th {
  border: 1px solid #ddd;
  padding: 9px;
}

.detail-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.detail-table tr:nth-child(odd) {
  background-color: #ddd;
}

.detail-table tr:hover {
  background-color: grey;
}

.detail-table th {
  padding-top: 15px;
  padding-bottom: 9px;
  text-align: left;
  background-color: #046daa;
  color: white;
}
</style>
