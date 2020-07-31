import { DirectiveOptions } from 'vue'

type CustomHTMLElement = HTMLElement & { _clickOutside?: EventListener }

const ClickOutsideDirective: DirectiveOptions = {
  bind (el: CustomHTMLElement, binding) {
    const onClick = ((e: PointerEvent) => {
      if (!e || ('isTrusted' in e && !e.isTrusted) || ('pointerType' in e && !e.pointerType)) { return }
      !el.contains(e.target as Node) && setTimeout(() => binding.value && binding.value(e))
    }) as EventListener

    const app = document.querySelector('#__nuxt') || document.body

    app.addEventListener('click', onClick, true)
    el._clickOutside = onClick
  },
  unbind (el: CustomHTMLElement) {
    if (!el._clickOutside) { return }

    const app = document.querySelector('#__nuxt') || document.body

    app.removeEventListener('click', el._clickOutside, true)
    delete el._clickOutside
  }
}

export default ClickOutsideDirective
