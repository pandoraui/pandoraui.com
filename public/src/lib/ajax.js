// Generated by CoffeeScript 1.8.0
(function() {
  var MIME_TYPES, abort, applyCallbacks, applyDefaults, applyHeaders, isSameOrigin, onComplete, onError, onSuccess, onTimeout, parseJSON, parseResponse, serializeData, serializeParams;

  MIME_TYPES = {
    json: 'application/json',
    html: 'text/html'
  };

  this.ajax = function(options) {
    var xhr;
    applyDefaults(options);
    serializeData(options);
    xhr = new XMLHttpRequest();
    xhr.open(options.type, options.url, options.async);
    applyCallbacks(xhr, options);
    applyHeaders(xhr, options);
    xhr.send(options.data);
    if (options.async) {
      return {
        abort: abort.bind(void 0, xhr)
      };
    } else {
      return parseResponse(xhr, options);
    }
  };

  ajax.defaults = {
    async: true,
    dataType: 'json',
    timeout: 30,
    type: 'GET'
  };

  applyDefaults = function(options) {
    var key;
    for (key in ajax.defaults) {
      if (options[key] == null) {
        options[key] = ajax.defaults[key];
      }
    }
  };

  serializeData = function(options) {
    if (!options.data) {
      return;
    }
    if (options.type === 'GET') {
      options.url += '?' + serializeParams(options.data);
      options.data = null;
    } else {
      options.data = serializeParams(options.data);
    }
  };

  serializeParams = function(params) {
    var key, value;
    return ((function() {
      var _results;
      _results = [];
      for (key in params) {
        value = params[key];
        _results.push("" + (encodeURIComponent(key)) + "=" + (encodeURIComponent(value)));
      }
      return _results;
    })()).join('&');
  };

  applyCallbacks = function(xhr, options) {
    if (!options.async) {
      return;
    }
    xhr.timer = setTimeout(onTimeout.bind(void 0, xhr, options), options.timeout * 1000);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        clearTimeout(xhr.timer);
        onComplete(xhr, options);
      }
    };
  };

  applyHeaders = function(xhr, options) {
    var key, value, _ref;
    options.headers || (options.headers = {});
    if (options.contentType) {
      options.headers['Content-Type'] = options.contentType;
    }
    if (!options.headers['Content-Type'] && options.data && options.type !== 'GET') {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    if (options.dataType) {
      options.headers['Accept'] = MIME_TYPES[options.dataType] || options.dataType;
    }
    if (isSameOrigin(options.url)) {
      options.headers['X-Requested-With'] = 'XMLHttpRequest';
    }
    _ref = options.headers;
    for (key in _ref) {
      value = _ref[key];
      xhr.setRequestHeader(key, value);
    }
  };

  onComplete = function(xhr, options) {
    var response, _ref;
    if ((200 <= (_ref = xhr.status) && _ref < 300)) {
      if ((response = parseResponse(xhr, options)) != null) {
        onSuccess(response, xhr, options);
      } else {
        onError('invalid', xhr, options);
      }
    } else {
      onError('error', xhr, options);
    }
  };

  onSuccess = function(response, xhr, options) {
    console.log('ajaxSuccess')
    var _ref;
    if ((_ref = options.success) != null) {
      _ref.call(options.context, response, xhr, options);
    }
  };

  onError = function(type, xhr, options) {
    console.warn('ajaxError')
    var _ref;
    if ((_ref = options.error) != null) {
      _ref.call(options.context, type, xhr, options);
    }
  };

  onTimeout = function(xhr, options) {
    xhr.abort();
    onError('timeout', xhr, options);
  };

  abort = function(xhr) {
    clearTimeout(xhr.timer);
    xhr.onreadystatechange = null;
    xhr.abort();
  };

  isSameOrigin = function(url) {
    return url.indexOf('http') !== 0 || url.indexOf(location.origin) === 0;
  };

  parseResponse = function(xhr, options) {
    if (options.dataType === 'json') {
      return parseJSON(xhr.responseText);
    } else {
      return xhr.responseText;
    }
  };

  parseJSON = function(json) {
    try {
      return JSON.parse(json);
    } catch (_error) {

    }
  };

}).call(this);