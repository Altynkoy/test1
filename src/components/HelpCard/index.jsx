import React from 'react'
import css from './HelpCard.module.css'

export default function HelpCard({title,bg}) {
  return (
    <div style={{backgroundColor:bg}}  className={css.helpCard}>
      <br />
        <hr />
        <h3>{title}</h3>
    </div>
  )
}
