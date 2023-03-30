import { E } from '@/library';
export const mainContainer = (...child) => {
  const mainContainer = E({
    tag: 'div',
    id:'route',
    className: 'mx-3 h-5/6 ',
    child,
  });

  return mainContainer;
};
