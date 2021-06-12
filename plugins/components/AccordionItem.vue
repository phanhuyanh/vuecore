<template>
  <div
    class="accordion-item"
    :style="styleAccordionItem"
    :class="{ active: show }"
  >
    <div class="accordion-item-head" @click="show = !show">
      <div class="accordion-item-title" v-if="title">{{ title }}</div>
      <slot name="title" v-else class="accordion-item-title">
        <div class="accordion-item-title">Accordion Item</div>
      </slot>
      <div
        class="accordion-item-icon"
        v-if="!closable"
        :class="{ active: show }"
      >
        <span aria-hidden="true">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0L11.25 5.25L10.2 6.3L6 2.1L1.8 6.3L0.75 5.25L6 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="accordion-item-body" :class="{ show, animate }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    title: String,
    styleAccordionItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    animate() {
      return this?.$parent?.animate;
    }
  }
};
</script>
