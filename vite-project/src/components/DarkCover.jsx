import React from 'react'

export default function DarkCover({children,active}) {
  return (
    <div className={`cover-dark ${active ? 'on' : 'off'}`}>
      {children}
    </div>
  )
}
