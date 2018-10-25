<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Progress</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Progress</h1>
    <b-row>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5>Progress <span class='fw-semi-bold'>Example</span></h5>"
          close collapse customHeader
        >
          <p>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </p>
          <b-progress class="mb-sm" :value="25" :max="100" />
          <b-progress class="mb-sm" :value="50" :max="100" />
          <b-progress class="mb-sm" :value="75" :max="100" />
          <b-progress :value="100" :max="100" />
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5>Backgrounds</h5>"
          close collaple customHeader
        >
          <p>
            Use background utility classes to change the appearance of
            individual progress bars.
          </p>
          <b-progress class="mb-sm" :value="25" :max="100" variant="info" />
          <b-progress class="mb-sm" :value="50" :max="100" variant="warning" />
          <b-progress class="mb-sm" :value="75" :max="100" variant="danger" />
          <b-progress :value="100" :max="100" variant="success" />
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          title='<h5>Labels</h5>'
          close collapse customHeader
        >
          <p>
            Add labels to your progress bars by placing
            text within the <code>&lt;b-progress&gt;</code>
          </p>
          <b-progress class="mb-sm" :max="100">
            <b-progress-bar :value="25">
              25%
            </b-progress-bar>
          </b-progress>
          <b-progress class="mb-sm" :max="100" variant="danger">
            <b-progress-bar :value="100">
              Something was wrong!
            </b-progress-bar>
          </b-progress>
          <b-progress :value="100" :max="100" variant="success">
            <b-progress-bar :value="100">
              Complited!
            </b-progress-bar>
          </b-progress>
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          title='<h5>Size</h5>'
          close collapse customHeader
        >
          <p>
          We only set a height value on the <code>&lt;b-progress&gt;</code>,
          so if you change that value the inner
          bar will automatically resize accordingly. Also <code>.progress-sm</code> is available.
          </p>
          <b-progress class="progress-sm mb-sm" :max="100" variant="dark">
            <b-progress-bar :value="25">
              25%
            </b-progress-bar>
          </b-progress>
          <b-progress class="mb-sm" :max="100" variant="gray">
            <b-progress-bar :value="50">
              50%
            </b-progress-bar>
          </b-progress>
          <b-progress :max="100" variant="secondary" :style="{ height: '30px' }">
            <b-progress-bar :value="75">
              75%
            </b-progress-bar>
          </b-progress>
        </Widget>
      </b-col>
      <b-col xs='12'>
        <Widget
          title="<h5><span class='fw-semi-bold'>Striped</span> Progress</h5>"
          close collapse customHeader
        >
          <b-row>
            <b-col xs='12' md='6'>
              <p>
                Add <code>striped</code> property to any <code>&lt;Progress&gt;</code> to
                apply a stripe via CSS gradient over the progress bar’s background color.
              </p>
              <b-progress striped class="mb-sm" :value="10" :max="100"/>
              <b-progress striped class="mb-sm" :value="25" :max="100" variant="success" />
              <b-progress striped class="mb-sm" :value="50" :max="100" variant="info" />
              <b-progress striped class="mb-sm" :value="75" :max="100" variant="warning" />
              <b-progress striped :value="100" :max="100" variant="danger" />
            </b-col>
            <b-col xs='12' md='6'>
              <p>
                The striped gradient can also be animated. Add <code>animated</code> property
                to <code>&lt;b-progress&gt;</code> to animate the stripes
                right to left via CSS3 animations.
              </p>
              <b-progress animated striped class="mb-sm" :value="10" :max="100" variant="danger" />
              <b-progress animated striped class="mb-sm" :value="25" :max="100" variant="warning" />
              <b-progress animated striped class="mb-sm" :value="50" :max="100" variant="info" />
              <b-progress animated striped class="mb-sm" :value="75" :max="100" variant="success" />
              <b-progress animated striped :value="100" :max="100" />
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'ProgressPage',
  components: { Widget },
};
</script>
