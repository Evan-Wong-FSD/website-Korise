<template>
 <!-- v-if="`/product_inform/${$route.params.language}/${$route.params.productSelected}`" -->
  <!-- <div> -->
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
  <!-- </div> -->
</template>

<script>
import banner from 'src/components/productInform/banner'
import breadcrumbs from 'src/components/productInform/breadcrumbs'
import attributes from 'src/components/productInform/attributes'
import specification from 'src/components/productInform/specification'
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
