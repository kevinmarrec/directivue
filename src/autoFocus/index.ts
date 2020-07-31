import { DirectiveOptions } from 'vue'

const AutoFocusDirective: DirectiveOptions = {
  inserted (el) {
    el.focus()
  }
}

export default AutoFocusDirective
