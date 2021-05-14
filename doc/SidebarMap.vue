<template>
  <div class="sidebar-map">
    <div class="list-title">
      <div class="bar-map" v-if="list.length">
        <div class="thumb" ref="thumb"></div>
      </div>
      <ul>
        <li
          v-for="(item, i) in list"
          :key="item"
          @click="e => scrollIntoView(e, item, i)"
        >
          <a :href="'#' + item" :class="{ active: active === item }">{{
            item
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { debounce } from "./common.js";

export default {
  data: () => {
    return {
      list: [],
      active: "",
      main: null,
      isScroll: false
    };
  },
  mounted() {
    this.$watch("$route", (to, from) => {
      if (to.path === from.path) return;
      this.init();
    });

    this.init();
    this.main = document.querySelector(".main-layout");
    if (!this.main) return;

    let deb = debounce(this.handleScroll, 50);
    this.main.addEventListener("scroll", deb);
    this.$once("hook:beforeDestroy", _ => {
      this.main.removeEventListener("scroll", deb);
    });
  },
  methods: {
    init() {
      let doc = document.querySelector(".doc");
      if (!doc) return (this.list = []);

      let list = doc.querySelectorAll("[id]");
      this.list = Array.from(list).map(title => title.id);
    },
    scrollIntoView(e, id, idx) {
      this.isScroll = true;
      let dom = document.getElementById(id);
      if (!dom) return;

      let { top } = dom.getBoundingClientRect();
      let heightHeader = 43;
      this.main.scrollTop = top + this.main.scrollTop - heightHeader;

      let target = e.target;
      let height = target.offsetHeight;
      let scroll = height * idx + height / 2;
      let thumb = this.$refs["thumb"];
      let heightThumb = thumb.offsetHeight;
      thumb.style.transform = `translateY(${scroll - heightThumb}px)`;
      this.active = id;
      setTimeout(() => (this.isScroll = false), 100);
    },
    handleScroll() {
      if (this.isScroll) return;
      let heightHeader = 43;
      let idx = -1;

      for (let i in this.list) {
        let id = this.list[i];
        let dom = document.getElementById(id);
        let parent = dom.parentElement;
        if (parent.getBoundingClientRect().bottom - heightHeader > 0) {
          idx = i;
          this.active = id;
          break;
        }
      }
      if (idx < 0) return;
      let item = this.$el.querySelector("li");
      let height = item.offsetHeight;
      let translate = height * idx + height / 2;
      let thumb = this.$refs["thumb"];
      let heightThumb = thumb.offsetHeight;
      thumb.style.transform = `translateY(${translate - heightThumb}px)`;
    }
  }
};
</script>
