import React from 'react'
import PropTypes from 'prop-types'

const translateY = (style, offset) => {
  style.transform = `translateY(${offset}px`
  style.WebkitTransform = `translateY(${offset}px`
}

/**
 * Stickyard
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
    this.offsets = []
  }

  componentDidMount() {
    this.purgeStickers()
    this.updateState()
    this.container &&
      this.container.addEventListener('scroll', this.updateState)
  }

  componentDidUpdate() {
    this.purgeStickers()
  }

  componentWillUnmount() {
    this.container &&
      this.container.removeEventListener('scroll', this.updateState)
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
    return this.offsets
  }

  scrollTo(offset) {
    if (this.container) {
      this.container.scrollTop = offset
    }
  }

  scrollToIndex(index) {
    if (index >= 0 && index < this.offsets.length) {
      this.scrollTo(this.offsets[index])
    }
  }

  updateState() {
    if (!this.container || this.stickers.length === 0) return
    const { scrollTop, scrollHeight } = this.container
    const { stickyClassName } = this.props

    const offsets = this.offsets.concat(scrollHeight)

    let stickyIndex = 0
    while (scrollTop > offsets[stickyIndex]) stickyIndex += 1
    stickyIndex -= 1

    this.stickers.forEach((header, index) => {
      if (index === stickyIndex) {
        if (scrollTop < offsets[index + 1] - header.offsetHeight) {
          translateY(header.style, scrollTop - header.offsetTop)
        } else {
          translateY(
            header.style,
            offsets[index + 1] - offsets[index] - header.offsetHeight
          )
        }

        if (stickyClassName) header.classList.add(stickyClassName)
      } else {
        header.style.transform = ''
        header.style.WebkitTransform = ''

        if (stickyClassName) header.classList.remove(stickyClassName)
      }
    })
  }

  purgeStickers() {
    this.stickers = this.stickers
      .filter(x => x && x.offsetHeight)
      .sort((a, b) => a.offsetTop - b.offsetTop)
    this.offsets = this.stickers.map(x => x.offsetTop)
  }

  render() {
    const { children } = this.props
    return children({
      registerContainer: this.setContainerRef,
      registerSticky: this.setStickyRef,
      getStickyOffsets: this.getStickyOffsets,
      scrollToIndex: this.scrollToIndex,
      scrollTo: this.scrollTo,
    })
  }
}

Stickyard.propTypes = {
  children: PropTypes.func.isRequired,
  stickyClassName: PropTypes.string,
}
