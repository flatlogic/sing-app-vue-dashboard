<template>
  <div class="auth-page">
    <div class="container">
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary" />
        Sing App
        <i class="fa fa-circle text-danger" />
      </h5>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Login to your Web App</h3>"
        custom-header
      >
        <p class="widget-auth-info">
          Use your email to sign in.
        </p>
        <div class="alert alert-secondary alert-sm text-center mt-2">
          This is a real app with Node.js backend - use
          <br>
          <span class="fw-bold">"admin@flatlogic.com / password"</span>
          <br>
          to login!
        </div>
        <form
          class="mt"
          @submit.prevent="login"
        >
          <div class="form-group">
            <input
              ref="emailRef"
              v-model="email"
              class="form-control no-border"
              required
              type="email"
              name="email"
              placeholder="Email"
            >
          </div>
          <div class="form-group">
            <input
              ref="passwordRef"
              v-model="password"
              class="form-control no-border"
              required
              type="password"
              name="password"
              placeholder="Password"
            >
          </div>
          <button
            type="submit"
            class="btn btn-info btn-sm auth-btn mb-3"
          >
            Login
          </button>
          <p class="widget-auth-info">
            or sign in with
          </p>
          <div class="social-buttons">
            <button
              type="button"
              class="btn btn-primary social-button mb-2 text-white"
              @click="login"
            >
              <i class="social-icon social-google" />
              <p class="social-text">
                GOOGLE
              </p>
            </button>
            <button
              type="button"
              class="btn btn-success social-button"
              @click="login"
            >
              <i class="social-icon social-microsoft" />
              <p class="social-text">
                MICROSOFT
              </p>
            </button>
          </div>
        </form>
        <p class="widget-auth-info">
          Don't have an account? Sign up now!
        </p>
        <router-link
          class="d-block text-center"
          to="register"
        >
          Create an Account
        </router-link>
      </Widget>
    </div>
    <footer class="auth-footer">
      2020 &copy; Sing App Vue Admin Dashboard Template.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Widget from '@/components/Widget/Widget.vue'

const router = useRouter()

const email = ref('admin@flatlogic.com')
const password = ref('123456789')
const emailRef = ref(null)
const passwordRef = ref(null)

function login() {
  router.push('/app/main/analytics')
}
</script>
