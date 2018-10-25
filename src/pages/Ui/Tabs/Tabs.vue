<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="breadcrumb-item active">UI Tabs & Accordion</li>
    </ol>
    <h1 class="page-title">Tabs & Accordion -
      <span class="fw-semi-bold">Components</span>
    </h1>
    <b-row>
      <b-col md="6" xs="12">
        <b-tabs class="mb-lg">
          <b-tab title="Basic" active>
            I had an idea named Great Work. It was a service aimed to
            help people find their passion. Yes I know it sound crazy and
            super naïve but I worked on that. I started to work on planning,
            graphics, presentations, pictures, descriptions, articles,
            investments and so on. I worked on everything but not the project itself.
          </b-tab>
          <b-tab title="Assumtion" >
            <p class="mb-sm">
              Why don't use Lore Ipsum? I think if some one says don't use lore
              ipsum it's very controversial point. I think the opposite actually.
              Everyone knows what is lore ipsum - it is easy to understand if
              text is lore ipsum.
            </p>
            <b-button variant="danger">Check</b-button>
            <b-button variant="default">Dance</b-button>
          </b-tab>
          <b-tab title="Works">
            <p>
              If you will think too much it will sink in the swamp of never implemented
              plans and ideas or will just go away or will be implemented by someone else.
            </p>
            <p><strong>5 months of doing everything to achieve nothing.</strong></p>
            <p>
              You'll automatically skip - because you know - it's just non-informative stub.
              But what if there some text like this one?
            </p>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col md="6" xs="12">
        <b-tabs class="mb-lg" pills card vertical end>
          <b-tab title="Basic" active>
            I had an idea named Great Work. It was a service aimed to
            help people find their passion. Yes I know it sound crazy and
            super naïve but I worked on that. I started to work on planning,
            graphics, presentations, pictures, descriptions, articles,
            investments and so on. I worked on everything but not the project itself.
          </b-tab>
          <b-tab title="Assumtion" >
            <p class="mb-sm">
              Why don't use Lore Ipsum? I think if some one says don't use lore
              ipsum it's very controversial point. I think the opposite actually.
              Everyone knows what is lore ipsum - it is easy to understand if
              text is lore ipsum.
            </p>
            <b-button variant="danger">Check</b-button>
            <b-button variant="default">Dance</b-button>
          </b-tab>
          <b-tab title="Works">
            <p>
              If you will think too much it will sink in the swamp of never implemented
              plans and ideas or will just go away or will be implemented by someone else.
            </p>
            <p><strong>5 months of doing everything to achieve nothing.</strong></p>
            <p>
              You'll automatically skip - because you know - it's just non-informative stub.
              But what if there some text like this one?
            </p>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col md="6" xs="12">
        <div
          v-for="(element, index) in accordionFirstContent"
          class="card panel mb-xs" :key="`accord-one-${index.toString()}`">
          <div
            class="card-header panel-header bg-light" role="button"
            @click="toggleAccordion('accordionFirst', index)"
          >
            <div class="mb-0">
              <a class="accordion-toggle" role="button">
                {{element.title}}
                <i :class="`fa fa-angle-down ${accordionFirst[index] ? 'expanded' : ''}`" />
              </a>
            </div>
          </div>
          <b-collapse id="accordion-first" class="panel-body" :visible="accordionFirst === index">
            <div class="card-body" v-html="element.body" />
          </b-collapse>
        </div>
      </b-col>
      <b-col md="6" xs="12">
        <div
          v-for="(element, index) in accordionSecondContent"
          class="card panel mb-xs" :key="`accord-one-${index.toString()}`">
          <div
            class="card-header panel-header bg-light" role="button"
            @click="toggleAccordion('accordionSecond', index)"
          >
            <div class="mb-0">
              <a class="accordion-toggle" role="button">
                {{element.title}}
                <i :class="`fa fa-angle-down ${accordionSecond[index] ? 'expanded' : ''}`" />
              </a>
            </div>
          </div>
          <b-collapse id="accordion-second" class="panel-body" :visible="accordionSecond === index">
            <div class="card-body" v-html="element.body" />
          </b-collapse>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'TabsPage',
  components: { Widget },
  data() {
    return {
      accordionFirst: -1,
      accordionSecond: 1,
      accordionSecondContent: [{
        title: 'Collapsible Group Item', body: ` Get base styles and flexible support for collapsible components like accordions and navigation.
          Using the collapse plugin, we built a simple accordion by extending the panel component.`,
      }, {
        title: 'Normal Text Insertion', body: `
        Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very
              controversial point. I think the opposite actually. Everyone knows what is lore ipsum
              - it is easy to understand if text is lore ipsum. You'll automatically skip -
              because you know - it's just non-informative stub. But what if there some text like
              this one? You start to read it! But the goal of this text is different. The goal is
              the example. So a bit of Lore Ipsum is always very good practice. Keep it in mind!`,
      }, {
        title: 'Check It',
        body: ' Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.',
      }],
      accordionFirstContent: [{
        title: 'Collapsible Group Item', body: ` Get base styles and flexible support for collapsible components like accordions and navigation.
          Using the collapse plugin, we built a simple accordion by extending the panel component.`,
      }, {
        title: 'Random from the Web', body: `
        <p><span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based
        on the latest Metro design. There are few reasons we want to tell you, why we have created it:
        We didn't like the darkness of most of admin templates, so we created this light one.
        We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
        We searched for a solution of how to make widgets look like real widgets, so we decided that
        deep background - is what makes widgets look real.
        </p>
        <p class="no-margin text-muted"><em>- Some One</em></p>
`,
      }, {
        title: 'Check It',
        body: ' Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.',
      }],
    };
  },
  methods: {
    toggleAccordion(field, index) {
      if (this[field] !== index) {
        Vue.set(this, field, index);
      } else {
        Vue.set(this, field, -1);
      }
    },
  },
};
</script>
