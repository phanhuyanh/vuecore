<template>
  <div class="home">
    <div class="d-flex flex-direction-column h-100vh">
      <header>
        <div
          class="container d-flex align-items-center justify-content-between"
        >
          <div class="logo">
            <router-link to="/" class="d-flex">
              <img src="../img/logo.svg" alt="" />
            </router-link>
          </div>
          <div class="nav">
            <ul class="d-flex align-items-center">
              <li class="active">
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/">Documents</router-link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="vuecore-lib" :style="styleLogo">
        <div class="container full-height d-flex align-items-center">
          <div class="vuecore-lib-content">
            <h1>Vuecore Components</h1>
            <p>
              Vuecore Frontend Vue Components. Design by Core Design System. Fit
              for projects of any scale, keep visual consistency and work
              faster.
            </p>
            <div class="d-flex align-items-center">
              <button type="button" class="btn-primary m-r-15">
                Documents
              </button>
              <button type="button" class="btn-secondary" @click="linkGitRepo">
                <img src="../img/github.svg" class="m-r-5" alt="github" />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vuecore-section vuecore-experience-design">
      <div class="container d-flex align-items-center">
        <div class="vuecore-img-vector">
          <img src="../img/experience_design 1.png" alt="" />
        </div>
        <div class="vuecore-description">
          <h3>Experience design</h3>
          <p>
            Design by Core Design System. We make the best experience for you.
          </p>
          <button class="btn-primary">Components</button>
        </div>
      </div>
    </div>
    <div class="vuecore-section vuecore-layout-design">
      <div class="container d-flex align-items-center flex-direction-row-rv">
        <div class="vuecore-img-vector">
          <img src="../img/responsive_design 1.png" alt="" />
        </div>
        <div class="vuecore-description">
          <h3>Smart Layout, Auto Updating Symbols</h3>
          <p>
            Setup once, apply everywhere. Revisions made easy.
          </p>
          <button class="btn-primary">Layout</button>
        </div>
      </div>
    </div>
    <div class="vuecore-section vuecore-performance">
      <div class="container d-flex align-items-center">
        <div class="vuecore-img-vector">
          <img src="../img/performance 1.png" alt="" />
        </div>
        <div class="vuecore-description">
          <h3>Performance</h3>
          <p>
            We focus on improve performance. Each component is optimized.
          </p>
          <button class="btn-primary">Report performance</button>
        </div>
      </div>
    </div>
    <div class="vuecore-section vuecore-contributors">
      <div class="container d-flex align-items-center flex-direction-row-rv">
        <div class="vuecore-img-vector">
          <img src="../img/contributors_1.png" alt="" />
        </div>
        <div class="vuecore-description">
          <h3>Contributors Vuecore</h3>
          <div class="contributors">
            <div
              class="avatar"
              v-for="contributor in contributors"
              :key="contributor.url"
            >
              <a :href="contributor.url" class="d-flex" target="_blank">
                <img
                  :src="contributor.avatar"
                  alt=""
                  :title="contributor.name"
                />
                <img :src="contributor.avatar" alt="" class="img-blur" />
              </a>
            </div>
          </div>
          <button class="btn-primary">Contributors</button>
        </div>
      </div>
    </div>
    <footer class="p-t-100 p-b-30">
      <div class="container d-flex align-items-center">
        <div class="info flex-1 d-flex justify-content-evenly">
          <div class="social m-r-50">
            <h5>Social</h5>
            <ul>
              <li>
                <a href="https://github.com/phanhuyanh" target="_blank"
                  >Github</a
                >
              </li>
              <li>
                <a
                  href="https://app.codesignal.com/profile/pain"
                  target="_blank"
                  >CodeSignal</a
                >
              </li>
              <li>
                <a
                  href="https://www.facebook.com/phan.huyanh26061997"
                  target="_blank"
                  >Facebook</a
                >
              </li>
            </ul>
          </div>
          <div class="ecosystem">
            <h5>Ecosystem</h5>
            <ul>
              <li>
                <a href="https://npmjs.com/choxy" target="_blank">Choxy</a>
              </li>
              <li>
                <a href="https://npmjs.com/paraxy" target="_blank" chair
                  >paraxy</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-img-vector">
          <img src="../img/footer.png" alt="" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import heroImg from "../img/Core-Design-System-Hero-Image-Static.png";

export default {
  data: () => {
    return {
      contributors: [
        {
          avatar: "https://avatars.githubusercontent.com/u/39040517?s=400&v=4",
          url: "https://github.com/phanhuyanh",
          name: "phanhuyanh"
        }
      ]
    };
  },
  computed: {
    styleLogo() {
      return {
        backgroundImage: `url(${heroImg})`
      };
    }
  },
  methods: {
    linkGitRepo() {
      window.open("https://github.com/phanhuyanh/vuecore");
    }
  }
};
</script>
