<template>
  <div>
    <h1>User Information</h1>
    <br />
    <table class="detail-table">
      <thead>
        <tr>
          <th>Claim</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(claim, index) in userClaims" :key="index">
          <td>{{ claim.claimType }}</td>
          <td :id="'claim-' + claim.claimType">{{ claim.claimValue }}</td>
        </tr>
      </tbody>
    </table>

    <div class="buttonCont">
      <button class="logoutBtn" v-on:click="userLogout" id="">Logout</button>
      <button v-on:click="navigateHome" id="">Home</button>
    </div>
  </div>
</template>

<script>
import myRouter from "../router";

export default {
  name: "UserProfile",
  data() {
    return {
      userClaims: [],
    };
  },
  async created() {
    const authToken = await this.$auth.tokenManager.get("idToken");
    this.userClaims = await Object.entries(authToken.claims).map((entry) => ({
      claimType: entry[0],
      claimValue: entry[1],
    }));
  },
  methods: {
    async userLogout() {
      await this.$auth.signOut();
    },
    async navigateHome() {
      await myRouter.push("/");
    },
  },
};
</script>

<style>
.buttonCont {
  display: flex;
  gap: 29px;
  margin-top: 29px;
}

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
