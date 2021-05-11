<template>
  <div class="documents h-100vh d-flex flex-direction-column">
    <header class="d-flex align-items-center justify-content-between pad-x-15">
      <div class="logo">
        <router-link to="/" class="d-flex">
          <img src="https://i.imgur.com/AacG6L7.png" alt="vuecore" />
        </router-link>
      </div>
      <div class="nav">
        <ul class="d-flex align-items-center">
          <li class="active">
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/docs">Documents</router-link>
          </li>
        </ul>
      </div>
    </header>
    <main class="d-flex flex-1">
      <!-- SideBar -->
      <SideBar></SideBar>
      <div class="main-layout">
        <div class="content">
          <router-view></router-view>
          <div class="sidebar-map"></div>
        </div>
        <footer class="p-t-100 p-b-30 d-flex align-items-center">
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
            <img src="https://i.imgur.com/wYRhhGe.png" alt="" />
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SideBar from "./SideBar.vue";

export default {
  components: {
    Header,
    Footer,
    SideBar
  }
};
</script>
