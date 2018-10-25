<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Jumbotron</b-breadcrumb-item>
    </b-breadcrumb>
    <b-jumbotron
      header="Fluid jumbotron"
      lead="This is a modified jumbotron that occupies the entire horizontal space of its parent."
    />
    <b-row>
      <b-col xs='12' md='8'>
        <b-jumbotron
          header="Hello, world!"
          lead="This is a simple hero unit, a simple Jumbotron-style
          component for calling extra attention to featured content or information."
        >
          <hr class="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space
            content out within the larger container.</p>
          <p class="lead">
            <b-button variant="primary">Learn More</b-button>
          </p>
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
};
</script>
