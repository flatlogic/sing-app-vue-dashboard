<template>
  <Widget>
    <div class="compose">
      <h4 class="mb-lg">
        Compose <span class="fw-semi-bold">New</span>
      </h4>
      <input
        class="form-control mb"
        type="text"
        placeholder="To"
        :value="data?.from || ''"
      >
      <input
        class="form-control mb"
        type="text"
        placeholder="Subject"
        :value="data?.theme || ''"
      >
      <div class="editor-wrapper mb">
        <div
          v-if="editor"
          class="editor-toolbar"
        >
          <button
            type="button"
            class="btn btn-sm btn-light"
            :class="{ 'active': editor.isActive('bold') }"
            @click="editor.chain().focus().toggleBold().run()"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            class="btn btn-sm btn-light"
            :class="{ 'active': editor.isActive('italic') }"
            @click="editor.chain().focus().toggleItalic().run()"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            class="btn btn-sm btn-light"
            :class="{ 'active': editor.isActive('strike') }"
            @click="editor.chain().focus().toggleStrike().run()"
          >
            <s>S</s>
          </button>
          <button
            type="button"
            class="btn btn-sm btn-light"
            :class="{ 'active': editor.isActive('bulletList') }"
            @click="editor.chain().focus().toggleBulletList().run()"
          >
            <i class="fa fa-list-ul" />
          </button>
          <button
            type="button"
            class="btn btn-sm btn-light"
            :class="{ 'active': editor.isActive('orderedList') }"
            @click="editor.chain().focus().toggleOrderedList().run()"
          >
            <i class="fa fa-list-ol" />
          </button>
        </div>
        <EditorContent
          :editor="editor"
          class="editor-content"
        />
      </div>
      <div class="text-md-end mt">
        <button class="btn btn-gray ms-sm-1">
          Discard
        </button>
        <button class="btn btn-gray ms-sm-1">
          Save
        </button>
        <button class="btn btn-danger ms-sm-1">
          Send
        </button>
      </div>
    </div>
  </Widget>
</template>

<script setup>
import { onBeforeUnmount } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

defineProps({
  data: Object
})

const editor = useEditor({
  content: '',
  extensions: [
    StarterKit
  ]
})

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy()
  }
})
</script>

<style lang="scss" scoped>
.editor-wrapper {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;

  .editor-toolbar {
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    background: #f8f9fa;

    .btn {
      min-width: 32px;
      margin-right: 0.25rem;

      &.active {
        background: #dee2e6;
      }
    }
  }

  .editor-content {
    padding: 1rem;
    min-height: 200px;

    :deep(.ProseMirror) {
      outline: none;
      min-height: 180px;
    }
  }
}
</style>
