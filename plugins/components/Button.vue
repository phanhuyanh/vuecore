<template>
  <button
    type="button"
    :disabled="disabled"
    class="vc-button"
    :class="className"
    :style="style"
  >
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
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    textColor: String,
    router: String,
    href: String,
    blank: {
      type: Boolean,
      default: false
    },
    linePosition: {
      type: String,
      default: "bottom"
    }
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
  }
};
</script>
