<template>
  <span class="sing-calendar">
    <v-calendar is-expanded :attributes="attrs">
      <div slot="day-popover" slot-scope="{dayTitle, attributes}">
        <header class="fs-sm text-light fw-semi-bold text-center">
          {{ dayTitle }}
        </header>
        <v-popover-row :attribute="attr" class="text-white" v-for="attr in attributes" :key="attr.key">
          <p v-if="attr.popover.title" class="fw-normal m-0">{{attr.popover.title}}</p>
          <p v-if="attr.popover.title" class="fw-thin m-0">{{attr.popover.description}}</p>
          <a v-if="attr.popover.link" class="fw-thin m-0" :href="attr.popover.href">{{attr.popover.link}}</a>
        </v-popover-row>
      </div>
    </v-calendar>
  </span>
</template>

<script>

import config from "../../../../config";

export default {
  name: 'Calendar',
  components: {
    config
  },
  data() {
    return {
      attrs: []
    }
  },
  mounted() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    this.attrs = [
      {
        key: 1,
        dot: {
          style: {
            backgroundColor: config.app.colors.primary
          }
        },
        dates: new Date(year, month, 2),
        popover: {
          title: 'The flower bed',
          description: 'Contents here',
          visibility: 'hover'
        }
      },
      {
        key: 2,
        dot: {
          style: {
            backgroundColor: config.app.colors.info
          }
        },
        dates: new Date(year, month, 5),
        popover: {
          title: 'Stop world water pollution',
          description: 'Have a kick off meeting with .inc company',
          visibility: 'hover'
        }
      },
      {
        key: 3,
        dot: {
          style: {
            backgroundColor: config.app.colors.warning
          }
        },
        dates: new Date(year, month, 18),
        popover: {
          title: 'Light Blue 2.2 release',
          description: 'Some contents here',
          visibility: 'hover'
        }
      },
      {
        key: 4,
        dot: {
          style: {
            backgroundColor: config.app.colors.danger
          }
        },
        dates: new Date(year, month, 29),
        popover: {
          link: 'A link',
          href: 'http://www.flatlogic.com',
          visibility: 'hover'
        }
      }
    ];
  },
};
</script>

<style src="./Calendar.scss" lang="scss" />
