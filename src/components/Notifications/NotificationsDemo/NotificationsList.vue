<template>
  <b-list-group class="listGroup thin-scroll">
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <img class="rounded-circle" src="../../../assets/people/a3.jpg" alt="..." />
      </span>
      <p class="m-0 overflow-hidden">
        1 new user just signed up! Check out
        &nbsp;<a href="#">Monica Smith</a>'s account.
        <time class="help-block m-0">
          2 mins ago
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa fa-angle-double-up fa-2x" />
      </span>
      <p class="text-ellipsis m-0">
        2.1.0-pre-alpha just released.
        <time class="help-block m-0">
          5h ago
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa fa-bolt fa-lg" />
      </span>
      <p class="text-ellipsis m-0 overflow-hidden">
        Server load limited.
        <time class="help-block m-0">
          7h ago
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <img class="rounded-circle" src="../../../assets/people/a5.jpg" alt="..." />
      </span>
      <p class="m-0 overflow-hidden">
        User <a href="#">Jeff</a> registered
        &nbsp;&nbsp;
        <b-button size="xs" variant="success" class="mr-1">Allow</b-button>
        <b-button size="xs" variant="danger">Deny</b-button>
        <time class="help-block m-0">
          12:18 AM
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa fa-shield fa-lg" />
      </span>
      <p class="m-0 overflow-hidden">
        Instructions for changing your Envato Account password. Please
        check your account <a href="#">security page</a>.
        <time class="help-block m-0">
          12:18 AM
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <span class="rounded bg-primary rounded-lg">
          <i class="fa fa-facebook text-white" />
        </span>
      </span>
      <p class="text-ellipsis m-0">
        New <strong>76</strong> facebook likes received.
        <time class="help-block m-0">
          15 Apr 2014
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <span class="circle circle-lg bg-gray-dark">
          <i class="fa fa-circle-o text-white" />
        </span>
      </span>
      <p class="text-ellipsis m-0">
        Dark matter detected.
        <time class="help-block m-0">
          15 Apr 2014
        </time>
      </p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'NotificationsList',
};
</script>

<style src="./ListGroup.scss" lang="scss" />
