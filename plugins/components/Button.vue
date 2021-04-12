<template>
  <button class="vc-button" :class="className" :style="style">
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
    linePosition: String
  },
  computed: {
    className() {
      return [`vc-label-text-${this.size}`, `vc-button-${this.color}`];
    },
    style() {
      return {
        color: this.textColor
      };
    }
  }
};
</script>

<style lang="sass">
@import '../../sass/_variables/_colors'

.vc-button
  display: block
  white-space: nowrap
  text-align: center
  vertical-align: middle
  user-select: none
  border-radius: 4px
  padding: 5px 12px
  cursor: pointer
  border: 1px solid transparent
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
  outline: 0

.vc-button-primary
  background-color: $main-color
  color: #fff
</style>
