<template>
  <section>
    <standout class="segment" />

    <div class="boxWrap segment">
      <properties />
      <appliedFields />
    </div>
  </section>
</template>

<script>
import standout from './standout.vue'
import properties from './properties.vue'
import appliedFields from './appliedFields.vue'
export default {
  components: {
    standout,
    properties,
    appliedFields
  },
  setup() {
    
  }
}
</script>

<style lang="scss">
  .segment {
    padding-bottom: 5%;
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .segment {
      padding-bottom: 2.5%;
    }
  }

  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .boxWrap {
      display: flex;
      justify-content: space-between;
    }
  }

  h2 {
    margin: 0;
    font-size: 1.7em;
    color: $major-font-color;
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    h2 {
      font-size: 2em;
    }
  }

  li {
    list-style: square;
    color: $major-font-color;
    font-size: 1.3em;
  }
  li p {
    color: $text-color;
    font-size: 0.8em;
  }
</style>