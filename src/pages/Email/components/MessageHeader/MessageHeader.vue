<template>
  <div class="messageHeader">
    <h3>{{title}}</h3>
    <div class="messageHeaderLine mt-lg mb-lg">
      <div class="messageFrom">
        <img src="../../../../assets/people/a4.jpg" alt="user" class="rounded-circle mr-xs" />
        <div class="messageFromInfo">
          <span>
            <strong>{{name}}</strong>
            <span class="text-muted fw-thin ml-xs">
              &lt;{{email}}&gt;
            </span>
          </span>
          <span class="text-muted">to {{to}}</span>
        </div>
      </div>
      <div class="messageHeaderDate">
        {{date}}
        <b-button-group class="ml-sm">
          <b-button variant="default" @click="changeCompose">
            <i class="fa fa-reply" /> Reply
          </b-button>
          <b-dropdown variant="default" size="sm" right>
            <b-dropdown-item-button @click="changeCompose">
              <i class="fa fa-reply" /> Reply
            </b-dropdown-item-button>
            <b-dropdown-item-button>
              <i class="fa fa-arrow-right" /> Forward
            </b-dropdown-item-button>
            <b-dropdown-item-button>
              <i class="fa fa-print" /> Print
            </b-dropdown-item-button>
            <b-dropdown-divider />
            <b-dropdown-item-button>
              <i class="fa fa-ban" /> Spam
            </b-dropdown-item-button>
            <b-dropdown-item-button>
              <i class="fa fa-trash" /> Delete
            </b-dropdown-item-button>
          </b-dropdown>
        </b-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageHeader',
  props: ['title', 'name', 'photo', 'email', 'to', 'date', 'changeCompose'],
};
</script>

<style src="./MessageHeader.scss" lang="scss" scoped />
