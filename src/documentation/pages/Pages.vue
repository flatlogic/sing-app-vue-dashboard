<template>
  <b-row>
    <b-col lg="9" xs="12">
      <Widget id="Auth">
        <h3>Auth</h3>
        <p>Auth is a built-in module for an admin template dashboard. It contains all actions and handlers for any token
          authorization for your application.</p>
        <p>All logic is in <code>src/store/auth.js</code>. We have already
          preconfigured <a href="https://github.com/flatlogic/nodejs-backend" rel="noopener noreferrer" target="_blank">Node.js
            backend</a>
          <span class="small text-muted"> (Only in full stack version)</span> under the hood. <code>Creds</code>
          variable contains user email and password entered in the login form. It does request to our backend server and
          gets token and saves it in <code>localStorage</code>.</p>
        <p><b>Important note.</b> Credentials validation must be on the server side.</p>
        <p>Another important part of authentication is <code>beforeEnter</code> navigation hook in the <code>Routes.js</code> file. That’s how it looks like.
        </p>
        <vue-code-highlight>// @/Routes.js
import { isAuthenticated } from './mixins/auth';
import Layout from '@/components/Layout/Layout';

...

{
  path: '/app',
  name: 'Layout',
  component: Layout,
  beforeEnter: (to, from, next) => {
    let token = localStorage.getItem('token');
    isAuthenticated(token) ? next() : next({path: '/login'});
  },
  children: [...]
}

...</vue-code-highlight>
        <p>We are getting <code>token</code> from local storage, that must be saved in local storage after successful
          loginUser function completion. Depends on the result of this action, <code>beforeEnter</code> hook validates token and
          decides to let go further or redirect to the login page. If you don’t need login functionality in your app, you can
          remove this hook.</p>
      </Widget>
      <Widget id="Inbox">
        <h3>Inbox</h3>
        <p>Inbox is a ready-to-use application with all needed features. It’s easy to understand and customize. The code
          is divided into components, so you can easily change the layout of your application.</p>
        <ul>
          <li>Messages filter & search</li>
          <li>Compose</li>
          <li>Read/unread, star/unstar, delete actionsy</li>
          <li>Message attachments</li>
          <li>Reply functionality</li>
        </ul>
        <router-link class="btn btn-primary" to="/app/inbox">Demo</router-link>
      </Widget>
      <Widget id="Dashboards">
        <h3>Dashboards</h3>
        <p>The main screen of any application built on the top of the admin dashboard template. That is more informative
          pages of all application. There are 2 types of dashboards: analytics and visits.</p>
        <p>Analytics one. There you can find a lot of chart and statistics, calendar, todo manager, table with any data
          you need, notifications block.</p>
        <p>Main chart made with D3.js library, most powerful charts library. Other components are just a plain markup
          with state</p>
        <p>Visits dashboard page can be used for real-time displaying users & traffic data. It is a big vector map made
          with mapael in the center of this dashboard, that can display any region of the world with any data you want
          on hover action.</p>
        <p>All of this component can be used on any page of the application.</p>
        <p>
          <router-link class="btn btn-primary mr-sm" to="/app/main/analytics">Analytics</router-link>
          <router-link class="btn btn-primary" to="/app/main/visits">Visits</router-link>
        </p>
      </Widget>
      <Widget id="E-Commerce">
        <h3>E-commerce</h3>
        <p class="alert alert-secondary font-weight-bold"><span class="text-warning">Important note.</span> This
          section is fully supported by <a
              href="https://github.com/flatlogic/nodejs-backend" rel="noopener noreferrer" target="_blank">Node.js
            backend</a> data.
        </p>
        <p>E-commerce is a group of three pages: product management, product list and product details. Must have a page
          if you are doing something similar to marketplace or shop.</p>
        <p>&bull; Product management is a page, where you can manipulate with products data. You can CREATE, READ,
          UPDATE and DELETE products. <span class="small text-muted">(This page is available only in full stack version)</span>
        </p>
        <p>&bull; Products page is a list of ProductCard component. <code>ProductCard</code> component used to display
          product image, price, label, the small description in a proper way.</p>
        <p>&bull; Product details is a detailed product card with a lot informative description.</p>
        <p>Examples of <code>ProductCard</code> component:</p>
        <b-row>
          <b-col md="6">
            <ProductCard :product="products[0]"/>
          </b-col>
          <b-col md="6">
            <ProductCard :product="products[2]"/>
          </b-col>
        </b-row>
        <p>
          <router-link class="btn btn-primary mr-sm" to="/app/ecommerce/management">Management</router-link>
          <router-link class="btn btn-primary mr-sm" to="/app/ecommerce/products">List</router-link>
          <router-link class="btn btn-primary" to="/app/ecommerce/product">Details</router-link>
        </p>
      </Widget>
    </b-col>
    <b-col lg="3" xs="12">
      <Scrollspy
          title="PAGES"
          :ids="['Auth', 'Inbox', 'Dashboards', 'E-Commerce']"
      ></Scrollspy>
    </b-col>
  </b-row>
</template>
<script>
  import { component as VueCodeHighlight } from 'vue-code-highlight';

  import ProductCard from '../../pages/Ecommerce/ProductsGrid/components/ProductCard/ProductCard';
  import mock from '../../pages/Ecommerce/mock';

  export default {
    name: 'DocPages',
    data() {
      return {
        products: mock,
      }
    },
    components: {
      ProductCard,
      VueCodeHighlight
    }
  }
</script>
