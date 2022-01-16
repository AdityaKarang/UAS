<template>
  <div id="app">
 <nav
    class="navbar navbar-expand-lg navbar-light bg-light px-5 shadow fixed-top"
  >
  <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/logo.png" width="170" height="31" />
      </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto fs-6">
          <li class="nav-item ms-4">
            <router-link class="nav-link" to="/Home">Home</router-link>
          </li>
          <li class="nav-item ms-4">
            <router-link class="nav-link" to="/list">List</router-link>
          </li>
          <li class="nav-item ms-4">
            <!-- <router-link class="nav-link" to="/">About</router-link> -->
            <a href="about" class="nav-link" to="/">About</a>

          </li>
          <li class="nav-item ms-4">
            <router-link class="nav-link" to="/history">History</router-link>
          </li>
        </ul>
      </div>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
  </div>
        </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
  <div class="container mt-5 pt-5 mx-auto">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>