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
        <vc-button color="warning" type="line">Warning</vc-button>
        <vc-button color="dark" type="line">Dark</vc-button>
        <vc-button color="info" type="line">Info</vc-button>
        <vc-button disabled type="line">Disable</vc-button>
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
