<template>
  <div class="home">
    <div class="d-flex flex-direction-column h-100vh">
      <Header></Header>
      <div class="vuecore-lib">
        <div class="container full-height d-flex align-items-center">
          <div class="vuecore-lib-content">
            <h1>Vuecore Components</h1>
            <p>
              Vuecore Frontend Vue Components. Design by Core Design System. Fit
              for projects of any scale, keep visual consistency and work
              faster.
            </p>
            <div class="d-flex align-items-center">
              <button
                type="button"
                class="btn-primary m-r-15"
                @click="$router.push({ name: 'button' })"
              >
                Documents
              </button>
              <button type="button" class="btn-secondary" @click="linkGitRepo">
                <img
                  src="https://i.imgur.com/FPo6zxe.png"
                  class="m-r-5 w-24 h-24"
                  alt="github"
                />
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
          <img src="https://i.imgur.com/v2gOrFa.png" alt="experience design" />
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
          <img src="https://i.imgur.com/LGyOZ9n.png" alt="responsive design" />
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
          <img src="https://i.imgur.com/TjOPzV5.png" alt="performance" />
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
          <img src="https://i.imgur.com/IfWYNdL.png" alt="" />
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
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
  methods: {
    linkGitRepo() {
      window.open("https://github.com/phanhuyanh/vuecore");
    }
  }
};
</script>
