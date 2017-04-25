import React from 'react';
import Transition from 'react-motion-ui-pack';

import getAnimation from './getAnimation';

export default function ReactMotionUiPackHoc(
  { animationType, component=false, children, ...other}
) {
  const { appear, enter, leave } = getAnimation(animationType);

  console.log(appear, enter, leave);

  // explicitly set enter, leave, and appear to null and handle it here or set
  // it to {} in getAnimation
  return (
    <Transition
      appear={appear}
      enter={enter}
      leave={leave}
      component={component}
      {...other}
    >
      {children}
    </Transition>
  );
}
