import React from 'react'

const dev = process.env.NODE_ENV === 'development'

// Note
// this component will only work for ENV = production
function CSSTag (props) {
  const { style } = props
  const element = !dev && <link rel='stylesheet' href={'/static/main.css'} />
  return element
}

export default CSSTag
