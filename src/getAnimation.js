export default function getAnimation(animationType) {
  switch(animationType) {
    case 'fadeIn':
      return {
        appear: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      };
    case 'fadeOut':
      return {
        appear: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      };
    case 'slideRight':
      return {
        appear: { translateX: 0 },
        enter: { translateX: 200 },
        leave: { translateX: 0 },
      };
    case 'slideLeft':
      return {
        appear: { translateX: 0 },
        enter: { translateX: -200 },
        leave: { translateX: 0 },
      };
    case 'slideUp':
      return {
        appear: { translateY: 200 },
        enter: { translateY: -200 },
        leave: { translateY: 0 },
      };
    case 'slideDown':
      return {
        appear: { translateY: -200 },
        enter: { translateY: 200 },
        leave: { translateY: 0 },
      };
    case 'grow':
      return {
        appear: { height: 0, width: 0 },
        enter: { height: 100, width: 100 },
        leave: { height: 200, width: 200 },
      };
    default:
      return { enter: {}, leave: {}, appear: {} };
  }
}
