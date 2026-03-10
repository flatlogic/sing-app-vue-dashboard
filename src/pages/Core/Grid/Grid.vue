<template>
  <div>
    <h1 class="page-title">
      Grid <span class="fw-semi-bold">System</span>
    </h1>
    <div class="row">
      <div class="col-12 col-md-6">
        <Widget
          title="<h5><span class='fw-semi-bold'>How</span> it works</h5>"
          close
          collapse
          custom-header
        >
          <p>
            Bootstrap's grid system uses a series of containers, rows, and columns to layout
            and align content. It's built with flexbox and is fully responsive. Below is an
            example and an in-depth look at how the grid comes together.
          </p>
          <div class="bg-light p-3">
            <div class="row mb-lg">
              <div class="col-4">
                <div class="py-4 bg-primary text-center text-white">
                  One of three columns
                </div>
              </div>
              <div class="col-4">
                <div class="py-4 bg-primary text-center text-white">
                  One of three columns
                </div>
              </div>
              <div class="col-4">
                <div class="py-4 bg-primary text-center text-white">
                  One of three columns
                </div>
              </div>
            </div>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;div class="container"&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-4"&gt;' }}</code>
              <code>{{ '      One of three columns' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-4"&gt;' }}</code>
              <code>{{ '      One of three columns' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-4"&gt;' }}</code>
              <code>{{ '      One of three columns' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-danger">{{ '&lt;/div&gt;' }}</code>
            </pre>
          </div>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          title="<h5><span class='fw-semi-bold'>Equal</span> width</h5>"
          close
          collapse
          custom-header
        >
          <p>
            For example, here are two grid layouts that apply to every device and viewport,
            from xs to xl. Add any number of unit-less classes for each breakpoint you
            need and every column will be the same width.
          </p>
          <div class="bg-light p-3">
            <div class="row mb-lg">
              <div class="col">
                <div class="py-4 bg-primary text-center text-white">
                  1 of 2
                </div>
              </div>
              <div class="col">
                <div class="py-4 bg-primary text-center text-white">
                  2 of 2
                </div>
              </div>
            </div>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;div class="container"&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      1 of 2' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      1 of 2' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-danger">{{ '&lt;/div&gt;' }}</code>
            </pre>
          </div>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Widget
          title="<h5><span class='fw-semi-bold'>Grid</span> options</h5>"
          close
          collapse
          custom-header
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
                    Extra small<br>
                    <small>&lt;576px</small>
                  </th>
                  <th class="text-center">
                    Small<br>
                    <small>≥576px</small>
                  </th>
                  <th class="text-center">
                    Medium<br>
                    <small>≥768px</small>
                  </th>
                  <th class="text-center">
                    Large<br>
                    <small>≥992px</small>
                  </th>
                  <th class="text-center">
                    Extra large<br>
                    <small>≥1200px</small>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    class="text-nowrap"
                    scope="row"
                  >
                    Max container width
                  </th>
                  <td>None (auto)</td>
                  <td>540px</td>
                  <td>720px</td>
                  <td>960px</td>
                  <td>1140px</td>
                </tr>
                <tr>
                  <th
                    class="text-nowrap"
                    scope="row"
                  >
                    Class prefix
                  </th>
                  <td><code>.col-</code></td>
                  <td><code>.col-sm-</code></td>
                  <td><code>.col-md-</code></td>
                  <td><code>.col-lg-</code></td>
                  <td><code>.col-xl-</code></td>
                </tr>
                <tr>
                  <th
                    class="text-nowrap"
                    scope="row"
                  >
                    # of columns
                  </th>
                  <td colSpan="5">
                    12
                  </td>
                </tr>
                <tr>
                  <th
                    class="text-nowrap"
                    scope="row"
                  >
                    Gutter width
                  </th>
                  <td colSpan="5">
                    30px (15px on each side of a column)
                  </td>
                </tr>
                <tr>
                  <th
                    class="text-nowrap"
                    scope="row"
                  >
                    Nestable
                  </th>
                  <td colSpan="5">
                    Yes
                  </td>
                </tr>
                <tr>
                  <th
                    class="text-nowrap"
                    scope="row"
                  >
                    column ordering
                  </th>
                  <td colSpan="5">
                    Yes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Vertical <span class='fw-semi-bold'>Alignment</span></h5>"
          close
          collapse
          custom-header
        >
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          <div class="bg-light p-3">
            <div
              class="row mb-lg"
              style="height: 150px"
            >
              <div class="col align-self-start">
                <div class="py-4 bg-primary text-center text-white">
                  Start
                </div>
              </div>
              <div class="col align-self-center">
                <div class="py-4 bg-primary text-center text-white">
                  Center
                </div>
              </div>
              <div class="col align-self-end">
                <div class="py-4 bg-primary text-center text-white">
                  End
                </div>
              </div>
            </div>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;div class="container"&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col align-self-start"&gt;' }}</code>
              <code>{{ '      Start' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col align-self-center"&gt;' }}</code>
              <code>{{ '      Center' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col align-self-end"&gt;' }}</code>
              <code>{{ '      End' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-danger">{{ '&lt;/div&gt;' }}</code>
            </pre>
          </div>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Horizontal <span class='fw-semi-bold'>Alignment</span></h5>"
          close
          collapse
          custom-header
        >
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          <div class="bg-light p-3">
            <div class="row mb-lg justify-content-end">
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
            </div>
            <div class="row mb-lg justify-content-around">
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
            </div>
            <div class="row mb-lg justify-content-between">
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
            </div>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;div class="container"&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row justify-content-end"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      1' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      2' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row justify-content-around"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      1' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      2' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row justify-content-between"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      1' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      2' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col"&gt;' }}</code>
              <code>{{ '      3' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-danger">{{ '&lt;/div&gt;' }}</code>
            </pre>
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue';
</script>
