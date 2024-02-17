import React from 'react'
import './ReactMinimalToast.css'

export const ReactMinimalToast: React.FC<Props> = ({ children, className }) => {
  return <div className={`minimal-toast__wrapper ${className}`}>{children}</div>
}

type Props = {
  /**
   * The title of the toast
   */
  children: React.ReactNode

  /**
   * The class name of the toast
   */
  className?: string
}
