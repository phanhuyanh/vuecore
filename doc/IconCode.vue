<template>
  <div class="icon-code">
    <span
      v-if="show"
      @click="() => $emit('update:show', false)"
      class="d-flex w-max-content mar-l-auto vc-light-elevation-1 pad-x-2"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.37498 16.781L8.62498 15.219L4.60098 12L8.62498 8.78099L7.37498 7.21899L2.37498 11.219C2.25783 11.3127 2.16325 11.4315 2.09825 11.5667C2.03326 11.7019 1.99951 11.85 1.99951 12C1.99951 12.15 2.03326 12.2981 2.09825 12.4333C2.16325 12.5685 2.25783 12.6873 2.37498 12.781L7.37498 16.781ZM16.625 7.21899L15.375 8.78099L19.399 12L15.375 15.219L16.625 16.781L21.625 12.781C21.7421 12.6873 21.8367 12.5685 21.9017 12.4333C21.9667 12.2981 22.0005 12.15 22.0005 12C22.0005 11.85 21.9667 11.7019 21.9017 11.5667C21.8367 11.4315 21.7421 11.3127 21.625 11.219L16.625 7.21899Z"
          fill="#555770"
        />
        <path
          d="M14.9759 3.21598L10.9759 21.216L9.02295 20.782L13.0229 2.78198L14.9759 3.21598Z"
          fill="#555770"
        />
      </svg>
    </span>
    <span
      v-else
      @click="() => $emit('update:show', true)"
      class="d-flex w-max-content mar-l-auto vc-light-elevation-1 pad-x-2"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.29306 6.29297L2.58606 12L8.29306 17.707L9.70706 16.293L5.41406 12L9.70706 7.70697L8.29306 6.29297ZM15.7071 17.707L21.4141 12L15.7071 6.29297L14.2931 7.70697L18.5861 12L14.2931 16.293L15.7071 17.707Z"
          fill="#555770"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
};
</script>
