import React from 'react'
import "./LoadingSpinner.css"

function LoadingSpinner() {
  return (
    <div>
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingSpinner
