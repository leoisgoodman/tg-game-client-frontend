import { isWebp } from '../utils/helpers';

const webpg = {
  mounted(el) {
    if (isWebp) {
      let str = el.getAttribute('class').split(' ');
      str.push('webpa');
      el.setAttribute('class', str.join(' '));
    }
  },
};
export default webpg;
