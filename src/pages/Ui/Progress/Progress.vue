<template>
  <div>
    <h1 class="page-title">
      Progress
    </h1>
    <div class="row">
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Progress <span class='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </p>
          <div class="progress mb-sm">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%"
            />
          </div>
          <div class="progress mb-sm">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 50%"
            />
          </div>
          <div class="progress mb-sm">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 75%"
            />
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 100%"
            />
          </div>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Backgrounds</h5>"
          close
          collaple
          custom-header
        >
          <p>
            Use background utility classes to change the appearance of
            individual progress bars.
          </p>
          <div class="progress mb-sm">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style="width: 25%"
            />
          </div>
          <div class="progress mb-sm">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style="width: 50%"
            />
          </div>
          <div class="progress mb-sm">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style="width: 75%"
            />
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 100%"
            />
          </div>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Labels</h5>"
          close
          collapse
          custom-header
        >
          <p>
            Add labels to your progress bars by placing
            text within the <code>&lt;b-progress&gt;</code>
          </p>
          <div class="progress mb-sm">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%"
            >
              25%
            </div>
          </div>
          <div class="progress mb-sm">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style="width: 100%"
            >
              Something was wrong!
            </div>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 100%"
            >
              Complited!
            </div>
          </div>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Size</h5>"
          close
          collapse
          custom-header
        >
          <p>
            We only set a height value on the <code>&lt;b-progress&gt;</code>,
            so if you change that value the inner
            bar will automatically resize accordingly. Also <code>.progress-sm</code> is available.
          </p>
          <div class="progress progress-sm mb-sm">
            <div
              class="progress-bar bg-inverse"
              role="progressbar"
              style="width: 25%"
            >
              25%
            </div>
          </div>
          <div class="progress mb-sm">
            <div
              class="progress-bar bg-inverse"
              role="progressbar"
              style="width: 50%"
            >
              50%
            </div>
          </div>
          <div
            class="progress"
            style="height: 30px"
          >
            <div
              class="progress-bar bg-inverse"
              role="progressbar"
              style="width: 75%"
            >
              75%
            </div>
          </div>
        </Widget>
      </div>
      <div class="col-12">
        <Widget
          title="<h5><span class='fw-semi-bold'>Striped</span> Progress</h5>"
          close
          collapse
          custom-header
        >
          <div class="row">
            <div class="col-12 col-md-6">
              <p>
                Add <code>striped</code> property to any <code>&lt;Progress&gt;</code> to
                apply a stripe via CSS gradient over the progress bar's background color.
              </p>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style="width: 10%"
                />
              </div>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style="width: 25%"
                />
              </div>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style="width: 50%"
                />
              </div>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped bg-warning"
                  role="progressbar"
                  style="width: 75%"
                />
              </div>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <p>
                The striped gradient can also be animated. Add <code>animated</code> property
                to <code>&lt;b-progress&gt;</code> to animate the stripes
                right to left via CSS3 animations.
              </p>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  role="progressbar"
                  style="width: 10%"
                />
              </div>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  role="progressbar"
                  style="width: 25%"
                />
              </div>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  style="width: 50%"
                />
              </div>
              <div class="progress mb-sm">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style="width: 75%"
                />
              </div>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue';
</script>
