import React from 'react'

const ButtonMailto = () => {
  return (
    <div>
        <button className="email" onClick={(e) => window.location.href="mailto:dom.alexan@gmail.com"}>
            📧
        </button>
    </div>
  )
}

export default ButtonMailto
