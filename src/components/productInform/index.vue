<template>
  <header>
    <banner />
  </header>

  <section class="container">
    <nav>
      <breadcrumbs />
    </nav>

    <attributes />

    <specification />

    <contactUs />
  </section>

  <footer>
    <Footer />
  </footer>
</template>

<script>
import banner from 'src/components/productInform/banner'
import breadcrumbs from './breadcrumbs'
import attributes from './attributes'
// import specification from './specification/specification.vue'
import specification from './specification/index.vue'
import contactUs from 'src/components/contactUs'
import Footer from 'src/components/footer'
export default {
  components: {
    banner,
    breadcrumbs,
    attributes,
    specification,
    contactUs,
    Footer
  },
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 80%;
    margin: auto;
  }
</style>