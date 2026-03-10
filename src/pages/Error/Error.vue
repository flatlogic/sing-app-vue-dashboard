<template>
  <div class="error-page">
    <div class="container">
      <div class="errorContainer mx-auto">
        <h1 class="errorCode">
          404
        </h1>
        <p class="errorInfo">
          Opps, it seems that this page does not exist.
        </p>
        <p class="errorHelp mb-3">
          If you are sure it should, search for it.
        </p>
        <form @submit.prevent="handleSearch">
          <div class="mb-3">
            <input
              class="form-control input-no-border"
              type="text"
              placeholder="Search Pages"
            >
          </div>
          <router-link
            to="/app/extra/search"
            class="d-inline-block"
          >
            <button
              class="btn btn-success errorBtn"
              type="button"
            >
              Search <i class="fa fa-search" />
            </button>
          </router-link>
        </form>
        <router-link
          class="mt-3 d-block"
          to="/"
        >
          <button
            class="btn btn-primary"
            type="button"
          >
            To main page
          </button>
        </router-link>
      </div>
      <footer class="pageFooter">
        2019 &copy; Sing App Vue Admin Dashboard Template.
      </footer>
    </div>
  </div>
</template>

<script setup>
function handleSearch() {
  // Search functionality can be implemented here
}
</script>

<style src="./Error.scss" lang="scss" scoped />
