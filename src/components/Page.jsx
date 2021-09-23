import React from 'react'

const Page = ({ children, className = '', style = {} }) => {
  return (
    <main
      className={`flex-grow mt-20 overflow-y-scroll relative ${className}`}
      style={style}
    >
      {children}
    </main>
  )
}

export default Page
