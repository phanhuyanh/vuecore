<template>
  <div class="accordion" :style="styleAccordion">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "accordion",
  props: {
    styleAccordion: {
      type: Object,
      default: () => {}
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    console.log(this.$slots, "slots");
  }
};
</script>
