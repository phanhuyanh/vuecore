<template>
  <div id="app">
    <div class="row">
      <label>Filled</label>
      <div class="buttons filled">
        <vc-button>Primary</vc-button>
        <vc-button color="success">Success</vc-button>
        <vc-button color="danger">Danger</vc-button>
        <vc-button color="warning">Warning</vc-button>
        <vc-button color="dark">Dark</vc-button>
        <vc-button color="info">Info</vc-button>
        <vc-button disabled>Disabled</vc-button>
      </div>
    </div>
    <div class="row">
      <label for="">Outline</label>
      <div class="buttons outline">
        <vc-button color="primary" type="outline">Primary</vc-button>
        <vc-button color="success" type="outline">Success</vc-button>
        <vc-button color="danger" type="outline">Danger</vc-button>
        <vc-button color="warning" type="outline">Warning</vc-button>
        <vc-button color="dark" type="outline">Dark</vc-button>
        <vc-button color="info" type="outline">Info</vc-button>
        <vc-button disabled type="outline">Disable</vc-button>
      </div>
    </div>
    <div class="row">
      <label>Line</label>
      <div class="buttons line">
        <vc-button color="primary" type="line">Primary</vc-button>
        <vc-button color="success" type="line" line-position="top"
          >Success</vc-button
        >
        <vc-button color="danger" type="line">Danger</vc-button>
        <vc-button color="warning" type="line" line-position="top"
          >Warning</vc-button
        >
        <vc-button color="dark" type="line">Dark</vc-button>
        <vc-button color="info" type="line">Info</vc-button>
        <vc-button disabled type="line">Disable</vc-button>
      </div>
    </div>
    <div class="row">
      <label>Others</label>
      <div class="buttons">
        <vc-button href="https://facebook.com" blank>Href</vc-button>
        <vc-button size="large">Large</vc-button>
        <vc-button size="medium">Medium</vc-button>
        <vc-button size="small">Small</vc-button>
        <vc-button loading>Loading</vc-button>
        <vc-button loading size="large">Loading</vc-button>
        <vc-button loading size="small">Loading</vc-button>
        <vc-button href="https://vuecore.vercel.app">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </vc-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
#app
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  flex-direction: column

.buttons
  display: flex
  align-items: center
  justify-content: space-between

.row
  margin-left: auto
  margin-right: auto
  margin-top: 50px
  width: 80%

label
  font-weight: bold
  font-size: 32px
  line-height: 48px
  margin-bottom: 10px
</style>
