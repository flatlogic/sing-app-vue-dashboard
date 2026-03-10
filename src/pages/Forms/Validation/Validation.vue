<template>
  <div>
    <h1 class="page-title">
      Form - <span class="fw-semi-bold">Validation</span>
    </h1>

    <div class="row">
      <div class="col-lg-8 col-12">
        <Widget
          title="<h5>
            Dead simple validation
            <small> No JS needed to tune-up</small>
          </h5>"
          custom-header
          close
          collapse
        >
          <form @submit="onSubmit">
            <fieldset>
              <legend>
                By default validation is started only after at least 3 characters have been input.
              </legend>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="basic"
                >Simple required</label>
                <div class="col-md-9">
                  <input
                    id="basic"
                    v-model="simple"
                    name="simple"
                    :class="{ 'form-control': true, 'is-invalid': simpleError }"
                    type="text"
                    @blur="validateSimple"
                  >
                  <span
                    v-if="simpleError"
                    class="text-danger"
                  >
                    {{ simpleError }}
                  </span>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="minlength"
                >
                  Min-length On Change <br>
                  <span class="help">At least 10</span>
                </label>
                <div class="col-md-9">
                  <input
                    id="minlength"
                    v-model="minlength"
                    name="minlength"
                    :class="{ 'form-control': true, 'is-invalid': minlengthError }"
                    type="text"
                    @change="validateMinlength"
                  >
                  <span
                    v-if="minlengthError"
                    class="text-danger"
                  >
                    {{ minlengthError }}
                  </span>
                </div>
              </div>
              <legend>
                <span class="badge bg-warning">HTML5</span> input types supported
              </legend>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="email"
                >E-mail</label>
                <div class="col-md-9">
                  <input
                    id="email"
                    v-model="email"
                    name="email"
                    :class="{ 'form-control': true, 'is-invalid': emailError }"
                    type="text"
                    @blur="validateEmail"
                  >
                  <span
                    v-if="emailError"
                    class="text-danger"
                  >
                    {{ emailError }}
                  </span>
                  <div class="form-text">
                    This one is triggered even when 1 character has been input
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="number"
                >Number</label>
                <div class="col-md-9">
                  <input
                    id="number"
                    v-model="number"
                    name="number"
                    :class="{ 'form-control': true, 'is-invalid': numberError }"
                    type="text"
                    @blur="validateNumber"
                  >
                  <span
                    v-if="numberError"
                    class="text-danger"
                  >
                    {{ numberError }}
                  </span>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="range"
                >Range</label>
                <div class="col-md-9">
                  <input
                    id="range"
                    v-model="range"
                    name="range"
                    :class="{ 'form-control': true, 'is-invalid': rangeError }"
                    type="text"
                    @blur="validateRange"
                  >
                  <span
                    v-if="rangeError"
                    class="text-danger"
                  >
                    {{ rangeError }}
                  </span>
                </div>
              </div>
              <legend>
                More validation
              </legend>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="password"
                >Password helpers</label>
                <div class="col-md-9">
                  <input
                    id="password"
                    v-model="password"
                    name="password"
                    :class="{ 'form-control': true, 'is-invalid': passwordError }"
                    type="password"
                    @blur="validatePassword"
                  >
                  <span
                    v-if="passwordError"
                    class="text-danger"
                  >
                    {{ passwordError }}
                  </span>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="password_repeat"
                />
                <div class="col-md-9">
                  <input
                    id="password_repeat"
                    v-model="passwordRepeat"
                    name="password_repeat"
                    :class="{ 'form-control': true, 'is-invalid': passwordRepeatError }"
                    type="password"
                    @blur="validatePasswordRepeat"
                  >
                  <span
                    v-if="passwordRepeatError"
                    class="text-danger"
                  >
                    {{ passwordRepeatError }}
                  </span>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  class="col-md-3 col-form-label"
                  for="website"
                >Website</label>
                <div class="col-md-9">
                  <input
                    id="website"
                    v-model="website"
                    name="website"
                    :class="{ 'form-control': true, 'is-invalid': websiteError }"
                    type="text"
                    @blur="validateWebsite"
                  >
                  <span
                    v-if="websiteError"
                    class="text-danger"
                  >
                    {{ websiteError }}
                  </span>
                </div>
              </div>
            </fieldset>
            <div class="form-action bg-transparent px-0">
              <button
                type="submit"
                class="btn btn-success btn-rounded float-end"
              >
                Validate & Submit
              </button>
              <button
                type="button"
                class="btn btn-default btn-rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

// Form values
const simple = ref('')
const minlength = ref('')
const email = ref('')
const number = ref('')
const range = ref('')
const password = ref('')
const passwordRepeat = ref('')
const website = ref('')

// Error messages
const simpleError = ref('')
const minlengthError = ref('')
const emailError = ref('')
const numberError = ref('')
const rangeError = ref('')
const passwordError = ref('')
const passwordRepeatError = ref('')
const websiteError = ref('')

// Validation functions
function validateSimple() {
  if (!simple.value) {
    simpleError.value = 'The simple field is required'
    return false
  }
  simpleError.value = ''
  return true
}

function validateMinlength() {
  if (!minlength.value) {
    minlengthError.value = 'The minlength field is required'
    return false
  }
  if (minlength.value.length < 10) {
    minlengthError.value = 'The minlength field must be at least 10 characters'
    return false
  }
  minlengthError.value = ''
  return true
}

function validateEmail() {
  if (!email.value) {
    emailError.value = 'The email field is required'
    return false
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    emailError.value = 'The email field must be a valid email'
    return false
  }
  emailError.value = ''
  return true
}

function validateNumber() {
  if (!number.value) {
    numberError.value = 'The number field is required'
    return false
  }
  if (!/^\d+$/.test(number.value)) {
    numberError.value = 'The number field must be numeric'
    return false
  }
  numberError.value = ''
  return true
}

function validateRange() {
  if (!range.value) {
    rangeError.value = 'The range field is required'
    return false
  }
  if (!/^\d+$/.test(range.value)) {
    rangeError.value = 'The range field must be numeric'
    return false
  }
  const num = parseInt(range.value)
  if (num < 10 || num > 100) {
    rangeError.value = 'The range field must be between 10 and 100'
    return false
  }
  rangeError.value = ''
  return true
}

function validatePassword() {
  if (!password.value) {
    passwordError.value = 'The password field is required'
    return false
  }
  if (password.value.length < 6) {
    passwordError.value = 'The password field must be at least 6 characters'
    return false
  }
  passwordError.value = ''
  return true
}

function validatePasswordRepeat() {
  if (!passwordRepeat.value) {
    passwordRepeatError.value = 'The password confirmation field is required'
    return false
  }
  if (passwordRepeat.value.length < 6) {
    passwordRepeatError.value = 'The password confirmation field must be at least 6 characters'
    return false
  }
  if (passwordRepeat.value !== password.value) {
    passwordRepeatError.value = 'The password confirmation does not match'
    return false
  }
  passwordRepeatError.value = ''
  return true
}

function validateWebsite() {
  if (!website.value) {
    websiteError.value = 'The website field is required'
    return false
  }
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  if (!urlRegex.test(website.value)) {
    websiteError.value = 'The website field must be a valid URL'
    return false
  }
  websiteError.value = ''
  return true
}

function onSubmit(e) {
  e.preventDefault()

  const isValid = [
    validateSimple(),
    validateMinlength(),
    validateEmail(),
    validateNumber(),
    validateRange(),
    validatePassword(),
    validatePasswordRepeat(),
    validateWebsite()
  ].every(result => result)

  if (isValid) {
    alert('Form is valid!')
  }
}
</script>
