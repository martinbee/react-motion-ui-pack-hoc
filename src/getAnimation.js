export default function getAnimation(animationType) {
  switch(animationType) {
    case 'fadeIn':
      return {
        appear: { opacity: 0 },
        enter: { opacity: 1 },
        leave: {},
      };
    case 'fadeOut':
      return {
        appear: {},
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      };
    case 'slideRight':
      return {
        appear: { opacity: 0 },
        enter: { opacity: 1 },
        leave: {},
      };
    case 'grow':
      return {
        appear: { height: 0, width: 0 },
        enter: { height: 200, width: 200 },
        leave: { height: 200, width: 400 },
      };
    default:
      return { enter: {}, leave: {}, appear: {} };
  }
}
