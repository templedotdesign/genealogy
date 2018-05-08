import React from 'react';

const headline = (props) => {
  const style = {
    textAlign: 'center',
    fontSize: props.size,
    color: props.color,
    margin: '20px 0'
  }
  return (
    <h2 style={style}>{props.content}</h2>
  )
}

export default headline;