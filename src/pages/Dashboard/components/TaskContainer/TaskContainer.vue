<template>
  <Widget
    className="mb-xlg pb-2"
    bodyClass="task-container mt"
    :title="`
      <div>
        <h4>Today&apos;s Tasks
          <span class='badge badge-pill badge-success fw-normal pull-right mt-xs'>
            ${tasks.length}
          </span>
        </h4>
        <p class='text-primary mb-0'><small>
          ${tasks.filter(t => t.completed).length} of ${tasks.length} completed
        </small></p>
      </div>`"
    customHeader
  >
    <Task
      v-for="task in tasks"
      :task="task"
      :completed="task.completed"
      :toggle="toggleTaskState"
      :key="task.id"
    />
    <b-button variant="transparent" class="bg-white w-100 text-center text-muted">
      See All <i class="la la-arrow-down" />
    </b-button>
  </Widget>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import Task from '../Task/Task';

export default {
  name: 'TaskContainer',
  props: ['data'],
  components: { Widget, Task },
  data() {
    return {
      tasks: this.data,
    };
  },
  methods: {
    toggleTaskState(index) {
      const task = this.tasks.find(({ id }) => id === index);
      task.completed = !task.completed;

      Vue.set(this.tasks, index, task);
    },
  },
  created() {
    const tasks = this.data;

    tasks.map((task) => {
      task.completed = false; // eslint-disable-line
      return task;
    });

    this.tasks = tasks;
  },
};
</script>
