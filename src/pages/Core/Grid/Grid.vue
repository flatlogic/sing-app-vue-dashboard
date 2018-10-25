<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Grid</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Grid <span class="fw-semi-bold">System</span></h1>
    <b-row>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5><span class='fw-semi-bold'>How</span> it works</h5>"
          close collapse customHeader
        >
          <p>
            Bootstrap’s grid system uses a series of containers, b-rows, and columns to layout
            and align content. It’s built with flexbox and is fully responsive. Below is an
            example and an in-depth look at how the grid comes together.
          </p>
          <div class="bg-light p-3">
            <b-row class="mb-lg">
              <b-col xs='4'>
                <div class="py-4 bg-primary text-center text-white">
                  One of three b-columns
                </div>
              </b-col>
              <b-col xs='4'>
                <div class="py-4 bg-primary text-center text-white">
                  One of three b-columns
                </div>
              </b-col>
              <b-col xs='4'>
                <div class="py-4 bg-primary text-center text-white">
                  One of three b-columns
                </div>
              </b-col>
            </b-row>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;b-container&gt;' }}</code>
              <code class="text-success">{{'  &lt;b-row&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col xs="4"&gt;'}}</code>
              <code>{{'      One of three b-columns'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col xs="4"&gt;'}}</code>
              <code>{{'      One of three b-columns'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col xs="4"&gt;'}}</code>
              <code>{{'      One of three b-columns'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-danger">{{'&lt;/b-container&gt;'}}</code>
            </pre>
          </div>
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5><span class='fw-semi-bold'>Equal</span> width</h5>"
          close collapse customHeader
        >
          <p>
            For example, here are two grid layouts that apply to every device and viewport,
            from xs to xl. Add any number of unit-less classes for each breakpoint you
            need and every column will be the same width.
          </p>
          <div class="bg-light p-3">
            <b-row class="mb-lg">
              <b-col>
                <div class="py-4 bg-primary text-center text-white">
                  1 of 2
                </div>
              </b-col>
              <b-col>
                <div class="py-4 bg-primary text-center text-white">
                  2 of 2
                </div>
              </b-col>
            </b-row>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{'&lt;b-container&gt;'}}</code>
              <code class="text-success">{{'  &lt;b-row&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      1 of 2'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      1 of 2'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-danger">{{'&lt;/b-container&gt;'}}</code>
            </pre>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Widget
          title="<h5><span class='fw-semi-bold'>Grid</span> options</h5>"
          close collapse customHeader
        >
          <p>
          While Bootstrap uses <code>em</code>s or <code>rem</code>s for defining
          most sizes, <code>px</code>s are used for
          grid breakpoints and container widths. This is because the viewport width is in
          pixels and does not change with the font size. See how aspects of the Bootstrap grid
          system work across multiple devices with a handy table.
          </p>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th />
                  <th class="text-center">
                    Extra small<br />
                    <small>&lt;576px</small>
                  </th>
                  <th class="text-center">
                    Small<br />
                    <small>≥576px</small>
                  </th>
                  <th class="text-center">
                    Medium<br />
                    <small>≥768px</small>
                  </th>
                  <th class="text-center">
                    Large<br />
                    <small>≥992px</small>
                  </th>
                  <th class="text-center">
                    Extra large<br />
                    <small>≥1200px</small>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="text-nowrap" scope="b-row">Max container width</th>
                  <td>None (auto)</td>
                  <td>540px</td>
                  <td>720px</td>
                  <td>960px</td>
                  <td>1140px</td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="b-row">Component property</th>
                  <td><code>{{'&lt;b-col xs=""&gt;'}}</code></td>
                  <td><code>{{'&lt;b-col sm=""&gt;'}}</code></td>
                  <td><code>{{'&lt;b-col md=""&gt;'}}</code></td>
                  <td><code>{{'&lt;b-col lg=""&gt;'}}</code></td>
                  <td><code>{{'&lt;b-col xl=""&gt;'}}</code></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="b-row"># of columns</th>
                  <td colSpan="5">12</td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="b-row">Gutter width</th>
                  <td colSpan="5">30px (15px on each side of a column)</td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="b-row">Nestable</th>
                  <td colSpan="5">Yes</td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="b-row">column ordering</th>
                  <td colSpan="5">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5>Vertical <span class='fw-semi-bold'>Alignment</span></h5>"
          close collapse customHeader
        >
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          <div class="bg-light p-3">
            <b-row class="mb-lg" :style="{ height: '150px' }">
              <b-col class="align-self-start">
                <div class="py-4 bg-primary text-center text-white">
                  Start
                </div>
              </b-col>
              <b-col class="align-self-center">
                <div class="py-4 bg-primary text-center text-white">
                  Center
                </div>
              </b-col>
              <b-col class="align-self-end">
                <div class="py-4 bg-primary text-center text-white">
                  End
                </div>
              </b-col>
            </b-row>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{'&lt;b-container&gt;'}}</code>
              <code class="text-success">{{'  &lt;b-row&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col class="align-self-start"&gt;'}}</code>
              <code>{{'      Start'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col class="align-self-center"&gt;'}}</code>
              <code>{{'      Center'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col class="align-self-end"&gt;'}}</code>
              <code>{{'      End'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-danger">{{'&lt;/b-container&gt;'}}</code>
            </pre>
          </div>
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5>Vertical <span class='fw-semi-bold'>Alignment</span></h5>"
          close collapse customHeader
        >
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          <div class="bg-light p-3">
            <b-row class="mb-lg justify-content-end">
              <div class="col-3">
                <div class="py-4 bg-primary text-center text-white">
                  1
                </div>
              </div>
              <div class="col-3">
                <div class="py-4 bg-primary text-center text-white">
                  2
                </div>
              </div>
            </b-row>
            <b-row class="mb-lg justify-content-around">
              <div class="col-3">
                <div class="py-4 bg-primary text-center text-white">
                  1
                </div>
              </div>
              <div class="col-3">
                <div class="py-4 bg-primary text-center text-white">
                  2
                </div>
              </div>
            </b-row>
            <b-row class="mb-lg justify-content-between">
              <div class="col-3">
                <div class="py-4 bg-primary text-center text-white">
                  1
                </div>
              </div>
              <div class="col-3">
                <div class="py-4 bg-primary text-center text-white">
                  2
                </div>
              </div>
              <div class="col-3">
                <div class="py-4 bg-primary text-center text-white">
                  3
                </div>
              </div>
            </b-row>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{'&lt;b-container>'}}</code>
              <code class="text-success">{{'  &lt;b-row class="justify-content-end"&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      1'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      2'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-success">{{'  &lt;b-row class="justify-content-around"&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      1'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      2'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-success">{{'  &lt;b-row class="justify-content-between"&gt;'}}</code> <!-- eslint-disable-line -->
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      1'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      2'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col&gt;'}}</code>
              <code>{{'      3'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-danger">{{'&lt;/b-container&gt;'}}</code>
            </pre>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Grid',
  components: { Widget },
};
</script>
