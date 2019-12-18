<template>
  <div class="product-management">
    <div class="page-top-line">
      <h2 class="page-title">Product - <span class="fw-semi-bold">Management</span></h2>
      <b-alert
          :variant="'success'"
          class='promo-alert'
          :class="{'show-alert': showAlert}"
          show dismissible
      >
        This page is only available in <a class="text-white font-weight-bold" rel="noreferrer noopener"
                                          href="https://flatlogic.com/templates/sing-app-vue-node-js"
                                          target="_blank">Sing App Vue with Node.js</a> integration!
      </b-alert>
    </div>
    <Widget title="List of Products" collapse close :fetchingData="isReceiving">
      <b-button variant="success" @click="createNewProduct()" class="mb-3">Create Product</b-button>
      <v-client-table :data="products" :columns="columnsDatatable" :options="optionsDatatable">
        <div slot="img" slot-scope="props">
          <img :src="props.row.img" alt="..." class="image" title="image"/>
        </div>
        <div slot="title" slot-scope="props">
          <router-link :to="'/app/ecommerce/product/' + props.row.id">
            {{props.row.title ? (props.row.title[0].toUpperCase() + props.row.title.slice(1)) : "No Title"}}
          </router-link>
        </div>
        <div slot="rating" slot-scope="props">
          <Rating :rating="parseFloat(props.row.rating)"></Rating>
        </div>
        <template slot="api" slot-scope="props">
          <b-button-toolbar>
            <b-button variant="info" size="xs" @click="$router.push('/app/ecommerce/management/' + props.row.id)">
              <span class="d-none d-md-inline-block">Edit</span>
              <span class="d-md-none"><i class='la la-edit'></i></span>
            </b-button>
            <b-button :id="'popoverDelete_' + props.row.id" variant="danger" size="xs">
              <Loader v-if="isDeleting && idToDelete === props.row.id" :size="14"/>
              <span v-else>
                <span class="d-none d-md-inline-block">Delete</span>
                <span class="d-md-none"><i class='la la-remove'></i></span>
              </span>
            </b-button>
            <b-popover class="popover-danger"
                       triggers="focus"
                       :target="'popoverDelete_' + props.row.id"
                       :show.sync="popovers[props.row.id]"
                       placement="top"
              >
              <template slot="title">
                <div class="px-5">Are you sure</div>
              </template>
              <div class="px-5 d-flex justify-content-center">
                <b-button-toolbar>
                  <b-button variant="success" size="xs" @click="deleteProductRequest({id:props.row.id, $toasted})">
                    Yes
                  </b-button>
                  <b-button variant="danger" size="xs" @click="closePopover(props.row.id)">
                    No
                  </b-button>
                </b-button-toolbar>
              </div>
            </b-popover>
          </b-button-toolbar>
        </template>
      </v-client-table>
    </Widget>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import Widget from '../../../components/Widget/Widget';
  import Loader from '../../../components/Loader/Loader';
  import Rating from '../ProductPage/components/Rating/Rating';

  export default {
    name: "ProductManagement",
    data() {
      return {
        popovers: {},
        showAlert: false,
        columnsDatatable: ['id', 'img', 'title', 'subtitle', 'price', 'rating', 'api'],
        optionsDatatable: {
          perPage: 10,
          pagination: {chunk: 10, dropdown: false},
          texts: {filter: '', count: '', limit: ''},
          columnsClasses: {id: 'width-100'},
          skin: 'table table-striped',
          sortIcon: {
            base: 'fa text-muted', up: 'fa-chevron-up', down: 'fa-chevron-down', is: 'fa-sort',
          },
          columnsDisplay: {
            subtitle: "not_mobile",
            price: "not_mobile",
            rating: "not_mobile",
          },
          sortable: []
        }
      }
    },
    components: {Widget, Loader, Rating},
    mounted() {
      this.getProductsRequest();
      setTimeout(() => {
        this.showAlert = true;
      }, 100);
    },
    computed: {
      ...mapState("products", ["products", "isReceiving", "isDeleting", "idToDelete"])
    },
    methods: {
      ...mapActions("products", ["getProductsRequest", "deleteProductRequest"]),
      createNewProduct() {
        this.$router.push("/app/ecommerce/management/create");
      },
      closePopover(id) {
        this.popovers[id] = false;
      }
    }
  }
</script>

<style src="./Management.scss" lang="scss"/>
