import { v4 as randomId } from "uuid"

export default function () {
  return {
    // tab: 'all',
    // tabLabel: '全部',
    tab: {
      name: 'all',
      label: '全部'
    },
    // innerTab: undefined,
    innerTab: {
      name: undefined,
      label: undefined
    },
    products: [
      {
        key: randomId(),
        name: 'water chiller',
        label: '冰水主機',
        image: require('src/assets/product images/water_chiller.png'),
        benefit: '此電不集團是己間女、處科聞火達投來康元路！能增為樣間，難看育。寫方會商意臉在時民利找爸小民力也美化子適同吸到登中；黃在可工的常農來生時自，好心也城，於山賽制模異會生當裡放下讀得北情；深所間興起家一題而和清明學社頭為裡的位字什。',
        subtitle: '恆溫、除濕和熱回收',
        briefIntro: '海便三收正士開白面深皮？等有統！由意意名由利時列電，臺那空視清常山況市，在本了少來後母境每做思傳統了場？'
      },
      {
        key: randomId(),
        name: 'heat recovery ventilator with dehumidifying function',
        label: '除濕變風量熱回收機組',
        image: require('src/assets/product images/multifunctional_heat_pump_with_dehumidifying_function.png'),
        benefit: '自學電分，今正先家法意去後節他……司經留一神旅頭到友八商身國去共無此導讀家藝在所回林女年去較是背小無女戰電可，因不驚操立法對持在，同向多期怎即、單命人們現顯果己步一父球對主容、不中出燈聞面存青先就人家會你靜容異？動何許全名。',
        subtitle: '恆溫、除濕和熱回收',
        briefIntro: '子政了我，原提可、先們不雄生理善性方何趣；河高因的。住功什以名了相牛身聽兩之做能大一期，辦會用白車令'
      },
      {
        key: randomId(),
        name: 'cold and heat recovery ventilator',
        label: '複合式冷熱回收機組',
        image: require('src/assets/product images/cold_and_heat_recovery_ventilator.png'),
        benefit: '造轉設時最興點，教念人筆媽雨。社是動個研？言企作國利綠星友賽已政前張種化。的隨講明學期子山。不己己。品畫他唱增國同大劇個中支的便青的己清半；失幾微比一品外變首熱以山當取加的小爸頭各四正。',
        subtitle: '恆溫、除濕和熱回收',
        briefIntro: '你怎火形解選課院：果去中資到、家的魚親為改再……視我同地太語呢樣；熱又。'
      },
      {
        key: randomId(),
        name: 'water source heat pump',
        label: '水源式熱泵',
        image: require('src/assets/product images/water_source_heat_pump.png'),
        benefit: '樣等日手回後們者能照我各改把房快靜女屋到日難可友亞、間育之來，有員入易一劇求一不間。想表四便來年全持百都山展細破，性地易了心力，縣沒級龍華起到頭就車死以費時醫失特的便下藝奇經樣去言論小許東樣下精思過；施地就後眼明麼作木部我特內那家展士氣己。',
        subtitle: '恆溫、除濕和熱回收',
        briefIntro: '舉大我及內果超選說古制之和一查線子開環活國向離才實錢腦片持這統仍河利聲大心想。'
      },
      {
        key: randomId(),
        name: 'air source heat pump',
        label: '氣源式熱泵',
        image: require('src/assets/product images/air_source_heat_pump.png'),
        benefit: '界個市定進的是故應不要你羅稱、什不主士馬不專可統三太共思音我公包了期。門收改找何少子有高機樣須，要是決解土學入形主非高生信孩認們果是常消。去求府同數覺使！不的見裡內野新員土如交使明有是整全呢復石共所爸軍一功去。',
        subtitle: '恆溫、除濕和熱回收',
        briefIntro: '率前日電好此更，家辦的地不動時，解快得果的大何，一的山包在情位總好校字現口目來管血代縣提的分走'
      },
      {
        key: randomId(),
        name: 'multifunctional heat pump (with dehumidifying function)',
        label: '三合一除濕熱泵',
        image: require('src/assets/product images/multifunctional_heat_pump_with_dehumidifying_function.png'),
        benefit: '選口下報有不作呢照新都也雖在己見要才維到便相次清節！該早自社裡雄；年世加這之不有展全的港族遠其門講！他高了下好，麼破中；中人示、心辦業裡麗紀接單化國民果沒的知質果現。',
        subtitle: '恆溫、除濕和熱回收',
        briefIntro: '因的排用要可公腦一，目種生模要地議團喜常有自子委火。才心可產證劇的羅學國。視題近年，園藝食事書，課保？'
      }
    ]
  }
}
