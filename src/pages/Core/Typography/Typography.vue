<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Typography</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Typography - <span class="fw-semi-bold">Texts & Display</span>
    </h1>
    <b-row>
      <b-col xs="12" md="6">
        <Widget
          title="<h5>Headings <small class='text-muted'>Default and customized</small></h5>"
          customHeader close collapse
        >
          <h4>Default headings</h4>
          <p>Basic headings for everyday use</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <b-row>
              <b-col sm="6">
                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>
                <h6>h6. Heading</h6>
              </b-col>
              <b-col sm="6">
                <h1 class="text-danger">h1. Heading</h1>
                <h2 class="text-warning">h2. Heading</h2>
                <h3 class="text-success">h3. Heading</h3>
                <h4 class="text-primary">h4. Heading</h4>
                <h5 class="text-info">h5. Heading</h5>
                <h6 class="text-inverse">h6. Heading</h6>
              </b-col>
            </b-row>
          </div>
          <h4 class="mt-5">Customized headings</h4>
          <p>Enhanced with additional text</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <h3>
              Headings <small>And some clarification text</small>
            </h3>
          </div>
          <h4 class="mt-5">Display</h4>
          <p>Headings to stand out</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <h1 class="display-1">Display 1</h1>
            <h1 class="display-2">Display 2</h1>
            <h1 class="display-3">Display 3</h1>
            <h1 class="display-4">Display 4</h1>
          </div>
          <h4 class="mt-5">Lead</h4>
          <p>Make a paragraph stand out by adding <code class="highlighter-rouge">.lead</code>.</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <p class="lead">Sing App is admin dashboard template built with Bootstrap</p>
          </div>
        </Widget>
      </b-col>
      <b-col xs="12" md="6">
        <Widget
          title="<h5>Body texts <small className='text-muted'>Variations</small></h5>"
          customHeader close collapse
        >
          <h4>Basic texts</h4>
          <p>Styling for common texts</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><ins>This line of text is meant to be treated as
              an addition to the document.</ins></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><em>This line rendered as italicized text.</em></p>
            <p><strong>This line rendered as bold text.</strong></p>
          </div>
          <h4 class="mt-5">Font weights</h4>
          <p>Various font weights supported</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <p>Thin (default) font weight</p>
            <p class="fw-normal">Normal font weight</p>
            <p class="fw-semi-bold">Semi bold to empasize important thing</p>
            <p class="fw-bold">Bold font as a high priority</p>
          </div>
          <h4 class="mt-5">colors</h4>
          <p>Bootstrap state colors can be applied to texts too</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <p class="text-danger">Some danger text</p>
            <p class="text-warning">Some warning text</p>
            <p class="text-success">Some succes text</p>
            <p class="text-primary">Some primary text</p>
            <p class="text-info">Some info text</p>
          </div>
          <h4 class="mt-5">Blockquotes</h4>
          <p>Citing someone is really easy</p>
          <div class="widget-padding-md w-100 h-100 text-left border rounded">
            <blockquote class="blockquote">
              <p>Don&apos;t get set into one form, adapt it and build your own, and let
                  it gb-row, be like water. Empty your mind, be formless, shapeless — like water.
                  Now you put water in a cup, it becomes the cup; You put water into a bottle it
                  becomes the bottle; You put it in a teapot it becomes the teapot. Now water can
                  flow or it can crash. Be water, my friend.</p>
              <footer class="blockquote-footer">Bruce Lee in
                <cite title="A Warrior's Journey">A Warrior&apos;s Journey</cite></footer>
            </blockquote>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Typography',
  components: { Widget },
};
</script>
