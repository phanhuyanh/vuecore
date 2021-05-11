<template>
  <button
    type="button"
    :disabled="disabled"
    class="vc-button"
    :class="className"
    :style="style"
  >
    <span
      v-if="loading"
      class="loading"
      :class="[`loading-size-${this.size}`, $slots.default ? 'm-r-5' : '']"
    ></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: "primary"
    },
    type: {
      type: String,
      default: "filled"
    },
    disabled: Boolean,
    icon: String,
    textColor: String,
    router: String | Object,
    href: String,
    blank: {
      type: Boolean,
      default: false
    },
    linePosition: {
      type: String,
      default: "bottom"
    },
    bubble: {
      type: Boolean,
      default: true
    },
    loading: Boolean
  },
  computed: {
    className() {
      return [
        `vc-label-text-${this.size}`,
        `vc-button-${this.color}`,
        `vc-button-${this.type}`,
        `line-position-${this.linePosition}`
      ];
    },
    style() {
      return {
        color: this.textColor
      };
    }
  },
  mounted() {
    this.$el.addEventListener("click", this.click);
  },
  methods: {
    click(e) {
      if (!this.bubble) e.stopPropagation();
      if (this.href) {
        return window.open(this.href, this.blank ? "" : "_self");
      }
      if (this.router && this.$router) {
        this.$router.push(this.router);
      }
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener("click", this.click);
  }
};
</script>
