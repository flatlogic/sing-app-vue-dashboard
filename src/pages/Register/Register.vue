<template>
  <div class="auth-page">
    <div class="container">
      <h5 class="auth-logo">
        <i
          class="fa fa-circle text-gray"
          aria-hidden="true"
        />
        Sing App
        <i
          class="fa fa-circle text-warning"
          aria-hidden="true"
        />
      </h5>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Create an account</h3>"
        custom-header
      >
        <p class="widget-auth-info">
          Please fill all fields below
        </p>
        <form
          class="mt"
          @submit.prevent="register"
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
              type="email"
              required
              name="email"
              placeholder="Email"
            >
          </div>
          <div class="form-group">
            <input
              ref="passwordInput"
              class="form-control no-border"
              type="password"
              required
              name="password"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <input
              ref="confirmPasswordInput"
              class="form-control no-border"
              type="password"
              required
              name="confirmPassword"
              placeholder="Confirm"
              @blur="checkPassword"
            >
          </div>
          <button
            type="submit"
            class="btn btn-inverse btn-sm auth-btn mb-3"
          >
            {{ isFetching ? 'Loading...' : 'Register' }}
          </button>
          <p class="widget-auth-info">
            or sign up with
          </p>
          <div class="social-buttons">
            <button
              type="button"
              class="btn btn-primary social-button mb-2"
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
              class="btn btn-success social-button"
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
          Already have the account? Login now!
        </p>
        <router-link
          class="d-block text-center"
          to="login"
        >
          Enter the account
        </router-link>
      </Widget>
    </div>
    <footer class="auth-footer">
      2021 &copy; Sing App - Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useRegisterStore } from '@/stores/register'
import { useAuthStore } from '@/stores/auth'
import Widget from '@/components/Widget/Widget.vue'

const router = useRouter()
const toast = useToast()
const registerStore = useRegisterStore()
const authStore = useAuthStore()

const emailInput = ref(null)
const passwordInput = ref(null)
const confirmPasswordInput = ref(null)

const isFetching = computed(() => registerStore.isFetching)
const errorMessage = computed(() => registerStore.errorMessage)

async function register() {
  const email = emailInput.value?.value
  const password = passwordInput.value?.value

  if (!isPasswordValid()) {
    checkPassword()
  } else {
    const result = await registerStore.registerUser({ creds: { email, password } })
    if (result.success) {
      if (result.message) {
        toast.success(result.message)
      }
      if (result.redirect) {
        router.push(result.redirect)
      }
    }
  }
}

async function googleLogin() {
  await authStore.loginUser({ social: "google" })
}

async function microsoftLogin() {
  await authStore.loginUser({ social: "microsoft" })
}

function checkPassword() {
  if (!isPasswordValid()) {
    if (!passwordInput.value?.value) {
      registerStore.registerError("Password field is empty")
    } else {
      registerStore.registerError("Passwords are not equal")
    }
    setTimeout(() => {
      registerStore.clearError()
    }, 3000)
  }
}

function isPasswordValid() {
  return passwordInput.value?.value && passwordInput.value?.value === confirmPasswordInput.value?.value
}
</script>
