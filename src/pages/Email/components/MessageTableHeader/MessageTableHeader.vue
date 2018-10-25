<template>
  <div class="messageTableHeader">
    <div>
      <b-dropdown text="Select" variant="default" size="sm">
        <b-dropdown-item-button @click="chooseAll">All</b-dropdown-item-button>
        <b-dropdown-item-button @click="chooseNone">None</b-dropdown-item-button>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="chooseRead">Read</b-dropdown-item-button>
        <b-dropdown-item-button @click="chooseUnread">Unread</b-dropdown-item-button>
      </b-dropdown>
      <b-dropdown text="Actions" variant="default" size="sm">
        <b-dropdown-item-button>Reply</b-dropdown-item-button>
        <b-dropdown-item-button>Forward</b-dropdown-item-button>
        <b-dropdown-item-button>Archive</b-dropdown-item-button>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="markRead">Mark As Read</b-dropdown-item-button>
        <b-dropdown-item-button @click="markUnread">Mark As Unread</b-dropdown-item-button>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="deleteMsg">Delete</b-dropdown-item-button>
      </b-dropdown>
    </div>
    <b-form-input placeholder="Search Messages" size="sm" @input="search" />
  </div>
</template>

<script>
export default {
  name: 'MessageTableHeader',
  props: ['search', 'chooseAll', 'chooseNone', 'chooseRead', 'chooseUnread', 'markRead', 'markUnread', 'deleteMsg'],
};
</script>

<style src="./MessageTableHeader.scss" lang="scss" scoped />
