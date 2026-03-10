import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { decodeJwt, clearAuthData } from '../utils/auth'
import config from '../config'

export const useAuthStore = defineStore('auth', () => {
  const isFetching = ref(false)
  const errorMessage = ref('')

  async function loginUser(creds) {
    // We check if app runs with backend mode
    if (!config.isBackend) {
      receiveToken('token')
      return { success: true, redirect: '/app/main/analytics' }
    }

    requestLogin()

    if (creds.social) {
      window.location.href = config.baseURLApi + "/auth/signin/" + creds.social + '?app=' + config.redirectUrl
      return { success: true, redirect: null } // External redirect
    }

    if (creds.email.length > 0 && creds.password.length > 0) {
      try {
        const res = await axios.post("/auth/signin/local", creds)
        const token = res.data
        receiveToken(token)
        return { success: true, redirect: '/app/main/analytics' }
      } catch (err) {
        loginError(err.response?.data || 'Login failed')
        return { success: false, error: errorMessage.value }
      }
    } else {
      loginError('Something was wrong. Try again')
      return { success: false, error: errorMessage.value }
    }
  }

  function receiveToken(token) {
    let user = {}

    // We check if app runs with backend mode
    if (config.isBackend) {
      const decoded = decodeJwt(token)
      user = decoded.user
      delete user.id
    } else {
      user = {
        email: config.auth.email
      }
    }

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
    receiveLogin()
  }

  function logoutUser() {
    clearAuthData()
    axios.defaults.headers.common['Authorization'] = ""
    return { redirect: '/login' }
  }

  function loginError(payload) {
    isFetching.value = false
    errorMessage.value = payload
  }

  function receiveLogin() {
    isFetching.value = false
    errorMessage.value = ''
  }

  function requestLogin() {
    isFetching.value = true
  }

  function clearError() {
    errorMessage.value = ''
  }

  return {
    isFetching,
    errorMessage,
    loginUser,
    receiveToken,
    logoutUser,
    loginError,
    receiveLogin,
    requestLogin,
    clearError
  }
})
