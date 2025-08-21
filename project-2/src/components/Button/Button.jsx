import React from 'react'
 import styles from "./Button.module.css"
import { MdMessage } from "react-icons/md";
const Button = ({ isoutline, text,icon,...rest }) => {
  
  return (
    <button {...rest} 
    className={ isoutline ? styles["outline-button"] :   styles["primary-button"]}>

   {icon}
  {text}
    </button>
  )
}

export default Button