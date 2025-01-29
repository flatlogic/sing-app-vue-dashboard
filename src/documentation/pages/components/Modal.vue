<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Modal</h2>
      <p class="mb-4">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user
        notifications, or completely custom content.</p>
      <vue-code-highlight>import { BModal } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <b-button size="lg" variant="primary" @click="showDefault = true">Default modal</b-button>
          <b-modal id="modal-default" title="Modal Title" v-model="showDefault" body-bg-variant="white">
            ...
            <template v-slot:modal-footer>
              <b-button variant="secondary" @click="showDefault = false">Close</b-button>
              <b-button variant="primary">Save changes</b-button>
            </template>
          </b-modal>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-modal id=&quot;modal-default&quot; title=&quot;Modal Title&quot; v-model=&quot;showDefault&quot; body-bg-variant=&quot;white&quot;&gt;
  ...
  &lt;template v-slot:modal-footer&gt;
    &lt;b-button variant=&quot;secondary&quot; @click=&quot;showDefault = false&quot;&gt;Close&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Save changes&lt;/b-button&gt;
  &lt;/template&gt;
&lt;/b-modal&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent">
        <b-tab title="Example" active>
          <h3>Variations</h3>
          <b-button class="me-3" @click="showLong = true" size="lg" variant="danger">Long modal</b-button>
          <b-button @click="showLarge = true" size="lg" variant="success">Large modal</b-button>

          <b-modal id="modal-long" title="Long content" v-model="showLong" body-bg-variant="white">
            <span v-html="longText"></span>
            <template v-slot:modal-footer>
              <b-button variant="secondary" @click="showLong = false">Close</b-button>
              <b-button variant="primary">Save changes</b-button>
            </template>
          </b-modal>
          <b-modal size="lg" id="modal-large" title="Large modal" v-model="showLarge" body-bg-variant="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
            Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
            cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
            <template v-slot:modal-footer>
              <b-button variant="secondary" @click="showLarge = false">Close</b-button>
              <b-button variant="primary">Save changes</b-button>
            </template>
          </b-modal>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-modal id=&quot;modal-long&quot; title=&quot;Long Content&quot; v-model=&quot;showLong&quot; body-bg-variant=&quot;white&quot;&gt;
  { { longContent } }
  &lt;template v-slot:modal-footer&gt;
    &lt;b-button variant=&quot;secondary&quot; @click=&quot;showLong = false&quot;&gt;Close&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Save changes&lt;/b-button&gt;
  &lt;/template&gt;
&lt;/b-modal&gt;

&lt;b-modal size=&quot;lg&quot; id=&quot;modal-large&quot; title=&quot;Large modal&quot; v-model=&quot;showLarge&quot; body-bg-variant=&quot;white&quot;&gt;
  { { content } }
  &lt;template v-slot:modal-footer&gt;
    &lt;b-button variant=&quot;secondary&quot; @click=&quot;showLarge = false&quot;&gt;Close&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Save changes&lt;/b-button&gt;
  &lt;/template&gt;
&lt;/b-modal&gt;
          </vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/modal/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Modal</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocCards',
    data() {
      return {
        showDefault: false,
        showLong: false,
        showLarge: false,
        longText: '<p>\n' +
          ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
          ' Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,\n' +
          ' when an unknown printer took a galley of type and scrambled it to make a type\n' +
          ' specimen book. It has survived not only five centuries, but also the leap\n' +
          ' into electronic typesetting, remaining essentially unchanged. It was popularised\n' +
          ' in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
          ' and more recently with desktop publishing software like Aldus PageMaker including\n' +
          ' versions of Lorem Ipsum.\n' +
          '</p>\n' +
          '<p>\n' +
          ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
          ' Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,\n' +
          ' when an unknown printer took a galley of type and scrambled it to make a type\n' +
          ' specimen book. It has survived not only five centuries, but also the leap\n' +
          ' into electronic typesetting, remaining essentially unchanged. It was popularised\n' +
          ' in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
          ' and more recently with desktop publishing software like Aldus PageMaker including\n' +
          ' versions of Lorem Ipsum.\n' +
          '</p>\n' +
          '<p>\n' +
          ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
          ' Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,\n' +
          ' when an unknown printer took a galley of type and scrambled it to make a type\n' +
          ' specimen book. It has survived not only five centuries, but also the leap\n' +
          ' into electronic typesetting, remaining essentially unchanged. It was popularised\n' +
          ' in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
          ' and more recently with desktop publishing software like Aldus PageMaker including\n' +
          ' versions of Lorem Ipsum.\n' +
          '</p>\n' +
          '<p>\n' +
          ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
          ' Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,\n' +
          ' when an unknown printer took a galley of type and scrambled it to make a type\n' +
          ' specimen book. It has survived not only five centuries, but also the leap\n' +
          ' into electronic typesetting, remaining essentially unchanged. It was popularised\n' +
          ' in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
          ' and more recently with desktop publishing software like Aldus PageMaker including\n' +
          ' versions of Lorem Ipsum.\n' +
          '</p>\n' +
          '<p>\n' +
          ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
          ' Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,\n' +
          ' when an unknown printer took a galley of type and scrambled it to make a type\n' +
          ' specimen book. It has survived not only five centuries, but also the leap\n' +
          ' into electronic typesetting, remaining essentially unchanged. It was popularised\n' +
          ' in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
          ' and more recently with desktop publishing software like Aldus PageMaker including\n' +
          ' versions of Lorem Ipsum.\n' +
          '</p>'
      }
    }
  }
</script>
