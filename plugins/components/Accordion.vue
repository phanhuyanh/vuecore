<template>
  <div class="vc-accordion" :style="styleAccordion">
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
  }
};
</script>
