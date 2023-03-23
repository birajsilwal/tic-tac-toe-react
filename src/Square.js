import React from 'react';

function Square(props) {
  const style = {
    fontSize: '24px',
    width: '48px',
    height: '48px',
    background: '#fff',
    border: '1px solid #999',
    float: 'left',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: '0',
    textAlign: 'center',
    lineHeight: '48px',
    outline: 'none',
    cursor: 'pointer',
  };
  
  return (
    <button className="square" style={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
