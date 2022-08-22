import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type BtnColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'white'
export type BtnSize = 'small' | 'medium' | 'normal'
export const props = {
  color: {
    type: String as PropType<BtnColor>,
    default: 'white'  // 设定默认颜色
  },
  icon: {
    type: String as PropType<string>,
    default: ''
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  circle: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  size: {
    type: String as PropType<BtnSize>,
    default: 'normal'
  }
}


export default defineComponent({
  name: "UnoButton",
  props,
  setup(props, { slots }) {
    const isColor = props.color !== 'white' ? true : false
    const isMedium = props.size === 'medium' ? true : false
    const isSmallOrMini = props.size === 'small' ? true : false
    return () => <button
      class={`
        ${props.circle ? 'px-1' : 'px-4'}
        font-semibold 
        ${props.round ? 'rounded-lg' : props.circle ? 'rounded-1/2' : ''}
        shadow-md 
        ${isColor ? 'text-white' : 'text-black'}
        ${isColor ? `bg-${props.color}-500` : `bg-${props.color}`}
        ${isColor ? `hover:bg-${props.color}-700` : `hover:text-blue` }
        ${isMedium ? 'text-4' : isSmallOrMini ? 'text-2' : ''}
        ${isMedium ? 'py-2.5' : isSmallOrMini ? 'py-1' : 'py-2'}
        ${isMedium ? 'px-4' : isSmallOrMini ? 'px-2.5' : ''}
        mx-1
        border-none 
        cursor-pointer
      `}
    >
      {props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} ${isSmallOrMini ? 'p-2' : 'p-3'}`}></i> : ""}
      {slots.default ? slots.default() : ''}
    </button>
  }
});
