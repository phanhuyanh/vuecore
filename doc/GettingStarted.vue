<template>
  <div class="getting-started doc">
    <div class="doc-item">
      <h2>Getting Started</h2>
      <p>
        Vuecore require you had installed
        <a href="https://nodejs.org">Nodejs</a> (version > 5.2+). Before use
        Vuecore you need knowledge base of
        <a href="https://vuejs.org">Vue</a> and
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >Javascript</a
        >.
      </p>
      <div class="vuecore-requirement">
        <div class="flag-npm flag-requirement">
          <img src="https://i.imgur.com/wuWUmCE.png" />
        </div>
        <div class="flag-vue flag-requirement">
          <img src="https://i.imgur.com/ApTuc8O.png" />
        </div>
        <div class="flag-dependency-count flag-requirement">
          <img src="https://i.imgur.com/axcCF9L.png" />
        </div>
        <div class="flag-build-passing flag-requirement">
          <img src="https://i.imgur.com/HvXQSqz.png" alt="" />
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="installation">Installation</h2>
      <p>
        I can use <a href="https://nodejs.org/en/">npm</a> or
        <a href="https://classic.yarnpkg.com/en/docs/install/">yarn</a>.
      </p>
      <pre class="pre-i pre-show">
        <span>npm i vuecore</span>
        <br>
        <span>yarn add vuecore</span>
      </pre>
    </div>
    <div class="doc-item">
      <h2 id="usage">Usage</h2>
      <p>Usage all component of vuecore.</p>
      <pre class="pre-i pre-show">
        <span class="pl-k">import</span>
        <span class="pl-v">&nbsp;Vue</span>
        <span class="pl-k">&nbsp;from</span>
        <span class="pl-s">&nbsp;'vue'</span>
        <br>
        <span class="pl-k">import</span>
        <span class="pl-v">&nbsp;Vuecore</span>
        <span class="pl-k">&nbsp;from</span>
        <span class="pl-s">&nbsp;'vuecore'</span>
        <br>
        <span class="pl-k">import</span>
        <span class="pl-s">&nbsp;'vuecore/dist/main.css'</span>
        <br>
        <span class="pl-v">Vue</span>
        <span>.</span>
        <span class="pl-e">use</span>
        <span>(</span>
        <span class="pl-v">Vuecore</span>
        <span>)</span>
      </pre>
      <p>Only import the components you need.</p>
      <pre class="pre-i pre-show">
        <span class="pl-k">import</span>
        <span class="pl-v">&nbsp;Vue</span>
        <span class="pl-k">&nbsp;from</span>
        <span class="pl-s">&nbsp;'vue'</span>
        <br>
        <span class="pl-k">import</span>
        <span>&nbsp;{&nbsp;</span>
        <span class="pl-v">Button</span>
        <span>,</span>
        <span class="pl-v">&nbsp;Alert</span>
        <span>&nbsp;}</span>
        <span class="pl-k">&nbsp;from</span>
        <span class="pl-s">&nbsp;'vuecore'</span>
        <br>
        <span class="pl-k">import</span>
        <span class="pl-s">&nbsp;'vuecore/dist/main.css'</span>
        <br>
        <span class="pl-v">Vue</span>
        <span>.</span>
        <span class="pl-e">use</span>
        <span>(</span>
        <span class="pl-v">Button</span>
        <span>)</span>
        <br>
        <span class="pl-v">Vue</span>
        <span>.</span>
        <span class="pl-e">use</span>
        <span>(</span>
        <span class="pl-v">Alert</span>
        <span>)</span>
      </pre>
    </div>
    <div class="doc-item">
      <h2 id="customize">Customize</h2>
      <ul>
        <li>
          <router-link :to="{ name: 'theme-colors' }">Colors</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'theme-typography' }"
            >Typography</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'theme-elevation' }">Elevation</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'theme-icons' }">Icons</router-link>
        </li>
      </ul>
    </div>
    <div class="doc-item">
      <h2 id="layout">Layout</h2>
      <ul>
        <li>
          <router-link :to="{ name: 'grid' }">Grid</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { copyClipboard } from "./common.js";

export default {
  methods: {
    copyClipboard(text) {
      copyClipboard(text);
    }
  }
};
</script>
