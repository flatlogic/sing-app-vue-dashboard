import axios from "axios";
import router from '../Routes';
import mock from "../pages/Ecommerce/mock";
import config from "../config";

export default {
  namespaced: true,
  state: {
    products: [],
    images: [],
    isReceiving: false,
    isUpdating: false,
    isDeleting: false,
    idToDelete: null
  },
  mutations: {
    RECEIVED_PRODUCTS(state, payload) {
      state.products = payload;
      state.isReceiving = false;
    },
    RECEIVING_PRODUCTS(state) {
      state.isReceiving = true;
    },
    RECEIVED_PRODUCT(state, payload) {
      state = Object.assign(state, {
        products: [...state.products, payload],
        isReceiving: false,
      })
    },
    RECEIVING_PRODUCT(state) {
      state.isReceiving = true;
    },
    UPDATED_PRODUCT(state, payload) {
      let index = state.products.findIndex(p => p.id === payload.id);
      state = Object.assign(state, {
        products: state.products.map((p, i) => {
          if (i === index) {
            return Object.assign({}, p, payload);
          }
          return p;
        }),
        isUpdating: false,
      })
    },
    UPDATING_PRODUCT(state) {
      state.isUpdating = true;
    },
    DELETED_PRODUCT(state, payload) {
      let indexToDelete = state.products.findIndex(p => p.id === payload.id);
      let products = [...state.products];
      products.splice(indexToDelete, 1);
      state = Object.assign(state, {
        products: [...products],
        isDeleting: false,
        idToDelete: null
      });
    },
    DELETING_PRODUCT(state, payload) {
      state.isDeleting = true;
      state.idToDelete = payload.id;
    },
    RECEIVED_IMAGES(state, payload) {
      state.images = payload;
    }
  },
  actions: {
    getProductsRequest({dispatch}) {
      // We check if app runs with backend mode
      if (!config.isBackend) {
        dispatch("receiveProducts", mock);
      }

      else {
        dispatch("receivingProducts");
        axios.get('/products').then(res => {
          dispatch("receiveProducts", res.data);
        })
      }
    },
    loadProductRequest({dispatch}, id) {
      // We check if app runs with backend mode
      if (!config.isBackend) {
        dispatch("receiveProduct", mock.find(arr => arr.id === id));
      }

      else {
        dispatch("receivingProduct");
        axios.get('/products/' + id).then(res => {
          dispatch("receiveProduct", res.data);
        })
      }
    },
    updateProductRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;

      dispatch("updatingProduct");
      axios.put('/products/' + payload.product.id, payload.product).then(res => {
        dispatch("updateProduct", res.data);
        payload.$toasted.success("Product has been Updated!");
      })
    },
    createProductRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;

      dispatch("updatingProduct");
      axios.post('/products', payload.product).then(res => {
        dispatch("updateProduct", res.data);
        router.push('/app/ecommerce/management');
        payload.$toasted.success("Product has been Created!");
      })
    },
    deleteProductRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;

      dispatch("deletingProduct", payload);
      axios.delete('/products/' + payload.id).then(() => {
        dispatch("deleteProduct", {id: payload.id});
        if (router.history.current.pathname !== '/app/ecommerce/management') {
          router.push('/app/ecommerce/management');
        }
        payload.$toasted.success("Product has been Deleted!");
      })
    },
    getProductsImagesRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;

      axios.get('/products/images-list').then(res => {
        dispatch("receiveProductImages", res.data);
        if (!payload.img && res.data.length) {
          dispatch("updateProduct", {id: payload.id, img: res.data[0]});
        }
      })
    },
    receiveProductImages({commit}, payload) {
      commit("RECEIVED_IMAGES", payload)
    },
    receiveProducts({commit}, payload) {
      commit("RECEIVED_PRODUCTS", payload)
    },
    receivingProducts({commit}) {
      commit("RECEIVING_PRODUCTS")
    },
    receiveProduct({commit}, payload) {
      commit("RECEIVED_PRODUCT", payload)
    },
    receivingProduct({commit}) {
      commit("RECEIVING_PRODUCT")
    },
    updateProduct({commit}, payload) {
      commit("UPDATED_PRODUCT", payload)
    },
    updatingProduct({commit}) {
      commit("UPDATING_PRODUCT")
    },
    deleteProduct({commit}, payload) {
      commit("DELETED_PRODUCT", payload)
    },
    deletingProduct({commit}, payload) {
      commit("DELETING_PRODUCT", payload)
    }
  },
};
