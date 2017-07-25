import dynamic from 'next/dynamic'

const dynamicCSSTag = dynamic(
  (process.env.NODE_ENV === 'development')
    ? import('./CSSTag.dev')
    : import('./CSSTag.prod')
)

export default dynamicCSSTag
