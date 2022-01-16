<template>
  <div class="home">
    <Navbar />
    <Banner />
    <Preview />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Preview from '@/components/Preview.vue';
import Footer from '@/components/Footer.vue';
import UserService from "../services/user.service";

export default {
  name: "Home",
    components: {
    Navbar,
    Banner,
    Preview,
    Footer
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      content: "",
    };
  },
  
  mounted() {
        if (!this.currentUser) {
      this.$router.push('/login');
    }
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
