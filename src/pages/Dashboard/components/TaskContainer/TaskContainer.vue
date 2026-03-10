<template>
  <Widget
    class-name="mb-xlg pb-2"
    body-class="task-container mt"
    :title="taskTitle"
    custom-header
  >
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :completed="task.completed"
      :toggle="toggleTaskState"
    />
    <button
      type="button"
      class="btn btn-transparent bg-white w-100 text-center text-primary"
    >
      See All <i class="la la-arrow-down" />
    </button>
  </Widget>
</template>

<script setup>
import { ref, computed } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import Task from '../Task/Task.vue'

const props = defineProps({
  data: { type: Array, default: () => [] }
})

const tasks = ref(props.data.map(task => ({ ...task, completed: false })))

const taskTitle = computed(() => {
  const completedCount = tasks.value.filter(t => t.completed).length
  return `
    <div>
      <h4>Today's Tasks
        <span class='badge rounded-pill bg-primary fw-normal pull-right mt-xs fs-6'>
          ${tasks.value.length}
        </span>
      </h4>
      <p class='text-primary mb-0'><small>
        ${completedCount} of ${tasks.value.length} completed
      </small></p>
    </div>`
})

function toggleTaskState(index) {
  const taskIndex = tasks.value.findIndex(({ id }) => id === index)
  if (taskIndex !== -1) {
    tasks.value[taskIndex].completed = !tasks.value[taskIndex].completed
  }
}
</script>
