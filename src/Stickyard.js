import React from 'react'
import PropTypes from 'prop-types'

const styleTransform = (style, transform) => {
  style.transform = transform
  style.WebkitTransform = transform
}

const styleTranslateY = (style, offset) => {
  styleTransform(style, `translateY(${offset}px`)
}

/**
 * Stickyard, make your component sticky the easy way using render prop
 */
export default class Stickyard extends React.PureComponent {
  constructor(props) {
    super(props)

    this.setContainerRef = this.setContainerRef.bind(this)
    this.setStickyRef = this.setStickyRef.bind(this)
    this.updateState = this.updateState.bind(this)
    this.getStickyOffsets = this.getStickyOffsets.bind(this)
    this.scrollToIndex = this.scrollToIndex.bind(this)
    this.scrollTo = this.scrollTo.bind(this)

    this.container = null
    this.stickers = []
    this.lastStickyIndex = -1
    this.updating = false
  }

  componentDidMount() {
    this.purgeStickers()
    if (this.container) {
      this.container.addEventListener('scroll', this.updateState)
    }
  }

  componentDidUpdate() {
    this.purgeStickers()
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.removeEventListener('scroll', this.updateState)
    }
  }

  setContainerRef(ref) {
    this.container = ref
    if (ref) {
      ref.style.position = 'relative'
      ref.style.willChange = 'transform'
      ref.style.WebkitOverflowScrolling = 'touch'
      ref.style.overflow = 'auto'
    }
  }

  setStickyRef(ref) {
    if (ref) this.stickers.push(ref)
  }

  getStickyOffsets() {
    return this.stickers.map(x => x.offsetTop)
  }

  scrollTo(offset) {
    if (this.container) {
      this.container.scrollTop = offset
    }
  }

  scrollToIndex(index) {
    if (index >= 0 && index < this.getStickyOffsets().length) {
      this.scrollTo(this.getStickyOffsets()[index])
    }
  }

  updateState() {
    if (this.updating || !this.container || this.stickers.length === 0) return

    this.updating = true

    const { scrollTop, scrollHeight } = this.container
    const offsets = this.getStickyOffsets().concat(scrollHeight)

    let stickyIndex = 0
    while (scrollTop >= offsets[stickyIndex]) stickyIndex += 1
    stickyIndex -= 1

    const sticker = stickyIndex >= 0 ? this.stickers[stickyIndex] : null

    if (sticker) {
      if (scrollTop < offsets[stickyIndex + 1] - sticker.offsetHeight) {
        styleTranslateY(sticker.style, scrollTop - sticker.offsetTop)
      } else {
        styleTranslateY(
          sticker.style,
          offsets[stickyIndex + 1] - offsets[stickyIndex] - sticker.offsetHeight
        )
      }
    }

    const { stickyClassName, onSticky } = this.props
    if (stickyIndex !== this.lastStickyIndex) {
      const lastSticker =
        this.lastStickyIndex >= 0 ? this.stickers[this.lastStickyIndex] : null

      if (lastSticker) styleTransform(lastSticker.style, '')

      if (stickyClassName) {
        sticker && sticker.classList && sticker.classList.add(stickyClassName)
        lastSticker &&
          lastSticker.classList &&
          lastSticker.classList.remove(stickyClassName)
      }

      onSticky && onSticky(stickyIndex)
      this.lastStickyIndex = stickyIndex
    }

    this.updating = false
  }

  purgeStickers() {
    this.stickers = this.stickers
      .filter(x => x && x.offsetHeight)
      .sort((a, b) => a.offsetTop - b.offsetTop)

    this.updateState()
  }

  render() {
    const { children } = this.props
    return children({
      registerContainer: this.setContainerRef,
      registerSticky: this.setStickyRef,
      updateState: this.updateState,
      getStickyOffsets: this.getStickyOffsets,
      scrollToIndex: this.scrollToIndex,
      scrollTo: this.scrollTo,
    })
  }
}

Stickyard.propTypes = {
  /**
   * Render whatever you want, it's called with an object
   */
  children: PropTypes.func.isRequired,
  /**
   * The className to be attached to the element when it's sticky.
   */
  stickyClassName: PropTypes.string,
  /**
   * It's called when a element becomes sticky, `-1` means there is no sticky element.
   */
  onSticky: PropTypes.func,
}
