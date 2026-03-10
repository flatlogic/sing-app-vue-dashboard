<template>
  <div>
    <h1 class="page-title">
      Tabs & Accordion -
      <span class="fw-semi-bold">Components</span>
    </h1>
    <div class="row">
      <div class="col-md-6 col-12">
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab1 === 0 }"
              @click="activeTab1 = 0"
            >
              Basic
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab1 === 1 }"
              @click="activeTab1 = 1"
            >
              Assumtion
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab1 === 2 }"
              @click="activeTab1 = 2"
            >
              Works
            </button>
          </li>
        </ul>
        <div class="tab-content mb-lg">
          <div v-if="activeTab1 === 0">
            I had an idea named Great Work. It was a service aimed to
            help people find their passion. Yes I know it sound crazy and
            super naïve but I worked on that. I started to work on planning,
            graphics, presentations, pictures, descriptions, articles,
            investments and so on. I worked on everything but not the project itself.
          </div>
          <div v-if="activeTab1 === 1">
            <p class="mb-sm">
              Why don't use Lore Ipsum? I think if some one says don't use lore
              ipsum it's very controversial point. I think the opposite actually.
              Everyone knows what is lore ipsum - it is easy to understand if
              text is lore ipsum.
            </p>
            <button class="btn btn-danger">
              Check
            </button>
            <button class="btn btn-default">
              Dance
            </button>
          </div>
          <div v-if="activeTab1 === 2">
            <p>
              If you will think too much it will sink in the swamp of never implemented
              plans and ideas or will just go away or will be implemented by someone else.
            </p>
            <p><strong>5 months of doing everything to achieve nothing.</strong></p>
            <p>
              You'll automatically skip - because you know - it's just non-informative stub.
              But what if there some text like this one?
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="d-flex">
          <div class="tab-content card flex-grow-1 mb-lg">
            <div
              v-if="activeTab2 === 0"
              class="card-body"
            >
              I had an idea named Great Work. It was a service aimed to
              help people find their passion. Yes I know it sound crazy and
              super naïve but I worked on that. I started to work on planning,
              graphics, presentations, pictures, descriptions, articles,
              investments and so on. I worked on everything but not the project itself.
            </div>
            <div
              v-if="activeTab2 === 1"
              class="card-body"
            >
              <p class="mb-sm">
                Why don't use Lore Ipsum? I think if some one says don't use lore
                ipsum it's very controversial point. I think the opposite actually.
                Everyone knows what is lore ipsum - it is easy to understand if
                text is lore ipsum.
              </p>
              <button class="btn btn-danger">
                Check
              </button>
              <button class="btn btn-default">
                Dance
              </button>
            </div>
            <div
              v-if="activeTab2 === 2"
              class="card-body"
            >
              <p>
                If you will think too much it will sink in the swamp of never implemented
                plans and ideas or will just go away or will be implemented by someone else.
              </p>
              <p><strong>5 months of doing everything to achieve nothing.</strong></p>
              <p>
                You'll automatically skip - because you know - it's just non-informative stub.
                But what if there some text like this one?
              </p>
            </div>
          </div>
          <ul class="nav nav-pills flex-column ms-3">
            <li class="nav-item">
              <button
                class="nav-link"
                :class="{ active: activeTab2 === 0 }"
                @click="activeTab2 = 0"
              >
                Basic
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                :class="{ active: activeTab2 === 1 }"
                @click="activeTab2 = 1"
              >
                Assumtion
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                :class="{ active: activeTab2 === 2 }"
                @click="activeTab2 = 2"
              >
                Works
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div
          v-for="(element, index) in accordionFirstContent"
          :key="`accord-one-${index.toString()}`"
          class="card panel mb-xs"
        >
          <div
            class="card-header panel-header bg-white"
            role="button"
            @click="toggleAccordion('accordionFirst', index)"
          >
            <div class="mb-0">
              <a
                class="accordion-toggle"
                role="button"
              >
                {{ element.title }}
                <i :class="`fa fa-angle-down ${accordionFirst === index ? 'expanded' : ''}`" />
              </a>
            </div>
          </div>
          <div
            class="collapse panel-body"
            :class="{ show: accordionFirst === index }"
          >
            <div
              class="card-body"
              v-html="element.body"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div
          v-for="(element, index) in accordionSecondContent"
          :key="`accord-two-${index.toString()}`"
          class="card panel mb-xs"
        >
          <div
            class="card-header panel-header bg-white"
            role="button"
            @click="toggleAccordion('accordionSecond', index)"
          >
            <div class="mb-0">
              <a
                class="accordion-toggle"
                role="button"
              >
                {{ element.title }}
                <i :class="`fa fa-angle-down ${accordionSecond === index ? 'expanded' : ''}`" />
              </a>
            </div>
          </div>
          <div
            class="collapse panel-body"
            :class="{ show: accordionSecond === index }"
          >
            <div
              class="card-body"
              v-html="element.body"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab1 = ref(0)
const activeTab2 = ref(0)
const accordionFirst = ref(-1)
const accordionSecond = ref(1)

const accordionSecondContent = [
  {
    title: 'Collapsible Group Item',
    body: `Get base styles and flexible support for collapsible components like accordions and navigation.
      Using the collapse plugin, we built a simple accordion by extending the panel component.`,
  },
  {
    title: 'Normal Text Insertion',
    body: `Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very
      controversial point. I think the opposite actually. Everyone knows what is lore ipsum
      - it is easy to understand if text is lore ipsum. You'll automatically skip -
      because you know - it's just non-informative stub. But what if there some text like
      this one? You start to read it! But the goal of this text is different. The goal is
      the example. So a bit of Lore Ipsum is always very good practice. Keep it in mind!`,
  },
  {
    title: 'Check It',
    body: `Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually.`,
  }
]

const accordionFirstContent = [
  {
    title: 'Collapsible Group Item',
    body: `Get base styles and flexible support for collapsible components like accordions and navigation.
      Using the collapse plugin, we built a simple accordion by extending the panel component.`,
  },
  {
    title: 'Random from the Web',
    body: `<p><span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based
    on the latest Metro design. There are few reasons we want to tell you, why we have created it:
    We didn't like the darkness of most of admin templates, so we created this light one.
    We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
    We searched for a solution of how to make widgets look like real widgets, so we decided that
    deep background - is what makes widgets look real.
    </p>
    <p class="no-margin text-muted"><em>- Some One</em></p>`,
  },
  {
    title: 'Check It',
    body: `Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually.`,
  }
]

function toggleAccordion(field, index) {
  if (field === 'accordionFirst') {
    accordionFirst.value = accordionFirst.value === index ? -1 : index
  } else {
    accordionSecond.value = accordionSecond.value === index ? -1 : index
  }
}
</script>
