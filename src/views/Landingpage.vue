<template>
  <div class="landingpage">
    <Banner />
    <Preview />
    <Footer />
    <nav
      class="
        navbar navbar-expand-lg navbar-light
        bg-light
        px-5
        shadow
        fixed-top
      "
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
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item ms-4">
                  <router-link class="nav-link" to="/list">List</router-link>
                </li>
                <li class="nav-item ms-4">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item ms-4">
                  <router-link class="nav-link" to="/history"
                    >History</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Preview from "@/components/Preview.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Landingpage",
  components: {
    Banner,
    Preview,
    Footer,
  },
};
</script>