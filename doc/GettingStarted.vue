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
      <pre class="pre-i pre-show" style="padding-bottom: 0;">
        <span>npm i vuecore</span>
        <br>
        <span>yarn add vuecore</span>
        <span class="copy-clipboard" title="copy" @click="copyClipboard('npm i vuecore')">
          <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.19444 1.94434H2.91667C2.80616 1.94434 2.70018 1.98823 2.62204 2.06637C2.5439 2.14451 2.5 2.2505 2.5 2.361V9.02767C2.5 9.13818 2.5439 9.24416 2.62204 9.3223C2.70018 9.40044 2.80616 9.44434 2.91667 9.44434H8.19444C8.30495 9.44434 8.41093 9.40044 8.48907 9.3223C8.56721 9.24416 8.61111 9.13818 8.61111 9.02767V2.361C8.61111 2.2505 8.56721 2.14451 8.48907 2.06637C8.41093 1.98823 8.30495 1.94434 8.19444 1.94434V1.94434ZM8.05556 8.88878H3.05556V2.49989H8.05556V8.88878Z" fill="#3E7BFA"/>
            <path d="M7.2222 0.972331C7.2222 0.861824 7.1783 0.755843 7.10016 0.677703C7.02202 0.599563 6.91604 0.555664 6.80553 0.555664H1.52775C1.41724 0.555664 1.31126 0.599563 1.23312 0.677703C1.15498 0.755843 1.11108 0.861824 1.11108 0.972331V7.639C1.11108 7.7495 1.15498 7.85549 1.23312 7.93363C1.31126 8.01177 1.41724 8.05566 1.52775 8.05566H1.66664V1.11122H7.2222V0.972331Z" fill="#3E7BFA"/>
          </svg>
        </span>
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
