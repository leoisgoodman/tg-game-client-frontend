export const isSupportWebp = function () {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch (err) {
    return false;
  }
};

export const isWebp = isSupportWebp();

export const analysisDomainName = function () {
  const parameterList = location.href.split('?');
  if (parameterList[1]) {
    const _list = parameterList[1].split('&');
    _list.forEach((item) => {
      const objList = item.split('=');
      sessionStorage.setItem(objList[0], objList[1]);
    });
  }
};
