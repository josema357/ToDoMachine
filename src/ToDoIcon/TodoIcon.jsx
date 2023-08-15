import React from 'react'
import {ReactComponent as CheckSVG} from '../assets/icons/check.svg'
import {ReactComponent as DeleteSVG} from '../assets/icons/close.svg'
import './TodoIcon.css'

const iconType={
    "check": (color,onClick)=><CheckSVG className="Icon-svg-check" fill={color} onClick={onClick}/>,
    "delete": (color,onClick)=><DeleteSVG className="Icon-svg-close" fill={color} onClick={onClick}/>
}

function TodoIcon({type, color, onClick}) {
  return (
    <>
        {iconType[type](color,onClick)}
    </>
  )
}

export {TodoIcon};