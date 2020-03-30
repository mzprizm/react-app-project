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



/*
// <Flex alignItems="top" display="block" flexDirection="column" justifyContent="flex-end">
//   <span>hi</span>
// </Flex>
// */