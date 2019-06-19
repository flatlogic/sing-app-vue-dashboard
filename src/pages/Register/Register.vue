<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-gray"></i>
        Sing App
        <i class="fa fa-circle text-warning"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Create an account</h3>" customHeader>
        <p class="widget-auth-info">
          Please fill all fields below
        </p>
        <form class="mt" @submit.prevent="register">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border"
                   ref="email" type="email" required name="email"
                   placeholder="Email"/>
          </div>
          <div class="form-group">
            <input class="form-control no-border"
                   ref="password" type="password" required name="password"
                   placeholder="Password"/>
          </div>
          <div class="form-group">
            <input class="form-control no-border"
                   ref="confirmPassword" @blur="checkPassword" type="password" required
                   name="confirmPassword"
                   placeholder="Confirm"/>
          </div>
          <b-button type="submit" variant="inverse" class="auth-btn mb-3" size="sm">{{this.isFetching ? 'Loading...' : 'Register'}}</b-button>
          <p class="widget-auth-info">or sign up with</p>
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
          Already have the account? Login now!
        </p>
        <router-link class="d-block text-center" to="login">Enter the account</router-link>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      2019 &copy; Sing App - React Admin Dashboard Template.
    </footer>
  </div>
</template>
<script>
  import Widget from '../../components/Widget/Widget';
  import {mapActions, mapState} from 'vuex';

  export default {
    name: 'RegisterPage',
    components: {Widget},
    computed: {
      ...mapState('register', {
        isFetching: state => state.isFetching,
        errorMessage: state => state.errorMessage,
      }),
    },
    methods: {
      ...mapActions('register', ['registerUser', 'registerError']),
      ...mapActions('auth', ['loginUser']),
      register() {
        const email = this.$refs.email.value;
        const password = this.$refs.password.value;

        if (!this.isPasswordValid()) {
          this.checkPassword();
        } else {
          this.registerUser({creds: {email, password}, $toaster: this.$toaster});
        }
      },
      googleLogin() {
        this.loginUser({social: "google"});
      },
      microsoftLogin() {
        this.loginUser({social: "microsoft"});
      },
      checkPassword() {
        if (!this.isPasswordValid()) {
          if (!this.$refs.password.value) {
            this.registerError("Password field is empty");
          } else {
            this.registerError("Passwords are not equal");
          }
          setTimeout(() => {
            this.registerError();
          }, 3 * 1000)
        }
      },
      isPasswordValid() {
        return this.$refs.password.value && this.$refs.password.value === this.$refs.confirmPassword.value;
      }
    },
  }
</script>