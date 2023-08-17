<template>
  <div class="details">
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
        <tr v-for="(claim, index) in claims" :key="index">
          <td>{{ claim.claim }}</td>
          <td :id="'claim-' + claim.claim">{{ claim.value }}</td>
        </tr>
      </tbody>
    </table>

    <div class="buttonCont">
      <button class="logoutBtn" v-on:click="logout" id="">Logout</button>
      <button v-on:click="goHome" id="">Home</button>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Profile",
  data() {
    return {
      claims: [],
    };
  },
  async created() {
    const idToken = await this.$auth.tokenManager.get("idToken");
    this.claims = await Object.entries(idToken.claims).map((entry) => ({
      claim: entry[0],
      value: entry[1],
    }));
  },
  methods: {
    async logout() {
      await this.$auth.signOut();
    },
    async goHome() {
      await router.push("/");
    },
  },
};
</script>

<style>
.buttonCont {
  display: flex;
  gap: 30px;
  margin-top: 30px;
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
  padding: 10px;
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
  padding-top: 16px;
  padding-bottom: 10px;
  text-align: left;
  background-color: #046daa;
  color: white;
}
</style>
