<template>
  <div class="messageTableHeader">
    <div>
      <div class="dropdown d-inline-block">
        <button
          class="btn btn-gray-default btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select
        </button>
        <ul class="dropdown-menu">
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="chooseAll"
            >
              All
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="chooseNone"
            >
              None
            </button>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="chooseRead"
            >
              Read
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="chooseUnread"
            >
              Unread
            </button>
          </li>
        </ul>
      </div>
      <div class="dropdown d-inline-block ms-2">
        <button
          class="btn btn-gray-default btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Actions
        </button>
        <ul class="dropdown-menu">
          <li>
            <button
              class="dropdown-item"
              type="button"
            >
              Reply
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              type="button"
            >
              Forward
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              type="button"
            >
              Archive
            </button>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="markRead"
            >
              Mark As Read
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="markUnread"
            >
              Mark As Unread
            </button>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="deleteMsg"
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
    <input
      type="text"
      class="form-control form-control-sm"
      placeholder="Search Messages"
      @input="search"
    >
  </div>
</template>

<script setup>
defineProps(['search', 'chooseAll', 'chooseNone', 'chooseRead', 'chooseUnread', 'markRead', 'markUnread', 'deleteMsg']);
</script>

<style src="./MessageTableHeader.scss" lang="scss" />
