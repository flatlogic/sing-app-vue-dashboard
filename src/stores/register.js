import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import config from '../config'

export const useRegisterStore = defineStore('register', () => {
  const isFetching = ref(false)
  const errorMessage = ref('')

  async function registerUser(payload) {
    // We check if app runs with backend mode
    if (!config.isBackend) {
      return {
        success: true,
        message: "You've been registered successfully",
        redirect: '/login'
      }
    }

    requestRegister()
    const creds = payload.creds

    if (creds.email.length > 0 && creds.password.length > 0) {
      try {
        await axios.post("/auth/signup", creds)
        receiveRegister()
        return {
          success: true,
          message: "You've been registered successfully",
          redirect: '/login'
        }
      } catch (err) {
        registerError(err.response?.data || 'Registration failed')
        return { success: false, error: errorMessage.value }
      }
    } else {
      registerError('Something was wrong. Try again')
      return { success: false, error: errorMessage.value }
    }
  }

  function requestRegister() {
    isFetching.value = true
  }

  function receiveRegister() {
    isFetching.value = false
    errorMessage.value = ''
  }

  function registerError(payload) {
    isFetching.value = false
    errorMessage.value = payload
  }

  function clearError() {
    errorMessage.value = ''
  }

  return {
    isFetching,
    errorMessage,
    registerUser,
    requestRegister,
    receiveRegister,
    registerError,
    clearError
  }
})
