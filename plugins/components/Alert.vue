<template>
  <div class="vc-alert" :class="classAlert" v-show="show">
    <div
      class="vc-alert-head"
      :style="{ 'margin-bottom': $slots.default ? '10px' : '' }"
    >
      <div class="vc-alert-title" v-if="title">{{ title }}</div>
      <slot name="title" v-else>
        <h5>Some text is displayed here</h5>
      </slot>
      <slot name="icon"></slot>
      <div class="vc-alert-close" v-if="!showIcon" @click="close">
        <span aria-hidden="true">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17613 6.00038L10.7596 2.42475C10.9165 2.26781 11.0047 2.05494 11.0047 1.83298C11.0047 1.61103 10.9165 1.39816 10.7596 1.24121C10.6027 1.08427 10.3898 0.996094 10.1679 0.996094C9.94597 0.996094 9.73314 1.08427 9.57621 1.24121L6.00109 4.82518L2.42597 1.24121C2.26905 1.08427 2.05621 0.996094 1.83429 0.996094C1.61236 0.996094 1.39953 1.08427 1.2426 1.24121C1.08568 1.39816 0.997516 1.61103 0.997516 1.83298C0.997516 2.05494 1.08568 2.26781 1.2426 2.42475L4.82605 6.00038L1.2426 9.57601C1.16449 9.65349 1.10249 9.74568 1.06019 9.84724C1.01788 9.94881 0.996094 10.0578 0.996094 10.1678C0.996094 10.2778 1.01788 10.3868 1.06019 10.4883C1.10249 10.5899 1.16449 10.6821 1.2426 10.7596C1.32007 10.8377 1.41224 10.8997 1.5138 10.942C1.61535 10.9843 1.72427 11.0061 1.83429 11.0061C1.9443 11.0061 2.05323 10.9843 2.15478 10.942C2.25633 10.8997 2.3485 10.8377 2.42597 10.7596L6.00109 7.17559L9.57621 10.7596C9.65369 10.8377 9.74586 10.8997 9.84741 10.942C9.94896 10.9843 10.0579 11.0061 10.1679 11.0061C10.2779 11.0061 10.3868 10.9843 10.4884 10.942C10.5899 10.8997 10.6821 10.8377 10.7596 10.7596C10.8377 10.6821 10.8997 10.5899 10.942 10.4883C10.9843 10.3868 11.0061 10.2778 11.0061 10.1678C11.0061 10.0578 10.9843 9.94881 10.942 9.84724C10.8997 9.74568 10.8377 9.65349 10.7596 9.57601L7.17613 6.00038Z"
              fill="#555770"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="vc-alert-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "active",
    event: "change"
  },
  props: {
    type: {
      type: String,
      default: "info",
      validator: value =>
        ["info", "success", "error", "warning"].includes(value)
    },
    title: String,
    showIcon: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    show: true
  }),
  computed: {
    classAlert() {
      return [`vc-alert-${this.type}`];
    }
  },
  watch: {
    active: {
      handler(val) {
        this.show = val;
      },
      immediate: true
    }
  },
  methods: {
    close() {
      this.show = !this.show;
      this.$emit("change", this.show);
    }
  }
};
</script>
