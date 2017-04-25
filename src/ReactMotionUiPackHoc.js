import React from 'react';
import Transition from 'react-motion-ui-pack';

export default function ReactMotionUiPackHoc({ animationType, component=false, children, ...rest }) {
  const getAnimation = () => { return { apper: { opacity: 0 }, enter: { opacity: 0 }, leave: { opacity: 1 } }};
  const { enter, leave, appear } = getAnimation();

  console.log(...rest);
  return (
    <Transition appear={appear} enter={enter} leave={leave} component={component} {...rest}>
      { children }
    </Transition>
  );
}
