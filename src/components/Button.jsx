import React from 'react'


const Button = ({btnClass, btnType, btnOnclick, label}) => {
  return (
    <button className={btnClass} type={btnType} onClick={btnOnclick}>{label}</button>
  )
}

export default Button