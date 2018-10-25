<template>
  <b-row>
    <b-col xl='8' lg='12'>
      <Widget
        title="
        <div>
          <h4>
            Wizard&nbsp;
            <small>Tunable widget</small>
          </h4>
          <p class='text-muted'>An example of complete wizard form in widget.</p>
        </div>"
        customHeader close collapse
      >
        <form-wizard
          shape="tab"
          color="#3498db"
          title=""
          subtitle=""
          @on-change="updateProgress"
          @on-loading="updateProgress(1, 1)"
        >
          <b-progress class="progress-xs" variant="gray-light" :value="progress" :max="4" />
          <b-button slot="prev" variant="primary">
            <i class="fa fa-caret-left" /> Previous
          </b-button>
          <b-button slot="next" variant="primary">
            Next <i class="fa fa-caret-right" />
          </b-button>
          <b-button slot="finish" variant="success">
            Finish <i class="fa fa-check" />
          </b-button>
            <tab-content title="1. Your Details">
              <b-form>
                <b-form-group
                  label="Username"
                  label-for="username"
                  description="Username can contain any letters or numbers, without spaces"
                >
                  <b-form-input id="username" type="text" />
                </b-form-group>
                <b-form-group
                  label="Email"
                  label-for="email"
                  description="Please provide your E-mail"
                >
                  <b-form-input id="email" type="text" />
                </b-form-group>
                <b-form-group
                  label="Adress"
                  label-for="adress"
                  description="Please provide your address"
                >
                  <b-form-input id="adress" type="text" />
                </b-form-group>
              </b-form>
            </tab-content>
            <tab-content title="2. Shipping">
              <b-form>
                <b-form-group
                  label="Destination Country"
                  label-for="destination"
                  description="Please choose your country destination"
                >
                  <v-select
                    searchable
                    id="destination"
                    v-model="destinationSelect"
                    :options="countries"
                  />
                </b-form-group>
                <b-form-group
                  label="Choose shipping option"
                  label-for="shipping"
                  description="Please choose your shipping option"
                >
                  <v-select
                    searchable
                    id="shipping"
                    v-model="shippingSelect"
                    :options="shipping"
                  />
                </b-form-group>
                <b-form-group
                  label="Destination Zip Code"
                  label-for="zip"
                  description="Please provide your Destination Zip Code"
                >
                  <b-form-input id="zip" v-model="zip"
                    type="text" v-mask="'######'" placeholder="______" />
                </b-form-group>
                <b-form-group
                  label="Destination Address"
                  label-for="destAdress"
                  description="Please provide the destination address"
                >
                  <b-form-input id="destAdress" />
                </b-form-group>
              </b-form>
            </tab-content>
            <tab-content title="3. Pay">
              <b-form>
                <b-form-group
                  label="Name on the Card"
                  label-for="cardname"
                >
                  <b-form-input id="cardname" />
                </b-form-group>
                <b-form-group
                  label="Credit card type"
                  label-for="cardtype"
                >
                  <v-select
                    searchable
                    id="cardtype"
                    v-model="cardtypeSelect"
                    :options="cardtype"
                  />
                </b-form-group>
                <b-form-group
                  label="Credit Card Number"
                  label-for="cardnumber"
                >
                  <b-form-input id="cardnumber" v-model="cardnumber"
                    type="text" v-mask="'#### #### #### ####'"/>
                </b-form-group>
                <b-form-group
                  label="Expiration Date"
                  label-for="exp"
                >
                  <b-form-input id="exp" v-model="exp"
                    type="text" v-mask="'##/##'"/>
                </b-form-group>
              </b-form>
            </tab-content>
            <tab-content title="4. Thank you!">
              <fieldset>
                <h2>Thank you!</h2>
                <p>Your submission has been received.</p>
              </fieldset>
            </tab-content>
        </form-wizard>
      </Widget>
    </b-col>
  </b-row>
</template>

<script>
import Vue from 'vue';
import vSelect from 'vue-select';
import Widget from '@/components/Widget/Widget';

import { select2CountriesData, select2ShipmentData, cardTypesData } from './data';

export default {
  name: 'FormWizardPage',
  components: { Widget, vSelect },
  data() {
    return {
      progress: 1,
      destinationSelect: '',
      shippingSelect: '',
      cardtypeSelect: '',
      countries: select2CountriesData.map(c => c.text),
      shipping: select2ShipmentData.map(s => s.text),
      cardtype: cardTypesData.map(c => c.text),
      zip: '',
      cardnumber: '',
      exp: '',
    };
  },
  methods: {
    updateProgress(prevIndex, nextIndex) {
      if (nextIndex >= 0) {
        Vue.set(this, 'progress', nextIndex + 1);
      }
    },
  },
};
</script>

<style src="./Wizard.scss" lang="scss" />
