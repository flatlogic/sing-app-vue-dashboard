<template>
  <b-list-group class="listGroup thin-scroll">
    <b-list-group-item class="listGroupItem">
      <span class="text-muted float-right">60%</span>
      <h6 class="m-0 mb-1 text-gray">
        <strong>Urgent:</strong>
        &nbsp;Rails 4.1.0 upgrade
      </h6>
      <b-progress class="m-0" variant="primary" :value="60" :max="100" />
      <span class="help-block">3 notes added by James 2h ago...</span>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="text-muted float-right">83%</span>
      <h6 class="m-0 mb-1 text-gray">
        <strong>Primary:</strong>
        &nbsp;Sing Web App
      </h6>
      <b-progress class="progress-sm m-0" variant="success" :value="83" :max="100"/>
      <span class="help-block">verifying stable probability status</span>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="text-muted float-right">44%</span>
      <h6 class="m-0 mb-1">
        <span class="circle bg-gray-dark text-warning"
          v-b-tooltip.hover title="2 issues require your attention" placement="bottom">
          <i class="fa fa-question" />
        </span>
        &nbsp;
        Finish The Road to Hell Song
      </h6>
      <b-progress class="progress-sm m-0" variant="gray-dark" :value="44" :max="100"/>
      <span class="help-block">last update: 2h ago</span>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="text-muted float-right">86%</span>
      <h6 class="m-0 mb-1 deemphasize text-gray">
        Complete project planning
      </h6>
      <b-progress class="progress-xs m-0" variant="danger" :value="86" :max="100"/>
      <span class="help-block">no, no way this is not working...</span>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="text-muted float-right">100%</span>
      <h6 class="m-0 mb-1 deemphasize text-gray">
        <strong>Completed:</strong>
        &nbsp;Instruct newbies on coding standards
      </h6>
      <b-progress class="progress-xs m-0" variant="primary" :value="100" :max="100"/>
      <span class="help-block">last update: April 22, 2014 2:36 pm</span>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'Progress',
};
</script>
