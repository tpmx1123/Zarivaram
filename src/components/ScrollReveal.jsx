import { useEffect, useRef, useState } from 'react'

const OFFSETS = {
  up: { x: '0px', y: '30px' },
  down: { x: '0px', y: '-30px' },
  left: { x: '26px', y: '0px' },
  right: { x: '-26px', y: '0px' },
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  direction = 'up',
  threshold = 0.16,
  once = true,
}) => {
  const hostRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobile = window.matchMedia('(max-width: 767px)')
    const sync = () => setReduceMotion(media.matches)
    const syncMobile = () => setIsMobile(mobile.matches)
    sync()
    syncMobile()
    media.addEventListener('change', sync)
    mobile.addEventListener('change', syncMobile)
    return () => {
      media.removeEventListener('change', sync)
      mobile.removeEventListener('change', syncMobile)
    }
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true)
      return
    }

    const node = hostRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, reduceMotion, threshold])

  const offset = OFFSETS[direction] ?? OFFSETS.up
  const mobileDuration = isMobile ? Math.round(duration * 0.62) : duration
  const mobileDelay = isMobile ? Math.round(delay * 0.5) : delay

  return (
    <div
      ref={hostRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{
        '--reveal-delay': `${mobileDelay}ms`,
        '--reveal-duration': `${mobileDuration}ms`,
        '--reveal-x': offset.x,
        '--reveal-y': offset.y,
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
