export default class {
  static setUrlParams(url, param, value) {
    let result;
    // 防止多次添加同一个字段
    let cleanUrl = this.removeParams(param, url);
    // 防止 url?&param=value时清空参数会变成 url?
    cleanUrl = cleanUrl[cleanUrl.length - 1] === '?' ? cleanUrl.replace('?', '') : cleanUrl;
    if (cleanUrl.indexOf('?') !== -1) {
      const p = new RegExp('(\\?|&" + param + ")=[^&]*');
      if (p.test(cleanUrl)) {
        result = cleanUrl.replace(p, `$1=${value}`);
      } else {
        result = `${cleanUrl}&${param}=${value}`;
      }
    } else {
      result = `${cleanUrl}?${param}=${value}`;
    }
    return result;
  }

  static removeParams(keyName, urlStr) {
    const name = keyName.replace(/[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*(&|#|$))|&|#|$)`);
    const replace = urlStr.replace(regex, (item) => {
      if (/^\?/.test(item)) {
        return '?';
      } if (/^&.+&$/.test(item)) {
        return '&';
      } if (/#$/.test(item)) {
        return '#';
      }
      return '';
    });
    const lastStrIndex = replace.length - 1;
    return replace.indexOf('?') === lastStrIndex
      ? replace.substr(0, lastStrIndex)
      : replace;
  }

  static isH5Link(url) {
    return /^https?:\/\//.test(url);
  }
}
