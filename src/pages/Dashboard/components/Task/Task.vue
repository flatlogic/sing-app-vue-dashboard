<template>
  <div :class="{ 'd-flex align-items-start': true, completed: completed }">
    <div class="abc-checkbox abc-checkbox-success d-flex">
      <input
        :id="`checkbox${task.id}`"
        type="checkbox"
        :checked="completed"
        @click="toggle(task.id)"
      >
      <label :for="`checkbox${task.id}`" />
    </div>
    <div class="task-content ps-2">
      <p class="text-muted mb-xs">
        <small>{{ task.type }}</small>
      </p>
      <h6>{{ task.title }}</h6>
      <p class="text-muted">
        <small>{{ task.time }}</small>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: { type: Object, required: true },
  toggle: { type: Function, required: true },
  completed: { type: Boolean, default: false }
})
</script>

<style src="./Task.scss" lang="scss" scoped />
