import React from 'react';

export default function Flex(props) {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        ...props,
      }}
    > 
      {props.children}
    </div>
  )
}