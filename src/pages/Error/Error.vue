<template>
  <div class="error-page">
    <b-container>
      <div class="errorContainer mx-auto">
        <h1 class="errorCode">404</h1>
        <p class="errorInfo">
            Opps, it seems that this page does not exist.
        </p>
        <p class="errorHelp mb-3">
            If you are sure it should, search for it.
        </p>
        <b-form>
          <b-form-group>
            <b-form-input class="input-no-border" type="text" placeholder="Search Pages" />
          </b-form-group>
          <router-link tag="a" to="/app/extra/search">
            <b-button class="errorBtn" type="submit" variant="success">
                Search <i class="la la-search ml-xs" />
            </b-button>
          </router-link>
        </b-form>
      </div>
      <footer class="pageFooter">
        2019 &copy; Sing App Vue Admin Dashboard Template.
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style src="./Error.scss" lang="scss" scoped />
