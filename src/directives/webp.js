import { isWebp } from '../utils/helpers';

const webp = {
  mounted(el) {
    if (isWebp) {
      let src = el.src;
      el.src = src + `_.webp`;
      el.onerror = () => {
        el.src = src;
      };
    }
  },
};
export default webp;
