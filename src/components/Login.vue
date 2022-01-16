<template>
 <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 shadow fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo.png" width="170" height="31">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
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
    </nav> -->
    
  <div class="col-md-12 mt-5">
    <div class="card card-container">
      <img src="../assets/img/logo.png" alt="" class="img img-fluid mb-4" />
<div class="mb-4">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
</div>
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <div class="mb-5">
          <!-- <label for="username">Username</label> -->
          <Field name="username" type="text" class="form-control" placeholder="Username" />
          <ErrorMessage name="username" class="error-feedback" />
          </div>
        </div>
        <div class="form-group">
          <!-- <label for="password">Password</label> -->
          <Field name="password" type="password" class="form-control" placeholder="Password"/>
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group">
          <div class="d-grid mt-5">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
          </div>
        </div>

         <div class="mt-3">
            <label
              >Not registered yet ?
              <router-link to="/register">create account</router-link></label
            >
          </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
      currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/Home");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    //     logOut() {
    //   this.$store.dispatch('auth/logout');
    //   this.$router.push('/login');
    // }
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

input[name="username"],
input[name="password"] {
    border-color: blue;
    border-style: solid;
    border-width: 0 0 1px 0;
}

.btn{
  border-radius: 20px;

}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
</style>
