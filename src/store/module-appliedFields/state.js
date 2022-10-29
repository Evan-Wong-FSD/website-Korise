// import { v4 as randomId } from "uuid"

export default function () {
  return {
    // fieldNameSelected: undefined,
    // fieldLabelSelected: undefined,
    field: {
      name: undefined,
      label: undefined
    },
    fields: [
      {
        // key: randomId(),
        name: 'clean room',
        label: '無塵室',
        // image: require('src/assets/industry images/clean room.jpg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      },
      {
        // key: randomId(),
        name: 'hospital',
        label: '醫院',
        // image: require('src/assets/industry images/hospital.jpg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      },
      {
        // key: randomId(),
        name: 'hostel',
        label: '旅館',
        // image: require('src/assets/industry images/hostel.jpg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      },
      {
        // key: randomId(),
        name: 'manufacturing',
        label: '製造業',
        // image: require('src/assets/industry images/manufacturing.jpg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      },
      {
        // key: randomId(),
        name: 'plastic industry',
        label: '塑膠射出成型業',
        // image: require('src/assets/industry images/plastic industry.jpg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      },
      {
        // key: randomId(),
        name: 'printing industry',
        label: '印刷業',
        // image: require('src/assets/industry images/printing industry.jpg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      },
      {
        // key: randomId(),
        name: 'spa',
        label: 'spa會館',
        // image: require('src/assets/industry images/spa.jpeg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      },
      {
        // key: randomId(),
        name: 'swimming pool',
        label: '室內游泳池',
        // image: require('src/assets/industry images/swimming pool.jpg'),
        relatedProducts: ['water chiller', 'heat recovery ventilator with dehumidifying function', 'cold and heat recovery ventilator', 'water source heat pump', 'air source heat pump', 'multifunctional heat pump (with dehumidifying function)']
      }
    ]
  }
}
