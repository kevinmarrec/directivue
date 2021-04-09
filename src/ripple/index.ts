import { DirectiveOptions } from 'vue'
import './styles.css'

const stopEvents: Record<string, string[]> = {
  keydown: ['keyup'],
  mousedown: ['mouseup', 'mouseleave'],
  touchstart: ['touchend']
}

let keyboardRipple = false

function createRipple (el: HTMLElement, event: MouseEvent | TouchEvent | KeyboardEvent) {
  let finished = false
  let offsetTop
  let offsetLeft

  const container = el.getBoundingClientRect()

  const ripple = document.createElement('div')
  ripple.className = 'ripple'

  el.insertBefore(ripple, el.firstChild)

  const transitionDuration = (+getComputedStyle(ripple).transitionDuration.slice(0, -1) * 1000)

  if (event instanceof KeyboardEvent) {
    keyboardRipple = true
    offsetTop = container.height / 2
    offsetLeft = container.width / 2
  } else {
    const { clientX, clientY } = event instanceof TouchEvent ? event.touches[0] : event
    offsetTop = clientY - container.y
    offsetLeft = clientX - container.x
  }

  const size = Math.sqrt(
    (container.height + Math.abs(container.height / 2 - offsetTop) * 2) ** 2 +
    (container.width + Math.abs(container.width / 2 - offsetLeft) * 2) ** 2
  )

  ripple.style.top = (offsetTop - size / 2) + 'px'
  ripple.style.left = (offsetLeft - size / 2) + 'px'
  ripple.style.height = ripple.style.width = size + 'px'

  setTimeout(() => { ripple.style.transform = 'scale(1)' })
  setTimeout(() => { finished = true }, transitionDuration)

  const stop = () => {
    setTimeout(() => {
      ripple.style.opacity = '0'
      keyboardRipple = false

      setTimeout(() => {
        stopEvents[event.type].forEach(ev => el.removeEventListener(ev, stop))
        ripple.remove()
      }, transitionDuration)
    }, finished ? 0 : transitionDuration / 2)
  }

  stopEvents[event.type].forEach(ev => el.addEventListener(ev, stop))
}

const RippleDirective: DirectiveOptions = {
  bind (el, binding) {
    if (binding.value === false) {
      return
    }

    el.style.position = 'relative'
    el.style.overflow = 'hidden'

    el.addEventListener(('ontouchstart' in window || navigator.maxTouchPoints) ? 'touchstart' : 'mousedown', event => createRipple(el, event), { passive: true })
    el.addEventListener('keydown', (event) => {
      if (!keyboardRipple && ['Enter', ' '].includes(event.key)) {
        createRipple(el, event)
      }
    }, { passive: true })
  }
}

export default RippleDirective
