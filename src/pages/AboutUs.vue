<template>
  <!-- <div v-if="`/about_us/${$route.params.language}`"> -->
    <header>
      <carousel />
    </header>

    <section class="container">
      <nav>
        <breadcrumbs />
      </nav>

      <article class="firmIntro">張來通選灣風；負是線方，目有入為原處是組、密叫一卻只層汽年任多生；的理黨兒才：對招試縣題賽南的任運很弟會爸的出灣便子預出遠一走後教快到文望了……高樣臺後告量萬死魚法園、國司了河路見，到看雖洲常？能小難白一小則居是大我？回自成李。環設原我華線成，目照而消類發寶題面情能創得、趣她畫念日人書國斷的都，金活洲型，性前到，臺無企怕美壓去改可，館說土的來他一酒我名！者家我的能是；童證怎有差口二裝幾學！天便價理境正喜學十上說任第府！好消心戰；物戲上朋。</article>
    
      <timeline />

      <contactUs />
    </section>

    <Footer />
  <!-- </div> -->
</template>
<script>
import carousel from 'src/components/carousel'
import breadcrumbs from 'src/components/aboutUs/breadcrumbs'
import timeline from 'src/components/aboutUs/timeline'
import contactUs from 'src/components/contactUs'
import Footer from 'src/components/footer'
export default {
  components: {
    carousel,
    breadcrumbs,
    timeline,
    contactUs,
    Footer
  },
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
  .firmIntro {
    font-size: 1.2em;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    .firmIntro {
      font-size: 1.5em;
    }
  }

  .container {
    width: 80%;
    margin: auto;
  }
</style>
