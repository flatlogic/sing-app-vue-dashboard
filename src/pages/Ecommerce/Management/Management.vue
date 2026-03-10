<template>
  <div class="product-management">
    <div class="page-top-line">
      <h1 class="page-title">
        Product - <span class="fw-semi-bold">Management</span>
      </h1>
      <div
        class="alert alert-warning promo-alert"
        :class="{ 'show-alert': showAlert }"
        role="alert"
      >
        This page is only available in <a
          class="text-white fw-bold"
          rel="noreferrer noopener"
          href="https://flatlogic.com/templates/sing-app-vue-node-js"
          target="_blank"
        >Sing App Vue with Node.js</a> integration!
      </div>
    </div>
    <Widget
      title="List of Products"
      collapse
      close
      :fetching-data="productsStore.isReceiving"
    >
      <button
        class="btn btn-success mb-3"
        @click="createNewProduct()"
      >
        Create Product
      </button>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="width-100">
                ID
              </th>
              <th>Image</th>
              <th>Title</th>
              <th class="d-none d-md-table-cell">
                Subtitle
              </th>
              <th class="d-none d-md-table-cell">
                Price
              </th>
              <th class="d-none d-md-table-cell">
                Rating
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in productsStore.products"
              :key="product.id"
            >
              <td>{{ product.id }}</td>
              <td>
                <img
                  :src="product.img"
                  :alt="product.title || 'image'"
                  class="image"
                  title="image"
                >
              </td>
              <td>
                <router-link :to="'/app/ecommerce/product/' + product.id">
                  {{ product.title ? (product.title[0].toUpperCase() + product.title.slice(1)) : "No Title" }}
                </router-link>
              </td>
              <td class="d-none d-md-table-cell">
                {{ product.subtitle }}
              </td>
              <td class="d-none d-md-table-cell">
                {{ product.price }}
              </td>
              <td class="d-none d-md-table-cell">
                <Rating :rating="parseFloat(product.rating)" />
              </td>
              <td>
                <div class="btn-toolbar">
                  <button
                    class="btn btn-info btn-xs me-1"
                    @click="$router.push('/app/ecommerce/management/' + product.id)"
                  >
                    <span class="d-none d-md-inline-block">Edit</span>
                    <span class="d-md-none"><i class="la la-edit" /></span>
                  </button>
                  <div class="dropdown d-inline-block">
                    <button
                      :id="'deleteBtn_' + product.id"
                      class="btn btn-danger btn-xs"
                      @click="togglePopover(product.id)"
                    >
                      <Loader
                        v-if="productsStore.isDeleting && productsStore.idToDelete === product.id"
                        :size="14"
                      />
                      <span v-else>
                        <span class="d-none d-md-inline-block text-white">Delete</span>
                        <span class="d-md-none"><i class="la la-remove" /></span>
                      </span>
                    </button>
                    <div
                      v-if="popovers[product.id]"
                      class="popover popover-danger bs-popover-top"
                      :class="{ show: popovers[product.id] }"
                      style="position: absolute; transform: translate(-50%, -100%); margin-top: -10px;"
                    >
                      <div class="popover-header px-5">
                        Are you sure
                      </div>
                      <div class="popover-body px-5 d-flex justify-content-center">
                        <div class="btn-toolbar">
                          <button
                            class="btn btn-success btn-xs me-1"
                            @click="handleDelete(product.id)"
                          >
                            Yes
                          </button>
                          <button
                            class="btn btn-danger btn-xs"
                            @click="closePopover(product.id)"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Widget>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useProductsStore } from '@/stores/products'
import Widget from '@/components/Widget/Widget.vue'
import Loader from '@/components/Loader/Loader.vue'
import Rating from '@/components/Rating/Rating.vue'

const router = useRouter()
const toast = useToast()
const productsStore = useProductsStore()

const popovers = ref({})
const showAlert = ref(false)

onMounted(() => {
  productsStore.getProductsRequest()
  setTimeout(() => {
    showAlert.value = true
  }, 100)
})

function createNewProduct() {
  router.push('/app/ecommerce/management/create')
}

function togglePopover(id) {
  popovers.value[id] = !popovers.value[id]
}

function closePopover(id) {
  popovers.value[id] = false
}

async function handleDelete(id) {
  closePopover(id)
  const result = await productsStore.deleteProductRequest({ id })
  if (result.success && result.message) {
    toast.success(result.message)
  } else if (!result.success && result.error) {
    toast.error(result.error)
  }
}
</script>

<style src="./Management.scss" lang="scss" />
