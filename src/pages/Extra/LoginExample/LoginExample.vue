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
          <div class="form-group">
            <input class="form-control no-border" ref="email" required v-model="email" type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required v-model="password" type="password" name="password" placeholder="Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="info">Login</b-button>
          <p class="widget-auth-info">or sign in with</p>
          <div class="social-buttons">
            <b-button @click="login" variant="primary" class="social-button mb-2">
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
            <b-button @click="login" variant="success" class="social-button">
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
      2020 &copy; Sing App Vue Admin Dashboard Template.
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

import router from "@/Routes";

export default {
  name: 'LoginExample',
  components: { Widget },
  data(){
    return {
      email: 'admin@flatlogic.com',
      password: '123456789'
    }
  },
  methods: {
    login() {
      router.push('/app/main/analytics');
    },
  },
};
</script>
