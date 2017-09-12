;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    function refreshDpr(){
      var devicePixelRatio = win.devicePixelRatio;
      if (devicePixelRatio >= 3 ) {
          dpr = 3;
      } else if (devicePixelRatio >= 2 ){
          dpr = 2;
      } else {
          dpr = 1;
      }
      scale = 1 / dpr;

      docEl.setAttribute('data-dpr', dpr);
      if (!metaEl) {
          metaEl = doc.createElement('meta');
          metaEl.setAttribute('name', 'viewport');
      }

      metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

      if (docEl.firstElementChild) {
          docEl.firstElementChild.appendChild(metaEl);
      } else {
          var wrap = doc.createElement('div');
          wrap.appendChild(metaEl);
          doc.write(wrap.innerHTML);
      }

      if (doc.readyState === 'complete') {
          doc.body.style.fontSize = 12 * dpr + 'px';
      } else {
          doc.addEventListener('DOMContentLoaded', function(e) {
              doc.body.style.fontSize = 12 * dpr + 'px';
          }, false);
      }
    }

    function refreshRem(){
        refreshDpr();
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 414) {
            width = 414 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    refreshRem();

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);



    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;

})(window, window['lib'] || (window['lib'] = {}));
