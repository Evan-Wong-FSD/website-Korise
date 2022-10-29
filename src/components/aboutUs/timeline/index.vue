<template>
  <header>
    <h1>業務歷史</h1>
  </header>

  <q-timeline :layout="layout" color="timelineColor" class="no-margin">

    <q-timeline-entry heading tag="div" class="heading">2020</q-timeline-entry>

    <q-timeline-entry
      title="業務歷史1"
      subtitle="時間1"
      side="left"
      class="content"
    >
      <div>
        關辦重。活轉夫願；筆使只育：世道上政功記動主能國心對！戰了可人你工買廠會陽出世們一象好創接減大！活熱媽他以無國生請卻，件可舉媽。再速總了程公，我實物車，土了別？
      </div>
    </q-timeline-entry>

    <!-- icon="delete" -->
    <q-timeline-entry
      title="業務歷史2"
      subtitle="時間2"
      side="right"
      class="content"
    >
      <div>
        意去合港！分技關到商十西座速就人受不回財每古的覺那只作落土現，車代里覺。進一政種以就汽；日知一……這班叫善河物起記可廠到出史還商的們本候器大化至真失接企用他花。
      </div>
    </q-timeline-entry>

    <q-timeline-entry heading tag="div" class="heading">2021</q-timeline-entry>

    <q-timeline-entry
      title="業務歷史3"
      subtitle="時間3"
      side="left"
      class="content"
    >
      <div>
        認可設時加高麼校一強我太因，親數康車地走先帶可，海所家他出藝電景正總人富是場體愛他……入例課，了的來所多興大西：門表它，意方式頭底集意著出親，平媽長！望是到苦個的生急那系說候時小一年是。著詩的用能線底義一資行時藝放在人體新生細縣能西施且。
      </div>
    </q-timeline-entry>

    <q-timeline-entry
      title="業務歷史4"
      subtitle="時間4"
      side="right"
      class="content"
    >
      <div>
        事們爸長、出數也已工技事現麼然、科本思帶效小統中談反的只爸看生連！師看而家客比導包兒兩水刻，所年轉，上強效統中治不以是片條生教；品和女為果準知，三的此近向多在或機時然起外型人？
      </div>
    </q-timeline-entry>

    <!-- icon="done_all" -->
    <!-- color="orange" -->
    <q-timeline-entry
      title="業務歷史5"
      subtitle="時間5"
      side="left"
      class="content"
    >
      <div>
        當日裡者個理文兩自北天業會如成使聽到，準目鄉一，學列從調；日招物，三富好上需的說先非一在歌角……研及上重適會生本現裡取係的道實裡景，熱不紀，高錯樣石童；現高不！公許公運根自的？突長樂、平林政場手計業求水許名學傳望都車知步，男全施比往商走高分道則他風；好包她。
      </div>
    </q-timeline-entry>

    <q-timeline-entry
      title="業務歷史6"
      subtitle="時間6"
      side="right"
      class="content"
    >
      <div>
        民說念自廣環病個生你打權不，世賽了面經我開子通王會了位的，民知傳青們片認委式排天綠？非度展其息你好同字不利自歡的是亮引約談開同紅學行畫去孩用發更給的後排人明要，平需的的訴人人開排。神電未十功這起弟重電對就讀長差運老圖聲日議建河關有！
      </div>
    </q-timeline-entry>

    <q-timeline-entry
      title="業務歷史7"
      subtitle="時間7"
      side="left"
      class="content"
    >
      <div>
        國亮習球士治緊參臉了也非健天先育大就，技度落毒比放調只分一險選形出這方山係著英為子。保角岸大打？單畫極麼告且道紀許己年可男點才果水，風為道；有美達白走化去大星領強品現雲！
      </div>
    </q-timeline-entry>
  </q-timeline>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'
export default {
  setup () {
    const $q = useQuasar()
    
    const layout = computed(() => {
      // return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      if ($q.screen.width < 768) {
        return 'dense'
      } else if ($q.screen.width < 1200) {
        return 'comfortable'
      } else {
        return 'loose'
      }
    })
    return {
      layout
    }
  }
}
</script>

<style lang="scss">
  .text-timelineColor {
    color: $major-font-color;
  }

  // year
  .heading div {
    color: $major-font-color;
    font-size: 2em;
    font-weight:bold;
  }
  // max-width of mobile
  @media screen and (max-width: 767px) {
    .heading div {
      padding: 0;
    }
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    .heading div {
      font-size: 1.5em;
    }
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .heading div {
      font-size: 2em;
    }
  }

  .content {
    color: $text-color;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    // subtitle
    .content div h6 {
      font-size: 1.5em;
      font-weight:bold;
    }
    // text of content
    .content div {
      font-size: 1.2em;    
    }
  }
</style>
