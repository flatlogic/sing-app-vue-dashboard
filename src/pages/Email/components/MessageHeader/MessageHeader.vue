<template>
  <div class="messageHeader">
    <h3>{{ title }}</h3>
    <div class="messageHeaderLine mt-lg mb-lg">
      <div class="messageFrom">
        <img
          src="../../../../assets/people/a4.jpg"
          alt="user"
          class="rounded-circle me-sm-1"
        >
        <div class="messageFromInfo">
          <span>
            <strong>{{ name }}</strong>
            <span class="text-muted fw-thin ms-sm-1">
              &lt;{{ email }}&gt;
            </span>
          </span>
          <span class="text-muted">to {{ to }}</span>
        </div>
      </div>
      <div class="messageHeaderDate">
        {{ date }}
        <div class="btn-group ms-sm-1">
          <button
            type="button"
            class="btn btn-default"
            @click="changeCompose"
          >
            <i class="fa fa-reply" /> Reply
          </button>
          <button
            type="button"
            class="btn btn-default btn-sm dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <button
                class="dropdown-item"
                type="button"
                @click="changeCompose"
              >
                <i class="fa fa-reply" /> Reply
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                type="button"
              >
                <i class="fa fa-arrow-right" /> Forward
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                type="button"
              >
                <i class="fa fa-print" /> Print
              </button>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <button
                class="dropdown-item"
                type="button"
              >
                <i class="fa fa-ban" /> Spam
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                type="button"
              >
                <i class="fa fa-trash" /> Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'name', 'photo', 'email', 'to', 'date', 'changeCompose']);
</script>

<style src="./MessageHeader.scss" lang="scss" scoped />
