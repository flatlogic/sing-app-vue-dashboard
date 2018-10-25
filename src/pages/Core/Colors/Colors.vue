<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Colors</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Colors
    </h1>
    <b-row>
      <b-col xs="12">
        <Widget
          title="<h5>States <span class='fw-semi-bold'>Colors</span></h5>"
          customHeader close collapse
        >
          <p>
            Sing comes with a number of state colors that can be applied to
            the most of elements and components. It reuses Bootstrap's original 6 states:
          </p>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>STATE</th>
                  <th>PREVIEW</th>
                  <th>CLASS POSTFIX</th>
                  <th>USAGE EXAMPLE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableData" :key="row.id">
                  <th scope="row" class="fw-thin">{{row.state}}</th>
                  <td><span :class="`circle bg-${row.state.toLowerCase()}`">&nbsp;</span></td>
                  <td><code>*-{{row.state.toLowerCase()}}</code></td>
                  <td><code v-for="usage in row.usage"
                    :key="usage" class="mr-xs">{{usage}}</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" md="6">
        <Widget
          title="<h5>Text <span class='fw-semi-bold'>Colors</span></h5>"
          customHeader close collapse
        >
          <p>
            Convey meaning through color with a handful of color utility classes.
            Includes support for styling links with hover states, too. Use <code>text-*</code>
            class to fill text.
          </p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <b-row>
              <b-col sm="12">
                <h1 class="text-danger">h1. Heading</h1>
                <h2 class="text-warning">h2. Heading</h2>
                <h3 class="text-success">h3. Heading</h3>
                <h4 class="text-primary">h4. Heading</h4>
                <h5 class="text-info">h5. Heading</h5>
                <h6 class="text-inverse">h6. Heading</h6>
              </b-col>
            </b-row>
          </div>
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5>Example <span class='fw-semi-bold'>buttons</span></h5>"
          close collapse customHeader
        >
          <p>Use any of the available button classes to quickly create a styled button.
            Semantically distinguishable beauty.</p>
          <b-button class="width-100 mb-xs mr-xs" variant="default">Default</b-button>
          <b-button class="width-100 mb-xs mr-xs" variant="primary">Primary</b-button>
          <b-button class="width-100 mb-xs mr-xs" variant="info">Info</b-button>
          <b-button class="width-100 mb-xs mr-xs" variant="success">Success</b-button>
          <b-button class="width-100 mb-xs mr-xs" variant="warning">Warning</b-button>
          <b-button class="width-100 mb-xs mr-xs" variant="danger">Danger</b-button>
          <b-button class="width-100 mb-xs mr-xs" variant="gray">Gray</b-button>
          <b-button class="width-100 mb-xs mr-xs" variant="inverse">Inverse</b-button>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Typography',
  components: { Widget },
  data() {
    return {
      tableData: [
        {
          id: 0,
          state: 'Success',
          usage: ['text-success', 'btn-success'],
        },
        {
          id: 1,
          state: 'Warning',
          usage: ['badge-warning', 'bg-warning'],
        },
        {
          id: 2,
          state: 'Danger',
          usage: ['btn-danger', 'text-danger'],
        },
        {
          id: 3,
          state: 'Info',
          usage: ['alert-info', 'badge-info'],
        },
        {
          id: 4,
          state: 'Primary',
          usage: ['bg-primary', 'text-primary'],
        },
        {
          id: 5,
          state: 'Secondary',
          usage: ['bg-secondary'],
        },
      ],
    };
  },
};
</script>
