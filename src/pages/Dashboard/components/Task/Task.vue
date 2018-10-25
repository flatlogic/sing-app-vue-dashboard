<template>
  <div :class="{ 'd-flex align-items-start': true, completed: completed }">
    <div class="abc-checkbox abc-checkbox-success d-flex">
      <input
        type="checkbox"
        :id="`checkbox${task.id}`"
        @click="toggle(task.id)"
        :checked="completed"
      />
      <label :for="`checkbox${task.id}`" />
    </div>
    <div class="task-content pl-2">
      <p class="text-muted mb-xs"><small>{{task.type}}</small></p>
      <h6>{{task.title}}</h6>
      <p class="text-muted"><small>{{task.time}}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task', 'toggle', 'completed'],
};
</script>

<style src="./Task.scss" lang="scss" scoped />
