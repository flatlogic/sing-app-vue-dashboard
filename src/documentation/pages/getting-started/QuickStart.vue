<template>
  <b-row>
    <b-col lg="9" xs="12">
      <Widget>
        <h5>Requirements:</h5>
        <ol>
          <li>1. Mac OS X, Windows, or Linux</li>
          <li>2. Yarn package + Node.js v6.5 or newer</li>
          <li>3. Running our <a href="https://github.com/flatlogic/nodejs-backend" rel="noopener noreferrer"
                                target="_blank">Node.js backend</a>
            <span class="small text-muted"> (Required only in full stack version)</span></li>
        </ol>
        <h5>Quick Start:</h5>
        <ol>
          <li>1. Run <code>yarn install</code></li>
          <li>2. Run <code>yarn start</code></li>
          <li>2.1 For running the app with backend support please run <code>yarn start:backend</code>
            <span class="small text-muted"> (Required only in full stack version)</span>
          </li>
        </ol>
        <h5>There are also other npm tasks:</h5>
        <ul>
          <li><code>yarn build</code>: if you need just to build the app (without running a dev server)</li>
          <li><code>yarn lint</code>: to check the source code for syntax errors and potential issues</li>
        </ul>
      </Widget>
      <p>For more instruction please refer to Sing App Vue readme.md.</p>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    name: 'DocQuickStart'
  }
</script>
