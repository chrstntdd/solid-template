type Props = {
  src: string
  alt: string
  height: string
  width: string
  class?: string
}

/**
 * @description
 * A basic image
 */
function Img(p: Props) {
  return (
    <img
      decoding="async"
      src={p.src}
      alt={p.alt}
      height={p.height}
      width={p.width}
      class={p.class}
    />
  )
}

export { Img }
