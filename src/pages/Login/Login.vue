<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        Sing App
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign in.
        </p>
        <b-alert class="alert-sm text-center mt-2" variant="secondary" show>
          This is a real app with Node.js backend - use
          <br/>
          <span class="font-weight-bold">"admin@flatlogic.com / password"</span>
          <br/>
          to login!
        </b-alert>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" ref="email" required type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="password" name="password" placeholder="Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="info">{{this.isFetching ? 'Loading...' : 'Login'}}</b-button>
          <p class="widget-auth-info">or sign in with</p>
          <div class="social-buttons">
            <b-button @click="googleLogin" variant="primary" class="social-button mb-2">
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
            <b-button @click="microsoftLogin" variant="success" class="social-button">
              <i class="social-icon social-microsoft"></i>
              <p class="social-text">MICROSOFT</p>
            </b-button>
          </div>
        </form>
        <p class="widget-auth-info">
          Don't have an account? Sign up now!
        </p>
        <router-link class="d-block text-center" to="register">Create an Account</router-link>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      2021 &copy; Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import {mapState, mapActions} from 'vuex';

import config from '../../config';

export default {
  name: 'LoginPage',
  components: { Widget },
  computed: {
    ...mapState('auth', {
      isFetching: state => state.isFetching,
      errorMessage: state => state.errorMessage,
    }),
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'receiveToken', 'receiveLogin']),
    login() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if (email.length !== 0 && password.length !== 0) {
        this.loginUser({email, password});
      }
    },
    googleLogin() {
      this.loginUser({social: "google"});
    },
    microsoftLogin() {
      this.loginUser({social: "microsoft"});
    }
  },
  created() {
    const token = this.$route.query.token;
    if (token) {
      this.receiveToken(token);
    } else if (this.isAuthenticated(localStorage.getItem('token'))) {
      this.receiveLogin();
    }
  },
  mounted() {
    const creds = config.auth;
    this.$refs.email.value = creds.email;
    this.$refs.password.value = creds.password;
  }
};
</script>
