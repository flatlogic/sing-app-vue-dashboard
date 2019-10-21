<template>
  <b-row>
    <b-col lg="9" xs="12">
      <Widget id="Overview">
        <h1>Overview</h1>
        <p class="lead">
          Sing App Vue is an admin dashboard template built with Vue 2.5.17. Sing App goes beyond usual admin
          templates and provides you entire intuitive programming framework. Server Side Rendering and Node.js backend
          will even further speed up your development. You can use Sing App Vue to build any type of web
          applications
          like SAAS, CMS, financial dashboards, project management tools, etc.
        </p>
        <p class="lead">
          Moreover, there is a version of <a rel="noreferrer noopener"
                                             href="https://flatlogic.com/templates/sing-app-vue-nodejs"
                                             target="_blank">Sing App Vue with Node.js</a>, enhanced with working
          node.js
          backend with authentication, login strategies and basic CRUD functions. Please refer to <a
            href="https://github.com/flatlogic/nodejs-backend" rel="noopener noreferrer" target="_blank">backend
          documentation</a> for details
        </p>
        <img class="img-responsive w-100 border" src="../../../assets/documentation/sing-screenshot.jpg" alt="screenshot"/>
        <router-link to="/app">Live demo</router-link>
      </Widget>
      <Widget id="Features">
        <h3 class="">Features</h3>
        <ul class="mt">
          <li class="lead"><i class="la la-check"></i> Hundreds of Pages</li>
          <li class="lead"><i class="la la-check"></i> Fully Responsive</li>
          <li class="lead"><i class="la la-check"></i> Vue 2 new</li>
          <li class="lead"><i class="la la-check"></i> 8 Charts Library</li>
          <li class="lead"><i class="la la-check"></i> 2 Dashboards</li>
          <li class="lead"><i class="la la-check"></i> Theme Support</li>
          <li class="lead"><i class="la la-check"></i> E-Commerce Section</li>
          <li class="lead"><i class="la la-check"></i>
            <a href="https://github.com/flatlogic/nodejs-backend" rel="noopener noreferrer" target="_blank"> Node.js
              backend support</a> <span class="small text-muted">(Only in full stack version)</span>
          </li>
          <li class="lead"><i class="la la-check"></i> Static & Hover Sidebar</li>
          <li class="lead"><i class="la la-check"></i> Fully Documented Codebase</li>
          <li class="lead"><i class="la la-check"></i> And even more coming soon!</li>
        </ul>
      </Widget>
      <b-row>
        <b-col md="5">
          <Widget title="Continue with">
            <router-link to="/documentation/getting-started/licences">
              <h4>Licences <i class="la la-arrow-right"></i></h4>
            </router-link>
          </Widget>
        </b-col>
        <b-col md="5">
          <Widget title="Or learn about">
            <router-link to="/documentation/getting-started/quick-start">
              <h4>How to start project <i class="la la-arrow-right"></i></h4>
            </router-link>
          </Widget>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="3" xs="12">
      <Scrollspy
          title="OVERVIEW"
          :ids="['Overview', 'Features']"
      ></Scrollspy>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    name: 'DocOverview'
  }
</script>
