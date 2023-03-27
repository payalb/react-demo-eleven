import React from 'react'
import  "./Greet.css"
import styles from "./Greet.module.css"

function Greet(props) {
  return (
    <div>
      <h1 className={`${props.property == "Red"?"test": "test1"} test3`}>Hello</h1>
      <h2 className={styles.s1}>This is from module css</h2>
    </div>
  )
}

export default Greet
