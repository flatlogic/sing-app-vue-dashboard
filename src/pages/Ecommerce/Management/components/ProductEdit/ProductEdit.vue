<template>
  <div class="product-edit">
    <h2 class="page-title">
      Product - <span class="fw-semi-bold">Detail</span>
    </h2>
    <Widget
      :title="(isNew ? 'New' : 'Edit') + ' product'"
      collapse
      close
    >
      <Loader
        v-if="!isNew && productsStore.isReceiving"
        :size="40"
      />
      <form v-else>
        <div class="form-group row mb-3">
          <label class="col-md-2">Image</label>
          <div class="col-md-5">
            <div class="dropdown">
              <button
                id="productImage"
                class="btn btn-info dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                @click="imageDropdownOpen = !imageDropdownOpen"
              >
                <img
                  v-if="product.img"
                  class="product-image"
                  alt="img"
                  :src="product.img"
                >
              </button>
              <ul
                class="dropdown-menu"
                :class="{ show: imageDropdownOpen }"
              >
                <li
                  v-for="img in productsStore.images"
                  :key="img"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="updateProductProperty(img, 'img'); imageDropdownOpen = false"
                  >
                    <img
                      class="product-image"
                      :alt="img"
                      :src="img"
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productTitle"
          >Title</label>
          <div class="col-md-5">
            <input
              id="productTitle"
              class="form-control"
              type="text"
              :value="product.title"
              @change="updateProductProperty($event.target.value, 'title')"
            >
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productSubtitle"
          >Subtitle</label>
          <div class="col-md-5">
            <input
              id="productSubtitle"
              class="form-control"
              type="text"
              :value="product.subtitle"
              @change="updateProductProperty($event.target.value, 'subtitle')"
            >
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productPrice"
          >Price</label>
          <div class="col-md-2">
            <input
              id="productPrice"
              class="form-control"
              type="number"
              step="0.01"
              min="0.01"
              :value="product.price"
              @change="updateProductProperty($event.target.value, 'price')"
            >
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productDiscount"
          >Discount</label>
          <div class="col-md-2">
            <input
              id="productDiscount"
              class="form-control"
              type="number"
              step="1"
              min="0"
              max="100"
              :value="product.discount || 0"
              @change="updateProductProperty($event.target.value, 'discount')"
            >
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productDescription_1"
          >Description</label>
          <div class="col-md-5">
            <textarea
              id="productDescription_1"
              rows="3"
              class="form-control"
              :value="product.description_1"
              @change="updateProductProperty($event.target.value, 'description_1')"
            />
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productDescription_2"
          >Description</label>
          <div class="col-md-5">
            <textarea
              id="productDescription_2"
              rows="3"
              class="form-control"
              :value="product.description_2"
              @change="updateProductProperty($event.target.value, 'description_2')"
            />
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productCode"
          >Code</label>
          <div class="col-md-2">
            <input
              id="productCode"
              class="form-control"
              type="text"
              :value="product.code"
              @change="updateProductProperty($event.target.value, 'code')"
            >
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productHashtag"
          >Hashtag</label>
          <div class="col-md-5">
            <input
              id="productHashtag"
              class="form-control"
              type="text"
              :value="product.hashtag"
              @change="updateProductProperty($event.target.value, 'hashtag')"
            >
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productTechnology"
          >Technology</label>
          <div class="col-md-5">
            <input
              id="productTechnology"
              class="form-control"
              type="text"
              :value="technologyString"
              placeholder="Add tags (comma separated)"
              @change="updateProductProperty($event.target.value.split(',').map(s => s.trim()).filter(s => s), 'technology')"
            >
          </div>
        </div>
        <div class="form-group row mb-3">
          <label
            class="col-md-2"
            for="productRating"
          >Rating</label>
          <div class="col-md-2">
            <input
              id="productRating"
              class="form-control"
              step="0.1"
              min="0"
              max="5"
              type="number"
              :value="product.rating"
              @change="updateProductProperty($event.target.value, 'rating')"
            >
          </div>
        </div>
        <div class="btn-toolbar">
          <button
            type="button"
            class="btn btn-success me-2"
            @click="handleSave"
          >
            <Loader v-if="productsStore.isUpdating" />
            <span v-else>Save</span>
          </button>
          <button
            type="button"
            class="btn btn-default me-2"
            @click="goBack"
          >
            Back
          </button>
          <span
            v-if="!isNew"
            class="position-relative"
          >
            <button
              type="button"
              class="btn btn-danger"
              @click="popover = !popover"
            >
              <Loader v-if="productsStore.isDeleting" />
              <span v-else>Delete</span>
            </button>
            <div
              v-if="popover"
              class="popover popover-danger bs-popover-top show"
              style="position: absolute; transform: translate(-50%, -100%); left: 50%; margin-top: -10px;"
            >
              <div class="popover-header px-5">Are you sure?</div>
              <div class="popover-body px-5 d-flex justify-content-center">
                <div class="btn-toolbar">
                  <button
                    type="button"
                    class="btn btn-success btn-xs me-1"
                    @click="handleDelete"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-xs"
                    @click="popover = false"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </span>
        </div>
      </form>
    </Widget>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useProductsStore } from '@/stores/products'
import Widget from '@/components/Widget/Widget.vue'
import Loader from '@/components/Loader/Loader.vue'

const route = useRoute()
const router = useRouter()
const toast = useToast()
const productsStore = useProductsStore()

const popover = ref(false)
const imageDropdownOpen = ref(false)

const isNew = computed(() => getId() === -1)

const product = computed(() => {
  return findProduct(getId()) || { technology: [] }
})

const technologyString = computed(() => {
  return (product.value.technology || []).join(', ')
})

function getId() {
  return parseInt(route.params.id) || -1
}

function findProduct(id) {
  return productsStore.products.find(p => p.id === id)
}

function goBack() {
  router.push('/app/ecommerce/management')
}

function updateProductProperty(value, key) {
  const updatedProduct = { ...product.value }
  updatedProduct[key] = value
  productsStore.updateProduct(updatedProduct)
}

async function handleSave() {
  let result
  if (isNew.value) {
    result = await productsStore.createProductRequest({ product: product.value })
  } else {
    result = await productsStore.updateProductRequest({ product: product.value })
  }

  if (result.success) {
    if (result.message) {
      toast.success(result.message)
    }
    if (result.redirect) {
      router.push(result.redirect)
    }
  } else if (result.error) {
    toast.error(result.error)
  }
}

async function handleDelete() {
  popover.value = false
  const result = await productsStore.deleteProductRequest({ id: product.value.id })

  if (result.success) {
    if (result.message) {
      toast.success(result.message)
    }
    if (result.redirect) {
      router.push(result.redirect)
    }
  } else if (result.error) {
    toast.error(result.error)
  }
}

onMounted(() => {
  const newProduct = {
    id: -1,
    price: '0.01',
    rating: '5',
    technology: []
  }

  if (getId() > -1) {
    productsStore.loadProductRequest(getId())
  } else {
    const existingProduct = findProduct(getId())
    if (!existingProduct) {
      productsStore.receiveProduct(newProduct)
    }
  }
  productsStore.getProductsImagesRequest(newProduct)
})
</script>

<style src="./ProductEdit.scss" lang="scss"></style>
