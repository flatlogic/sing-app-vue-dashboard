<template>
  <div class="row">
    <div class="col-xl-8 col-lg-12">
      <Widget
        :title="`
        <div>
          <h4>
            Wizard&nbsp;
            <small>Tunable widget</small>
          </h4>
          <p class='text-muted'>An example of complete wizard form in widget.</p>
        </div>`"
        custom-header
        close
        collapse
      >
        <div class="wizard-container">
          <!-- Progress bar -->
          <div class="progress progress-xs mb-4">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              :style="{ width: (progress / 4) * 100 + '%' }"
            />
          </div>

          <!-- Tab navigation -->
          <ul class="nav nav-tabs wizard-tabs mb-4">
            <li
              v-for="(tab, index) in tabs"
              :key="index"
              class="nav-item"
            >
              <a
                class="nav-link"
                :class="{ active: currentStep === index, completed: currentStep > index }"
                href="#"
                @click.prevent="goToStep(index)"
              >
                {{ tab }}
              </a>
            </li>
          </ul>

          <!-- Step 1: Your Details -->
          <div v-if="currentStep === 0">
            <form>
              <div class="mb-3">
                <label
                  for="username"
                  class="form-label"
                >Username</label>
                <input
                  id="username"
                  type="text"
                  class="form-control"
                >
                <div class="form-text">
                  Username can contain any letters or numbers, without spaces
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="email"
                  class="form-label"
                >Email</label>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                >
                <div class="form-text">
                  Please provide your E-mail
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="address"
                  class="form-label"
                >Address</label>
                <input
                  id="address"
                  type="text"
                  class="form-control"
                >
                <div class="form-text">
                  Please provide your address
                </div>
              </div>
            </form>
          </div>

          <!-- Step 2: Shipping -->
          <div v-if="currentStep === 1">
            <form>
              <div class="mb-3">
                <label
                  for="destination"
                  class="form-label"
                >Destination Country</label>
                <select
                  id="destination"
                  v-model="destinationSelect"
                  class="form-select"
                >
                  <option value="">
                    Select a country...
                  </option>
                  <option
                    v-for="country in countries"
                    :key="country"
                    :value="country"
                  >
                    {{ country }}
                  </option>
                </select>
                <div class="form-text">
                  Please choose your country destination
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="shipping"
                  class="form-label"
                >Choose shipping option</label>
                <select
                  id="shipping"
                  v-model="shippingSelect"
                  class="form-select"
                >
                  <option value="">
                    Select shipping...
                  </option>
                  <option
                    v-for="option in shipping"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
                <div class="form-text">
                  Please choose your shipping option
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="zip"
                  class="form-label"
                >Destination Zip Code</label>
                <input
                  id="zip"
                  v-model="zip"
                  type="text"
                  class="form-control"
                  placeholder="______"
                  maxlength="6"
                >
                <div class="form-text">
                  Please provide your Destination Zip Code
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="destAddress"
                  class="form-label"
                >Destination Address</label>
                <input
                  id="destAddress"
                  type="text"
                  class="form-control"
                >
                <div class="form-text">
                  Please provide the destination address
                </div>
              </div>
            </form>
          </div>

          <!-- Step 3: Pay -->
          <div v-if="currentStep === 2">
            <form>
              <div class="mb-3">
                <label
                  for="cardname"
                  class="form-label"
                >Name on the Card</label>
                <input
                  id="cardname"
                  type="text"
                  class="form-control"
                >
              </div>
              <div class="mb-3">
                <label
                  for="cardtype"
                  class="form-label"
                >Credit card type</label>
                <select
                  id="cardtype"
                  v-model="cardtypeSelect"
                  class="form-select"
                >
                  <option value="">
                    Select card type...
                  </option>
                  <option
                    v-for="type in cardtype"
                    :key="type"
                    :value="type"
                  >
                    {{ type }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label
                  for="cardnumber"
                  class="form-label"
                >Credit Card Number</label>
                <input
                  id="cardnumber"
                  v-model="cardnumber"
                  type="text"
                  class="form-control"
                  placeholder="#### #### #### ####"
                  maxlength="19"
                >
              </div>
              <div class="mb-3">
                <label
                  for="exp"
                  class="form-label"
                >Expiration Date</label>
                <input
                  id="exp"
                  v-model="exp"
                  type="text"
                  class="form-control"
                  placeholder="MM/YY"
                  maxlength="5"
                >
              </div>
            </form>
          </div>

          <!-- Step 4: Thank you -->
          <div v-if="currentStep === 3">
            <fieldset class="text-center">
              <h2>Thank you!</h2>
              <p>Your submission has been received.</p>
            </fieldset>
          </div>

          <!-- Navigation buttons -->
          <div class="wizard-buttons d-flex justify-content-between mt-4">
            <button
              type="button"
              class="btn btn-primary text-white"
              :disabled="currentStep === 0"
              @click="prevStep"
            >
              <i class="fa fa-caret-left" /> Previous
            </button>
            <button
              v-if="currentStep < 3"
              type="button"
              class="btn btn-primary text-white"
              @click="nextStep"
            >
              Next <i class="fa fa-caret-right" />
            </button>
            <button
              v-else
              type="button"
              class="btn btn-success text-white"
              @click="finish"
            >
              Finish <i class="fa fa-check" />
            </button>
          </div>
        </div>
      </Widget>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import { select2CountriesData, select2ShipmentData, cardTypesData } from './data'

const tabs = ['1. Your Details', '2. Shipping', '3. Pay', '4. Thank you!']
const currentStep = ref(0)
const progress = ref(1)

const destinationSelect = ref('')
const shippingSelect = ref('')
const cardtypeSelect = ref('')
const countries = select2CountriesData.map(c => c.text)
const shipping = select2ShipmentData.map(s => s.text)
const cardtype = cardTypesData.map(c => c.text)
const zip = ref('')
const cardnumber = ref('')
const exp = ref('')

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value++
    progress.value = currentStep.value + 1
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
    progress.value = currentStep.value + 1
  }
}

function goToStep(index) {
  currentStep.value = index
  progress.value = index + 1
}

function finish() {
  // Handle form submission
  console.log('Form submitted!')
}
</script>

<style src="./Wizard.scss" lang="scss" />
