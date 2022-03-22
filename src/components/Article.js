import React from 'react'

const COFFEE = "☕️";
const BENTO = "🍱";


function Article({title, date="January 1, 1970", preview, minutes}) {
  function printCoffee(min) {
    const interval = (min > 30) ? 10 : 5;
    const emoji = (min > 30) ? BENTO : COFFEE;

    const timeToRead = Math.ceil(min/interval);
    return emoji.repeat(timeToRead)
  }


  return (
      <article>
          <h3>{title}</h3>
          <small>{date} | {printCoffee(minutes)} {minutes} min read</small>
          <p>{preview}</p>
      </article>
  )
}

export default Article