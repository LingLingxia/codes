function  getBroswer() {
  var Sys = {}
  var ua = navigator.userAgent.toLowerCase()
  var s;
  /* eslint-disable  no-cond-assign*/
  (s = ua.match(/edge\/([\d.]+)/))
    ? (Sys.edge = s[1])
    : (s = ua.match(/rv:([\d.]+)\) like gecko/))
      ? (Sys.ie = s[1])
      : (s = ua.match(/msie ([\d.]+)/))
        ? (Sys.ie = s[1])
        : (s = ua.match(/firefox\/([\d.]+)/))
          ? (Sys.firefox = s[1])
          : (s = ua.match(/chrome\/([\d.]+)/))
            ? (Sys.chrome = s[1])
            : (s = ua.match(/opera.([\d.]+)/))
              ? (Sys.opera = s[1])
              : (s = ua.match(/version\/([\d.]+).*safari/))
                ? (Sys.safari = s[1])
                : 0

  if (Sys.edge) return { broswer: 'Edge', version: Sys.edge }
  if (Sys.ie) return { broswer: 'IE', version: Sys.ie }
  if (Sys.firefox) return { broswer: 'Firefox', version: Sys.firefox }
  if (Sys.chrome) return { broswer: 'Chrome', version: Sys.chrome }
  if (Sys.opera) return { broswer: 'Opera', version: Sys.opera }
  if (Sys.safari) return { broswer: 'Safari', version: Sys.safari }

  return { broswer: '', version: '0' }
}