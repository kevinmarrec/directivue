import { DirectiveOptions } from 'vue'
import './styles.css'

const stopEvents: Record<string, string[]> = {
  mousedown: ['mouseup', 'mouseleave'],
  touchstart: ['touchend']
}

function createRipple (el: HTMLElement, event: MouseEvent | TouchEvent) {
  let finished = false

  const container = el.getBoundingClientRect()

  const ripple = document.createElement('div')
  ripple.className = 'ripple'

  el.insertBefore(ripple, el.firstChild)

  const transitionDuration = (+getComputedStyle(ripple).transitionDuration.slice(0, -1) * 1000)

  const { clientX, clientY } = event instanceof TouchEvent ? event.touches[0] : event

  const offsetTop = clientY - container.y
  const offsetLeft = clientX - container.x

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
      navigator.vibrate(200)

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

    el.addEventListener(('ontouchstart' in window || navigator.maxTouchPoints) ? 'touchstart' : 'mousedown', event => createRipple(el, event))
  }
}

export default RippleDirective
