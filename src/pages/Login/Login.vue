<template>
  <div class="auth-page">
    <div class="container">
      <h5 class="auth-logo">
        <i
          class="fa fa-circle text-primary"
          aria-hidden="true"
        />
        Sing App
        <i
          class="fa fa-circle text-danger"
          aria-hidden="true"
        />
      </h5>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Login to your Web App</h3>"
        custom-header
      >
        <p class="widget-auth-info">
          Use your email to sign in.
        </p>
        <div
          class="alert alert-primary alert-sm text-center mt-2"
          role="alert"
        >
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
          <div
            v-if="errorMessage"
            class="alert alert-danger alert-sm"
            role="alert"
          >
            {{ errorMessage }}
          </div>
          <div class="form-group">
            <input
              ref="emailInput"
              class="form-control no-border"
              required
              type="email"
              name="email"
              placeholder="Email"
            >
          </div>
          <div class="form-group">
            <input
              ref="passwordInput"
              class="form-control no-border"
              required
              type="password"
              name="password"
              placeholder="Password"
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-sm auth-btn mb-3 text-white"
          >
            {{ isFetching ? 'Loading...' : 'Login' }}
          </button>
          <p class="widget-auth-info">
            or sign in with
          </p>
          <div class="social-buttons">
            <button
              type="button"
              class="btn btn-warning social-button mb-2 text-white"
              @click="googleLogin"
            >
              <i
                class="social-icon social-google"
                aria-hidden="true"
              />
              <p class="social-text">
                GOOGLE
              </p>
            </button>
            <button
              type="button"
              class="btn btn-danger social-button text-white"
              @click="microsoftLogin"
            >
              <i
                class="social-icon social-microsoft"
                aria-hidden="true"
              />
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
      2021 &copy; Sing App - Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { isAuthenticated } from '@/utils/auth'
import Widget from '@/components/Widget/Widget.vue'
import config from '../../config'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const emailInput = ref(null)
const passwordInput = ref(null)

const isFetching = computed(() => authStore.isFetching)
const errorMessage = computed(() => authStore.errorMessage)

async function login() {
  const email = emailInput.value?.value
  const password = passwordInput.value?.value

  if (email?.length !== 0 && password?.length !== 0) {
    const result = await authStore.loginUser({ email, password })
    if (result.success && result.redirect) {
      router.push(result.redirect)
    }
  }
}

async function googleLogin() {
  await authStore.loginUser({ social: "google" })
}

async function microsoftLogin() {
  await authStore.loginUser({ social: "microsoft" })
}

onMounted(() => {
  const token = route.query.token
  if (token) {
    authStore.receiveToken(token)
    router.push('/app/main/analytics')
  } else if (isAuthenticated(localStorage.getItem('token'))) {
    router.push('/app/main/analytics')
  }

  const creds = config.auth
  if (emailInput.value) emailInput.value.value = creds.email
  if (passwordInput.value) passwordInput.value.value = creds.password
})
</script>
