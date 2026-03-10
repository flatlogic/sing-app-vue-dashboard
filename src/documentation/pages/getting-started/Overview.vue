<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <Widget id="Overview">
        <h1>Overview</h1>
        <p class="lead">
          Sing App Vue is an admin dashboard template built with Vue 3 and Vite. Sing App goes beyond usual admin
          templates and provides you entire intuitive programming framework. Node.js backend
          will even further speed up your development. You can use Sing App Vue to build any type of web
          applications
          like SAAS, CMS, financial dashboards, project management tools, etc.
        </p>
        <p class="lead">
          Sing App Vue can be connected to a <a
            rel="noreferrer noopener"
            href="https://github.com/flatlogic/nodejs-backend"
            target="_blank"
          >Node.js backend</a> with authentication, login strategies
          and basic CRUD functions. Please refer to the <a
            href="https://github.com/flatlogic/nodejs-backend"
            rel="noopener noreferrer"
            target="_blank"
          >backend
            documentation</a> for details.
        </p>
        <img
          class="img-responsive w-100 border"
          src="../../../assets/documentation/sing-screenshot.jpg"
          alt="screenshot"
        >
        <router-link to="/app">
          Live demo
        </router-link>
      </Widget>
      <Widget id="Features">
        <h3 class="">
          Features
        </h3>
        <ul class="mt">
          <li class="lead">
            <i class="la la-check" /> Hundreds of Pages
          </li>
          <li class="lead">
            <i class="la la-check" /> Fully Responsive
          </li>
          <li class="lead">
            <i class="la la-check" /> Vue 3 + Vite
          </li>
          <li class="lead">
            <i class="la la-check" /> 4 Charts Library
          </li>
          <li class="lead">
            <i class="la la-check" /> 2 Dashboards
          </li>
          <li class="lead">
            <i class="la la-check" /> Theme Support
          </li>
          <li class="lead">
            <i class="la la-check" /> E-Commerce Section
          </li>
          <li class="lead">
            <i class="la la-check" />
            <a
              href="https://github.com/flatlogic/nodejs-backend"
              rel="noopener noreferrer"
              target="_blank"
            > Node.js
              backend support</a> <span class="small text-muted">(Only in full stack version)</span>
          </li>
          <li class="lead">
            <i class="la la-check" /> Static & Hover Sidebar
          </li>
          <li class="lead">
            <i class="la la-check" /> Fully Documented Codebase
          </li>
          <li class="lead">
            <i class="la la-check" /> And even more coming soon!
          </li>
        </ul>
      </Widget>
      <Widget id="Support">
        <h2>Support forum</h2>
        <p class="lead">
          For any additional information please go to our support forum and raise your questions or feedback provide there. We highly appreciate your participation!
        </p>
        <a
          href="https://flatlogic.com/forum"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-default fw-semi-bold"
        >
          Support forum
        </a>
      </Widget>
      <div class="row">
        <div class="col-md-5">
          <Widget title="Continue with">
            <router-link to="/documentation/getting-started/licences">
              <h4>Licences <i class="la la-arrow-right" /></h4>
            </router-link>
          </Widget>
        </div>
        <div class="col-md-5">
          <Widget title="Or learn about">
            <router-link to="/documentation/getting-started/quick-start">
              <h4>How to start project <i class="la la-arrow-right" /></h4>
            </router-link>
          </Widget>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-12">
      <Scrollspy
        title="OVERVIEW"
        :ids="['Overview', 'Features', 'Support']"
      />
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue'
import Scrollspy from '@/documentation/components/Scrollspy/Scrollspy.vue'
</script>
