var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e2) => resume("throw", e2, yes, no));
    } catch (e2) {
      no(e2);
    }
  };
  var method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no));
  var it = {};
  return generator = generator.apply(__this, __arguments), it[Symbol.asyncIterator] = () => it, method("next"), method("throw"), method("return"), it;
};

// node_modules/.pnpm/@improbable-eng+grpc-web@0.15.0_google-protobuf@3.21.2/node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.js
var require_grpc_web_client = __commonJS({
  "node_modules/.pnpm/@improbable-eng+grpc-web@0.15.0_google-protobuf@3.21.2/node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.js"(exports2) {
    "use strict";
    !function(e2, t) {
      for (var r in t)
        e2[r] = t[r];
      t.__esModule && Object.defineProperty(e2, "__esModule", { value: true });
    }(exports2, function() {
      var e2 = { 418: function(e3, t2) {
        !function(e4, t3) {
          for (var r in t3)
            e4[r] = t3[r];
        }(t2, function(e4) {
          var t3 = {};
          function r(n) {
            if (t3[n])
              return t3[n].exports;
            var o = t3[n] = { i: n, l: false, exports: {} };
            return e4[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
          }
          return r.m = e4, r.c = t3, r.i = function(e5) {
            return e5;
          }, r.d = function(e5, t4, n) {
            r.o(e5, t4) || Object.defineProperty(e5, t4, { configurable: false, enumerable: true, get: n });
          }, r.n = function(e5) {
            var t4 = e5 && e5.__esModule ? function() {
              return e5.default;
            } : function() {
              return e5;
            };
            return r.d(t4, "a", t4), t4;
          }, r.o = function(e5, t4) {
            return Object.prototype.hasOwnProperty.call(e5, t4);
          }, r.p = "", r(r.s = 1);
        }([function(e4, t3, r) {
          "use strict";
          Object.defineProperty(t3, "__esModule", { value: true });
          var n = r(3), o = function() {
            function e5(e6, t4) {
              void 0 === e6 && (e6 = {}), void 0 === t4 && (t4 = { splitValues: false });
              var r2, o2 = this;
              this.headersMap = {}, e6 && ("undefined" != typeof Headers && e6 instanceof Headers ? n.getHeaderKeys(e6).forEach(function(r3) {
                n.getHeaderValues(e6, r3).forEach(function(e7) {
                  t4.splitValues ? o2.append(r3, n.splitHeaderValue(e7)) : o2.append(r3, e7);
                });
              }) : "object" == typeof (r2 = e6) && "object" == typeof r2.headersMap && "function" == typeof r2.forEach ? e6.forEach(function(e7, t5) {
                o2.append(e7, t5);
              }) : "undefined" != typeof Map && e6 instanceof Map ? e6.forEach(function(e7, t5) {
                o2.append(t5, e7);
              }) : "string" == typeof e6 ? this.appendFromString(e6) : "object" == typeof e6 && Object.getOwnPropertyNames(e6).forEach(function(t5) {
                var r3 = e6[t5];
                Array.isArray(r3) ? r3.forEach(function(e7) {
                  o2.append(t5, e7);
                }) : o2.append(t5, r3);
              }));
            }
            return e5.prototype.appendFromString = function(e6) {
              for (var t4 = e6.split("\r\n"), r2 = 0; r2 < t4.length; r2++) {
                var n2 = t4[r2], o2 = n2.indexOf(":");
                if (o2 > 0) {
                  var s = n2.substring(0, o2).trim(), i = n2.substring(o2 + 1).trim();
                  this.append(s, i);
                }
              }
            }, e5.prototype.delete = function(e6, t4) {
              var r2 = n.normalizeName(e6);
              if (void 0 === t4)
                delete this.headersMap[r2];
              else {
                var o2 = this.headersMap[r2];
                if (o2) {
                  var s = o2.indexOf(t4);
                  s >= 0 && o2.splice(s, 1), 0 === o2.length && delete this.headersMap[r2];
                }
              }
            }, e5.prototype.append = function(e6, t4) {
              var r2 = this, o2 = n.normalizeName(e6);
              Array.isArray(this.headersMap[o2]) || (this.headersMap[o2] = []), Array.isArray(t4) ? t4.forEach(function(e7) {
                r2.headersMap[o2].push(n.normalizeValue(e7));
              }) : this.headersMap[o2].push(n.normalizeValue(t4));
            }, e5.prototype.set = function(e6, t4) {
              var r2 = n.normalizeName(e6);
              if (Array.isArray(t4)) {
                var o2 = [];
                t4.forEach(function(e7) {
                  o2.push(n.normalizeValue(e7));
                }), this.headersMap[r2] = o2;
              } else
                this.headersMap[r2] = [n.normalizeValue(t4)];
            }, e5.prototype.has = function(e6, t4) {
              var r2 = this.headersMap[n.normalizeName(e6)];
              if (!Array.isArray(r2))
                return false;
              if (void 0 !== t4) {
                var o2 = n.normalizeValue(t4);
                return r2.indexOf(o2) >= 0;
              }
              return true;
            }, e5.prototype.get = function(e6) {
              var t4 = this.headersMap[n.normalizeName(e6)];
              return void 0 !== t4 ? t4.concat() : [];
            }, e5.prototype.forEach = function(e6) {
              var t4 = this;
              Object.getOwnPropertyNames(this.headersMap).forEach(function(r2) {
                e6(r2, t4.headersMap[r2]);
              }, this);
            }, e5.prototype.toHeaders = function() {
              if ("undefined" != typeof Headers) {
                var e6 = new Headers();
                return this.forEach(function(t4, r2) {
                  r2.forEach(function(r3) {
                    e6.append(t4, r3);
                  });
                }), e6;
              }
              throw new Error("Headers class is not defined");
            }, e5;
          }();
          t3.BrowserHeaders = o;
        }, function(e4, t3, r) {
          "use strict";
          Object.defineProperty(t3, "__esModule", { value: true });
          var n = r(0);
          t3.BrowserHeaders = n.BrowserHeaders;
        }, function(e4, t3, r) {
          "use strict";
          Object.defineProperty(t3, "__esModule", { value: true }), t3.iterateHeaders = function(e5, t4) {
            for (var r2 = e5[Symbol.iterator](), n = r2.next(); !n.done; )
              t4(n.value[0]), n = r2.next();
          }, t3.iterateHeadersKeys = function(e5, t4) {
            for (var r2 = e5.keys(), n = r2.next(); !n.done; )
              t4(n.value), n = r2.next();
          };
        }, function(e4, t3, r) {
          "use strict";
          Object.defineProperty(t3, "__esModule", { value: true });
          var n = r(2);
          t3.normalizeName = function(e5) {
            if ("string" != typeof e5 && (e5 = String(e5)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e5))
              throw new TypeError("Invalid character in header field name");
            return e5.toLowerCase();
          }, t3.normalizeValue = function(e5) {
            return "string" != typeof e5 && (e5 = String(e5)), e5;
          }, t3.getHeaderValues = function(e5, t4) {
            var r2 = e5;
            if (r2 instanceof Headers && r2.getAll)
              return r2.getAll(t4);
            var n2 = r2.get(t4);
            return n2 && "string" == typeof n2 ? [n2] : n2;
          }, t3.getHeaderKeys = function(e5) {
            var t4 = e5, r2 = {}, o = [];
            return t4.keys ? n.iterateHeadersKeys(t4, function(e6) {
              r2[e6] || (r2[e6] = true, o.push(e6));
            }) : t4.forEach ? t4.forEach(function(e6, t5) {
              r2[t5] || (r2[t5] = true, o.push(t5));
            }) : n.iterateHeaders(t4, function(e6) {
              var t5 = e6[0];
              r2[t5] || (r2[t5] = true, o.push(t5));
            }), o;
          }, t3.splitHeaderValue = function(e5) {
            var t4 = [];
            return e5.split(", ").forEach(function(e6) {
              e6.split(",").forEach(function(e7) {
                t4.push(e7);
              });
            }), t4;
          };
        }]));
      }, 617: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ChunkParser = t2.ChunkType = t2.encodeASCII = t2.decodeASCII = void 0;
        var n, o = r(65);
        function s(e4) {
          return 9 === (t3 = e4) || 10 === t3 || 13 === t3 || e4 >= 32 && e4 <= 126;
          var t3;
        }
        function i(e4) {
          for (var t3 = 0; t3 !== e4.length; ++t3)
            if (!s(e4[t3]))
              throw new Error("Metadata is not valid (printable) ASCII");
          return String.fromCharCode.apply(String, Array.prototype.slice.call(e4));
        }
        function a2(e4) {
          return 128 == (128 & e4.getUint8(0));
        }
        function u(e4) {
          return e4.getUint32(1, false);
        }
        function d2(e4, t3, r2) {
          return e4.byteLength - t3 >= r2;
        }
        function c2(e4, t3, r2) {
          if (e4.slice)
            return e4.slice(t3, r2);
          var n2 = e4.length;
          void 0 !== r2 && (n2 = r2);
          for (var o2 = new Uint8Array(n2 - t3), s2 = 0, i2 = t3; i2 < n2; i2++)
            o2[s2++] = e4[i2];
          return o2;
        }
        t2.decodeASCII = i, t2.encodeASCII = function(e4) {
          for (var t3 = new Uint8Array(e4.length), r2 = 0; r2 !== e4.length; ++r2) {
            var n2 = e4.charCodeAt(r2);
            if (!s(n2))
              throw new Error("Metadata contains invalid ASCII");
            t3[r2] = n2;
          }
          return t3;
        }, function(e4) {
          e4[e4.MESSAGE = 1] = "MESSAGE", e4[e4.TRAILERS = 2] = "TRAILERS";
        }(n = t2.ChunkType || (t2.ChunkType = {}));
        var p = function() {
          function e4() {
            this.buffer = null, this.position = 0;
          }
          return e4.prototype.parse = function(e5, t3) {
            if (0 === e5.length && t3)
              return [];
            var r2, s2 = [];
            if (null == this.buffer)
              this.buffer = e5, this.position = 0;
            else if (this.position === this.buffer.byteLength)
              this.buffer = e5, this.position = 0;
            else {
              var p2 = this.buffer.byteLength - this.position, h = new Uint8Array(p2 + e5.byteLength), f2 = c2(this.buffer, this.position);
              h.set(f2, 0);
              var l = new Uint8Array(e5);
              h.set(l, p2), this.buffer = h, this.position = 0;
            }
            for (; ; ) {
              if (!d2(this.buffer, this.position, 5))
                return s2;
              var g = c2(this.buffer, this.position, this.position + 5), b2 = new DataView(g.buffer, g.byteOffset, g.byteLength), y = u(b2);
              if (!d2(this.buffer, this.position, 5 + y))
                return s2;
              var v = c2(this.buffer, this.position + 5, this.position + 5 + y);
              if (this.position += 5 + y, a2(b2))
                return s2.push({ chunkType: n.TRAILERS, trailers: (r2 = v, new o.Metadata(i(r2))) }), s2;
              s2.push({ chunkType: n.MESSAGE, data: v });
            }
          }, e4;
        }();
        t2.ChunkParser = p;
      }, 8: function(e3, t2) {
        "use strict";
        var r;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.httpStatusToCode = t2.Code = void 0, function(e4) {
          e4[e4.OK = 0] = "OK", e4[e4.Canceled = 1] = "Canceled", e4[e4.Unknown = 2] = "Unknown", e4[e4.InvalidArgument = 3] = "InvalidArgument", e4[e4.DeadlineExceeded = 4] = "DeadlineExceeded", e4[e4.NotFound = 5] = "NotFound", e4[e4.AlreadyExists = 6] = "AlreadyExists", e4[e4.PermissionDenied = 7] = "PermissionDenied", e4[e4.ResourceExhausted = 8] = "ResourceExhausted", e4[e4.FailedPrecondition = 9] = "FailedPrecondition", e4[e4.Aborted = 10] = "Aborted", e4[e4.OutOfRange = 11] = "OutOfRange", e4[e4.Unimplemented = 12] = "Unimplemented", e4[e4.Internal = 13] = "Internal", e4[e4.Unavailable = 14] = "Unavailable", e4[e4.DataLoss = 15] = "DataLoss", e4[e4.Unauthenticated = 16] = "Unauthenticated";
        }(r = t2.Code || (t2.Code = {})), t2.httpStatusToCode = function(e4) {
          switch (e4) {
            case 0:
              return r.Internal;
            case 200:
              return r.OK;
            case 400:
              return r.InvalidArgument;
            case 401:
              return r.Unauthenticated;
            case 403:
              return r.PermissionDenied;
            case 404:
              return r.NotFound;
            case 409:
              return r.Aborted;
            case 412:
              return r.FailedPrecondition;
            case 429:
              return r.ResourceExhausted;
            case 499:
              return r.Canceled;
            case 500:
              return r.Unknown;
            case 501:
              return r.Unimplemented;
            case 503:
              return r.Unavailable;
            case 504:
              return r.DeadlineExceeded;
            default:
              return r.Unknown;
          }
        };
      }, 934: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.client = void 0;
        var n = r(65), o = r(617), s = r(8), i = r(346), a2 = r(57), u = r(882);
        t2.client = function(e4, t3) {
          return new d2(e4, t3);
        };
        var d2 = function() {
          function e4(e5, t3) {
            this.started = false, this.sentFirstMessage = false, this.completed = false, this.closed = false, this.finishedSending = false, this.onHeadersCallbacks = [], this.onMessageCallbacks = [], this.onEndCallbacks = [], this.parser = new o.ChunkParser(), this.methodDefinition = e5, this.props = t3, this.createTransport();
          }
          return e4.prototype.createTransport = function() {
            var e5 = this.props.host + "/" + this.methodDefinition.service.serviceName + "/" + this.methodDefinition.methodName, t3 = { methodDefinition: this.methodDefinition, debug: this.props.debug || false, url: e5, onHeaders: this.onTransportHeaders.bind(this), onChunk: this.onTransportChunk.bind(this), onEnd: this.onTransportEnd.bind(this) };
            this.props.transport ? this.transport = this.props.transport(t3) : this.transport = a2.makeDefaultTransport(t3);
          }, e4.prototype.onTransportHeaders = function(e5, t3) {
            if (this.props.debug && i.debug("onHeaders", e5, t3), this.closed)
              this.props.debug && i.debug("grpc.onHeaders received after request was closed - ignoring");
            else if (0 === t3)
              ;
            else {
              this.responseHeaders = e5, this.props.debug && i.debug("onHeaders.responseHeaders", JSON.stringify(this.responseHeaders, null, 2));
              var r2 = c2(e5);
              this.props.debug && i.debug("onHeaders.gRPCStatus", r2);
              var n2 = r2 && r2 >= 0 ? r2 : s.httpStatusToCode(t3);
              this.props.debug && i.debug("onHeaders.code", n2);
              var o2 = e5.get("grpc-message") || [];
              if (this.props.debug && i.debug("onHeaders.gRPCMessage", o2), this.rawOnHeaders(e5), n2 !== s.Code.OK) {
                var a3 = this.decodeGRPCStatus(o2[0]);
                this.rawOnError(n2, a3, e5);
              }
            }
          }, e4.prototype.onTransportChunk = function(e5) {
            var t3 = this;
            if (this.closed)
              this.props.debug && i.debug("grpc.onChunk received after request was closed - ignoring");
            else {
              var r2 = [];
              try {
                r2 = this.parser.parse(e5);
              } catch (e6) {
                return this.props.debug && i.debug("onChunk.parsing error", e6, e6.message), void this.rawOnError(s.Code.Internal, "parsing error: " + e6.message);
              }
              r2.forEach(function(e6) {
                if (e6.chunkType === o.ChunkType.MESSAGE) {
                  var r3 = t3.methodDefinition.responseType.deserializeBinary(e6.data);
                  t3.rawOnMessage(r3);
                } else
                  e6.chunkType === o.ChunkType.TRAILERS && (t3.responseHeaders ? (t3.responseTrailers = new n.Metadata(e6.trailers), t3.props.debug && i.debug("onChunk.trailers", t3.responseTrailers)) : (t3.responseHeaders = new n.Metadata(e6.trailers), t3.rawOnHeaders(t3.responseHeaders)));
              });
            }
          }, e4.prototype.onTransportEnd = function() {
            if (this.props.debug && i.debug("grpc.onEnd"), this.closed)
              this.props.debug && i.debug("grpc.onEnd received after request was closed - ignoring");
            else if (void 0 !== this.responseTrailers) {
              var e5 = c2(this.responseTrailers);
              if (null !== e5) {
                var t3 = this.responseTrailers.get("grpc-message"), r2 = this.decodeGRPCStatus(t3[0]);
                this.rawOnEnd(e5, r2, this.responseTrailers);
              } else
                this.rawOnError(s.Code.Internal, "Response closed without grpc-status (Trailers provided)");
            } else {
              if (void 0 === this.responseHeaders)
                return void this.rawOnError(s.Code.Unknown, "Response closed without headers");
              var n2 = c2(this.responseHeaders), o2 = this.responseHeaders.get("grpc-message");
              if (this.props.debug && i.debug("grpc.headers only response ", n2, o2), null === n2)
                return void this.rawOnEnd(s.Code.Unknown, "Response closed without grpc-status (Headers only)", this.responseHeaders);
              var a3 = this.decodeGRPCStatus(o2[0]);
              this.rawOnEnd(n2, a3, this.responseHeaders);
            }
          }, e4.prototype.decodeGRPCStatus = function(e5) {
            if (!e5)
              return "";
            try {
              return decodeURIComponent(e5);
            } catch (t3) {
              return e5;
            }
          }, e4.prototype.rawOnEnd = function(e5, t3, r2) {
            var n2 = this;
            this.props.debug && i.debug("rawOnEnd", e5, t3, r2), this.completed || (this.completed = true, this.onEndCallbacks.forEach(function(o2) {
              if (!n2.closed)
                try {
                  o2(e5, t3, r2);
                } catch (e6) {
                  setTimeout(function() {
                    throw e6;
                  }, 0);
                }
            }));
          }, e4.prototype.rawOnHeaders = function(e5) {
            this.props.debug && i.debug("rawOnHeaders", e5), this.completed || this.onHeadersCallbacks.forEach(function(t3) {
              try {
                t3(e5);
              } catch (e6) {
                setTimeout(function() {
                  throw e6;
                }, 0);
              }
            });
          }, e4.prototype.rawOnError = function(e5, t3, r2) {
            var o2 = this;
            void 0 === r2 && (r2 = new n.Metadata()), this.props.debug && i.debug("rawOnError", e5, t3), this.completed || (this.completed = true, this.onEndCallbacks.forEach(function(n2) {
              if (!o2.closed)
                try {
                  n2(e5, t3, r2);
                } catch (e6) {
                  setTimeout(function() {
                    throw e6;
                  }, 0);
                }
            }));
          }, e4.prototype.rawOnMessage = function(e5) {
            var t3 = this;
            this.props.debug && i.debug("rawOnMessage", e5.toObject()), this.completed || this.closed || this.onMessageCallbacks.forEach(function(r2) {
              if (!t3.closed)
                try {
                  r2(e5);
                } catch (e6) {
                  setTimeout(function() {
                    throw e6;
                  }, 0);
                }
            });
          }, e4.prototype.onHeaders = function(e5) {
            this.onHeadersCallbacks.push(e5);
          }, e4.prototype.onMessage = function(e5) {
            this.onMessageCallbacks.push(e5);
          }, e4.prototype.onEnd = function(e5) {
            this.onEndCallbacks.push(e5);
          }, e4.prototype.start = function(e5) {
            if (this.started)
              throw new Error("Client already started - cannot .start()");
            this.started = true;
            var t3 = new n.Metadata(e5 || {});
            t3.set("content-type", "application/grpc-web+proto"), t3.set("x-grpc-web", "1"), this.transport.start(t3);
          }, e4.prototype.send = function(e5) {
            if (!this.started)
              throw new Error("Client not started - .start() must be called before .send()");
            if (this.closed)
              throw new Error("Client already closed - cannot .send()");
            if (this.finishedSending)
              throw new Error("Client already finished sending - cannot .send()");
            if (!this.methodDefinition.requestStream && this.sentFirstMessage)
              throw new Error("Message already sent for non-client-streaming method - cannot .send()");
            this.sentFirstMessage = true;
            var t3 = u.frameRequest(e5);
            this.transport.sendMessage(t3);
          }, e4.prototype.finishSend = function() {
            if (!this.started)
              throw new Error("Client not started - .finishSend() must be called before .close()");
            if (this.closed)
              throw new Error("Client already closed - cannot .send()");
            if (this.finishedSending)
              throw new Error("Client already finished sending - cannot .finishSend()");
            this.finishedSending = true, this.transport.finishSend();
          }, e4.prototype.close = function() {
            if (!this.started)
              throw new Error("Client not started - .start() must be called before .close()");
            if (this.closed)
              throw new Error("Client already closed - cannot .close()");
            this.closed = true, this.props.debug && i.debug("request.abort aborting request"), this.transport.cancel();
          }, e4;
        }();
        function c2(e4) {
          var t3 = e4.get("grpc-status") || [];
          if (t3.length > 0)
            try {
              var r2 = t3[0];
              return parseInt(r2, 10);
            } catch (e5) {
              return null;
            }
          return null;
        }
      }, 346: function(e3, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.debug = void 0, t2.debug = function() {
          for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
            e4[t3] = arguments[t3];
          console.debug ? console.debug.apply(null, e4) : console.log.apply(null, e4);
        };
      }, 607: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.grpc = void 0;
        var n, o = r(418), s = r(57), i = r(229), a2 = r(540), u = r(210), d2 = r(859), c2 = r(8), p = r(938), h = r(35), f2 = r(934);
        (n = t2.grpc || (t2.grpc = {})).setDefaultTransport = s.setDefaultTransportFactory, n.CrossBrowserHttpTransport = d2.CrossBrowserHttpTransport, n.FetchReadableStreamTransport = i.FetchReadableStreamTransport, n.XhrTransport = u.XhrTransport, n.WebsocketTransport = a2.WebsocketTransport, n.Code = c2.Code, n.Metadata = o.BrowserHeaders, n.client = function(e4, t3) {
          return f2.client(e4, t3);
        }, n.invoke = p.invoke, n.unary = h.unary;
      }, 938: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.invoke = void 0;
        var n = r(934);
        t2.invoke = function(e4, t3) {
          if (e4.requestStream)
            throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");
          var r2 = n.client(e4, { host: t3.host, transport: t3.transport, debug: t3.debug });
          return t3.onHeaders && r2.onHeaders(t3.onHeaders), t3.onMessage && r2.onMessage(t3.onMessage), t3.onEnd && r2.onEnd(t3.onEnd), r2.start(t3.metadata), r2.send(t3.request), r2.finishSend(), { close: function() {
            r2.close();
          } };
        };
      }, 65: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Metadata = void 0;
        var n = r(418);
        Object.defineProperty(t2, "Metadata", { enumerable: true, get: function() {
          return n.BrowserHeaders;
        } });
      }, 57: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.makeDefaultTransport = t2.setDefaultTransportFactory = void 0;
        var n = r(859), o = function(e4) {
          return n.CrossBrowserHttpTransport({ withCredentials: false })(e4);
        };
        t2.setDefaultTransportFactory = function(e4) {
          o = e4;
        }, t2.makeDefaultTransport = function(e4) {
          return o(e4);
        };
      }, 229: function(e3, t2, r) {
        "use strict";
        var n = this && this.__assign || function() {
          return (n = Object.assign || function(e4) {
            for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
              for (var o2 in t3 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e4[o2] = t3[o2]);
            return e4;
          }).apply(this, arguments);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.detectFetchSupport = t2.FetchReadableStreamTransport = void 0;
        var o = r(65), s = r(346);
        t2.FetchReadableStreamTransport = function(e4) {
          return function(t3) {
            return function(e5, t4) {
              return e5.debug && s.debug("fetchRequest", e5), new i(e5, t4);
            }(t3, e4);
          };
        };
        var i = function() {
          function e4(e5, t3) {
            this.cancelled = false, this.controller = self.AbortController && new AbortController(), this.options = e5, this.init = t3;
          }
          return e4.prototype.pump = function(e5, t3) {
            var r2 = this;
            if (this.reader = e5, this.cancelled)
              return this.options.debug && s.debug("Fetch.pump.cancel at first pump"), void this.reader.cancel().catch(function(e6) {
                r2.options.debug && s.debug("Fetch.pump.reader.cancel exception", e6);
              });
            this.reader.read().then(function(e6) {
              if (e6.done)
                return r2.options.onEnd(), t3;
              r2.options.onChunk(e6.value), r2.pump(r2.reader, t3);
            }).catch(function(e6) {
              r2.cancelled ? r2.options.debug && s.debug("Fetch.catch - request cancelled") : (r2.cancelled = true, r2.options.debug && s.debug("Fetch.catch", e6.message), r2.options.onEnd(e6));
            });
          }, e4.prototype.send = function(e5) {
            var t3 = this;
            fetch(this.options.url, n(n({}, this.init), { headers: this.metadata.toHeaders(), method: "POST", body: e5, signal: this.controller && this.controller.signal })).then(function(e6) {
              if (t3.options.debug && s.debug("Fetch.response", e6), t3.options.onHeaders(new o.Metadata(e6.headers), e6.status), !e6.body)
                return e6;
              t3.pump(e6.body.getReader(), e6);
            }).catch(function(e6) {
              t3.cancelled ? t3.options.debug && s.debug("Fetch.catch - request cancelled") : (t3.cancelled = true, t3.options.debug && s.debug("Fetch.catch", e6.message), t3.options.onEnd(e6));
            });
          }, e4.prototype.sendMessage = function(e5) {
            this.send(e5);
          }, e4.prototype.finishSend = function() {
          }, e4.prototype.start = function(e5) {
            this.metadata = e5;
          }, e4.prototype.cancel = function() {
            var e5 = this;
            this.cancelled ? this.options.debug && s.debug("Fetch.cancel already cancelled") : (this.cancelled = true, this.controller ? (this.options.debug && s.debug("Fetch.cancel.controller.abort"), this.controller.abort()) : this.options.debug && s.debug("Fetch.cancel.missing abort controller"), this.reader ? (this.options.debug && s.debug("Fetch.cancel.reader.cancel"), this.reader.cancel().catch(function(t3) {
              e5.options.debug && s.debug("Fetch.cancel.reader.cancel exception", t3);
            })) : this.options.debug && s.debug("Fetch.cancel before reader"));
          }, e4;
        }();
        t2.detectFetchSupport = function() {
          return "undefined" != typeof Response && Response.prototype.hasOwnProperty("body") && "function" == typeof Headers;
        };
      }, 859: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CrossBrowserHttpTransport = void 0;
        var n = r(229), o = r(210);
        t2.CrossBrowserHttpTransport = function(e4) {
          if (n.detectFetchSupport()) {
            var t3 = { credentials: e4.withCredentials ? "include" : "same-origin" };
            return n.FetchReadableStreamTransport(t3);
          }
          return o.XhrTransport({ withCredentials: e4.withCredentials });
        };
      }, 210: function(e3, t2, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e4, t3) {
          return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e5, t4) {
            e5.__proto__ = t4;
          } || function(e5, t4) {
            for (var r2 in t4)
              Object.prototype.hasOwnProperty.call(t4, r2) && (e5[r2] = t4[r2]);
          })(e4, t3);
        }, function(e4, t3) {
          function r2() {
            this.constructor = e4;
          }
          n(e4, t3), e4.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
        });
        Object.defineProperty(t2, "__esModule", { value: true }), t2.stringToArrayBuffer = t2.MozChunkedArrayBufferXHR = t2.XHR = t2.XhrTransport = void 0;
        var s = r(65), i = r(346), a2 = r(849);
        t2.XhrTransport = function(e4) {
          return function(t3) {
            if (a2.detectMozXHRSupport())
              return new d2(t3, e4);
            if (a2.detectXHROverrideMimeTypeSupport())
              return new u(t3, e4);
            throw new Error("This environment's XHR implementation cannot support binary transfer.");
          };
        };
        var u = function() {
          function e4(e5, t3) {
            this.options = e5, this.init = t3;
          }
          return e4.prototype.onProgressEvent = function() {
            this.options.debug && i.debug("XHR.onProgressEvent.length: ", this.xhr.response.length);
            var e5 = this.xhr.response.substr(this.index);
            this.index = this.xhr.response.length;
            var t3 = p(e5);
            this.options.onChunk(t3);
          }, e4.prototype.onLoadEvent = function() {
            this.options.debug && i.debug("XHR.onLoadEvent"), this.options.onEnd();
          }, e4.prototype.onStateChange = function() {
            this.options.debug && i.debug("XHR.onStateChange", this.xhr.readyState), this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED && this.options.onHeaders(new s.Metadata(this.xhr.getAllResponseHeaders()), this.xhr.status);
          }, e4.prototype.sendMessage = function(e5) {
            this.xhr.send(e5);
          }, e4.prototype.finishSend = function() {
          }, e4.prototype.start = function(e5) {
            var t3 = this;
            this.metadata = e5;
            var r2 = new XMLHttpRequest();
            this.xhr = r2, r2.open("POST", this.options.url), this.configureXhr(), this.metadata.forEach(function(e6, t4) {
              r2.setRequestHeader(e6, t4.join(", "));
            }), r2.withCredentials = Boolean(this.init.withCredentials), r2.addEventListener("readystatechange", this.onStateChange.bind(this)), r2.addEventListener("progress", this.onProgressEvent.bind(this)), r2.addEventListener("loadend", this.onLoadEvent.bind(this)), r2.addEventListener("error", function(e6) {
              t3.options.debug && i.debug("XHR.error", e6), t3.options.onEnd(e6.error);
            });
          }, e4.prototype.configureXhr = function() {
            this.xhr.responseType = "text", this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
          }, e4.prototype.cancel = function() {
            this.options.debug && i.debug("XHR.abort"), this.xhr.abort();
          }, e4;
        }();
        t2.XHR = u;
        var d2 = function(e4) {
          function t3() {
            return null !== e4 && e4.apply(this, arguments) || this;
          }
          return o(t3, e4), t3.prototype.configureXhr = function() {
            this.options.debug && i.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"), this.xhr.responseType = "moz-chunked-arraybuffer";
          }, t3.prototype.onProgressEvent = function() {
            var e5 = this.xhr.response;
            this.options.debug && i.debug("MozXHR.onProgressEvent: ", new Uint8Array(e5)), this.options.onChunk(new Uint8Array(e5));
          }, t3;
        }(u);
        function c2(e4, t3) {
          var r2 = e4.charCodeAt(t3);
          if (r2 >= 55296 && r2 <= 56319) {
            var n2 = e4.charCodeAt(t3 + 1);
            n2 >= 56320 && n2 <= 57343 && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320));
          }
          return r2;
        }
        function p(e4) {
          for (var t3 = new Uint8Array(e4.length), r2 = 0, n2 = 0; n2 < e4.length; n2++) {
            var o2 = String.prototype.codePointAt ? e4.codePointAt(n2) : c2(e4, n2);
            t3[r2++] = 255 & o2;
          }
          return t3;
        }
        t2.MozChunkedArrayBufferXHR = d2, t2.stringToArrayBuffer = p;
      }, 849: function(e3, t2) {
        "use strict";
        var r;
        function n() {
          if (void 0 !== r)
            return r;
          if (XMLHttpRequest) {
            r = new XMLHttpRequest();
            try {
              r.open("GET", "https://localhost");
            } catch (e4) {
            }
          }
          return r;
        }
        function o(e4) {
          var t3 = n();
          if (!t3)
            return false;
          try {
            return t3.responseType = e4, t3.responseType === e4;
          } catch (e5) {
          }
          return false;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.detectXHROverrideMimeTypeSupport = t2.detectMozXHRSupport = t2.xhrSupportsResponseType = void 0, t2.xhrSupportsResponseType = o, t2.detectMozXHRSupport = function() {
          return "undefined" != typeof XMLHttpRequest && o("moz-chunked-arraybuffer");
        }, t2.detectXHROverrideMimeTypeSupport = function() {
          return "undefined" != typeof XMLHttpRequest && XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType");
        };
      }, 540: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.WebsocketTransport = void 0;
        var n, o = r(346), s = r(617);
        !function(e4) {
          e4[e4.FINISH_SEND = 1] = "FINISH_SEND";
        }(n || (n = {}));
        var i = new Uint8Array([1]);
        t2.WebsocketTransport = function() {
          return function(e4) {
            return function(e5) {
              e5.debug && o.debug("websocketRequest", e5);
              var t3, r2 = function(e6) {
                if ("https://" === e6.substr(0, 8))
                  return "wss://" + e6.substr(8);
                if ("http://" === e6.substr(0, 7))
                  return "ws://" + e6.substr(7);
                throw new Error("Websocket transport constructed with non-https:// or http:// host.");
              }(e5.url), a2 = [];
              function u(e6) {
                if (e6 === n.FINISH_SEND)
                  t3.send(i);
                else {
                  var r3 = e6, o2 = new Int8Array(r3.byteLength + 1);
                  o2.set(new Uint8Array([0])), o2.set(r3, 1), t3.send(o2);
                }
              }
              return { sendMessage: function(e6) {
                t3 && t3.readyState !== t3.CONNECTING ? u(e6) : a2.push(e6);
              }, finishSend: function() {
                t3 && t3.readyState !== t3.CONNECTING ? u(n.FINISH_SEND) : a2.push(n.FINISH_SEND);
              }, start: function(n2) {
                (t3 = new WebSocket(r2, ["grpc-websockets"])).binaryType = "arraybuffer", t3.onopen = function() {
                  var r3;
                  e5.debug && o.debug("websocketRequest.onopen"), t3.send((r3 = "", n2.forEach(function(e6, t4) {
                    r3 += e6 + ": " + t4.join(", ") + "\r\n";
                  }), s.encodeASCII(r3))), a2.forEach(function(e6) {
                    u(e6);
                  });
                }, t3.onclose = function(t4) {
                  e5.debug && o.debug("websocketRequest.onclose", t4), e5.onEnd();
                }, t3.onerror = function(t4) {
                  e5.debug && o.debug("websocketRequest.onerror", t4);
                }, t3.onmessage = function(t4) {
                  e5.onChunk(new Uint8Array(t4.data));
                };
              }, cancel: function() {
                e5.debug && o.debug("websocket.abort"), t3.close();
              } };
            }(e4);
          };
        };
      }, 35: function(e3, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.unary = void 0;
        var n = r(65), o = r(934);
        t2.unary = function(e4, t3) {
          if (e4.responseStream)
            throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");
          if (e4.requestStream)
            throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");
          var r2 = null, s = null, i = o.client(e4, { host: t3.host, transport: t3.transport, debug: t3.debug });
          return i.onHeaders(function(e5) {
            r2 = e5;
          }), i.onMessage(function(e5) {
            s = e5;
          }), i.onEnd(function(e5, o2, i2) {
            t3.onEnd({ status: e5, statusMessage: o2, headers: r2 || new n.Metadata(), message: s, trailers: i2 });
          }), i.start(t3.metadata), i.send(t3.request), i.finishSend(), { close: function() {
            i.close();
          } };
        };
      }, 882: function(e3, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.frameRequest = void 0, t2.frameRequest = function(e4) {
          var t3 = e4.serializeBinary(), r = new ArrayBuffer(t3.byteLength + 5);
          return new DataView(r, 1, 4).setUint32(0, t3.length, false), new Uint8Array(r, 5).set(t3), new Uint8Array(r);
        };
      } }, t = {};
      return function r(n) {
        if (t[n])
          return t[n].exports;
        var o = t[n] = { exports: {} };
        return e2[n].call(o.exports, o, o.exports, r), o.exports;
      }(607);
    }());
  }
});

// node_modules/.pnpm/google-protobuf@3.21.2/node_modules/google-protobuf/google-protobuf.js
var require_google_protobuf = __commonJS({
  "node_modules/.pnpm/google-protobuf@3.21.2/node_modules/google-protobuf/google-protobuf.js"(exports, module) {
    "use strict";
    var $jscomp = $jscomp || {};
    $jscomp.scope = {};
    $jscomp.findInternal = function(a2, b2, c2) {
      a2 instanceof String && (a2 = String(a2));
      for (var d2 = a2.length, e2 = 0; e2 < d2; e2++) {
        var f2 = a2[e2];
        if (b2.call(c2, f2, e2, a2))
          return { i: e2, v: f2 };
      }
      return { i: -1, v: void 0 };
    };
    $jscomp.ASSUME_ES5 = false;
    $jscomp.ASSUME_NO_NATIVE_MAP = false;
    $jscomp.ASSUME_NO_NATIVE_SET = false;
    $jscomp.SIMPLE_FROUND_POLYFILL = false;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a2, b2, c2) {
      a2 != Array.prototype && a2 != Object.prototype && (a2[b2] = c2.value);
    };
    $jscomp.getGlobal = function(a2) {
      return "undefined" != typeof window && window === a2 ? a2 : "undefined" != typeof global && null != global ? global : a2;
    };
    $jscomp.global = $jscomp.getGlobal(exports);
    $jscomp.polyfill = function(a2, b2, c2, d2) {
      if (b2) {
        c2 = $jscomp.global;
        a2 = a2.split(".");
        for (d2 = 0; d2 < a2.length - 1; d2++) {
          var e2 = a2[d2];
          e2 in c2 || (c2[e2] = {});
          c2 = c2[e2];
        }
        a2 = a2[a2.length - 1];
        d2 = c2[a2];
        b2 = b2(d2);
        b2 != d2 && null != b2 && $jscomp.defineProperty(c2, a2, { configurable: true, writable: true, value: b2 });
      }
    };
    $jscomp.polyfill("Array.prototype.findIndex", function(a2) {
      return a2 ? a2 : function(a3, c2) {
        return $jscomp.findInternal(this, a3, c2).i;
      };
    }, "es6", "es3");
    $jscomp.checkStringArgs = function(a2, b2, c2) {
      if (null == a2)
        throw new TypeError("The 'this' value for String.prototype." + c2 + " must not be null or undefined");
      if (b2 instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c2 + " must not be a regular expression");
      return a2 + "";
    };
    $jscomp.polyfill("String.prototype.endsWith", function(a2) {
      return a2 ? a2 : function(a3, c2) {
        var b2 = $jscomp.checkStringArgs(this, a3, "endsWith");
        a3 += "";
        void 0 === c2 && (c2 = b2.length);
        c2 = Math.max(0, Math.min(c2 | 0, b2.length));
        for (var e2 = a3.length; 0 < e2 && 0 < c2; )
          if (b2[--c2] != a3[--e2])
            return false;
        return 0 >= e2;
      };
    }, "es6", "es3");
    $jscomp.polyfill("Array.prototype.find", function(a2) {
      return a2 ? a2 : function(a3, c2) {
        return $jscomp.findInternal(this, a3, c2).v;
      };
    }, "es6", "es3");
    $jscomp.polyfill("String.prototype.startsWith", function(a2) {
      return a2 ? a2 : function(a3, c2) {
        var b2 = $jscomp.checkStringArgs(this, a3, "startsWith");
        a3 += "";
        var e2 = b2.length, f2 = a3.length;
        c2 = Math.max(0, Math.min(c2 | 0, b2.length));
        for (var g = 0; g < f2 && c2 < e2; )
          if (b2[c2++] != a3[g++])
            return false;
        return g >= f2;
      };
    }, "es6", "es3");
    $jscomp.polyfill("String.prototype.repeat", function(a2) {
      return a2 ? a2 : function(a3) {
        var b2 = $jscomp.checkStringArgs(this, null, "repeat");
        if (0 > a3 || 1342177279 < a3)
          throw new RangeError("Invalid count value");
        a3 |= 0;
        for (var d2 = ""; a3; )
          if (a3 & 1 && (d2 += b2), a3 >>>= 1)
            b2 += b2;
        return d2;
      };
    }, "es6", "es3");
    var COMPILED = true;
    var goog = goog || {};
    goog.global = exports || self;
    goog.exportPath_ = function(a2, b2, c2) {
      a2 = a2.split(".");
      c2 = c2 || goog.global;
      a2[0] in c2 || "undefined" == typeof c2.execScript || c2.execScript("var " + a2[0]);
      for (var d2; a2.length && (d2 = a2.shift()); )
        a2.length || void 0 === b2 ? c2 = c2[d2] && c2[d2] !== Object.prototype[d2] ? c2[d2] : c2[d2] = {} : c2[d2] = b2;
    };
    goog.define = function(a2, b2) {
      if (!COMPILED) {
        var c2 = goog.global.CLOSURE_UNCOMPILED_DEFINES, d2 = goog.global.CLOSURE_DEFINES;
        c2 && void 0 === c2.nodeType && Object.prototype.hasOwnProperty.call(c2, a2) ? b2 = c2[a2] : d2 && void 0 === d2.nodeType && Object.prototype.hasOwnProperty.call(d2, a2) && (b2 = d2[a2]);
      }
      return b2;
    };
    goog.FEATURESET_YEAR = 2012;
    goog.DEBUG = true;
    goog.LOCALE = "en";
    goog.TRUSTED_SITE = true;
    goog.STRICT_MODE_COMPATIBLE = false;
    goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
    goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
    goog.provide = function(a2) {
      if (goog.isInModuleLoader_())
        throw Error("goog.provide cannot be used within a module.");
      if (!COMPILED && goog.isProvided_(a2))
        throw Error('Namespace "' + a2 + '" already declared.');
      goog.constructNamespace_(a2);
    };
    goog.constructNamespace_ = function(a2, b2) {
      if (!COMPILED) {
        delete goog.implicitNamespaces_[a2];
        for (var c2 = a2; (c2 = c2.substring(0, c2.lastIndexOf("."))) && !goog.getObjectByName(c2); )
          goog.implicitNamespaces_[c2] = true;
      }
      goog.exportPath_(a2, b2);
    };
    goog.getScriptNonce = function(a2) {
      if (a2 && a2 != goog.global)
        return goog.getScriptNonce_(a2.document);
      null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
      return goog.cspNonce_;
    };
    goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
    goog.cspNonce_ = null;
    goog.getScriptNonce_ = function(a2) {
      return (a2 = a2.querySelector && a2.querySelector("script[nonce]")) && (a2 = a2.nonce || a2.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a2) ? a2 : "";
    };
    goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    goog.module = function(a2) {
      if ("string" !== typeof a2 || !a2 || -1 == a2.search(goog.VALID_MODULE_RE_))
        throw Error("Invalid module identifier");
      if (!goog.isInGoogModuleLoader_())
        throw Error("Module " + a2 + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
      if (goog.moduleLoaderState_.moduleName)
        throw Error("goog.module may only be called once per module.");
      goog.moduleLoaderState_.moduleName = a2;
      if (!COMPILED) {
        if (goog.isProvided_(a2))
          throw Error('Namespace "' + a2 + '" already declared.');
        delete goog.implicitNamespaces_[a2];
      }
    };
    goog.module.get = function(a2) {
      return goog.module.getInternal_(a2);
    };
    goog.module.getInternal_ = function(a2) {
      if (!COMPILED) {
        if (a2 in goog.loadedModules_)
          return goog.loadedModules_[a2].exports;
        if (!goog.implicitNamespaces_[a2])
          return a2 = goog.getObjectByName(a2), null != a2 ? a2 : null;
      }
      return null;
    };
    goog.ModuleType = { ES6: "es6", GOOG: "goog" };
    goog.moduleLoaderState_ = null;
    goog.isInModuleLoader_ = function() {
      return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
    };
    goog.isInGoogModuleLoader_ = function() {
      return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
    };
    goog.isInEs6ModuleLoader_ = function() {
      if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
        return true;
      var a2 = goog.global.$jscomp;
      return a2 ? "function" != typeof a2.getCurrentModulePath ? false : !!a2.getCurrentModulePath() : false;
    };
    goog.module.declareLegacyNamespace = function() {
      if (!COMPILED && !goog.isInGoogModuleLoader_())
        throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
      if (!COMPILED && !goog.moduleLoaderState_.moduleName)
        throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
      goog.moduleLoaderState_.declareLegacyNamespace = true;
    };
    goog.declareModuleId = function(a2) {
      if (!COMPILED) {
        if (!goog.isInEs6ModuleLoader_())
          throw Error("goog.declareModuleId may only be called from within an ES6 module");
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
          throw Error("goog.declareModuleId may only be called once per module.");
        if (a2 in goog.loadedModules_)
          throw Error('Module with namespace "' + a2 + '" already exists.');
      }
      if (goog.moduleLoaderState_)
        goog.moduleLoaderState_.moduleName = a2;
      else {
        var b2 = goog.global.$jscomp;
        if (!b2 || "function" != typeof b2.getCurrentModulePath)
          throw Error('Module with namespace "' + a2 + '" has been loaded incorrectly.');
        b2 = b2.require(b2.getCurrentModulePath());
        goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: a2 };
      }
    };
    goog.setTestOnly = function(a2) {
      if (goog.DISALLOW_TEST_ONLY_CODE)
        throw a2 = a2 || "", Error("Importing test-only code into non-debug environment" + (a2 ? ": " + a2 : "."));
    };
    goog.forwardDeclare = function(a2) {
    };
    COMPILED || (goog.isProvided_ = function(a2) {
      return a2 in goog.loadedModules_ || !goog.implicitNamespaces_[a2] && null != goog.getObjectByName(a2);
    }, goog.implicitNamespaces_ = { "goog.module": true });
    goog.getObjectByName = function(a2, b2) {
      a2 = a2.split(".");
      b2 = b2 || goog.global;
      for (var c2 = 0; c2 < a2.length; c2++)
        if (b2 = b2[a2[c2]], null == b2)
          return null;
      return b2;
    };
    goog.globalize = function(a2, b2) {
      b2 = b2 || goog.global;
      for (var c2 in a2)
        b2[c2] = a2[c2];
    };
    goog.addDependency = function(a2, b2, c2, d2) {
      !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a2, b2, c2, d2);
    };
    goog.ENABLE_DEBUG_LOADER = true;
    goog.logToConsole_ = function(a2) {
      goog.global.console && goog.global.console.error(a2);
    };
    goog.require = function(a2) {
      if (!COMPILED) {
        goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a2);
        if (goog.isProvided_(a2)) {
          if (goog.isInModuleLoader_())
            return goog.module.getInternal_(a2);
        } else if (goog.ENABLE_DEBUG_LOADER) {
          var b2 = goog.moduleLoaderState_;
          goog.moduleLoaderState_ = null;
          try {
            goog.debugLoader_.load_(a2);
          } finally {
            goog.moduleLoaderState_ = b2;
          }
        }
        return null;
      }
    };
    goog.requireType = function(a2) {
      return {};
    };
    goog.basePath = "";
    goog.nullFunction = function() {
    };
    goog.abstractMethod = function() {
      throw Error("unimplemented abstract method");
    };
    goog.addSingletonGetter = function(a2) {
      a2.instance_ = void 0;
      a2.getInstance = function() {
        if (a2.instance_)
          return a2.instance_;
        goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a2);
        return a2.instance_ = new a2();
      };
    };
    goog.instantiatedSingletons_ = [];
    goog.LOAD_MODULE_USING_EVAL = true;
    goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
    goog.loadedModules_ = {};
    goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
    goog.TRANSPILE = "detect";
    goog.ASSUME_ES_MODULES_TRANSPILED = false;
    goog.TRANSPILE_TO_LANGUAGE = "";
    goog.TRANSPILER = "transpile.js";
    goog.hasBadLetScoping = null;
    goog.useSafari10Workaround = function() {
      if (null == goog.hasBadLetScoping) {
        try {
          var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
        } catch (b2) {
          a = false;
        }
        goog.hasBadLetScoping = a;
      }
      return goog.hasBadLetScoping;
    };
    goog.workaroundSafari10EvalBug = function(a2) {
      return "(function(){" + a2 + "\n;})();\n";
    };
    goog.loadModule = function(a2) {
      var b2 = goog.moduleLoaderState_;
      try {
        goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
        if (goog.isFunction(a2))
          var c2 = a2.call(void 0, {});
        else if ("string" === typeof a2)
          goog.useSafari10Workaround() && (a2 = goog.workaroundSafari10EvalBug(a2)), c2 = goog.loadModuleFromSource_.call(void 0, a2);
        else
          throw Error("Invalid module definition");
        var d2 = goog.moduleLoaderState_.moduleName;
        if ("string" === typeof d2 && d2)
          goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(
            d2,
            c2
          ) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c2 && null != c2 && Object.seal(c2), goog.loadedModules_[d2] = { exports: c2, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
        else
          throw Error('Invalid module name "' + d2 + '"');
      } finally {
        goog.moduleLoaderState_ = b2;
      }
    };
    goog.loadModuleFromSource_ = function(a) {
      eval(a);
      return {};
    };
    goog.normalizePath_ = function(a2) {
      a2 = a2.split("/");
      for (var b2 = 0; b2 < a2.length; )
        "." == a2[b2] ? a2.splice(b2, 1) : b2 && ".." == a2[b2] && a2[b2 - 1] && ".." != a2[b2 - 1] ? a2.splice(--b2, 2) : b2++;
      return a2.join("/");
    };
    goog.loadFileSync_ = function(a2) {
      if (goog.global.CLOSURE_LOAD_FILE_SYNC)
        return goog.global.CLOSURE_LOAD_FILE_SYNC(a2);
      try {
        var b2 = new goog.global.XMLHttpRequest();
        b2.open("get", a2, false);
        b2.send();
        return 0 == b2.status || 200 == b2.status ? b2.responseText : null;
      } catch (c2) {
        return null;
      }
    };
    goog.transpile_ = function(a2, b2, c2) {
      var d2 = goog.global.$jscomp;
      d2 || (goog.global.$jscomp = d2 = {});
      var e2 = d2.transpile;
      if (!e2) {
        var f2 = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f2);
        if (g) {
          (function() {
            (0, eval)(g + "\n//# sourceURL=" + f2);
          }).call(goog.global);
          if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
            throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
          goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
          d2 = goog.global.$jscomp;
          e2 = d2.transpile;
        }
      }
      e2 || (e2 = d2.transpile = function(a3, b3) {
        goog.logToConsole_(b3 + " requires transpilation but no transpiler was found.");
        return a3;
      });
      return e2(a2, b2, c2);
    };
    goog.typeOf = function(a2) {
      var b2 = typeof a2;
      if ("object" == b2)
        if (a2) {
          if (a2 instanceof Array)
            return "array";
          if (a2 instanceof Object)
            return b2;
          var c2 = Object.prototype.toString.call(a2);
          if ("[object Window]" == c2)
            return "object";
          if ("[object Array]" == c2 || "number" == typeof a2.length && "undefined" != typeof a2.splice && "undefined" != typeof a2.propertyIsEnumerable && !a2.propertyIsEnumerable("splice"))
            return "array";
          if ("[object Function]" == c2 || "undefined" != typeof a2.call && "undefined" != typeof a2.propertyIsEnumerable && !a2.propertyIsEnumerable("call"))
            return "function";
        } else
          return "null";
      else if ("function" == b2 && "undefined" == typeof a2.call)
        return "object";
      return b2;
    };
    goog.isArray = function(a2) {
      return "array" == goog.typeOf(a2);
    };
    goog.isArrayLike = function(a2) {
      var b2 = goog.typeOf(a2);
      return "array" == b2 || "object" == b2 && "number" == typeof a2.length;
    };
    goog.isDateLike = function(a2) {
      return goog.isObject(a2) && "function" == typeof a2.getFullYear;
    };
    goog.isFunction = function(a2) {
      return "function" == goog.typeOf(a2);
    };
    goog.isObject = function(a2) {
      var b2 = typeof a2;
      return "object" == b2 && null != a2 || "function" == b2;
    };
    goog.getUid = function(a2) {
      return Object.prototype.hasOwnProperty.call(a2, goog.UID_PROPERTY_) && a2[goog.UID_PROPERTY_] || (a2[goog.UID_PROPERTY_] = ++goog.uidCounter_);
    };
    goog.hasUid = function(a2) {
      return !!a2[goog.UID_PROPERTY_];
    };
    goog.removeUid = function(a2) {
      null !== a2 && "removeAttribute" in a2 && a2.removeAttribute(goog.UID_PROPERTY_);
      try {
        delete a2[goog.UID_PROPERTY_];
      } catch (b2) {
      }
    };
    goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
    goog.uidCounter_ = 0;
    goog.getHashCode = goog.getUid;
    goog.removeHashCode = goog.removeUid;
    goog.cloneObject = function(a2) {
      var b2 = goog.typeOf(a2);
      if ("object" == b2 || "array" == b2) {
        if ("function" === typeof a2.clone)
          return a2.clone();
        b2 = "array" == b2 ? [] : {};
        for (var c2 in a2)
          b2[c2] = goog.cloneObject(a2[c2]);
        return b2;
      }
      return a2;
    };
    goog.bindNative_ = function(a2, b2, c2) {
      return a2.call.apply(a2.bind, arguments);
    };
    goog.bindJs_ = function(a2, b2, c2) {
      if (!a2)
        throw Error();
      if (2 < arguments.length) {
        var d2 = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c3 = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c3, d2);
          return a2.apply(b2, c3);
        };
      }
      return function() {
        return a2.apply(b2, arguments);
      };
    };
    goog.bind = function(a2, b2, c2) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
      return goog.bind.apply(null, arguments);
    };
    goog.partial = function(a2, b2) {
      var c2 = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b3 = c2.slice();
        b3.push.apply(b3, arguments);
        return a2.apply(this, b3);
      };
    };
    goog.mixin = function(a2, b2) {
      for (var c2 in b2)
        a2[c2] = b2[c2];
    };
    goog.now = goog.TRUSTED_SITE && Date.now || function() {
      return +/* @__PURE__ */ new Date();
    };
    goog.globalEval = function(a2) {
      if (goog.global.execScript)
        goog.global.execScript(a2, "JavaScript");
      else if (goog.global.eval) {
        if (null == goog.evalWorksForGlobals_) {
          try {
            goog.global.eval("var _evalTest_ = 1;");
          } catch (d2) {
          }
          if ("undefined" != typeof goog.global._evalTest_) {
            try {
              delete goog.global._evalTest_;
            } catch (d2) {
            }
            goog.evalWorksForGlobals_ = true;
          } else
            goog.evalWorksForGlobals_ = false;
        }
        if (goog.evalWorksForGlobals_)
          goog.global.eval(a2);
        else {
          var b2 = goog.global.document, c2 = b2.createElement("script");
          c2.type = "text/javascript";
          c2.defer = false;
          c2.appendChild(b2.createTextNode(a2));
          b2.head.appendChild(c2);
          b2.head.removeChild(c2);
        }
      } else
        throw Error("goog.globalEval not available");
    };
    goog.evalWorksForGlobals_ = null;
    goog.getCssName = function(a2, b2) {
      if ("." == String(a2).charAt(0))
        throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a2);
      var c2 = function(a3) {
        return goog.cssNameMapping_[a3] || a3;
      }, d2 = function(a3) {
        a3 = a3.split("-");
        for (var b3 = [], d3 = 0; d3 < a3.length; d3++)
          b3.push(c2(a3[d3]));
        return b3.join("-");
      };
      d2 = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c2 : d2 : function(a3) {
        return a3;
      };
      a2 = b2 ? a2 + "-" + d2(b2) : d2(a2);
      return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a2) : a2;
    };
    goog.setCssNameMapping = function(a2, b2) {
      goog.cssNameMapping_ = a2;
      goog.cssNameMappingStyle_ = b2;
    };
    !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
    goog.getMsg = function(a2, b2, c2) {
      c2 && c2.html && (a2 = a2.replace(/</g, "&lt;"));
      b2 && (a2 = a2.replace(/\{\$([^}]+)}/g, function(a3, c3) {
        return null != b2 && c3 in b2 ? b2[c3] : a3;
      }));
      return a2;
    };
    goog.getMsgWithFallback = function(a2, b2) {
      return a2;
    };
    goog.exportSymbol = function(a2, b2, c2) {
      goog.exportPath_(a2, b2, c2);
    };
    goog.exportProperty = function(a2, b2, c2) {
      a2[b2] = c2;
    };
    goog.inherits = function(a2, b2) {
      function c2() {
      }
      c2.prototype = b2.prototype;
      a2.superClass_ = b2.prototype;
      a2.prototype = new c2();
      a2.prototype.constructor = a2;
      a2.base = function(a3, c3, f2) {
        for (var d2 = Array(arguments.length - 2), e2 = 2; e2 < arguments.length; e2++)
          d2[e2 - 2] = arguments[e2];
        return b2.prototype[c3].apply(a3, d2);
      };
    };
    goog.scope = function(a2) {
      if (goog.isInModuleLoader_())
        throw Error("goog.scope is not supported within a module.");
      a2.call(goog.global);
    };
    COMPILED || (goog.global.COMPILED = COMPILED);
    goog.defineClass = function(a2, b2) {
      var c2 = b2.constructor, d2 = b2.statics;
      c2 && c2 != Object.prototype.constructor || (c2 = function() {
        throw Error("cannot instantiate an interface (no constructor defined).");
      });
      c2 = goog.defineClass.createSealingConstructor_(c2, a2);
      a2 && goog.inherits(c2, a2);
      delete b2.constructor;
      delete b2.statics;
      goog.defineClass.applyProperties_(c2.prototype, b2);
      null != d2 && (d2 instanceof Function ? d2(c2) : goog.defineClass.applyProperties_(c2, d2));
      return c2;
    };
    goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
    goog.defineClass.createSealingConstructor_ = function(a2, b2) {
      if (!goog.defineClass.SEAL_CLASS_INSTANCES)
        return a2;
      var c2 = !goog.defineClass.isUnsealable_(b2), d2 = function() {
        var b3 = a2.apply(this, arguments) || this;
        b3[goog.UID_PROPERTY_] = b3[goog.UID_PROPERTY_];
        this.constructor === d2 && c2 && Object.seal instanceof Function && Object.seal(b3);
        return b3;
      };
      return d2;
    };
    goog.defineClass.isUnsealable_ = function(a2) {
      return a2 && a2.prototype && a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
    };
    goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    goog.defineClass.applyProperties_ = function(a2, b2) {
      for (var c2 in b2)
        Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
      for (var d2 = 0; d2 < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d2++)
        c2 = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d2], Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
    };
    goog.tagUnsealableClass = function(a2) {
      !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
    };
    goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
    !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
      var a2 = goog.global.document;
      return null != a2 && "write" in a2;
    }, goog.isDocumentLoading_ = function() {
      var a2 = goog.global.document;
      return a2.attachEvent ? "complete" != a2.readyState : "loading" == a2.readyState;
    }, goog.findBasePath_ = function() {
      if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH)
        goog.basePath = goog.global.CLOSURE_BASE_PATH;
      else if (goog.inHtmlDocument_()) {
        var a2 = goog.global.document, b2 = a2.currentScript;
        a2 = b2 ? [b2] : a2.getElementsByTagName("SCRIPT");
        for (b2 = a2.length - 1; 0 <= b2; --b2) {
          var c2 = a2[b2].src, d2 = c2.lastIndexOf("?");
          d2 = -1 == d2 ? c2.length : d2;
          if ("base.js" == c2.substr(d2 - 7, 7)) {
            goog.basePath = c2.substr(0, d2 - 7);
            break;
          }
        }
      }
    }, goog.findBasePath_(), goog.Transpiler = function() {
      this.requiresTranspilation_ = null;
      this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
    }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
      function a(a2, b2) {
        e ? d[a2] = true : b2() ? (c = a2, d[a2] = false) : e = d[a2] = true;
      }
      function b(a) {
        try {
          return !!eval(a);
        } catch (h) {
          return false;
        }
      }
      var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
      a("es5", function() {
        return b("[1,].length==1");
      });
      a("es6", function() {
        return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
      });
      a("es7", function() {
        return b("2 ** 2 == 4");
      });
      a("es8", function() {
        return b("async () => 1, true");
      });
      a("es9", function() {
        return b("({...rest} = {}), true");
      });
      a("es_next", function() {
        return false;
      });
      return { target: c, map: d };
    }, goog.Transpiler.prototype.needsTranspile = function(a2, b2) {
      if ("always" == goog.TRANSPILE)
        return true;
      if ("never" == goog.TRANSPILE)
        return false;
      if (!this.requiresTranspilation_) {
        var c2 = this.createRequiresTranspilation_();
        this.requiresTranspilation_ = c2.map;
        this.transpilationTarget_ = this.transpilationTarget_ || c2.target;
      }
      if (a2 in this.requiresTranspilation_)
        return this.requiresTranspilation_[a2] ? true : !goog.inHtmlDocument_() || "es6" != b2 || "noModule" in goog.global.document.createElement("script") ? false : true;
      throw Error("Unknown language mode: " + a2);
    }, goog.Transpiler.prototype.transpile = function(a2, b2) {
      return goog.transpile_(a2, b2, this.transpilationTarget_);
    }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a2) {
      return a2.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
    }, goog.DebugLoader_ = function() {
      this.dependencies_ = {};
      this.idToPath_ = {};
      this.written_ = {};
      this.loadingDeps_ = [];
      this.depsToLoad_ = [];
      this.paused_ = false;
      this.factory_ = new goog.DependencyFactory(goog.transpiler_);
      this.deferredCallbacks_ = {};
      this.deferredQueue_ = [];
    }, goog.DebugLoader_.prototype.bootstrap = function(a2, b2) {
      function c2() {
        d2 && (goog.global.setTimeout(d2, 0), d2 = null);
      }
      var d2 = b2;
      if (a2.length) {
        b2 = [];
        for (var e2 = 0; e2 < a2.length; e2++) {
          var f2 = this.getPathFromDeps_(a2[e2]);
          if (!f2)
            throw Error("Unregonized namespace: " + a2[e2]);
          b2.push(this.dependencies_[f2]);
        }
        f2 = goog.require;
        var g = 0;
        for (e2 = 0; e2 < a2.length; e2++)
          f2(a2[e2]), b2[e2].onLoad(function() {
            ++g == a2.length && c2();
          });
      } else
        c2();
    }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
      this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
      this.loadDeps_();
    }, goog.DebugLoader_.prototype.requested = function(a2, b2) {
      (a2 = this.getPathFromDeps_(a2)) && (b2 || this.areDepsLoaded_(this.dependencies_[a2].requires)) && (b2 = this.deferredCallbacks_[a2]) && (delete this.deferredCallbacks_[a2], b2());
    }, goog.DebugLoader_.prototype.setDependencyFactory = function(a2) {
      this.factory_ = a2;
    }, goog.DebugLoader_.prototype.load_ = function(a2) {
      if (this.getPathFromDeps_(a2)) {
        var b2 = this, c2 = [], d2 = function(a3) {
          var e2 = b2.getPathFromDeps_(a3);
          if (!e2)
            throw Error("Bad dependency path or symbol: " + a3);
          if (!b2.written_[e2]) {
            b2.written_[e2] = true;
            a3 = b2.dependencies_[e2];
            for (e2 = 0; e2 < a3.requires.length; e2++)
              goog.isProvided_(a3.requires[e2]) || d2(a3.requires[e2]);
            c2.push(a3);
          }
        };
        d2(a2);
        a2 = !!this.depsToLoad_.length;
        this.depsToLoad_ = this.depsToLoad_.concat(c2);
        this.paused_ || a2 || this.loadDeps_();
      } else
        throw a2 = "goog.require could not find: " + a2, goog.logToConsole_(a2), Error(a2);
    }, goog.DebugLoader_.prototype.loadDeps_ = function() {
      for (var a2 = this, b2 = this.paused_; this.depsToLoad_.length && !b2; )
        (function() {
          var c2 = false, d2 = a2.depsToLoad_.shift(), e2 = false;
          a2.loading_(d2);
          var f2 = { pause: function() {
            if (c2)
              throw Error("Cannot call pause after the call to load.");
            b2 = true;
          }, resume: function() {
            c2 ? a2.resume_() : b2 = false;
          }, loaded: function() {
            if (e2)
              throw Error("Double call to loaded.");
            e2 = true;
            a2.loaded_(d2);
          }, pending: function() {
            for (var b3 = [], c3 = 0; c3 < a2.loadingDeps_.length; c3++)
              b3.push(a2.loadingDeps_[c3]);
            return b3;
          }, setModuleState: function(a3) {
            goog.moduleLoaderState_ = { type: a3, moduleName: "", declareLegacyNamespace: false };
          }, registerEs6ModuleExports: function(a3, b3, c3) {
            c3 && (goog.loadedModules_[c3] = { exports: b3, type: goog.ModuleType.ES6, moduleId: c3 || "" });
          }, registerGoogModuleExports: function(a3, b3) {
            goog.loadedModules_[a3] = { exports: b3, type: goog.ModuleType.GOOG, moduleId: a3 };
          }, clearModuleState: function() {
            goog.moduleLoaderState_ = null;
          }, defer: function(b3) {
            if (c2)
              throw Error("Cannot register with defer after the call to load.");
            a2.defer_(
              d2,
              b3
            );
          }, areDepsLoaded: function() {
            return a2.areDepsLoaded_(d2.requires);
          } };
          try {
            d2.load(f2);
          } finally {
            c2 = true;
          }
        })();
      b2 && this.pause_();
    }, goog.DebugLoader_.prototype.pause_ = function() {
      this.paused_ = true;
    }, goog.DebugLoader_.prototype.resume_ = function() {
      this.paused_ && (this.paused_ = false, this.loadDeps_());
    }, goog.DebugLoader_.prototype.loading_ = function(a2) {
      this.loadingDeps_.push(a2);
    }, goog.DebugLoader_.prototype.loaded_ = function(a2) {
      for (var b2 = 0; b2 < this.loadingDeps_.length; b2++)
        if (this.loadingDeps_[b2] == a2) {
          this.loadingDeps_.splice(b2, 1);
          break;
        }
      for (b2 = 0; b2 < this.deferredQueue_.length; b2++)
        if (this.deferredQueue_[b2] == a2.path) {
          this.deferredQueue_.splice(b2, 1);
          break;
        }
      if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
        for (; this.deferredQueue_.length; )
          this.requested(this.deferredQueue_.shift(), true);
      a2.loaded();
    }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a2) {
      for (var b2 = 0; b2 < a2.length; b2++) {
        var c2 = this.getPathFromDeps_(a2[b2]);
        if (!c2 || !(c2 in this.deferredCallbacks_ || goog.isProvided_(a2[b2])))
          return false;
      }
      return true;
    }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a2) {
      return a2 in this.idToPath_ ? this.idToPath_[a2] : a2 in this.dependencies_ ? a2 : null;
    }, goog.DebugLoader_.prototype.defer_ = function(a2, b2) {
      this.deferredCallbacks_[a2.path] = b2;
      this.deferredQueue_.push(a2.path);
    }, goog.LoadController = function() {
    }, goog.LoadController.prototype.pause = function() {
    }, goog.LoadController.prototype.resume = function() {
    }, goog.LoadController.prototype.loaded = function() {
    }, goog.LoadController.prototype.pending = function() {
    }, goog.LoadController.prototype.registerEs6ModuleExports = function(a2, b2, c2) {
    }, goog.LoadController.prototype.setModuleState = function(a2) {
    }, goog.LoadController.prototype.clearModuleState = function() {
    }, goog.LoadController.prototype.defer = function(a2) {
    }, goog.LoadController.prototype.areDepsLoaded = function() {
    }, goog.Dependency = function(a2, b2, c2, d2, e2) {
      this.path = a2;
      this.relativePath = b2;
      this.provides = c2;
      this.requires = d2;
      this.loadFlags = e2;
      this.loaded_ = false;
      this.loadCallbacks_ = [];
    }, goog.Dependency.prototype.getPathName = function() {
      var a2 = this.path, b2 = a2.indexOf("://");
      0 <= b2 && (a2 = a2.substring(b2 + 3), b2 = a2.indexOf("/"), 0 <= b2 && (a2 = a2.substring(b2 + 1)));
      return a2;
    }, goog.Dependency.prototype.onLoad = function(a2) {
      this.loaded_ ? a2() : this.loadCallbacks_.push(a2);
    }, goog.Dependency.prototype.loaded = function() {
      this.loaded_ = true;
      var a2 = this.loadCallbacks_;
      this.loadCallbacks_ = [];
      for (var b2 = 0; b2 < a2.length; b2++)
        a2[b2]();
    }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a2) {
      var b2 = Math.random().toString(32);
      goog.Dependency.callbackMap_[b2] = a2;
      return b2;
    }, goog.Dependency.unregisterCallback_ = function(a2) {
      delete goog.Dependency.callbackMap_[a2];
    }, goog.Dependency.callback_ = function(a2, b2) {
      if (a2 in goog.Dependency.callbackMap_) {
        for (var c2 = goog.Dependency.callbackMap_[a2], d2 = [], e2 = 1; e2 < arguments.length; e2++)
          d2.push(arguments[e2]);
        c2.apply(void 0, d2);
      } else
        throw Error("Callback key " + a2 + " does not exist (was base.js loaded more than once?).");
    }, goog.Dependency.prototype.load = function(a2) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
      else if (goog.inHtmlDocument_()) {
        var b2 = goog.global.document;
        if ("complete" == b2.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
          if (/\bdeps.js$/.test(this.path)) {
            a2.loaded();
            return;
          }
          throw Error('Cannot write "' + this.path + '" after document load');
        }
        if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
          var c2 = goog.Dependency.registerCallback_(function(b3) {
            goog.DebugLoader_.IS_OLD_IE_ && "complete" != b3.readyState || (goog.Dependency.unregisterCallback_(c2), a2.loaded());
          }), d2 = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
          d2 = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + `="goog.Dependency.callback_('` + c2 + `', this)" type="text/javascript" ` + (goog.Dependency.defer_ ? "defer" : "") + d2 + "></script>";
          b2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d2) : d2);
        } else {
          var e2 = b2.createElement("script");
          e2.defer = goog.Dependency.defer_;
          e2.async = false;
          e2.type = "text/javascript";
          (d2 = goog.getScriptNonce()) && e2.setAttribute("nonce", d2);
          goog.DebugLoader_.IS_OLD_IE_ ? (a2.pause(), e2.onreadystatechange = function() {
            if ("loaded" == e2.readyState || "complete" == e2.readyState)
              a2.loaded(), a2.resume();
          }) : e2.onload = function() {
            e2.onload = null;
            a2.loaded();
          };
          e2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
          b2.head.appendChild(e2);
        }
      } else
        goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a2.loaded()) : a2.pause();
    }, goog.Es6ModuleDependency = function(a2, b2, c2, d2, e2) {
      goog.Dependency.call(this, a2, b2, c2, d2, e2);
    }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a2) {
      function b2(a3, b3) {
        a3 = b3 ? '<script type="module" crossorigin>' + b3 + "</script>" : '<script type="module" crossorigin src="' + a3 + '"></script>';
        d2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a3) : a3);
      }
      function c2(a3, b3) {
        var c3 = d2.createElement("script");
        c3.defer = true;
        c3.async = false;
        c3.type = "module";
        c3.setAttribute("crossorigin", true);
        var e3 = goog.getScriptNonce();
        e3 && c3.setAttribute("nonce", e3);
        b3 ? c3.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b3) : b3 : c3.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a3) : a3;
        d2.head.appendChild(c3);
      }
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
      else if (goog.inHtmlDocument_()) {
        var d2 = goog.global.document, e2 = this;
        if (goog.isDocumentLoading_()) {
          var f2 = b2;
          goog.Dependency.defer_ = true;
        } else
          f2 = c2;
        var g = goog.Dependency.registerCallback_(function() {
          goog.Dependency.unregisterCallback_(g);
          a2.setModuleState(goog.ModuleType.ES6);
        });
        f2(void 0, 'goog.Dependency.callback_("' + g + '")');
        f2(this.path, void 0);
        var h = goog.Dependency.registerCallback_(function(b3) {
          goog.Dependency.unregisterCallback_(h);
          a2.registerEs6ModuleExports(e2.path, b3, goog.moduleLoaderState_.moduleName);
        });
        f2(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
        var k = goog.Dependency.registerCallback_(function() {
          goog.Dependency.unregisterCallback_(k);
          a2.clearModuleState();
          a2.loaded();
        });
        f2(void 0, 'goog.Dependency.callback_("' + k + '")');
      } else
        goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a2.pause();
    }, goog.TransformedDependency = function(a2, b2, c2, d2, e2) {
      goog.Dependency.call(this, a2, b2, c2, d2, e2);
      this.contents_ = null;
      this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
    }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a2) {
      function b2() {
        e2.contents_ = goog.loadFileSync_(e2.path);
        e2.contents_ && (e2.contents_ = e2.transform(e2.contents_), e2.contents_ && (e2.contents_ += "\n//# sourceURL=" + e2.path));
      }
      function c2() {
        e2.lazyFetch_ && b2();
        if (e2.contents_) {
          f2 && a2.setModuleState(goog.ModuleType.ES6);
          try {
            var c3 = e2.contents_;
            e2.contents_ = null;
            goog.globalEval(c3);
            if (f2)
              var d3 = goog.moduleLoaderState_.moduleName;
          } finally {
            f2 && a2.clearModuleState();
          }
          f2 && goog.global.$jscomp.require.ensure([e2.getPathName()], function() {
            a2.registerEs6ModuleExports(
              e2.path,
              goog.global.$jscomp.require(e2.getPathName()),
              d3
            );
          });
          a2.loaded();
        }
      }
      function d2() {
        var a3 = goog.global.document, b3 = goog.Dependency.registerCallback_(function() {
          goog.Dependency.unregisterCallback_(b3);
          c2();
        }), d3 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b3 + '");') + "</script>";
        a3.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d3) : d3);
      }
      var e2 = this;
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        b2(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a2.loaded()) : a2.pause();
      else {
        var f2 = this.loadFlags.module == goog.ModuleType.ES6;
        this.lazyFetch_ || b2();
        var g = 1 < a2.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
        g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
        if (h || g)
          a2.defer(function() {
            c2();
          });
        else {
          var k = goog.global.document;
          h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
          if (f2 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
            goog.Dependency.defer_ = true;
            a2.pause();
            var l = k.onreadystatechange;
            k.onreadystatechange = function() {
              "interactive" == k.readyState && (k.onreadystatechange = l, c2(), a2.resume());
              goog.isFunction(l) && l.apply(void 0, arguments);
            };
          } else
            !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d2() : c2();
        }
      }
    }, goog.TransformedDependency.prototype.transform = function(a2) {
    }, goog.TranspiledDependency = function(a2, b2, c2, d2, e2, f2) {
      goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
      this.transpiler = f2;
    }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a2) {
      return this.transpiler.transpile(a2, this.getPathName());
    }, goog.PreTranspiledEs6ModuleDependency = function(a2, b2, c2, d2, e2) {
      goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
    }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a2) {
      return a2;
    }, goog.GoogModuleDependency = function(a2, b2, c2, d2, e2, f2, g) {
      goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
      this.needsTranspile_ = f2;
      this.transpiler_ = g;
    }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a2) {
      this.needsTranspile_ && (a2 = this.transpiler_.transpile(a2, this.getPathName()));
      return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(a2 + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a2 + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
    }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a2, b2, c2, d2) {
      b2 = b2 || [];
      a2 = a2.replace(/\\/g, "/");
      var e2 = goog.normalizePath_(goog.basePath + a2);
      d2 && "boolean" !== typeof d2 || (d2 = d2 ? { module: goog.ModuleType.GOOG } : {});
      c2 = this.factory_.createDependency(e2, a2, b2, c2, d2, goog.transpiler_.needsTranspile(d2.lang || "es3", d2.module));
      this.dependencies_[e2] = c2;
      for (c2 = 0; c2 < b2.length; c2++)
        this.idToPath_[b2[c2]] = e2;
      this.idToPath_[a2] = e2;
    }, goog.DependencyFactory = function(a2) {
      this.transpiler = a2;
    }, goog.DependencyFactory.prototype.createDependency = function(a2, b2, c2, d2, e2, f2) {
      return e2.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(
        a2,
        b2,
        c2,
        d2,
        e2,
        f2,
        this.transpiler
      ) : f2 ? new goog.TranspiledDependency(a2, b2, c2, d2, e2, this.transpiler) : e2.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Es6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Dependency(a2, b2, c2, d2, e2);
    }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
      goog.debugLoader_.loadClosureDeps();
    }, goog.setDependencyFactory = function(a2) {
      goog.debugLoader_.setDependencyFactory(a2);
    }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a2, b2) {
      goog.debugLoader_.bootstrap(a2, b2);
    });
    goog.TRUSTED_TYPES_POLICY_NAME = "";
    goog.identity_ = function(a2) {
      return a2;
    };
    goog.createTrustedTypesPolicy = function(a2) {
      var b2 = null, c2 = goog.global.trustedTypes || goog.global.TrustedTypes;
      if (!c2 || !c2.createPolicy)
        return b2;
      try {
        b2 = c2.createPolicy(a2, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_, createURL: goog.identity_ });
      } catch (d2) {
        goog.logToConsole_(d2.message);
      }
      return b2;
    };
    goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
    goog.object = {};
    goog.object.is = function(a2, b2) {
      return a2 === b2 ? 0 !== a2 || 1 / a2 === 1 / b2 : a2 !== a2 && b2 !== b2;
    };
    goog.object.forEach = function(a2, b2, c2) {
      for (var d2 in a2)
        b2.call(c2, a2[d2], d2, a2);
    };
    goog.object.filter = function(a2, b2, c2) {
      var d2 = {}, e2;
      for (e2 in a2)
        b2.call(c2, a2[e2], e2, a2) && (d2[e2] = a2[e2]);
      return d2;
    };
    goog.object.map = function(a2, b2, c2) {
      var d2 = {}, e2;
      for (e2 in a2)
        d2[e2] = b2.call(c2, a2[e2], e2, a2);
      return d2;
    };
    goog.object.some = function(a2, b2, c2) {
      for (var d2 in a2)
        if (b2.call(c2, a2[d2], d2, a2))
          return true;
      return false;
    };
    goog.object.every = function(a2, b2, c2) {
      for (var d2 in a2)
        if (!b2.call(c2, a2[d2], d2, a2))
          return false;
      return true;
    };
    goog.object.getCount = function(a2) {
      var b2 = 0, c2;
      for (c2 in a2)
        b2++;
      return b2;
    };
    goog.object.getAnyKey = function(a2) {
      for (var b2 in a2)
        return b2;
    };
    goog.object.getAnyValue = function(a2) {
      for (var b2 in a2)
        return a2[b2];
    };
    goog.object.contains = function(a2, b2) {
      return goog.object.containsValue(a2, b2);
    };
    goog.object.getValues = function(a2) {
      var b2 = [], c2 = 0, d2;
      for (d2 in a2)
        b2[c2++] = a2[d2];
      return b2;
    };
    goog.object.getKeys = function(a2) {
      var b2 = [], c2 = 0, d2;
      for (d2 in a2)
        b2[c2++] = d2;
      return b2;
    };
    goog.object.getValueByKeys = function(a2, b2) {
      var c2 = goog.isArrayLike(b2), d2 = c2 ? b2 : arguments;
      for (c2 = c2 ? 0 : 1; c2 < d2.length; c2++) {
        if (null == a2)
          return;
        a2 = a2[d2[c2]];
      }
      return a2;
    };
    goog.object.containsKey = function(a2, b2) {
      return null !== a2 && b2 in a2;
    };
    goog.object.containsValue = function(a2, b2) {
      for (var c2 in a2)
        if (a2[c2] == b2)
          return true;
      return false;
    };
    goog.object.findKey = function(a2, b2, c2) {
      for (var d2 in a2)
        if (b2.call(c2, a2[d2], d2, a2))
          return d2;
    };
    goog.object.findValue = function(a2, b2, c2) {
      return (b2 = goog.object.findKey(a2, b2, c2)) && a2[b2];
    };
    goog.object.isEmpty = function(a2) {
      for (var b2 in a2)
        return false;
      return true;
    };
    goog.object.clear = function(a2) {
      for (var b2 in a2)
        delete a2[b2];
    };
    goog.object.remove = function(a2, b2) {
      var c2;
      (c2 = b2 in a2) && delete a2[b2];
      return c2;
    };
    goog.object.add = function(a2, b2, c2) {
      if (null !== a2 && b2 in a2)
        throw Error('The object already contains the key "' + b2 + '"');
      goog.object.set(a2, b2, c2);
    };
    goog.object.get = function(a2, b2, c2) {
      return null !== a2 && b2 in a2 ? a2[b2] : c2;
    };
    goog.object.set = function(a2, b2, c2) {
      a2[b2] = c2;
    };
    goog.object.setIfUndefined = function(a2, b2, c2) {
      return b2 in a2 ? a2[b2] : a2[b2] = c2;
    };
    goog.object.setWithReturnValueIfNotSet = function(a2, b2, c2) {
      if (b2 in a2)
        return a2[b2];
      c2 = c2();
      return a2[b2] = c2;
    };
    goog.object.equals = function(a2, b2) {
      for (var c2 in a2)
        if (!(c2 in b2) || a2[c2] !== b2[c2])
          return false;
      for (var d2 in b2)
        if (!(d2 in a2))
          return false;
      return true;
    };
    goog.object.clone = function(a2) {
      var b2 = {}, c2;
      for (c2 in a2)
        b2[c2] = a2[c2];
      return b2;
    };
    goog.object.unsafeClone = function(a2) {
      var b2 = goog.typeOf(a2);
      if ("object" == b2 || "array" == b2) {
        if (goog.isFunction(a2.clone))
          return a2.clone();
        b2 = "array" == b2 ? [] : {};
        for (var c2 in a2)
          b2[c2] = goog.object.unsafeClone(a2[c2]);
        return b2;
      }
      return a2;
    };
    goog.object.transpose = function(a2) {
      var b2 = {}, c2;
      for (c2 in a2)
        b2[a2[c2]] = c2;
      return b2;
    };
    goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    goog.object.extend = function(a2, b2) {
      for (var c2, d2, e2 = 1; e2 < arguments.length; e2++) {
        d2 = arguments[e2];
        for (c2 in d2)
          a2[c2] = d2[c2];
        for (var f2 = 0; f2 < goog.object.PROTOTYPE_FIELDS_.length; f2++)
          c2 = goog.object.PROTOTYPE_FIELDS_[f2], Object.prototype.hasOwnProperty.call(d2, c2) && (a2[c2] = d2[c2]);
      }
    };
    goog.object.create = function(a2) {
      var b2 = arguments.length;
      if (1 == b2 && Array.isArray(arguments[0]))
        return goog.object.create.apply(null, arguments[0]);
      if (b2 % 2)
        throw Error("Uneven number of arguments");
      for (var c2 = {}, d2 = 0; d2 < b2; d2 += 2)
        c2[arguments[d2]] = arguments[d2 + 1];
      return c2;
    };
    goog.object.createSet = function(a2) {
      var b2 = arguments.length;
      if (1 == b2 && Array.isArray(arguments[0]))
        return goog.object.createSet.apply(null, arguments[0]);
      for (var c2 = {}, d2 = 0; d2 < b2; d2++)
        c2[arguments[d2]] = true;
      return c2;
    };
    goog.object.createImmutableView = function(a2) {
      var b2 = a2;
      Object.isFrozen && !Object.isFrozen(a2) && (b2 = Object.create(a2), Object.freeze(b2));
      return b2;
    };
    goog.object.isImmutableView = function(a2) {
      return !!Object.isFrozen && Object.isFrozen(a2);
    };
    goog.object.getAllPropertyNames = function(a2, b2, c2) {
      if (!a2)
        return [];
      if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
        return goog.object.getKeys(a2);
      for (var d2 = {}; a2 && (a2 !== Object.prototype || b2) && (a2 !== Function.prototype || c2); ) {
        for (var e2 = Object.getOwnPropertyNames(a2), f2 = 0; f2 < e2.length; f2++)
          d2[e2[f2]] = true;
        a2 = Object.getPrototypeOf(a2);
      }
      return goog.object.getKeys(d2);
    };
    goog.object.getSuperClass = function(a2) {
      return (a2 = Object.getPrototypeOf(a2.prototype)) && a2.constructor;
    };
    var jspb = { asserts: {} };
    jspb.asserts.doAssertFailure = function(a2, b2, c2, d2) {
      var e2 = "Assertion failed";
      if (c2) {
        e2 += ": " + c2;
        var f2 = d2;
      } else
        a2 && (e2 += ": " + a2, f2 = b2);
      throw Error("" + e2, f2 || []);
    };
    jspb.asserts.assert = function(a2, b2, c2) {
      for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
        d2[e2 - 2] = arguments[e2];
      a2 || jspb.asserts.doAssertFailure("", null, b2, d2);
      return a2;
    };
    jspb.asserts.assertString = function(a2, b2, c2) {
      for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
        d2[e2 - 2] = arguments[e2];
      "string" !== typeof a2 && jspb.asserts.doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, d2);
      return a2;
    };
    jspb.asserts.assertArray = function(a2, b2, c2) {
      for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
        d2[e2 - 2] = arguments[e2];
      Array.isArray(a2) || jspb.asserts.doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, d2);
      return a2;
    };
    jspb.asserts.fail = function(a2, b2) {
      for (var c2 = [], d2 = 1; d2 < arguments.length; ++d2)
        c2[d2 - 1] = arguments[d2];
      throw Error("Failure" + (a2 ? ": " + a2 : ""), c2);
    };
    jspb.asserts.assertInstanceof = function(a2, b2, c2, d2) {
      for (var e2 = [], f2 = 3; f2 < arguments.length; ++f2)
        e2[f2 - 3] = arguments[f2];
      a2 instanceof b2 || jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.", [jspb.asserts.getType(b2), jspb.asserts.getType(a2)], c2, e2);
      return a2;
    };
    jspb.asserts.getType = function(a2) {
      return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : null === a2 ? "null" : typeof a2;
    };
    jspb.BinaryConstants = {};
    jspb.ConstBinaryMessage = function() {
    };
    jspb.BinaryMessage = function() {
    };
    jspb.BinaryConstants.FieldType = { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18, FHASH64: 30, VHASH64: 31 };
    jspb.BinaryConstants.WireType = { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 };
    jspb.BinaryConstants.FieldTypeToWireType = function(a2) {
      var b2 = jspb.BinaryConstants.FieldType, c2 = jspb.BinaryConstants.WireType;
      switch (a2) {
        case b2.INT32:
        case b2.INT64:
        case b2.UINT32:
        case b2.UINT64:
        case b2.SINT32:
        case b2.SINT64:
        case b2.BOOL:
        case b2.ENUM:
        case b2.VHASH64:
          return c2.VARINT;
        case b2.DOUBLE:
        case b2.FIXED64:
        case b2.SFIXED64:
        case b2.FHASH64:
          return c2.FIXED64;
        case b2.STRING:
        case b2.MESSAGE:
        case b2.BYTES:
          return c2.DELIMITED;
        case b2.FLOAT:
        case b2.FIXED32:
        case b2.SFIXED32:
          return c2.FIXED32;
        default:
          return c2.INVALID;
      }
    };
    jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
    jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
    jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
    jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
    jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
    jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
    jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
    jspb.BinaryConstants.TWO_TO_20 = 1048576;
    jspb.BinaryConstants.TWO_TO_23 = 8388608;
    jspb.BinaryConstants.TWO_TO_31 = 2147483648;
    jspb.BinaryConstants.TWO_TO_32 = 4294967296;
    jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
    jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
    jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
    jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
    goog.debug = {};
    goog.debug.Error = function(a2) {
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, goog.debug.Error);
      else {
        var b2 = Error().stack;
        b2 && (this.stack = b2);
      }
      a2 && (this.message = String(a2));
      this.reportErrorToServer = true;
    };
    goog.inherits(goog.debug.Error, Error);
    goog.debug.Error.prototype.name = "CustomError";
    goog.dom = {};
    goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
    goog.asserts = {};
    goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
    goog.asserts.AssertionError = function(a2, b2) {
      goog.debug.Error.call(this, goog.asserts.subs_(a2, b2));
      this.messagePattern = a2;
    };
    goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
    goog.asserts.AssertionError.prototype.name = "AssertionError";
    goog.asserts.DEFAULT_ERROR_HANDLER = function(a2) {
      throw a2;
    };
    goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
    goog.asserts.subs_ = function(a2, b2) {
      a2 = a2.split("%s");
      for (var c2 = "", d2 = a2.length - 1, e2 = 0; e2 < d2; e2++)
        c2 += a2[e2] + (e2 < b2.length ? b2[e2] : "%s");
      return c2 + a2[d2];
    };
    goog.asserts.doAssertFailure_ = function(a2, b2, c2, d2) {
      var e2 = "Assertion failed";
      if (c2) {
        e2 += ": " + c2;
        var f2 = d2;
      } else
        a2 && (e2 += ": " + a2, f2 = b2);
      a2 = new goog.asserts.AssertionError("" + e2, f2 || []);
      goog.asserts.errorHandler_(a2);
    };
    goog.asserts.setErrorHandler = function(a2) {
      goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a2);
    };
    goog.asserts.assert = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && !a2 && goog.asserts.doAssertFailure_("", null, b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertExists = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && null == a2 && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.fail = function(a2, b2) {
      goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1)));
    };
    goog.asserts.assertNumber = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && "number" !== typeof a2 && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertString = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && "string" !== typeof a2 && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertFunction = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a2) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertObject = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && !goog.isObject(a2) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertArray = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && !Array.isArray(a2) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertBoolean = function(a2, b2, c2) {
      goog.asserts.ENABLE_ASSERTS && "boolean" !== typeof a2 && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertElement = function(a2, b2, c2) {
      !goog.asserts.ENABLE_ASSERTS || goog.isObject(a2) && a2.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertInstanceof = function(a2, b2, c2, d2) {
      !goog.asserts.ENABLE_ASSERTS || a2 instanceof b2 || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b2), goog.asserts.getType_(a2)], c2, Array.prototype.slice.call(arguments, 3));
      return a2;
    };
    goog.asserts.assertFinite = function(a2, b2, c2) {
      !goog.asserts.ENABLE_ASSERTS || "number" == typeof a2 && isFinite(a2) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a2], b2, Array.prototype.slice.call(arguments, 2));
      return a2;
    };
    goog.asserts.assertObjectPrototypeIsIntact = function() {
      for (var a2 in Object.prototype)
        goog.asserts.fail(a2 + " should not be enumerable in Object.prototype.");
    };
    goog.asserts.getType_ = function(a2) {
      return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : null === a2 ? "null" : typeof a2;
    };
    goog.array = {};
    goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
    goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
    goog.array.peek = function(a2) {
      return a2[a2.length - 1];
    };
    goog.array.last = goog.array.peek;
    goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      return Array.prototype.indexOf.call(a2, b2, c2);
    } : function(a2, b2, c2) {
      c2 = null == c2 ? 0 : 0 > c2 ? Math.max(0, a2.length + c2) : c2;
      if ("string" === typeof a2)
        return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.indexOf(b2, c2);
      for (; c2 < a2.length; c2++)
        if (c2 in a2 && a2[c2] === b2)
          return c2;
      return -1;
    };
    goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      return Array.prototype.lastIndexOf.call(a2, b2, null == c2 ? a2.length - 1 : c2);
    } : function(a2, b2, c2) {
      c2 = null == c2 ? a2.length - 1 : c2;
      0 > c2 && (c2 = Math.max(0, a2.length + c2));
      if ("string" === typeof a2)
        return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.lastIndexOf(b2, c2);
      for (; 0 <= c2; c2--)
        if (c2 in a2 && a2[c2] === b2)
          return c2;
      return -1;
    };
    goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      Array.prototype.forEach.call(a2, b2, c2);
    } : function(a2, b2, c2) {
      for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
        f2 in e2 && b2.call(c2, e2[f2], f2, a2);
    };
    goog.array.forEachRight = function(a2, b2, c2) {
      var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
      for (--d2; 0 <= d2; --d2)
        d2 in e2 && b2.call(c2, e2[d2], d2, a2);
    };
    goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      return Array.prototype.filter.call(a2, b2, c2);
    } : function(a2, b2, c2) {
      for (var d2 = a2.length, e2 = [], f2 = 0, g = "string" === typeof a2 ? a2.split("") : a2, h = 0; h < d2; h++)
        if (h in g) {
          var k = g[h];
          b2.call(c2, k, h, a2) && (e2[f2++] = k);
        }
      return e2;
    };
    goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      return Array.prototype.map.call(a2, b2, c2);
    } : function(a2, b2, c2) {
      for (var d2 = a2.length, e2 = Array(d2), f2 = "string" === typeof a2 ? a2.split("") : a2, g = 0; g < d2; g++)
        g in f2 && (e2[g] = b2.call(c2, f2[g], g, a2));
      return e2;
    };
    goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a2, b2, c2, d2) {
      goog.asserts.assert(null != a2.length);
      d2 && (b2 = goog.bind(b2, d2));
      return Array.prototype.reduce.call(a2, b2, c2);
    } : function(a2, b2, c2, d2) {
      var e2 = c2;
      goog.array.forEach(a2, function(c3, g) {
        e2 = b2.call(d2, e2, c3, g, a2);
      });
      return e2;
    };
    goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a2, b2, c2, d2) {
      goog.asserts.assert(null != a2.length);
      goog.asserts.assert(null != b2);
      d2 && (b2 = goog.bind(b2, d2));
      return Array.prototype.reduceRight.call(a2, b2, c2);
    } : function(a2, b2, c2, d2) {
      var e2 = c2;
      goog.array.forEachRight(a2, function(c3, g) {
        e2 = b2.call(d2, e2, c3, g, a2);
      });
      return e2;
    };
    goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      return Array.prototype.some.call(a2, b2, c2);
    } : function(a2, b2, c2) {
      for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
        if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
          return true;
      return false;
    };
    goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      return Array.prototype.every.call(a2, b2, c2);
    } : function(a2, b2, c2) {
      for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
        if (f2 in e2 && !b2.call(c2, e2[f2], f2, a2))
          return false;
      return true;
    };
    goog.array.count = function(a2, b2, c2) {
      var d2 = 0;
      goog.array.forEach(a2, function(a3, f2, g) {
        b2.call(c2, a3, f2, g) && ++d2;
      }, c2);
      return d2;
    };
    goog.array.find = function(a2, b2, c2) {
      b2 = goog.array.findIndex(a2, b2, c2);
      return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
    };
    goog.array.findIndex = function(a2, b2, c2) {
      for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
        if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
          return f2;
      return -1;
    };
    goog.array.findRight = function(a2, b2, c2) {
      b2 = goog.array.findIndexRight(a2, b2, c2);
      return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
    };
    goog.array.findIndexRight = function(a2, b2, c2) {
      var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
      for (--d2; 0 <= d2; d2--)
        if (d2 in e2 && b2.call(c2, e2[d2], d2, a2))
          return d2;
      return -1;
    };
    goog.array.contains = function(a2, b2) {
      return 0 <= goog.array.indexOf(a2, b2);
    };
    goog.array.isEmpty = function(a2) {
      return 0 == a2.length;
    };
    goog.array.clear = function(a2) {
      if (!Array.isArray(a2))
        for (var b2 = a2.length - 1; 0 <= b2; b2--)
          delete a2[b2];
      a2.length = 0;
    };
    goog.array.insert = function(a2, b2) {
      goog.array.contains(a2, b2) || a2.push(b2);
    };
    goog.array.insertAt = function(a2, b2, c2) {
      goog.array.splice(a2, c2, 0, b2);
    };
    goog.array.insertArrayAt = function(a2, b2, c2) {
      goog.partial(goog.array.splice, a2, c2, 0).apply(null, b2);
    };
    goog.array.insertBefore = function(a2, b2, c2) {
      var d2;
      2 == arguments.length || 0 > (d2 = goog.array.indexOf(a2, c2)) ? a2.push(b2) : goog.array.insertAt(a2, b2, d2);
    };
    goog.array.remove = function(a2, b2) {
      b2 = goog.array.indexOf(a2, b2);
      var c2;
      (c2 = 0 <= b2) && goog.array.removeAt(a2, b2);
      return c2;
    };
    goog.array.removeLast = function(a2, b2) {
      b2 = goog.array.lastIndexOf(a2, b2);
      return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
    };
    goog.array.removeAt = function(a2, b2) {
      goog.asserts.assert(null != a2.length);
      return 1 == Array.prototype.splice.call(a2, b2, 1).length;
    };
    goog.array.removeIf = function(a2, b2, c2) {
      b2 = goog.array.findIndex(a2, b2, c2);
      return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
    };
    goog.array.removeAllIf = function(a2, b2, c2) {
      var d2 = 0;
      goog.array.forEachRight(a2, function(e2, f2) {
        b2.call(c2, e2, f2, a2) && goog.array.removeAt(a2, f2) && d2++;
      });
      return d2;
    };
    goog.array.concat = function(a2) {
      return Array.prototype.concat.apply([], arguments);
    };
    goog.array.join = function(a2) {
      return Array.prototype.concat.apply([], arguments);
    };
    goog.array.toArray = function(a2) {
      var b2 = a2.length;
      if (0 < b2) {
        for (var c2 = Array(b2), d2 = 0; d2 < b2; d2++)
          c2[d2] = a2[d2];
        return c2;
      }
      return [];
    };
    goog.array.clone = goog.array.toArray;
    goog.array.extend = function(a2, b2) {
      for (var c2 = 1; c2 < arguments.length; c2++) {
        var d2 = arguments[c2];
        if (goog.isArrayLike(d2)) {
          var e2 = a2.length || 0, f2 = d2.length || 0;
          a2.length = e2 + f2;
          for (var g = 0; g < f2; g++)
            a2[e2 + g] = d2[g];
        } else
          a2.push(d2);
      }
    };
    goog.array.splice = function(a2, b2, c2, d2) {
      goog.asserts.assert(null != a2.length);
      return Array.prototype.splice.apply(a2, goog.array.slice(arguments, 1));
    };
    goog.array.slice = function(a2, b2, c2) {
      goog.asserts.assert(null != a2.length);
      return 2 >= arguments.length ? Array.prototype.slice.call(a2, b2) : Array.prototype.slice.call(a2, b2, c2);
    };
    goog.array.removeDuplicates = function(a2, b2, c2) {
      b2 = b2 || a2;
      var d2 = function(a3) {
        return goog.isObject(a3) ? "o" + goog.getUid(a3) : (typeof a3).charAt(0) + a3;
      };
      c2 = c2 || d2;
      d2 = {};
      for (var e2 = 0, f2 = 0; f2 < a2.length; ) {
        var g = a2[f2++], h = c2(g);
        Object.prototype.hasOwnProperty.call(d2, h) || (d2[h] = true, b2[e2++] = g);
      }
      b2.length = e2;
    };
    goog.array.binarySearch = function(a2, b2, c2) {
      return goog.array.binarySearch_(a2, c2 || goog.array.defaultCompare, false, b2);
    };
    goog.array.binarySelect = function(a2, b2, c2) {
      return goog.array.binarySearch_(a2, b2, true, void 0, c2);
    };
    goog.array.binarySearch_ = function(a2, b2, c2, d2, e2) {
      for (var f2 = 0, g = a2.length, h; f2 < g; ) {
        var k = f2 + (g - f2 >>> 1);
        var l = c2 ? b2.call(e2, a2[k], k, a2) : b2(d2, a2[k]);
        0 < l ? f2 = k + 1 : (g = k, h = !l);
      }
      return h ? f2 : -f2 - 1;
    };
    goog.array.sort = function(a2, b2) {
      a2.sort(b2 || goog.array.defaultCompare);
    };
    goog.array.stableSort = function(a2, b2) {
      for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
        c2[d2] = { index: d2, value: a2[d2] };
      var e2 = b2 || goog.array.defaultCompare;
      goog.array.sort(c2, function(a3, b3) {
        return e2(a3.value, b3.value) || a3.index - b3.index;
      });
      for (d2 = 0; d2 < a2.length; d2++)
        a2[d2] = c2[d2].value;
    };
    goog.array.sortByKey = function(a2, b2, c2) {
      var d2 = c2 || goog.array.defaultCompare;
      goog.array.sort(a2, function(a3, c3) {
        return d2(b2(a3), b2(c3));
      });
    };
    goog.array.sortObjectsByKey = function(a2, b2, c2) {
      goog.array.sortByKey(a2, function(a3) {
        return a3[b2];
      }, c2);
    };
    goog.array.isSorted = function(a2, b2, c2) {
      b2 = b2 || goog.array.defaultCompare;
      for (var d2 = 1; d2 < a2.length; d2++) {
        var e2 = b2(a2[d2 - 1], a2[d2]);
        if (0 < e2 || 0 == e2 && c2)
          return false;
      }
      return true;
    };
    goog.array.equals = function(a2, b2, c2) {
      if (!goog.isArrayLike(a2) || !goog.isArrayLike(b2) || a2.length != b2.length)
        return false;
      var d2 = a2.length;
      c2 = c2 || goog.array.defaultCompareEquality;
      for (var e2 = 0; e2 < d2; e2++)
        if (!c2(a2[e2], b2[e2]))
          return false;
      return true;
    };
    goog.array.compare3 = function(a2, b2, c2) {
      c2 = c2 || goog.array.defaultCompare;
      for (var d2 = Math.min(a2.length, b2.length), e2 = 0; e2 < d2; e2++) {
        var f2 = c2(a2[e2], b2[e2]);
        if (0 != f2)
          return f2;
      }
      return goog.array.defaultCompare(a2.length, b2.length);
    };
    goog.array.defaultCompare = function(a2, b2) {
      return a2 > b2 ? 1 : a2 < b2 ? -1 : 0;
    };
    goog.array.inverseDefaultCompare = function(a2, b2) {
      return -goog.array.defaultCompare(a2, b2);
    };
    goog.array.defaultCompareEquality = function(a2, b2) {
      return a2 === b2;
    };
    goog.array.binaryInsert = function(a2, b2, c2) {
      c2 = goog.array.binarySearch(a2, b2, c2);
      return 0 > c2 ? (goog.array.insertAt(a2, b2, -(c2 + 1)), true) : false;
    };
    goog.array.binaryRemove = function(a2, b2, c2) {
      b2 = goog.array.binarySearch(a2, b2, c2);
      return 0 <= b2 ? goog.array.removeAt(a2, b2) : false;
    };
    goog.array.bucket = function(a2, b2, c2) {
      for (var d2 = {}, e2 = 0; e2 < a2.length; e2++) {
        var f2 = a2[e2], g = b2.call(c2, f2, e2, a2);
        void 0 !== g && (d2[g] || (d2[g] = [])).push(f2);
      }
      return d2;
    };
    goog.array.toObject = function(a2, b2, c2) {
      var d2 = {};
      goog.array.forEach(a2, function(e2, f2) {
        d2[b2.call(c2, e2, f2, a2)] = e2;
      });
      return d2;
    };
    goog.array.range = function(a2, b2, c2) {
      var d2 = [], e2 = 0, f2 = a2;
      c2 = c2 || 1;
      void 0 !== b2 && (e2 = a2, f2 = b2);
      if (0 > c2 * (f2 - e2))
        return [];
      if (0 < c2)
        for (a2 = e2; a2 < f2; a2 += c2)
          d2.push(a2);
      else
        for (a2 = e2; a2 > f2; a2 += c2)
          d2.push(a2);
      return d2;
    };
    goog.array.repeat = function(a2, b2) {
      for (var c2 = [], d2 = 0; d2 < b2; d2++)
        c2[d2] = a2;
      return c2;
    };
    goog.array.flatten = function(a2) {
      for (var b2 = [], c2 = 0; c2 < arguments.length; c2++) {
        var d2 = arguments[c2];
        if (Array.isArray(d2))
          for (var e2 = 0; e2 < d2.length; e2 += 8192) {
            var f2 = goog.array.slice(d2, e2, e2 + 8192);
            f2 = goog.array.flatten.apply(null, f2);
            for (var g = 0; g < f2.length; g++)
              b2.push(f2[g]);
          }
        else
          b2.push(d2);
      }
      return b2;
    };
    goog.array.rotate = function(a2, b2) {
      goog.asserts.assert(null != a2.length);
      a2.length && (b2 %= a2.length, 0 < b2 ? Array.prototype.unshift.apply(a2, a2.splice(-b2, b2)) : 0 > b2 && Array.prototype.push.apply(a2, a2.splice(0, -b2)));
      return a2;
    };
    goog.array.moveItem = function(a2, b2, c2) {
      goog.asserts.assert(0 <= b2 && b2 < a2.length);
      goog.asserts.assert(0 <= c2 && c2 < a2.length);
      b2 = Array.prototype.splice.call(a2, b2, 1);
      Array.prototype.splice.call(a2, c2, 0, b2[0]);
    };
    goog.array.zip = function(a2) {
      if (!arguments.length)
        return [];
      for (var b2 = [], c2 = arguments[0].length, d2 = 1; d2 < arguments.length; d2++)
        arguments[d2].length < c2 && (c2 = arguments[d2].length);
      for (d2 = 0; d2 < c2; d2++) {
        for (var e2 = [], f2 = 0; f2 < arguments.length; f2++)
          e2.push(arguments[f2][d2]);
        b2.push(e2);
      }
      return b2;
    };
    goog.array.shuffle = function(a2, b2) {
      b2 = b2 || Math.random;
      for (var c2 = a2.length - 1; 0 < c2; c2--) {
        var d2 = Math.floor(b2() * (c2 + 1)), e2 = a2[c2];
        a2[c2] = a2[d2];
        a2[d2] = e2;
      }
    };
    goog.array.copyByIndex = function(a2, b2) {
      var c2 = [];
      goog.array.forEach(b2, function(b3) {
        c2.push(a2[b3]);
      });
      return c2;
    };
    goog.array.concatMap = function(a2, b2, c2) {
      return goog.array.concat.apply([], goog.array.map(a2, b2, c2));
    };
    goog.crypt = {};
    goog.crypt.stringToByteArray = function(a2) {
      for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
        var e2 = a2.charCodeAt(d2);
        255 < e2 && (b2[c2++] = e2 & 255, e2 >>= 8);
        b2[c2++] = e2;
      }
      return b2;
    };
    goog.crypt.byteArrayToString = function(a2) {
      if (8192 >= a2.length)
        return String.fromCharCode.apply(null, a2);
      for (var b2 = "", c2 = 0; c2 < a2.length; c2 += 8192) {
        var d2 = goog.array.slice(a2, c2, c2 + 8192);
        b2 += String.fromCharCode.apply(null, d2);
      }
      return b2;
    };
    goog.crypt.byteArrayToHex = function(a2, b2) {
      return goog.array.map(a2, function(a3) {
        a3 = a3.toString(16);
        return 1 < a3.length ? a3 : "0" + a3;
      }).join(b2 || "");
    };
    goog.crypt.hexToByteArray = function(a2) {
      goog.asserts.assert(0 == a2.length % 2, "Key string length must be multiple of 2");
      for (var b2 = [], c2 = 0; c2 < a2.length; c2 += 2)
        b2.push(parseInt(a2.substring(c2, c2 + 2), 16));
      return b2;
    };
    goog.crypt.stringToUtf8ByteArray = function(a2) {
      for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
        var e2 = a2.charCodeAt(d2);
        128 > e2 ? b2[c2++] = e2 : (2048 > e2 ? b2[c2++] = e2 >> 6 | 192 : (55296 == (e2 & 64512) && d2 + 1 < a2.length && 56320 == (a2.charCodeAt(d2 + 1) & 64512) ? (e2 = 65536 + ((e2 & 1023) << 10) + (a2.charCodeAt(++d2) & 1023), b2[c2++] = e2 >> 18 | 240, b2[c2++] = e2 >> 12 & 63 | 128) : b2[c2++] = e2 >> 12 | 224, b2[c2++] = e2 >> 6 & 63 | 128), b2[c2++] = e2 & 63 | 128);
      }
      return b2;
    };
    goog.crypt.utf8ByteArrayToString = function(a2) {
      for (var b2 = [], c2 = 0, d2 = 0; c2 < a2.length; ) {
        var e2 = a2[c2++];
        if (128 > e2)
          b2[d2++] = String.fromCharCode(e2);
        else if (191 < e2 && 224 > e2) {
          var f2 = a2[c2++];
          b2[d2++] = String.fromCharCode((e2 & 31) << 6 | f2 & 63);
        } else if (239 < e2 && 365 > e2) {
          f2 = a2[c2++];
          var g = a2[c2++], h = a2[c2++];
          e2 = ((e2 & 7) << 18 | (f2 & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
          b2[d2++] = String.fromCharCode(55296 + (e2 >> 10));
          b2[d2++] = String.fromCharCode(56320 + (e2 & 1023));
        } else
          f2 = a2[c2++], g = a2[c2++], b2[d2++] = String.fromCharCode((e2 & 15) << 12 | (f2 & 63) << 6 | g & 63);
      }
      return b2.join("");
    };
    goog.crypt.xorByteArray = function(a2, b2) {
      goog.asserts.assert(a2.length == b2.length, "XOR array lengths must match");
      for (var c2 = [], d2 = 0; d2 < a2.length; d2++)
        c2.push(a2[d2] ^ b2[d2]);
      return c2;
    };
    goog.dom.asserts = {};
    goog.dom.asserts.assertIsLocation = function(a2) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var b2 = goog.dom.asserts.getWindow_(a2);
        b2 && (!a2 || !(a2 instanceof b2.Location) && a2 instanceof b2.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a2));
      }
      return a2;
    };
    goog.dom.asserts.assertIsElementType_ = function(a2, b2) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var c2 = goog.dom.asserts.getWindow_(a2);
        c2 && "undefined" != typeof c2[b2] && (a2 && (a2 instanceof c2[b2] || !(a2 instanceof c2.Location || a2 instanceof c2.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, goog.dom.asserts.debugStringForType_(a2)));
      }
      return a2;
    };
    goog.dom.asserts.assertIsHTMLAnchorElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLAnchorElement");
    };
    goog.dom.asserts.assertIsHTMLButtonElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLButtonElement");
    };
    goog.dom.asserts.assertIsHTMLLinkElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLLinkElement");
    };
    goog.dom.asserts.assertIsHTMLImageElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLImageElement");
    };
    goog.dom.asserts.assertIsHTMLAudioElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLAudioElement");
    };
    goog.dom.asserts.assertIsHTMLVideoElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLVideoElement");
    };
    goog.dom.asserts.assertIsHTMLInputElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLInputElement");
    };
    goog.dom.asserts.assertIsHTMLTextAreaElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLTextAreaElement");
    };
    goog.dom.asserts.assertIsHTMLCanvasElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLCanvasElement");
    };
    goog.dom.asserts.assertIsHTMLEmbedElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLEmbedElement");
    };
    goog.dom.asserts.assertIsHTMLFormElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLFormElement");
    };
    goog.dom.asserts.assertIsHTMLFrameElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLFrameElement");
    };
    goog.dom.asserts.assertIsHTMLIFrameElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLIFrameElement");
    };
    goog.dom.asserts.assertIsHTMLObjectElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLObjectElement");
    };
    goog.dom.asserts.assertIsHTMLScriptElement = function(a2) {
      return goog.dom.asserts.assertIsElementType_(a2, "HTMLScriptElement");
    };
    goog.dom.asserts.debugStringForType_ = function(a2) {
      if (goog.isObject(a2))
        try {
          return a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2);
        } catch (b2) {
          return "<object could not be stringified>";
        }
      else
        return void 0 === a2 ? "undefined" : null === a2 ? "null" : typeof a2;
    };
    goog.dom.asserts.getWindow_ = function(a2) {
      try {
        var b2 = a2 && a2.ownerDocument, c2 = b2 && (b2.defaultView || b2.parentWindow);
        c2 = c2 || goog.global;
        if (c2.Element && c2.Location)
          return c2;
      } catch (d2) {
      }
      return null;
    };
    goog.functions = {};
    goog.functions.constant = function(a2) {
      return function() {
        return a2;
      };
    };
    goog.functions.FALSE = function() {
      return false;
    };
    goog.functions.TRUE = function() {
      return true;
    };
    goog.functions.NULL = function() {
      return null;
    };
    goog.functions.identity = function(a2, b2) {
      return a2;
    };
    goog.functions.error = function(a2) {
      return function() {
        throw Error(a2);
      };
    };
    goog.functions.fail = function(a2) {
      return function() {
        throw a2;
      };
    };
    goog.functions.lock = function(a2, b2) {
      b2 = b2 || 0;
      return function() {
        return a2.apply(this, Array.prototype.slice.call(arguments, 0, b2));
      };
    };
    goog.functions.nth = function(a2) {
      return function() {
        return arguments[a2];
      };
    };
    goog.functions.partialRight = function(a2, b2) {
      var c2 = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b3 = Array.prototype.slice.call(arguments);
        b3.push.apply(b3, c2);
        return a2.apply(this, b3);
      };
    };
    goog.functions.withReturnValue = function(a2, b2) {
      return goog.functions.sequence(a2, goog.functions.constant(b2));
    };
    goog.functions.equalTo = function(a2, b2) {
      return function(c2) {
        return b2 ? a2 == c2 : a2 === c2;
      };
    };
    goog.functions.compose = function(a2, b2) {
      var c2 = arguments, d2 = c2.length;
      return function() {
        var a3;
        d2 && (a3 = c2[d2 - 1].apply(this, arguments));
        for (var b3 = d2 - 2; 0 <= b3; b3--)
          a3 = c2[b3].call(this, a3);
        return a3;
      };
    };
    goog.functions.sequence = function(a2) {
      var b2 = arguments, c2 = b2.length;
      return function() {
        for (var a3, e2 = 0; e2 < c2; e2++)
          a3 = b2[e2].apply(this, arguments);
        return a3;
      };
    };
    goog.functions.and = function(a2) {
      var b2 = arguments, c2 = b2.length;
      return function() {
        for (var a3 = 0; a3 < c2; a3++)
          if (!b2[a3].apply(this, arguments))
            return false;
        return true;
      };
    };
    goog.functions.or = function(a2) {
      var b2 = arguments, c2 = b2.length;
      return function() {
        for (var a3 = 0; a3 < c2; a3++)
          if (b2[a3].apply(this, arguments))
            return true;
        return false;
      };
    };
    goog.functions.not = function(a2) {
      return function() {
        return !a2.apply(this, arguments);
      };
    };
    goog.functions.create = function(a2, b2) {
      var c2 = function() {
      };
      c2.prototype = a2.prototype;
      c2 = new c2();
      a2.apply(c2, Array.prototype.slice.call(arguments, 1));
      return c2;
    };
    goog.functions.CACHE_RETURN_VALUE = true;
    goog.functions.cacheReturnValue = function(a2) {
      var b2 = false, c2;
      return function() {
        if (!goog.functions.CACHE_RETURN_VALUE)
          return a2();
        b2 || (c2 = a2(), b2 = true);
        return c2;
      };
    };
    goog.functions.once = function(a2) {
      var b2 = a2;
      return function() {
        if (b2) {
          var a3 = b2;
          b2 = null;
          a3();
        }
      };
    };
    goog.functions.debounce = function(a2, b2, c2) {
      var d2 = 0;
      return function(e2) {
        goog.global.clearTimeout(d2);
        var f2 = arguments;
        d2 = goog.global.setTimeout(function() {
          a2.apply(c2, f2);
        }, b2);
      };
    };
    goog.functions.throttle = function(a2, b2, c2) {
      var d2 = 0, e2 = false, f2 = [], g = function() {
        d2 = 0;
        e2 && (e2 = false, h());
      }, h = function() {
        d2 = goog.global.setTimeout(g, b2);
        a2.apply(c2, f2);
      };
      return function(a3) {
        f2 = arguments;
        d2 ? e2 = true : h();
      };
    };
    goog.functions.rateLimit = function(a2, b2, c2) {
      var d2 = 0, e2 = function() {
        d2 = 0;
      };
      return function(f2) {
        d2 || (d2 = goog.global.setTimeout(e2, b2), a2.apply(c2, arguments));
      };
    };
    goog.dom.HtmlElement = function() {
    };
    goog.dom.TagName = function(a2) {
      this.tagName_ = a2;
    };
    goog.dom.TagName.prototype.toString = function() {
      return this.tagName_;
    };
    goog.dom.TagName.A = new goog.dom.TagName("A");
    goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
    goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
    goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
    goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
    goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
    goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
    goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
    goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
    goog.dom.TagName.B = new goog.dom.TagName("B");
    goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
    goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
    goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
    goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
    goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
    goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
    goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
    goog.dom.TagName.BR = new goog.dom.TagName("BR");
    goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
    goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
    goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
    goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
    goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
    goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
    goog.dom.TagName.COL = new goog.dom.TagName("COL");
    goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
    goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
    goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
    goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
    goog.dom.TagName.DD = new goog.dom.TagName("DD");
    goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
    goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
    goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
    goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
    goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
    goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
    goog.dom.TagName.DL = new goog.dom.TagName("DL");
    goog.dom.TagName.DT = new goog.dom.TagName("DT");
    goog.dom.TagName.EM = new goog.dom.TagName("EM");
    goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
    goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
    goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
    goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
    goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
    goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
    goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
    goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
    goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
    goog.dom.TagName.H1 = new goog.dom.TagName("H1");
    goog.dom.TagName.H2 = new goog.dom.TagName("H2");
    goog.dom.TagName.H3 = new goog.dom.TagName("H3");
    goog.dom.TagName.H4 = new goog.dom.TagName("H4");
    goog.dom.TagName.H5 = new goog.dom.TagName("H5");
    goog.dom.TagName.H6 = new goog.dom.TagName("H6");
    goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
    goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
    goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
    goog.dom.TagName.HR = new goog.dom.TagName("HR");
    goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
    goog.dom.TagName.I = new goog.dom.TagName("I");
    goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
    goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
    goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
    goog.dom.TagName.INS = new goog.dom.TagName("INS");
    goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
    goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
    goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
    goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
    goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
    goog.dom.TagName.LI = new goog.dom.TagName("LI");
    goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
    goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
    goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
    goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
    goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
    goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
    goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
    goog.dom.TagName.META = new goog.dom.TagName("META");
    goog.dom.TagName.METER = new goog.dom.TagName("METER");
    goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
    goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
    goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
    goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
    goog.dom.TagName.OL = new goog.dom.TagName("OL");
    goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
    goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
    goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
    goog.dom.TagName.P = new goog.dom.TagName("P");
    goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
    goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
    goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
    goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
    goog.dom.TagName.Q = new goog.dom.TagName("Q");
    goog.dom.TagName.RP = new goog.dom.TagName("RP");
    goog.dom.TagName.RT = new goog.dom.TagName("RT");
    goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
    goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
    goog.dom.TagName.S = new goog.dom.TagName("S");
    goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
    goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
    goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
    goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
    goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
    goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
    goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
    goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
    goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
    goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
    goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
    goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
    goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
    goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
    goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
    goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
    goog.dom.TagName.TD = new goog.dom.TagName("TD");
    goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
    goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
    goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
    goog.dom.TagName.TH = new goog.dom.TagName("TH");
    goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
    goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
    goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
    goog.dom.TagName.TR = new goog.dom.TagName("TR");
    goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
    goog.dom.TagName.TT = new goog.dom.TagName("TT");
    goog.dom.TagName.U = new goog.dom.TagName("U");
    goog.dom.TagName.UL = new goog.dom.TagName("UL");
    goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
    goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
    goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
    goog.dom.tags = {};
    goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
    goog.dom.tags.isVoidTag = function(a2) {
      return true === goog.dom.tags.VOID_TAGS_[a2];
    };
    goog.html = {};
    goog.html.trustedtypes = {};
    goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
    goog.string = {};
    goog.string.TypedString = function() {
    };
    goog.string.Const = function(a2, b2) {
      this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a2 === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
      this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
    };
    goog.string.Const.prototype.implementsGoogStringTypedString = true;
    goog.string.Const.prototype.getTypedStringValue = function() {
      return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
    };
    goog.DEBUG && (goog.string.Const.prototype.toString = function() {
      return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
    });
    goog.string.Const.unwrap = function(a2) {
      if (a2 instanceof goog.string.Const && a2.constructor === goog.string.Const && a2.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
        return a2.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      goog.asserts.fail("expected object of type Const, got '" + a2 + "'");
      return "type_error:Const";
    };
    goog.string.Const.from = function(a2) {
      return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a2);
    };
    goog.string.Const.TYPE_MARKER_ = {};
    goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
    goog.string.Const.EMPTY = goog.string.Const.from("");
    goog.html.SafeScript = function() {
      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
      this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeScript.fromConstant = function(a2) {
      a2 = goog.string.Const.unwrap(a2);
      return 0 === a2.length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeScript.fromConstantAndArgs = function(a2, b2) {
      for (var c2 = [], d2 = 1; d2 < arguments.length; d2++)
        c2.push(goog.html.SafeScript.stringify_(arguments[d2]));
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a2) + ")(" + c2.join(", ") + ");");
    };
    goog.html.SafeScript.fromJson = function(a2) {
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a2));
    };
    goog.html.SafeScript.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
    };
    goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
      return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
    });
    goog.html.SafeScript.unwrap = function(a2) {
      return goog.html.SafeScript.unwrapTrustedScript(a2).toString();
    };
    goog.html.SafeScript.unwrapTrustedScript = function(a2) {
      if (a2 instanceof goog.html.SafeScript && a2.constructor === goog.html.SafeScript && a2.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a2.privateDoNotAccessOrElseSafeScriptWrappedValue_;
      goog.asserts.fail("expected object of type SafeScript, got '" + a2 + "' of type " + goog.typeOf(a2));
      return "type_error:SafeScript";
    };
    goog.html.SafeScript.stringify_ = function(a2) {
      return JSON.stringify(a2).replace(/</g, "\\x3c");
    };
    goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a2) {
      return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a2);
    };
    goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a2) : a2;
      return this;
    };
    goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
    goog.fs = {};
    goog.fs.url = {};
    goog.fs.url.createObjectUrl = function(a2) {
      return goog.fs.url.getUrlObject_().createObjectURL(a2);
    };
    goog.fs.url.revokeObjectUrl = function(a2) {
      goog.fs.url.getUrlObject_().revokeObjectURL(a2);
    };
    goog.fs.url.UrlObject_ = function() {
    };
    goog.fs.url.UrlObject_.prototype.createObjectURL = function(a2) {
    };
    goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(a2) {
    };
    goog.fs.url.getUrlObject_ = function() {
      var a2 = goog.fs.url.findUrlObject_();
      if (null != a2)
        return a2;
      throw Error("This browser doesn't seem to support blob URLs");
    };
    goog.fs.url.findUrlObject_ = function() {
      return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.webkitURL && void 0 !== goog.global.webkitURL.createObjectURL ? goog.global.webkitURL : void 0 !== goog.global.createObjectURL ? goog.global : null;
    };
    goog.fs.url.browserSupportsObjectUrls = function() {
      return null != goog.fs.url.findUrlObject_();
    };
    goog.fs.blob = {};
    goog.fs.blob.getBlob = function(a2) {
      var b2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
      if (void 0 !== b2) {
        b2 = new b2();
        for (var c2 = 0; c2 < arguments.length; c2++)
          b2.append(arguments[c2]);
        return b2.getBlob();
      }
      return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));
    };
    goog.fs.blob.getBlobWithProperties = function(a2, b2, c2) {
      var d2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
      if (void 0 !== d2) {
        d2 = new d2();
        for (var e2 = 0; e2 < a2.length; e2++)
          d2.append(a2[e2], c2);
        return d2.getBlob(b2);
      }
      if (void 0 !== goog.global.Blob)
        return d2 = {}, b2 && (d2.type = b2), c2 && (d2.endings = c2), new Blob(a2, d2);
      throw Error("This browser doesn't seem to support creating Blobs");
    };
    goog.i18n = {};
    goog.i18n.bidi = {};
    goog.i18n.bidi.FORCE_RTL = false;
    goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(
      3,
      7
    ).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase());
    goog.i18n.bidi.Format = { LRE: "\u202A", RLE: "\u202B", PDF: "\u202C", LRM: "\u200E", RLM: "\u200F" };
    goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
    goog.i18n.bidi.RIGHT = "right";
    goog.i18n.bidi.LEFT = "left";
    goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
    goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
    goog.i18n.bidi.toDir = function(a2, b2) {
      return "number" == typeof a2 ? 0 < a2 ? goog.i18n.bidi.Dir.LTR : 0 > a2 ? goog.i18n.bidi.Dir.RTL : b2 ? null : goog.i18n.bidi.Dir.NEUTRAL : null == a2 ? null : a2 ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
    };
    goog.i18n.bidi.ltrChars_ = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0900-\u1FFF\u200E\u2C00-\uD801\uD804-\uD839\uD83C-\uDBFF\uF900-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
    goog.i18n.bidi.rtlChars_ = "\u0591-\u06EF\u06FA-\u08FF\u200F\uD802-\uD803\uD83A-\uD83B\uFB1D-\uFDFF\uFE70-\uFEFC";
    goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
    goog.i18n.bidi.stripHtmlIfNeeded_ = function(a2, b2) {
      return b2 ? a2.replace(goog.i18n.bidi.htmlSkipReg_, "") : a2;
    };
    goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
    goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
    goog.i18n.bidi.hasAnyRtl = function(a2, b2) {
      return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
    };
    goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
    goog.i18n.bidi.hasAnyLtr = function(a2, b2) {
      return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
    };
    goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
    goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
    goog.i18n.bidi.isRtlChar = function(a2) {
      return goog.i18n.bidi.rtlRe_.test(a2);
    };
    goog.i18n.bidi.isLtrChar = function(a2) {
      return goog.i18n.bidi.ltrRe_.test(a2);
    };
    goog.i18n.bidi.isNeutralChar = function(a2) {
      return !goog.i18n.bidi.isLtrChar(a2) && !goog.i18n.bidi.isRtlChar(a2);
    };
    goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
    goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
    goog.i18n.bidi.startsWithRtl = function(a2, b2) {
      return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
    };
    goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
    goog.i18n.bidi.startsWithLtr = function(a2, b2) {
      return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
    };
    goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
    goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
    goog.i18n.bidi.isNeutralText = function(a2, b2) {
      a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2);
      return goog.i18n.bidi.isRequiredLtrRe_.test(a2) || !goog.i18n.bidi.hasAnyLtr(a2) && !goog.i18n.bidi.hasAnyRtl(a2);
    };
    goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
    goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
    goog.i18n.bidi.endsWithLtr = function(a2, b2) {
      return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
    };
    goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
    goog.i18n.bidi.endsWithRtl = function(a2, b2) {
      return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
    };
    goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
    goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    goog.i18n.bidi.isRtlLanguage = function(a2) {
      return goog.i18n.bidi.rtlLocalesRe_.test(a2);
    };
    goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
    goog.i18n.bidi.guardBracketInText = function(a2, b2) {
      b2 = (void 0 === b2 ? goog.i18n.bidi.hasAnyRtl(a2) : b2) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
      return a2.replace(goog.i18n.bidi.bracketGuardTextRe_, b2 + "$&" + b2);
    };
    goog.i18n.bidi.enforceRtlInHtml = function(a2) {
      return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a2 + "</span>";
    };
    goog.i18n.bidi.enforceRtlInText = function(a2) {
      return goog.i18n.bidi.Format.RLE + a2 + goog.i18n.bidi.Format.PDF;
    };
    goog.i18n.bidi.enforceLtrInHtml = function(a2) {
      return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a2 + "</span>";
    };
    goog.i18n.bidi.enforceLtrInText = function(a2) {
      return goog.i18n.bidi.Format.LRE + a2 + goog.i18n.bidi.Format.PDF;
    };
    goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
    goog.i18n.bidi.leftRe_ = /left/gi;
    goog.i18n.bidi.rightRe_ = /right/gi;
    goog.i18n.bidi.tempRe_ = /%%%%/g;
    goog.i18n.bidi.mirrorCSS = function(a2) {
      return a2.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
    };
    goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
    goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
    goog.i18n.bidi.normalizeHebrewQuote = function(a2) {
      return a2.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05F4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05F3");
    };
    goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
    goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
    goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
    goog.i18n.bidi.estimateDirection = function(a2, b2) {
      var c2 = 0, d2 = 0, e2 = false;
      a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2).split(goog.i18n.bidi.wordSeparatorRe_);
      for (b2 = 0; b2 < a2.length; b2++) {
        var f2 = a2[b2];
        goog.i18n.bidi.startsWithRtl(f2) ? (c2++, d2++) : goog.i18n.bidi.isRequiredLtrRe_.test(f2) ? e2 = true : goog.i18n.bidi.hasAnyLtr(f2) ? d2++ : goog.i18n.bidi.hasNumeralsRe_.test(f2) && (e2 = true);
      }
      return 0 == d2 ? e2 ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c2 / d2 > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
    };
    goog.i18n.bidi.detectRtlDirectionality = function(a2, b2) {
      return goog.i18n.bidi.estimateDirection(a2, b2) == goog.i18n.bidi.Dir.RTL;
    };
    goog.i18n.bidi.setElementDirAndAlign = function(a2, b2) {
      a2 && (b2 = goog.i18n.bidi.toDir(b2)) && (a2.style.textAlign = b2 == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a2.dir = b2 == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
    };
    goog.i18n.bidi.setElementDirByTextDirectionality = function(a2, b2) {
      switch (goog.i18n.bidi.estimateDirection(b2)) {
        case goog.i18n.bidi.Dir.LTR:
          a2.dir = "ltr";
          break;
        case goog.i18n.bidi.Dir.RTL:
          a2.dir = "rtl";
          break;
        default:
          a2.removeAttribute("dir");
      }
    };
    goog.i18n.bidi.DirectionalString = function() {
    };
    goog.html.TrustedResourceUrl = function(a2, b2) {
      this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = a2 === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
      this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
    goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
    };
    goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
    goog.html.TrustedResourceUrl.prototype.getDirection = function() {
      return goog.i18n.bidi.Dir.LTR;
    };
    goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a2, b2) {
      var c2 = goog.html.TrustedResourceUrl.unwrap(this);
      c2 = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c2);
      var d2 = c2[3] || "";
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c2[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c2[2] || "", a2) + goog.html.TrustedResourceUrl.stringifyParams_("#", d2, b2));
    };
    goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
      return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
    });
    goog.html.TrustedResourceUrl.unwrap = function(a2) {
      return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a2).toString();
    };
    goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a2) {
      if (a2 instanceof goog.html.TrustedResourceUrl && a2.constructor === goog.html.TrustedResourceUrl && a2.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
      goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
      return "type_error:TrustedResourceUrl";
    };
    goog.html.TrustedResourceUrl.format = function(a2, b2) {
      var c2 = goog.string.Const.unwrap(a2);
      if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c2))
        throw Error("Invalid TrustedResourceUrl format: " + c2);
      a2 = c2.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a3, e2) {
        if (!Object.prototype.hasOwnProperty.call(b2, e2))
          throw Error('Found marker, "' + e2 + '", in format string, "' + c2 + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
        a3 = b2[e2];
        return a3 instanceof goog.string.Const ? goog.string.Const.unwrap(a3) : encodeURIComponent(String(a3));
      });
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
    goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
    goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    goog.html.TrustedResourceUrl.formatWithParams = function(a2, b2, c2, d2) {
      return goog.html.TrustedResourceUrl.format(a2, b2).cloneWithParams(c2, d2);
    };
    goog.html.TrustedResourceUrl.fromConstant = function(a2) {
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
    };
    goog.html.TrustedResourceUrl.fromConstants = function(a2) {
      for (var b2 = "", c2 = 0; c2 < a2.length; c2++)
        b2 += goog.string.Const.unwrap(a2[c2]);
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.html.TrustedResourceUrl.fromSafeScript = function(a2) {
      a2 = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(a2)], "text/javascript");
      a2 = goog.fs.url.createObjectUrl(a2);
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
      a2 = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a2) : a2;
      return new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a2);
    };
    goog.html.TrustedResourceUrl.stringifyParams_ = function(a2, b2, c2) {
      if (null == c2)
        return b2;
      if ("string" === typeof c2)
        return c2 ? a2 + encodeURIComponent(c2) : "";
      for (var d2 in c2) {
        var e2 = c2[d2];
        e2 = Array.isArray(e2) ? e2 : [e2];
        for (var f2 = 0; f2 < e2.length; f2++) {
          var g = e2[f2];
          null != g && (b2 || (b2 = a2), b2 += (b2.length > a2.length ? "&" : "") + encodeURIComponent(d2) + "=" + encodeURIComponent(String(g)));
        }
      }
      return b2;
    };
    goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
    goog.string.internal = {};
    goog.string.internal.startsWith = function(a2, b2) {
      return 0 == a2.lastIndexOf(b2, 0);
    };
    goog.string.internal.endsWith = function(a2, b2) {
      var c2 = a2.length - b2.length;
      return 0 <= c2 && a2.indexOf(b2, c2) == c2;
    };
    goog.string.internal.caseInsensitiveStartsWith = function(a2, b2) {
      return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(0, b2.length));
    };
    goog.string.internal.caseInsensitiveEndsWith = function(a2, b2) {
      return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(a2.length - b2.length, b2.length));
    };
    goog.string.internal.caseInsensitiveEquals = function(a2, b2) {
      return a2.toLowerCase() == b2.toLowerCase();
    };
    goog.string.internal.isEmptyOrWhitespace = function(a2) {
      return /^[\s\xa0]*$/.test(a2);
    };
    goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a2) {
      return a2.trim();
    } : function(a2) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
    };
    goog.string.internal.caseInsensitiveCompare = function(a2, b2) {
      a2 = String(a2).toLowerCase();
      b2 = String(b2).toLowerCase();
      return a2 < b2 ? -1 : a2 == b2 ? 0 : 1;
    };
    goog.string.internal.newLineToBr = function(a2, b2) {
      return a2.replace(/(\r\n|\r|\n)/g, b2 ? "<br />" : "<br>");
    };
    goog.string.internal.htmlEscape = function(a2, b2) {
      if (b2)
        a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
      else {
        if (!goog.string.internal.ALL_RE_.test(a2))
          return a2;
        -1 != a2.indexOf("&") && (a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;"));
        -1 != a2.indexOf("<") && (a2 = a2.replace(
          goog.string.internal.LT_RE_,
          "&lt;"
        ));
        -1 != a2.indexOf(">") && (a2 = a2.replace(goog.string.internal.GT_RE_, "&gt;"));
        -1 != a2.indexOf('"') && (a2 = a2.replace(goog.string.internal.QUOT_RE_, "&quot;"));
        -1 != a2.indexOf("'") && (a2 = a2.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
        -1 != a2.indexOf("\0") && (a2 = a2.replace(goog.string.internal.NULL_RE_, "&#0;"));
      }
      return a2;
    };
    goog.string.internal.AMP_RE_ = /&/g;
    goog.string.internal.LT_RE_ = /</g;
    goog.string.internal.GT_RE_ = />/g;
    goog.string.internal.QUOT_RE_ = /"/g;
    goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
    goog.string.internal.NULL_RE_ = /\x00/g;
    goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
    goog.string.internal.whitespaceEscape = function(a2, b2) {
      return goog.string.internal.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
    };
    goog.string.internal.contains = function(a2, b2) {
      return -1 != a2.indexOf(b2);
    };
    goog.string.internal.caseInsensitiveContains = function(a2, b2) {
      return goog.string.internal.contains(a2.toLowerCase(), b2.toLowerCase());
    };
    goog.string.internal.compareVersions = function(a2, b2) {
      var c2 = 0;
      a2 = goog.string.internal.trim(String(a2)).split(".");
      b2 = goog.string.internal.trim(String(b2)).split(".");
      for (var d2 = Math.max(a2.length, b2.length), e2 = 0; 0 == c2 && e2 < d2; e2++) {
        var f2 = a2[e2] || "", g = b2[e2] || "";
        do {
          f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f2[0].length && 0 == g[0].length)
            break;
          c2 = 0 == f2[1].length ? 0 : parseInt(f2[1], 10);
          var h = 0 == g[1].length ? 0 : parseInt(g[1], 10);
          c2 = goog.string.internal.compareElements_(c2, h) || goog.string.internal.compareElements_(0 == f2[2].length, 0 == g[2].length) || goog.string.internal.compareElements_(f2[2], g[2]);
          f2 = f2[3];
          g = g[3];
        } while (0 == c2);
      }
      return c2;
    };
    goog.string.internal.compareElements_ = function(a2, b2) {
      return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
    };
    goog.html.SafeUrl = function(a2, b2) {
      this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = a2 === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
      this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
    goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeUrl.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
    };
    goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
    goog.html.SafeUrl.prototype.getDirection = function() {
      return goog.i18n.bidi.Dir.LTR;
    };
    goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
      return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
    });
    goog.html.SafeUrl.unwrap = function(a2) {
      if (a2 instanceof goog.html.SafeUrl && a2.constructor === goog.html.SafeUrl && a2.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a2.privateDoNotAccessOrElseSafeUrlWrappedValue_;
      goog.asserts.fail("expected object of type SafeUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
      return "type_error:SafeUrl";
    };
    goog.html.SafeUrl.fromConstant = function(a2) {
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
    };
    goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
    goog.html.SafeUrl.isSafeMimeType = function(a2) {
      return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2);
    };
    goog.html.SafeUrl.fromBlob = function(a2) {
      a2 = goog.html.SafeUrl.isSafeMimeType(a2.type) ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.fromMediaSource = function(a2) {
      goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
      a2 = a2 instanceof MediaSource ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    goog.html.SafeUrl.fromDataUrl = function(a2) {
      a2 = a2.replace(/(%0A|%0D)/g, "");
      var b2 = a2.match(goog.html.DATA_URL_PATTERN_);
      b2 = b2 && goog.html.SafeUrl.isSafeMimeType(b2[1]);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2 ? a2 : goog.html.SafeUrl.INNOCUOUS_STRING);
    };
    goog.html.SafeUrl.fromTelUrl = function(a2) {
      goog.string.internal.caseInsensitiveStartsWith(a2, "tel:") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
    goog.html.SafeUrl.fromSipUrl = function(a2) {
      goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a2)) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.fromFacebookMessengerUrl = function(a2) {
      goog.string.internal.caseInsensitiveStartsWith(a2, "fb-messenger://share") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.fromWhatsAppUrl = function(a2) {
      goog.string.internal.caseInsensitiveStartsWith(a2, "whatsapp://send") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.fromSmsUrl = function(a2) {
      goog.string.internal.caseInsensitiveStartsWith(a2, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a2) {
      var b2 = a2.indexOf("#");
      0 < b2 && (a2 = a2.substring(0, b2));
      b2 = a2.match(/[?&]body=/gi);
      if (!b2)
        return true;
      if (1 < b2.length)
        return false;
      a2 = a2.match(/[?&]body=([^&]*)/)[1];
      if (!a2)
        return true;
      try {
        decodeURIComponent(a2);
      } catch (c2) {
        return false;
      }
      return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a2);
    };
    goog.html.SafeUrl.fromSshUrl = function(a2) {
      goog.string.internal.caseInsensitiveStartsWith(a2, "ssh://") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a2, b2) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a2, b2);
    };
    goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a2, b2) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a2, b2);
    };
    goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a2, b2) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a2, b2);
    };
    goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a2, b2, c2) {
      (a2 = a2.exec(b2)) ? (a2 = a2[1], -1 == (c2 instanceof goog.string.Const ? [goog.string.Const.unwrap(c2)] : c2.map(function(a3) {
        return goog.string.Const.unwrap(a3);
      })).indexOf(a2) && (b2 = goog.html.SafeUrl.INNOCUOUS_STRING)) : b2 = goog.html.SafeUrl.INNOCUOUS_STRING;
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.html.SafeUrl.fromTrustedResourceUrl = function(a2) {
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a2));
    };
    goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
    goog.html.SafeUrl.sanitize = function(a2) {
      if (a2 instanceof goog.html.SafeUrl)
        return a2;
      a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
      goog.html.SAFE_URL_PATTERN_.test(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.sanitizeAssertUnchanged = function(a2, b2) {
      if (a2 instanceof goog.html.SafeUrl)
        return a2;
      a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
      if (b2 && /^data:/i.test(a2) && (b2 = goog.html.SafeUrl.fromDataUrl(a2), b2.getTypedStringValue() == a2))
        return b2;
      goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
      return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a2);
    };
    goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
    goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
    goog.html.SafeStyle = function() {
      this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
      this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeStyle.fromConstant = function(a2) {
      a2 = goog.string.Const.unwrap(a2);
      if (0 === a2.length)
        return goog.html.SafeStyle.EMPTY;
      goog.asserts.assert(goog.string.internal.endsWith(a2, ";"), "Last character of style string is not ';': " + a2);
      goog.asserts.assert(goog.string.internal.contains(a2, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a2);
      return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeStyle.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    };
    goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
      return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
    });
    goog.html.SafeStyle.unwrap = function(a2) {
      if (a2 instanceof goog.html.SafeStyle && a2.constructor === goog.html.SafeStyle && a2.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a2.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      goog.asserts.fail("expected object of type SafeStyle, got '" + a2 + "' of type " + goog.typeOf(a2));
      return "type_error:SafeStyle";
    };
    goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a2) {
      return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a2);
    };
    goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
      this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a2;
      return this;
    };
    goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
    goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
    goog.html.SafeStyle.create = function(a2) {
      var b2 = "", c2;
      for (c2 in a2) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c2))
          throw Error("Name allows only [-_a-zA-Z0-9], got: " + c2);
        var d2 = a2[c2];
        null != d2 && (d2 = Array.isArray(d2) ? goog.array.map(d2, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d2), b2 += c2 + ":" + d2 + ";");
      }
      return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
    };
    goog.html.SafeStyle.sanitizePropertyValue_ = function(a2) {
      if (a2 instanceof goog.html.SafeUrl)
        return 'url("' + goog.html.SafeUrl.unwrap(a2).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
      a2 = a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a2));
      if (/[{;}]/.test(a2))
        throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a2]);
      return a2;
    };
    goog.html.SafeStyle.sanitizePropertyValueString_ = function(a2) {
      var b2 = a2.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
      if (goog.html.SafeStyle.VALUE_RE_.test(b2)) {
        if (goog.html.SafeStyle.COMMENT_RE_.test(a2))
          return goog.asserts.fail("String value disallows comments, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        if (!goog.html.SafeStyle.hasBalancedQuotes_(a2))
          return goog.asserts.fail("String value requires balanced quotes, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a2))
          return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
      } else
        return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
      return goog.html.SafeStyle.sanitizeUrl_(a2);
    };
    goog.html.SafeStyle.hasBalancedQuotes_ = function(a2) {
      for (var b2 = true, c2 = true, d2 = 0; d2 < a2.length; d2++) {
        var e2 = a2.charAt(d2);
        "'" == e2 && c2 ? b2 = !b2 : '"' == e2 && b2 && (c2 = !c2);
      }
      return b2 && c2;
    };
    goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a2) {
      for (var b2 = true, c2 = /^[-_a-zA-Z0-9]$/, d2 = 0; d2 < a2.length; d2++) {
        var e2 = a2.charAt(d2);
        if ("]" == e2) {
          if (b2)
            return false;
          b2 = true;
        } else if ("[" == e2) {
          if (!b2)
            return false;
          b2 = false;
        } else if (!b2 && !c2.test(e2))
          return false;
      }
      return b2;
    };
    goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
    goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
    goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    goog.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" ");
    goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp("\\b(" + goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
    goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
    goog.html.SafeStyle.sanitizeUrl_ = function(a2) {
      return a2.replace(goog.html.SafeStyle.URL_RE_, function(a3, c2, d2, e2) {
        var b2 = "";
        d2 = d2.replace(/^(['"])(.*)\1$/, function(a4, c3, d3) {
          b2 = c3;
          return d3;
        });
        a3 = goog.html.SafeUrl.sanitize(d2).getTypedStringValue();
        return c2 + b2 + a3 + b2 + e2;
      });
    };
    goog.html.SafeStyle.concat = function(a2) {
      var b2 = "", c2 = function(a3) {
        Array.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyle.unwrap(a3);
      };
      goog.array.forEach(arguments, c2);
      return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
    };
    goog.html.SafeStyleSheet = function() {
      this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
      this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    };
    goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeStyleSheet.createRule = function(a2, b2) {
      if (goog.string.internal.contains(a2, "<"))
        throw Error("Selector does not allow '<', got: " + a2);
      var c2 = a2.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c2))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a2);
      if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c2))
        throw Error("() and [] in selector must be balanced, got: " + a2);
      b2 instanceof goog.html.SafeStyle || (b2 = goog.html.SafeStyle.create(b2));
      a2 = a2 + "{" + goog.html.SafeStyle.unwrap(b2).replace(/</g, "\\3C ") + "}";
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a2) {
      for (var b2 = { "(": ")", "[": "]" }, c2 = [], d2 = 0; d2 < a2.length; d2++) {
        var e2 = a2[d2];
        if (b2[e2])
          c2.push(b2[e2]);
        else if (goog.object.contains(b2, e2) && c2.pop() != e2)
          return false;
      }
      return 0 == c2.length;
    };
    goog.html.SafeStyleSheet.concat = function(a2) {
      var b2 = "", c2 = function(a3) {
        Array.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyleSheet.unwrap(a3);
      };
      goog.array.forEach(arguments, c2);
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.html.SafeStyleSheet.fromConstant = function(a2) {
      a2 = goog.string.Const.unwrap(a2);
      if (0 === a2.length)
        return goog.html.SafeStyleSheet.EMPTY;
      goog.asserts.assert(!goog.string.internal.contains(a2, "<"), "Forbidden '<' character in style sheet string: " + a2);
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
    };
    goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    };
    goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
      return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
    });
    goog.html.SafeStyleSheet.unwrap = function(a2) {
      if (a2 instanceof goog.html.SafeStyleSheet && a2.constructor === goog.html.SafeStyleSheet && a2.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a2.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a2 + "' of type " + goog.typeOf(a2));
      return "type_error:SafeStyleSheet";
    };
    goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a2) {
      return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a2);
    };
    goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
      this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a2;
      return this;
    };
    goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
    goog.labs = {};
    goog.labs.userAgent = {};
    goog.labs.userAgent.util = {};
    goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
      var a2 = goog.labs.userAgent.util.getNavigator_();
      return a2 && (a2 = a2.userAgent) ? a2 : "";
    };
    goog.labs.userAgent.util.getNavigator_ = function() {
      return goog.global.navigator;
    };
    goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
    goog.labs.userAgent.util.setUserAgent = function(a2) {
      goog.labs.userAgent.util.userAgent_ = a2 || goog.labs.userAgent.util.getNativeUserAgentString_();
    };
    goog.labs.userAgent.util.getUserAgent = function() {
      return goog.labs.userAgent.util.userAgent_;
    };
    goog.labs.userAgent.util.matchUserAgent = function(a2) {
      var b2 = goog.labs.userAgent.util.getUserAgent();
      return goog.string.internal.contains(b2, a2);
    };
    goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a2) {
      var b2 = goog.labs.userAgent.util.getUserAgent();
      return goog.string.internal.caseInsensitiveContains(b2, a2);
    };
    goog.labs.userAgent.util.extractVersionTuples = function(a2) {
      for (var b2 = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c2 = [], d2; d2 = b2.exec(a2); )
        c2.push([d2[1], d2[2], d2[3] || void 0]);
      return c2;
    };
    goog.labs.userAgent.browser = {};
    goog.labs.userAgent.browser.matchOpera_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Opera");
    };
    goog.labs.userAgent.browser.matchIE_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
    };
    goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Edge");
    };
    goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Edg/");
    };
    goog.labs.userAgent.browser.matchOperaChromium_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("OPR");
    };
    goog.labs.userAgent.browser.matchFirefox_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
    };
    goog.labs.userAgent.browser.matchSafari_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
    };
    goog.labs.userAgent.browser.matchCoast_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Coast");
    };
    goog.labs.userAgent.browser.matchIosWebview_ = function() {
      return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
    };
    goog.labs.userAgent.browser.matchChrome_ = function() {
      return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
    };
    goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
      return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
    };
    goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
    goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
    goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
    goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
    goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
    goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
    goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
    goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
    goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
    goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
    goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
    goog.labs.userAgent.browser.isSilk = function() {
      return goog.labs.userAgent.util.matchUserAgent("Silk");
    };
    goog.labs.userAgent.browser.getVersion = function() {
      function a2(a3) {
        a3 = goog.array.find(a3, d2);
        return c2[a3] || "";
      }
      var b2 = goog.labs.userAgent.util.getUserAgent();
      if (goog.labs.userAgent.browser.isIE())
        return goog.labs.userAgent.browser.getIEVersion_(b2);
      b2 = goog.labs.userAgent.util.extractVersionTuples(b2);
      var c2 = {};
      goog.array.forEach(b2, function(a3) {
        c2[a3[0]] = a3[1];
      });
      var d2 = goog.partial(goog.object.containsKey, c2);
      return goog.labs.userAgent.browser.isOpera() ? a2(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a2(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a2(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a2(["Chrome", "CriOS", "HeadlessChrome"]) : (b2 = b2[2]) && b2[1] || "";
    };
    goog.labs.userAgent.browser.isVersionOrHigher = function(a2) {
      return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a2);
    };
    goog.labs.userAgent.browser.getIEVersion_ = function(a2) {
      var b2 = /rv: *([\d\.]*)/.exec(a2);
      if (b2 && b2[1])
        return b2[1];
      b2 = "";
      var c2 = /MSIE +([\d\.]+)/.exec(a2);
      if (c2 && c2[1])
        if (a2 = /Trident\/(\d.\d)/.exec(a2), "7.0" == c2[1])
          if (a2 && a2[1])
            switch (a2[1]) {
              case "4.0":
                b2 = "8.0";
                break;
              case "5.0":
                b2 = "9.0";
                break;
              case "6.0":
                b2 = "10.0";
                break;
              case "7.0":
                b2 = "11.0";
            }
          else
            b2 = "7.0";
        else
          b2 = c2[1];
      return b2;
    };
    goog.html.SafeHtml = function() {
      this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
      this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      this.dir_ = null;
    };
    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
    goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = true;
    goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
    goog.html.SafeHtml.prototype.getDirection = function() {
      return this.dir_;
    };
    goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
    goog.html.SafeHtml.prototype.getTypedStringValue = function() {
      return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    };
    goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
      return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
    });
    goog.html.SafeHtml.unwrap = function(a2) {
      return goog.html.SafeHtml.unwrapTrustedHTML(a2).toString();
    };
    goog.html.SafeHtml.unwrapTrustedHTML = function(a2) {
      if (a2 instanceof goog.html.SafeHtml && a2.constructor === goog.html.SafeHtml && a2.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
        return a2.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
      goog.asserts.fail("expected object of type SafeHtml, got '" + a2 + "' of type " + goog.typeOf(a2));
      return "type_error:SafeHtml";
    };
    goog.html.SafeHtml.htmlEscape = function(a2) {
      if (a2 instanceof goog.html.SafeHtml)
        return a2;
      var b2 = "object" == typeof a2, c2 = null;
      b2 && a2.implementsGoogI18nBidiDirectionalString && (c2 = a2.getDirection());
      a2 = b2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a2), c2);
    };
    goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a2) {
      if (a2 instanceof goog.html.SafeHtml)
        return a2;
      a2 = goog.html.SafeHtml.htmlEscape(a2);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
    };
    goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a2) {
      if (a2 instanceof goog.html.SafeHtml)
        return a2;
      a2 = goog.html.SafeHtml.htmlEscape(a2);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
    };
    goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
    goog.html.SafeHtml.comment = function(a2) {
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!--" + goog.string.internal.htmlEscape(a2) + "-->", null);
    };
    goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
    goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
    goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = { APPLET: true, BASE: true, EMBED: true, IFRAME: true, LINK: true, MATH: true, META: true, OBJECT: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
    goog.html.SafeHtml.create = function(a2, b2, c2) {
      goog.html.SafeHtml.verifyTagName(String(a2));
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a2), b2, c2);
    };
    goog.html.SafeHtml.verifyTagName = function(a2) {
      if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a2))
        throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + a2 + ">." : "");
      if (a2.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
        throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + a2 + "> is not allowed for SafeHtml." : "");
    };
    goog.html.SafeHtml.createIframe = function(a2, b2, c2, d2) {
      a2 && goog.html.TrustedResourceUrl.unwrap(a2);
      var e2 = {};
      e2.src = a2 || null;
      e2.srcdoc = b2 && goog.html.SafeHtml.unwrap(b2);
      a2 = goog.html.SafeHtml.combineAttributes(e2, { sandbox: "" }, c2);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
    };
    goog.html.SafeHtml.createSandboxIframe = function(a2, b2, c2, d2) {
      if (!goog.html.SafeHtml.canUseSandboxIframe())
        throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
      var e2 = {};
      e2.src = a2 ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2)) : null;
      e2.srcdoc = b2 || null;
      e2.sandbox = "";
      a2 = goog.html.SafeHtml.combineAttributes(e2, {}, c2);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
    };
    goog.html.SafeHtml.canUseSandboxIframe = function() {
      return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
    };
    goog.html.SafeHtml.createScriptSrc = function(a2, b2) {
      goog.html.TrustedResourceUrl.unwrap(a2);
      a2 = goog.html.SafeHtml.combineAttributes({ src: a2 }, {}, b2);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a2);
    };
    goog.html.SafeHtml.createScript = function(a2, b2) {
      for (var c2 in b2) {
        var d2 = c2.toLowerCase();
        if ("language" == d2 || "src" == d2 || "text" == d2 || "type" == d2)
          throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + d2 + '" attribute' : "");
      }
      c2 = "";
      a2 = goog.array.concat(a2);
      for (d2 = 0; d2 < a2.length; d2++)
        c2 += goog.html.SafeScript.unwrap(a2[d2]);
      a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b2, a2);
    };
    goog.html.SafeHtml.createStyle = function(a2, b2) {
      b2 = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b2);
      var c2 = "";
      a2 = goog.array.concat(a2);
      for (var d2 = 0; d2 < a2.length; d2++)
        c2 += goog.html.SafeStyleSheet.unwrap(a2[d2]);
      a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b2, a2);
    };
    goog.html.SafeHtml.createMetaRefresh = function(a2, b2) {
      a2 = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2));
      (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a2, ";") && (a2 = "'" + a2.replace(/'/g, "%27") + "'");
      return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b2 || 0) + "; url=" + a2 });
    };
    goog.html.SafeHtml.getAttrNameAndValue_ = function(a2, b2, c2) {
      if (c2 instanceof goog.string.Const)
        c2 = goog.string.Const.unwrap(c2);
      else if ("style" == b2.toLowerCase())
        if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
          c2 = goog.html.SafeHtml.getStyleValue_(c2);
        else
          throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
      else {
        if (/^on/i.test(b2))
          throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" requires goog.string.Const value, "' + c2 + '" given.' : "");
        if (b2.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
          if (c2 instanceof goog.html.TrustedResourceUrl)
            c2 = goog.html.TrustedResourceUrl.unwrap(c2);
          else if (c2 instanceof goog.html.SafeUrl)
            c2 = goog.html.SafeUrl.unwrap(c2);
          else if ("string" === typeof c2)
            c2 = goog.html.SafeUrl.sanitize(c2).getTypedStringValue();
          else
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" on tag "' + a2 + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c2 + '" given.' : "");
      }
      c2.implementsGoogStringTypedString && (c2 = c2.getTypedStringValue());
      goog.asserts.assert("string" === typeof c2 || "number" === typeof c2, "String or number value expected, got " + typeof c2 + " with value: " + c2);
      return b2 + '="' + goog.string.internal.htmlEscape(String(c2)) + '"';
    };
    goog.html.SafeHtml.getStyleValue_ = function(a2) {
      if (!goog.isObject(a2))
        throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a2 + " given: " + a2 : "");
      a2 instanceof goog.html.SafeStyle || (a2 = goog.html.SafeStyle.create(a2));
      return goog.html.SafeStyle.unwrap(a2);
    };
    goog.html.SafeHtml.createWithDir = function(a2, b2, c2, d2) {
      b2 = goog.html.SafeHtml.create(b2, c2, d2);
      b2.dir_ = a2;
      return b2;
    };
    goog.html.SafeHtml.join = function(a2, b2) {
      a2 = goog.html.SafeHtml.htmlEscape(a2);
      var c2 = a2.getDirection(), d2 = [], e2 = function(a3) {
        Array.isArray(a3) ? goog.array.forEach(a3, e2) : (a3 = goog.html.SafeHtml.htmlEscape(a3), d2.push(goog.html.SafeHtml.unwrap(a3)), a3 = a3.getDirection(), c2 == goog.i18n.bidi.Dir.NEUTRAL ? c2 = a3 : a3 != goog.i18n.bidi.Dir.NEUTRAL && c2 != a3 && (c2 = null));
      };
      goog.array.forEach(b2, e2);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d2.join(goog.html.SafeHtml.unwrap(a2)), c2);
    };
    goog.html.SafeHtml.concat = function(a2) {
      return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
    };
    goog.html.SafeHtml.concatWithDir = function(a2, b2) {
      var c2 = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
      c2.dir_ = a2;
      return c2;
    };
    goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a2, b2) {
      return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a2, b2);
    };
    goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2, b2) {
      this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a2) : a2;
      this.dir_ = b2;
      return this;
    };
    goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a2, b2, c2) {
      var d2 = null;
      var e2 = "<" + a2 + goog.html.SafeHtml.stringifyAttributes(a2, b2);
      null == c2 ? c2 = [] : Array.isArray(c2) || (c2 = [c2]);
      goog.dom.tags.isVoidTag(a2.toLowerCase()) ? (goog.asserts.assert(!c2.length, "Void tag <" + a2 + "> does not allow content."), e2 += ">") : (d2 = goog.html.SafeHtml.concat(c2), e2 += ">" + goog.html.SafeHtml.unwrap(d2) + "</" + a2 + ">", d2 = d2.getDirection());
      (a2 = b2 && b2.dir) && (d2 = /^(ltr|rtl|auto)$/i.test(a2) ? goog.i18n.bidi.Dir.NEUTRAL : null);
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        e2,
        d2
      );
    };
    goog.html.SafeHtml.stringifyAttributes = function(a2, b2) {
      var c2 = "";
      if (b2)
        for (var d2 in b2) {
          if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d2))
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + d2 + '".' : "");
          var e2 = b2[d2];
          null != e2 && (c2 += " " + goog.html.SafeHtml.getAttrNameAndValue_(a2, d2, e2));
        }
      return c2;
    };
    goog.html.SafeHtml.combineAttributes = function(a2, b2, c2) {
      var d2 = {}, e2;
      for (e2 in a2)
        goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = a2[e2];
      for (e2 in b2)
        goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = b2[e2];
      if (c2)
        for (e2 in c2) {
          var f2 = e2.toLowerCase();
          if (f2 in a2)
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + f2 + '" attribute, got "' + e2 + '" with value "' + c2[e2] + '"' : "");
          f2 in b2 && delete d2[f2];
          d2[e2] = c2[e2];
        }
      return d2;
    };
    goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
    goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
    goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
    goog.html.uncheckedconversions = {};
    goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a2, b2, c2) {
      goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
      return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b2, c2 || null);
    };
    goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a2, b2) {
      goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a2, b2) {
      goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
      return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a2, b2) {
      goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
      return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
      goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
      goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
      goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
    };
    goog.dom.safe = {};
    goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
    goog.dom.safe.insertAdjacentHtml = function(a2, b2, c2) {
      a2.insertAdjacentHTML(b2, goog.html.SafeHtml.unwrapTrustedHTML(c2));
    };
    goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
    goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
      if (goog.DEBUG && "undefined" === typeof document)
        return false;
      var a2 = document.createElement("div"), b2 = document.createElement("div");
      b2.appendChild(document.createElement("div"));
      a2.appendChild(b2);
      if (goog.DEBUG && !a2.firstChild)
        return false;
      b2 = a2.firstChild.firstChild;
      a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
      return !b2.parentElement;
    });
    goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a2, b2) {
      if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
        for (; a2.lastChild; )
          a2.removeChild(a2.lastChild);
      a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
    };
    goog.dom.safe.setInnerHtml = function(a2, b2) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var c2 = a2.tagName.toUpperCase();
        if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c2])
          throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a2.tagName + ".");
      }
      goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a2, b2);
    };
    goog.dom.safe.setOuterHtml = function(a2, b2) {
      a2.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
    };
    goog.dom.safe.setFormElementAction = function(a2, b2) {
      b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
      goog.dom.asserts.assertIsHTMLFormElement(a2).action = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.setButtonFormAction = function(a2, b2) {
      b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
      goog.dom.asserts.assertIsHTMLButtonElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.setInputFormAction = function(a2, b2) {
      b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
      goog.dom.asserts.assertIsHTMLInputElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.setStyle = function(a2, b2) {
      a2.style.cssText = goog.html.SafeStyle.unwrap(b2);
    };
    goog.dom.safe.documentWrite = function(a2, b2) {
      a2.write(goog.html.SafeHtml.unwrapTrustedHTML(b2));
    };
    goog.dom.safe.setAnchorHref = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLAnchorElement(a2);
      b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
      a2.href = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.setImageSrc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLImageElement(a2);
      if (!(b2 instanceof goog.html.SafeUrl)) {
        var c2 = /^data:image\//i.test(b2);
        b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
      }
      a2.src = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.setAudioSrc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLAudioElement(a2);
      if (!(b2 instanceof goog.html.SafeUrl)) {
        var c2 = /^data:audio\//i.test(b2);
        b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
      }
      a2.src = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.setVideoSrc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLVideoElement(a2);
      if (!(b2 instanceof goog.html.SafeUrl)) {
        var c2 = /^data:video\//i.test(b2);
        b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
      }
      a2.src = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.setEmbedSrc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLEmbedElement(a2);
      a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
    };
    goog.dom.safe.setFrameSrc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLFrameElement(a2);
      a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
    };
    goog.dom.safe.setIframeSrc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLIFrameElement(a2);
      a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
    };
    goog.dom.safe.setIframeSrcdoc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLIFrameElement(a2);
      a2.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b2);
    };
    goog.dom.safe.setLinkHrefAndRel = function(a2, b2, c2) {
      goog.dom.asserts.assertIsHTMLLinkElement(a2);
      a2.rel = c2;
      goog.string.internal.caseInsensitiveContains(c2, "stylesheet") ? (goog.asserts.assert(b2 instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a2.href = goog.html.TrustedResourceUrl.unwrap(b2)) : a2.href = b2 instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(b2) : b2 instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(b2) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(b2));
    };
    goog.dom.safe.setObjectData = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLObjectElement(a2);
      a2.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
    };
    goog.dom.safe.setScriptSrc = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLScriptElement(a2);
      a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
      (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
    };
    goog.dom.safe.setScriptContent = function(a2, b2) {
      goog.dom.asserts.assertIsHTMLScriptElement(a2);
      a2.text = goog.html.SafeScript.unwrapTrustedScript(b2);
      (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
    };
    goog.dom.safe.setLocationHref = function(a2, b2) {
      goog.dom.asserts.assertIsLocation(a2);
      b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
      a2.href = goog.html.SafeUrl.unwrap(b2);
    };
    goog.dom.safe.assignLocation = function(a2, b2) {
      goog.dom.asserts.assertIsLocation(a2);
      b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
      a2.assign(goog.html.SafeUrl.unwrap(b2));
    };
    goog.dom.safe.replaceLocation = function(a2, b2) {
      b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
      a2.replace(goog.html.SafeUrl.unwrap(b2));
    };
    goog.dom.safe.openInWindow = function(a2, b2, c2, d2, e2) {
      a2 = a2 instanceof goog.html.SafeUrl ? a2 : goog.html.SafeUrl.sanitizeAssertUnchanged(a2);
      b2 = b2 || goog.global;
      c2 = c2 instanceof goog.string.Const ? goog.string.Const.unwrap(c2) : c2 || "";
      return b2.open(goog.html.SafeUrl.unwrap(a2), c2, d2, e2);
    };
    goog.dom.safe.parseFromStringHtml = function(a2, b2) {
      return goog.dom.safe.parseFromString(a2, b2, "text/html");
    };
    goog.dom.safe.parseFromString = function(a2, b2, c2) {
      return a2.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b2), c2);
    };
    goog.dom.safe.createImageFromBlob = function(a2) {
      if (!/^image\/.*/g.test(a2.type))
        throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
      var b2 = goog.global.URL.createObjectURL(a2);
      a2 = new goog.global.Image();
      a2.onload = function() {
        goog.global.URL.revokeObjectURL(b2);
      };
      goog.dom.safe.setImageSrc(a2, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b2));
      return a2;
    };
    goog.string.DETECT_DOUBLE_ESCAPING = false;
    goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
    goog.string.Unicode = { NBSP: "\xA0" };
    goog.string.startsWith = goog.string.internal.startsWith;
    goog.string.endsWith = goog.string.internal.endsWith;
    goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
    goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
    goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
    goog.string.subs = function(a2, b2) {
      for (var c2 = a2.split("%s"), d2 = "", e2 = Array.prototype.slice.call(arguments, 1); e2.length && 1 < c2.length; )
        d2 += c2.shift() + e2.shift();
      return d2 + c2.join("%s");
    };
    goog.string.collapseWhitespace = function(a2) {
      return a2.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
    };
    goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
    goog.string.isEmptyString = function(a2) {
      return 0 == a2.length;
    };
    goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
    goog.string.isEmptyOrWhitespaceSafe = function(a2) {
      return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a2));
    };
    goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
    goog.string.isBreakingWhitespace = function(a2) {
      return !/[^\t\n\r ]/.test(a2);
    };
    goog.string.isAlpha = function(a2) {
      return !/[^a-zA-Z]/.test(a2);
    };
    goog.string.isNumeric = function(a2) {
      return !/[^0-9]/.test(a2);
    };
    goog.string.isAlphaNumeric = function(a2) {
      return !/[^a-zA-Z0-9]/.test(a2);
    };
    goog.string.isSpace = function(a2) {
      return " " == a2;
    };
    goog.string.isUnicodeChar = function(a2) {
      return 1 == a2.length && " " <= a2 && "~" >= a2 || "\x80" <= a2 && "\uFFFD" >= a2;
    };
    goog.string.stripNewlines = function(a2) {
      return a2.replace(/(\r\n|\r|\n)+/g, " ");
    };
    goog.string.canonicalizeNewlines = function(a2) {
      return a2.replace(/(\r\n|\r|\n)/g, "\n");
    };
    goog.string.normalizeWhitespace = function(a2) {
      return a2.replace(/\xa0|\s/g, " ");
    };
    goog.string.normalizeSpaces = function(a2) {
      return a2.replace(/\xa0|[ \t]+/g, " ");
    };
    goog.string.collapseBreakingSpaces = function(a2) {
      return a2.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
    };
    goog.string.trim = goog.string.internal.trim;
    goog.string.trimLeft = function(a2) {
      return a2.replace(/^[\s\xa0]+/, "");
    };
    goog.string.trimRight = function(a2) {
      return a2.replace(/[\s\xa0]+$/, "");
    };
    goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
    goog.string.numberAwareCompare_ = function(a2, b2, c2) {
      if (a2 == b2)
        return 0;
      if (!a2)
        return -1;
      if (!b2)
        return 1;
      for (var d2 = a2.toLowerCase().match(c2), e2 = b2.toLowerCase().match(c2), f2 = Math.min(d2.length, e2.length), g = 0; g < f2; g++) {
        c2 = d2[g];
        var h = e2[g];
        if (c2 != h)
          return a2 = parseInt(c2, 10), !isNaN(a2) && (b2 = parseInt(h, 10), !isNaN(b2) && a2 - b2) ? a2 - b2 : c2 < h ? -1 : 1;
      }
      return d2.length != e2.length ? d2.length - e2.length : a2 < b2 ? -1 : 1;
    };
    goog.string.intAwareCompare = function(a2, b2) {
      return goog.string.numberAwareCompare_(a2, b2, /\d+|\D+/g);
    };
    goog.string.floatAwareCompare = function(a2, b2) {
      return goog.string.numberAwareCompare_(a2, b2, /\d+|\.\d+|\D+/g);
    };
    goog.string.numerateCompare = goog.string.floatAwareCompare;
    goog.string.urlEncode = function(a2) {
      return encodeURIComponent(String(a2));
    };
    goog.string.urlDecode = function(a2) {
      return decodeURIComponent(a2.replace(/\+/g, " "));
    };
    goog.string.newLineToBr = goog.string.internal.newLineToBr;
    goog.string.htmlEscape = function(a2, b2) {
      a2 = goog.string.internal.htmlEscape(a2, b2);
      goog.string.DETECT_DOUBLE_ESCAPING && (a2 = a2.replace(goog.string.E_RE_, "&#101;"));
      return a2;
    };
    goog.string.E_RE_ = /e/g;
    goog.string.unescapeEntities = function(a2) {
      return goog.string.contains(a2, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a2) : goog.string.unescapePureXmlEntities_(a2) : a2;
    };
    goog.string.unescapeEntitiesWithDocument = function(a2, b2) {
      return goog.string.contains(a2, "&") ? goog.string.unescapeEntitiesUsingDom_(a2, b2) : a2;
    };
    goog.string.unescapeEntitiesUsingDom_ = function(a2, b2) {
      var c2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
      var d2 = b2 ? b2.createElement("div") : goog.global.document.createElement("div");
      return a2.replace(goog.string.HTML_ENTITY_PATTERN_, function(a3, b3) {
        var e2 = c2[a3];
        if (e2)
          return e2;
        "#" == b3.charAt(0) && (b3 = Number("0" + b3.substr(1)), isNaN(b3) || (e2 = String.fromCharCode(b3)));
        e2 || (goog.dom.safe.setInnerHtml(d2, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
          goog.string.Const.from("Single HTML entity."),
          a3 + " "
        )), e2 = d2.firstChild.nodeValue.slice(0, -1));
        return c2[a3] = e2;
      });
    };
    goog.string.unescapePureXmlEntities_ = function(a2) {
      return a2.replace(/&([^;]+);/g, function(a3, c2) {
        switch (c2) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            return "#" != c2.charAt(0) || (c2 = Number("0" + c2.substr(1)), isNaN(c2)) ? a3 : String.fromCharCode(c2);
        }
      });
    };
    goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
    goog.string.whitespaceEscape = function(a2, b2) {
      return goog.string.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
    };
    goog.string.preserveSpaces = function(a2) {
      return a2.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
    };
    goog.string.stripQuotes = function(a2, b2) {
      for (var c2 = b2.length, d2 = 0; d2 < c2; d2++) {
        var e2 = 1 == c2 ? b2 : b2.charAt(d2);
        if (a2.charAt(0) == e2 && a2.charAt(a2.length - 1) == e2)
          return a2.substring(1, a2.length - 1);
      }
      return a2;
    };
    goog.string.truncate = function(a2, b2, c2) {
      c2 && (a2 = goog.string.unescapeEntities(a2));
      a2.length > b2 && (a2 = a2.substring(0, b2 - 3) + "...");
      c2 && (a2 = goog.string.htmlEscape(a2));
      return a2;
    };
    goog.string.truncateMiddle = function(a2, b2, c2, d2) {
      c2 && (a2 = goog.string.unescapeEntities(a2));
      if (d2 && a2.length > b2) {
        d2 > b2 && (d2 = b2);
        var e2 = a2.length - d2;
        a2 = a2.substring(0, b2 - d2) + "..." + a2.substring(e2);
      } else
        a2.length > b2 && (d2 = Math.floor(b2 / 2), e2 = a2.length - d2, a2 = a2.substring(0, d2 + b2 % 2) + "..." + a2.substring(e2));
      c2 && (a2 = goog.string.htmlEscape(a2));
      return a2;
    };
    goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
    goog.string.jsEscapeCache_ = { "'": "\\'" };
    goog.string.quote = function(a2) {
      a2 = String(a2);
      for (var b2 = ['"'], c2 = 0; c2 < a2.length; c2++) {
        var d2 = a2.charAt(c2), e2 = d2.charCodeAt(0);
        b2[c2 + 1] = goog.string.specialEscapeChars_[d2] || (31 < e2 && 127 > e2 ? d2 : goog.string.escapeChar(d2));
      }
      b2.push('"');
      return b2.join("");
    };
    goog.string.escapeString = function(a2) {
      for (var b2 = [], c2 = 0; c2 < a2.length; c2++)
        b2[c2] = goog.string.escapeChar(a2.charAt(c2));
      return b2.join("");
    };
    goog.string.escapeChar = function(a2) {
      if (a2 in goog.string.jsEscapeCache_)
        return goog.string.jsEscapeCache_[a2];
      if (a2 in goog.string.specialEscapeChars_)
        return goog.string.jsEscapeCache_[a2] = goog.string.specialEscapeChars_[a2];
      var b2 = a2.charCodeAt(0);
      if (31 < b2 && 127 > b2)
        var c2 = a2;
      else {
        if (256 > b2) {
          if (c2 = "\\x", 16 > b2 || 256 < b2)
            c2 += "0";
        } else
          c2 = "\\u", 4096 > b2 && (c2 += "0");
        c2 += b2.toString(16).toUpperCase();
      }
      return goog.string.jsEscapeCache_[a2] = c2;
    };
    goog.string.contains = goog.string.internal.contains;
    goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
    goog.string.countOf = function(a2, b2) {
      return a2 && b2 ? a2.split(b2).length - 1 : 0;
    };
    goog.string.removeAt = function(a2, b2, c2) {
      var d2 = a2;
      0 <= b2 && b2 < a2.length && 0 < c2 && (d2 = a2.substr(0, b2) + a2.substr(b2 + c2, a2.length - b2 - c2));
      return d2;
    };
    goog.string.remove = function(a2, b2) {
      return a2.replace(b2, "");
    };
    goog.string.removeAll = function(a2, b2) {
      b2 = new RegExp(goog.string.regExpEscape(b2), "g");
      return a2.replace(b2, "");
    };
    goog.string.replaceAll = function(a2, b2, c2) {
      b2 = new RegExp(goog.string.regExpEscape(b2), "g");
      return a2.replace(b2, c2.replace(/\$/g, "$$$$"));
    };
    goog.string.regExpEscape = function(a2) {
      return String(a2).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    };
    goog.string.repeat = String.prototype.repeat ? function(a2, b2) {
      return a2.repeat(b2);
    } : function(a2, b2) {
      return Array(b2 + 1).join(a2);
    };
    goog.string.padNumber = function(a2, b2, c2) {
      a2 = void 0 !== c2 ? a2.toFixed(c2) : String(a2);
      c2 = a2.indexOf(".");
      -1 == c2 && (c2 = a2.length);
      return goog.string.repeat("0", Math.max(0, b2 - c2)) + a2;
    };
    goog.string.makeSafe = function(a2) {
      return null == a2 ? "" : String(a2);
    };
    goog.string.buildString = function(a2) {
      return Array.prototype.join.call(arguments, "");
    };
    goog.string.getRandomString = function() {
      return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
    };
    goog.string.compareVersions = goog.string.internal.compareVersions;
    goog.string.hashCode = function(a2) {
      for (var b2 = 0, c2 = 0; c2 < a2.length; ++c2)
        b2 = 31 * b2 + a2.charCodeAt(c2) >>> 0;
      return b2;
    };
    goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
    goog.string.createUniqueString = function() {
      return "goog_" + goog.string.uniqueStringCounter_++;
    };
    goog.string.toNumber = function(a2) {
      var b2 = Number(a2);
      return 0 == b2 && goog.string.isEmptyOrWhitespace(a2) ? NaN : b2;
    };
    goog.string.isLowerCamelCase = function(a2) {
      return /^[a-z]+([A-Z][a-z]*)*$/.test(a2);
    };
    goog.string.isUpperCamelCase = function(a2) {
      return /^([A-Z][a-z]*)+$/.test(a2);
    };
    goog.string.toCamelCase = function(a2) {
      return String(a2).replace(/\-([a-z])/g, function(a3, c2) {
        return c2.toUpperCase();
      });
    };
    goog.string.toSelectorCase = function(a2) {
      return String(a2).replace(/([A-Z])/g, "-$1").toLowerCase();
    };
    goog.string.toTitleCase = function(a2, b2) {
      b2 = "string" === typeof b2 ? goog.string.regExpEscape(b2) : "\\s";
      return a2.replace(new RegExp("(^" + (b2 ? "|[" + b2 + "]+" : "") + ")([a-z])", "g"), function(a3, b3, e2) {
        return b3 + e2.toUpperCase();
      });
    };
    goog.string.capitalize = function(a2) {
      return String(a2.charAt(0)).toUpperCase() + String(a2.substr(1)).toLowerCase();
    };
    goog.string.parseInt = function(a2) {
      isFinite(a2) && (a2 = String(a2));
      return "string" === typeof a2 ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
    };
    goog.string.splitLimit = function(a2, b2, c2) {
      a2 = a2.split(b2);
      for (var d2 = []; 0 < c2 && a2.length; )
        d2.push(a2.shift()), c2--;
      a2.length && d2.push(a2.join(b2));
      return d2;
    };
    goog.string.lastComponent = function(a2, b2) {
      if (b2)
        "string" == typeof b2 && (b2 = [b2]);
      else
        return a2;
      for (var c2 = -1, d2 = 0; d2 < b2.length; d2++)
        if ("" != b2[d2]) {
          var e2 = a2.lastIndexOf(b2[d2]);
          e2 > c2 && (c2 = e2);
        }
      return -1 == c2 ? a2 : a2.slice(c2 + 1);
    };
    goog.string.editDistance = function(a2, b2) {
      var c2 = [], d2 = [];
      if (a2 == b2)
        return 0;
      if (!a2.length || !b2.length)
        return Math.max(a2.length, b2.length);
      for (var e2 = 0; e2 < b2.length + 1; e2++)
        c2[e2] = e2;
      for (e2 = 0; e2 < a2.length; e2++) {
        d2[0] = e2 + 1;
        for (var f2 = 0; f2 < b2.length; f2++)
          d2[f2 + 1] = Math.min(d2[f2] + 1, c2[f2 + 1] + 1, c2[f2] + Number(a2[e2] != b2[f2]));
        for (f2 = 0; f2 < c2.length; f2++)
          c2[f2] = d2[f2];
      }
      return d2[b2.length];
    };
    goog.labs.userAgent.engine = {};
    goog.labs.userAgent.engine.isPresto = function() {
      return goog.labs.userAgent.util.matchUserAgent("Presto");
    };
    goog.labs.userAgent.engine.isTrident = function() {
      return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
    };
    goog.labs.userAgent.engine.isEdge = function() {
      return goog.labs.userAgent.util.matchUserAgent("Edge");
    };
    goog.labs.userAgent.engine.isWebKit = function() {
      return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
    };
    goog.labs.userAgent.engine.isGecko = function() {
      return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
    };
    goog.labs.userAgent.engine.getVersion = function() {
      var a2 = goog.labs.userAgent.util.getUserAgent();
      if (a2) {
        a2 = goog.labs.userAgent.util.extractVersionTuples(a2);
        var b2 = goog.labs.userAgent.engine.getEngineTuple_(a2);
        if (b2)
          return "Gecko" == b2[0] ? goog.labs.userAgent.engine.getVersionForKey_(a2, "Firefox") : b2[1];
        a2 = a2[0];
        var c2;
        if (a2 && (c2 = a2[2]) && (c2 = /Trident\/([^\s;]+)/.exec(c2)))
          return c2[1];
      }
      return "";
    };
    goog.labs.userAgent.engine.getEngineTuple_ = function(a2) {
      if (!goog.labs.userAgent.engine.isEdge())
        return a2[1];
      for (var b2 = 0; b2 < a2.length; b2++) {
        var c2 = a2[b2];
        if ("Edge" == c2[0])
          return c2;
      }
    };
    goog.labs.userAgent.engine.isVersionOrHigher = function(a2) {
      return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a2);
    };
    goog.labs.userAgent.engine.getVersionForKey_ = function(a2, b2) {
      return (a2 = goog.array.find(a2, function(a3) {
        return b2 == a3[0];
      })) && a2[1] || "";
    };
    goog.labs.userAgent.platform = {};
    goog.labs.userAgent.platform.isAndroid = function() {
      return goog.labs.userAgent.util.matchUserAgent("Android");
    };
    goog.labs.userAgent.platform.isIpod = function() {
      return goog.labs.userAgent.util.matchUserAgent("iPod");
    };
    goog.labs.userAgent.platform.isIphone = function() {
      return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
    };
    goog.labs.userAgent.platform.isIpad = function() {
      return goog.labs.userAgent.util.matchUserAgent("iPad");
    };
    goog.labs.userAgent.platform.isIos = function() {
      return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
    };
    goog.labs.userAgent.platform.isMacintosh = function() {
      return goog.labs.userAgent.util.matchUserAgent("Macintosh");
    };
    goog.labs.userAgent.platform.isLinux = function() {
      return goog.labs.userAgent.util.matchUserAgent("Linux");
    };
    goog.labs.userAgent.platform.isWindows = function() {
      return goog.labs.userAgent.util.matchUserAgent("Windows");
    };
    goog.labs.userAgent.platform.isChromeOS = function() {
      return goog.labs.userAgent.util.matchUserAgent("CrOS");
    };
    goog.labs.userAgent.platform.isChromecast = function() {
      return goog.labs.userAgent.util.matchUserAgent("CrKey");
    };
    goog.labs.userAgent.platform.isKaiOS = function() {
      return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
    };
    goog.labs.userAgent.platform.getVersion = function() {
      var a2 = goog.labs.userAgent.util.getUserAgent(), b2 = "";
      goog.labs.userAgent.platform.isWindows() ? (b2 = /Windows (?:NT|Phone) ([0-9.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b2 = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b2 = (a2 = b2.exec(a2)) && a2[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b2 = /Mac OS X ([0-9_.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b2 = /(?:KaiOS)\/(\S+)/i, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isAndroid() ? (b2 = /Android\s+([^\);]+)(\)|;)/, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isChromeOS() && (b2 = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b2 = (a2 = b2.exec(a2)) && a2[1]);
      return b2 || "";
    };
    goog.labs.userAgent.platform.isVersionOrHigher = function(a2) {
      return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a2);
    };
    goog.reflect = {};
    goog.reflect.object = function(a2, b2) {
      return b2;
    };
    goog.reflect.objectProperty = function(a2, b2) {
      return a2;
    };
    goog.reflect.sinkValue = function(a2) {
      goog.reflect.sinkValue[" "](a2);
      return a2;
    };
    goog.reflect.sinkValue[" "] = goog.nullFunction;
    goog.reflect.canAccessProperty = function(a2, b2) {
      try {
        return goog.reflect.sinkValue(a2[b2]), true;
      } catch (c2) {
      }
      return false;
    };
    goog.reflect.cache = function(a2, b2, c2, d2) {
      d2 = d2 ? d2(b2) : b2;
      return Object.prototype.hasOwnProperty.call(a2, d2) ? a2[d2] : a2[d2] = c2(b2);
    };
    goog.userAgent = {};
    goog.userAgent.ASSUME_IE = false;
    goog.userAgent.ASSUME_EDGE = false;
    goog.userAgent.ASSUME_GECKO = false;
    goog.userAgent.ASSUME_WEBKIT = false;
    goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
    goog.userAgent.ASSUME_OPERA = false;
    goog.userAgent.ASSUME_ANY_VERSION = false;
    goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
    goog.userAgent.getUserAgentString = function() {
      return goog.labs.userAgent.util.getUserAgent();
    };
    goog.userAgent.getNavigatorTyped = function() {
      return goog.global.navigator || null;
    };
    goog.userAgent.getNavigator = function() {
      return goog.userAgent.getNavigatorTyped();
    };
    goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
    goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
    goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
    goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
    goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
    goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
    goog.userAgent.isMobile_ = function() {
      return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
    };
    goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
    goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
    goog.userAgent.determinePlatform_ = function() {
      var a2 = goog.userAgent.getNavigatorTyped();
      return a2 && a2.platform || "";
    };
    goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
    goog.userAgent.ASSUME_MAC = false;
    goog.userAgent.ASSUME_WINDOWS = false;
    goog.userAgent.ASSUME_LINUX = false;
    goog.userAgent.ASSUME_X11 = false;
    goog.userAgent.ASSUME_ANDROID = false;
    goog.userAgent.ASSUME_IPHONE = false;
    goog.userAgent.ASSUME_IPAD = false;
    goog.userAgent.ASSUME_IPOD = false;
    goog.userAgent.ASSUME_KAIOS = false;
    goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
    goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
    goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
    goog.userAgent.isLegacyLinux_ = function() {
      return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
    };
    goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
    goog.userAgent.isX11_ = function() {
      var a2 = goog.userAgent.getNavigatorTyped();
      return !!a2 && goog.string.contains(a2.appVersion || "", "X11");
    };
    goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
    goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
    goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
    goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
    goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
    goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
    goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
    goog.userAgent.determineVersion_ = function() {
      var a2 = "", b2 = goog.userAgent.getVersionRegexResult_();
      b2 && (a2 = b2 ? b2[1] : "");
      return goog.userAgent.IE && (b2 = goog.userAgent.getDocumentMode_(), null != b2 && b2 > parseFloat(a2)) ? String(b2) : a2;
    };
    goog.userAgent.getVersionRegexResult_ = function() {
      var a2 = goog.userAgent.getUserAgentString();
      if (goog.userAgent.GECKO)
        return /rv:([^\);]+)(\)|;)/.exec(a2);
      if (goog.userAgent.EDGE)
        return /Edge\/([\d\.]+)/.exec(a2);
      if (goog.userAgent.IE)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
      if (goog.userAgent.WEBKIT)
        return /WebKit\/(\S+)/.exec(a2);
      if (goog.userAgent.OPERA)
        return /(?:Version)[ \/]?(\S+)/.exec(a2);
    };
    goog.userAgent.getDocumentMode_ = function() {
      var a2 = goog.global.document;
      return a2 ? a2.documentMode : void 0;
    };
    goog.userAgent.VERSION = goog.userAgent.determineVersion_();
    goog.userAgent.compare = function(a2, b2) {
      return goog.string.compareVersions(a2, b2);
    };
    goog.userAgent.isVersionOrHigherCache_ = {};
    goog.userAgent.isVersionOrHigher = function(a2) {
      return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a2, function() {
        return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a2);
      });
    };
    goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
    goog.userAgent.isDocumentModeOrHigher = function(a2) {
      return Number(goog.userAgent.DOCUMENT_MODE) >= a2;
    };
    goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
    goog.userAgent.DOCUMENT_MODE = function() {
      if (goog.global.document && goog.userAgent.IE) {
        var a2 = goog.userAgent.getDocumentMode_();
        return a2 ? a2 : parseInt(goog.userAgent.VERSION, 10) || void 0;
      }
    }();
    goog.userAgent.product = {};
    goog.userAgent.product.ASSUME_FIREFOX = false;
    goog.userAgent.product.ASSUME_IPHONE = false;
    goog.userAgent.product.ASSUME_IPAD = false;
    goog.userAgent.product.ASSUME_ANDROID = false;
    goog.userAgent.product.ASSUME_CHROME = false;
    goog.userAgent.product.ASSUME_SAFARI = false;
    goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
    goog.userAgent.product.OPERA = goog.userAgent.OPERA;
    goog.userAgent.product.IE = goog.userAgent.IE;
    goog.userAgent.product.EDGE = goog.userAgent.EDGE;
    goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
    goog.userAgent.product.isIphoneOrIpod_ = function() {
      return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
    };
    goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
    goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
    goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
    goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
    goog.userAgent.product.isSafariDesktop_ = function() {
      return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
    };
    goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
    goog.crypt.base64 = {};
    goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
    goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
    goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
    goog.crypt.base64.paddingChars_ = "=.";
    goog.crypt.base64.isPadding_ = function(a2) {
      return goog.string.contains(goog.crypt.base64.paddingChars_, a2);
    };
    goog.crypt.base64.byteToCharMaps_ = {};
    goog.crypt.base64.charToByteMap_ = null;
    goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
    goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa;
    goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob;
    goog.crypt.base64.encodeByteArray = function(a2, b2) {
      goog.asserts.assert(goog.isArrayLike(a2), "encodeByteArray takes an array as a parameter");
      void 0 === b2 && (b2 = goog.crypt.base64.Alphabet.DEFAULT);
      goog.crypt.base64.init_();
      b2 = goog.crypt.base64.byteToCharMaps_[b2];
      for (var c2 = [], d2 = 0; d2 < a2.length; d2 += 3) {
        var e2 = a2[d2], f2 = d2 + 1 < a2.length, g = f2 ? a2[d2 + 1] : 0, h = d2 + 2 < a2.length, k = h ? a2[d2 + 2] : 0, l = e2 >> 2;
        e2 = (e2 & 3) << 4 | g >> 4;
        g = (g & 15) << 2 | k >> 6;
        k &= 63;
        h || (k = 64, f2 || (g = 64));
        c2.push(b2[l], b2[e2], b2[g] || "", b2[k] || "");
      }
      return c2.join("");
    };
    goog.crypt.base64.encodeString = function(a2, b2) {
      return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b2 ? goog.global.btoa(a2) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a2), b2);
    };
    goog.crypt.base64.decodeString = function(a2, b2) {
      if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b2)
        return goog.global.atob(a2);
      var c2 = "";
      goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
        c2 += String.fromCharCode(a3);
      });
      return c2;
    };
    goog.crypt.base64.decodeStringToByteArray = function(a2, b2) {
      var c2 = [];
      goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
        c2.push(a3);
      });
      return c2;
    };
    goog.crypt.base64.decodeStringToUint8Array = function(a2) {
      goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
      var b2 = a2.length, c2 = 3 * b2 / 4;
      c2 % 3 ? c2 = Math.floor(c2) : goog.crypt.base64.isPadding_(a2[b2 - 1]) && (c2 = goog.crypt.base64.isPadding_(a2[b2 - 2]) ? c2 - 2 : c2 - 1);
      var d2 = new Uint8Array(c2), e2 = 0;
      goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
        d2[e2++] = a3;
      });
      return d2.subarray(0, e2);
    };
    goog.crypt.base64.decodeStringInternal_ = function(a2, b2) {
      function c2(b3) {
        for (; d2 < a2.length; ) {
          var c3 = a2.charAt(d2++), e3 = goog.crypt.base64.charToByteMap_[c3];
          if (null != e3)
            return e3;
          if (!goog.string.isEmptyOrWhitespace(c3))
            throw Error("Unknown base64 encoding at char: " + c3);
        }
        return b3;
      }
      goog.crypt.base64.init_();
      for (var d2 = 0; ; ) {
        var e2 = c2(-1), f2 = c2(0), g = c2(64), h = c2(64);
        if (64 === h && -1 === e2)
          break;
        b2(e2 << 2 | f2 >> 4);
        64 != g && (b2(f2 << 4 & 240 | g >> 2), 64 != h && b2(g << 6 & 192 | h));
      }
    };
    goog.crypt.base64.init_ = function() {
      if (!goog.crypt.base64.charToByteMap_) {
        goog.crypt.base64.charToByteMap_ = {};
        for (var a2 = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c2 = 0; 5 > c2; c2++) {
          var d2 = a2.concat(b2[c2].split(""));
          goog.crypt.base64.byteToCharMaps_[c2] = d2;
          for (var e2 = 0; e2 < d2.length; e2++) {
            var f2 = d2[e2], g = goog.crypt.base64.charToByteMap_[f2];
            void 0 === g ? goog.crypt.base64.charToByteMap_[f2] = e2 : goog.asserts.assert(g === e2);
          }
        }
      }
    };
    jspb.utils = {};
    jspb.utils.split64Low = 0;
    jspb.utils.split64High = 0;
    jspb.utils.splitUint64 = function(a2) {
      var b2 = a2 >>> 0;
      a2 = Math.floor((a2 - b2) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
      jspb.utils.split64Low = b2;
      jspb.utils.split64High = a2;
    };
    jspb.utils.splitInt64 = function(a2) {
      var b2 = 0 > a2;
      a2 = Math.abs(a2);
      var c2 = a2 >>> 0;
      a2 = Math.floor((a2 - c2) / jspb.BinaryConstants.TWO_TO_32);
      a2 >>>= 0;
      b2 && (a2 = ~a2 >>> 0, c2 = (~c2 >>> 0) + 1, 4294967295 < c2 && (c2 = 0, a2++, 4294967295 < a2 && (a2 = 0)));
      jspb.utils.split64Low = c2;
      jspb.utils.split64High = a2;
    };
    jspb.utils.splitZigzag64 = function(a2) {
      var b2 = 0 > a2;
      a2 = 2 * Math.abs(a2);
      jspb.utils.splitUint64(a2);
      a2 = jspb.utils.split64Low;
      var c2 = jspb.utils.split64High;
      b2 && (0 == a2 ? 0 == c2 ? c2 = a2 = 4294967295 : (c2--, a2 = 4294967295) : a2--);
      jspb.utils.split64Low = a2;
      jspb.utils.split64High = c2;
    };
    jspb.utils.splitFloat32 = function(a2) {
      var b2 = 0 > a2 ? 1 : 0;
      a2 = b2 ? -a2 : a2;
      if (0 === a2)
        0 < 1 / a2 ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
      else if (isNaN(a2))
        jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
      else if (a2 > jspb.BinaryConstants.FLOAT32_MAX)
        jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | 2139095040) >>> 0;
      else if (a2 < jspb.BinaryConstants.FLOAT32_MIN)
        a2 = Math.round(a2 / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | a2) >>> 0;
      else {
        var c2 = Math.floor(Math.log(a2) / Math.LN2);
        a2 *= Math.pow(2, -c2);
        a2 = Math.round(a2 * jspb.BinaryConstants.TWO_TO_23);
        16777216 <= a2 && ++c2;
        jspb.utils.split64High = 0;
        jspb.utils.split64Low = (b2 << 31 | c2 + 127 << 23 | a2 & 8388607) >>> 0;
      }
    };
    jspb.utils.splitFloat64 = function(a2) {
      var b2 = 0 > a2 ? 1 : 0;
      a2 = b2 ? -a2 : a2;
      if (0 === a2)
        jspb.utils.split64High = 0 < 1 / a2 ? 0 : 2147483648, jspb.utils.split64Low = 0;
      else if (isNaN(a2))
        jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
      else if (a2 > jspb.BinaryConstants.FLOAT64_MAX)
        jspb.utils.split64High = (b2 << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
      else if (a2 < jspb.BinaryConstants.FLOAT64_MIN) {
        var c2 = a2 / Math.pow(2, -1074);
        a2 = c2 / jspb.BinaryConstants.TWO_TO_32;
        jspb.utils.split64High = (b2 << 31 | a2) >>> 0;
        jspb.utils.split64Low = c2 >>> 0;
      } else {
        c2 = a2;
        var d2 = 0;
        if (2 <= c2)
          for (; 2 <= c2 && 1023 > d2; )
            d2++, c2 /= 2;
        else
          for (; 1 > c2 && -1022 < d2; )
            c2 *= 2, d2--;
        c2 = a2 * Math.pow(2, -d2);
        a2 = c2 * jspb.BinaryConstants.TWO_TO_20 & 1048575;
        c2 = c2 * jspb.BinaryConstants.TWO_TO_52 >>> 0;
        jspb.utils.split64High = (b2 << 31 | d2 + 1023 << 20 | a2) >>> 0;
        jspb.utils.split64Low = c2;
      }
    };
    jspb.utils.splitHash64 = function(a2) {
      var b2 = a2.charCodeAt(0), c2 = a2.charCodeAt(1), d2 = a2.charCodeAt(2), e2 = a2.charCodeAt(3), f2 = a2.charCodeAt(4), g = a2.charCodeAt(5), h = a2.charCodeAt(6);
      a2 = a2.charCodeAt(7);
      jspb.utils.split64Low = b2 + (c2 << 8) + (d2 << 16) + (e2 << 24) >>> 0;
      jspb.utils.split64High = f2 + (g << 8) + (h << 16) + (a2 << 24) >>> 0;
    };
    jspb.utils.joinUint64 = function(a2, b2) {
      return b2 * jspb.BinaryConstants.TWO_TO_32 + (a2 >>> 0);
    };
    jspb.utils.joinInt64 = function(a2, b2) {
      var c2 = b2 & 2147483648;
      c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 >>> 0, 0 == a2 && (b2 = b2 + 1 >>> 0));
      a2 = jspb.utils.joinUint64(a2, b2);
      return c2 ? -a2 : a2;
    };
    jspb.utils.toZigzag64 = function(a2, b2, c2) {
      var d2 = b2 >> 31;
      return c2(a2 << 1 ^ d2, (b2 << 1 | a2 >>> 31) ^ d2);
    };
    jspb.utils.joinZigzag64 = function(a2, b2) {
      return jspb.utils.fromZigzag64(a2, b2, jspb.utils.joinInt64);
    };
    jspb.utils.fromZigzag64 = function(a2, b2, c2) {
      var d2 = -(a2 & 1);
      return c2((a2 >>> 1 | b2 << 31) ^ d2, b2 >>> 1 ^ d2);
    };
    jspb.utils.joinFloat32 = function(a2, b2) {
      b2 = 2 * (a2 >> 31) + 1;
      var c2 = a2 >>> 23 & 255;
      a2 &= 8388607;
      return 255 == c2 ? a2 ? NaN : Infinity * b2 : 0 == c2 ? b2 * Math.pow(2, -149) * a2 : b2 * Math.pow(2, c2 - 150) * (a2 + Math.pow(2, 23));
    };
    jspb.utils.joinFloat64 = function(a2, b2) {
      var c2 = 2 * (b2 >> 31) + 1, d2 = b2 >>> 20 & 2047;
      a2 = jspb.BinaryConstants.TWO_TO_32 * (b2 & 1048575) + a2;
      return 2047 == d2 ? a2 ? NaN : Infinity * c2 : 0 == d2 ? c2 * Math.pow(2, -1074) * a2 : c2 * Math.pow(2, d2 - 1075) * (a2 + jspb.BinaryConstants.TWO_TO_52);
    };
    jspb.utils.joinHash64 = function(a2, b2) {
      return String.fromCharCode(a2 >>> 0 & 255, a2 >>> 8 & 255, a2 >>> 16 & 255, a2 >>> 24 & 255, b2 >>> 0 & 255, b2 >>> 8 & 255, b2 >>> 16 & 255, b2 >>> 24 & 255);
    };
    jspb.utils.DIGITS = "0123456789abcdef".split("");
    jspb.utils.ZERO_CHAR_CODE_ = 48;
    jspb.utils.A_CHAR_CODE_ = 97;
    jspb.utils.joinUnsignedDecimalString = function(a2, b2) {
      function c2(a3, b3) {
        a3 = a3 ? String(a3) : "";
        return b3 ? "0000000".slice(a3.length) + a3 : a3;
      }
      if (2097151 >= b2)
        return "" + jspb.utils.joinUint64(a2, b2);
      var d2 = (a2 >>> 24 | b2 << 8) >>> 0 & 16777215;
      b2 = b2 >> 16 & 65535;
      a2 = (a2 & 16777215) + 6777216 * d2 + 6710656 * b2;
      d2 += 8147497 * b2;
      b2 *= 2;
      1e7 <= a2 && (d2 += Math.floor(a2 / 1e7), a2 %= 1e7);
      1e7 <= d2 && (b2 += Math.floor(d2 / 1e7), d2 %= 1e7);
      return c2(b2, 0) + c2(d2, b2) + c2(a2, 1);
    };
    jspb.utils.joinSignedDecimalString = function(a2, b2) {
      var c2 = b2 & 2147483648;
      c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 + (0 == a2 ? 1 : 0) >>> 0);
      a2 = jspb.utils.joinUnsignedDecimalString(a2, b2);
      return c2 ? "-" + a2 : a2;
    };
    jspb.utils.hash64ToDecimalString = function(a2, b2) {
      jspb.utils.splitHash64(a2);
      a2 = jspb.utils.split64Low;
      var c2 = jspb.utils.split64High;
      return b2 ? jspb.utils.joinSignedDecimalString(a2, c2) : jspb.utils.joinUnsignedDecimalString(a2, c2);
    };
    jspb.utils.hash64ArrayToDecimalStrings = function(a2, b2) {
      for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
        c2[d2] = jspb.utils.hash64ToDecimalString(a2[d2], b2);
      return c2;
    };
    jspb.utils.decimalStringToHash64 = function(a2) {
      function b2(a3, b3) {
        for (var c3 = 0; 8 > c3 && (1 !== a3 || 0 < b3); c3++)
          b3 = a3 * e2[c3] + b3, e2[c3] = b3 & 255, b3 >>>= 8;
      }
      function c2() {
        for (var a3 = 0; 8 > a3; a3++)
          e2[a3] = ~e2[a3] & 255;
      }
      jspb.asserts.assert(0 < a2.length);
      var d2 = false;
      "-" === a2[0] && (d2 = true, a2 = a2.slice(1));
      for (var e2 = [0, 0, 0, 0, 0, 0, 0, 0], f2 = 0; f2 < a2.length; f2++)
        b2(10, a2.charCodeAt(f2) - jspb.utils.ZERO_CHAR_CODE_);
      d2 && (c2(), b2(1, 1));
      return goog.crypt.byteArrayToString(e2);
    };
    jspb.utils.splitDecimalString = function(a2) {
      jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
    };
    jspb.utils.toHexDigit_ = function(a2) {
      return String.fromCharCode(10 > a2 ? jspb.utils.ZERO_CHAR_CODE_ + a2 : jspb.utils.A_CHAR_CODE_ - 10 + a2);
    };
    jspb.utils.fromHexCharCode_ = function(a2) {
      return a2 >= jspb.utils.A_CHAR_CODE_ ? a2 - jspb.utils.A_CHAR_CODE_ + 10 : a2 - jspb.utils.ZERO_CHAR_CODE_;
    };
    jspb.utils.hash64ToHexString = function(a2) {
      var b2 = Array(18);
      b2[0] = "0";
      b2[1] = "x";
      for (var c2 = 0; 8 > c2; c2++) {
        var d2 = a2.charCodeAt(7 - c2);
        b2[2 * c2 + 2] = jspb.utils.toHexDigit_(d2 >> 4);
        b2[2 * c2 + 3] = jspb.utils.toHexDigit_(d2 & 15);
      }
      return b2.join("");
    };
    jspb.utils.hexStringToHash64 = function(a2) {
      a2 = a2.toLowerCase();
      jspb.asserts.assert(18 == a2.length);
      jspb.asserts.assert("0" == a2[0]);
      jspb.asserts.assert("x" == a2[1]);
      for (var b2 = "", c2 = 0; 8 > c2; c2++) {
        var d2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 2)), e2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 3));
        b2 = String.fromCharCode(16 * d2 + e2) + b2;
      }
      return b2;
    };
    jspb.utils.hash64ToNumber = function(a2, b2) {
      jspb.utils.splitHash64(a2);
      a2 = jspb.utils.split64Low;
      var c2 = jspb.utils.split64High;
      return b2 ? jspb.utils.joinInt64(a2, c2) : jspb.utils.joinUint64(a2, c2);
    };
    jspb.utils.numberToHash64 = function(a2) {
      jspb.utils.splitInt64(a2);
      return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.utils.countVarints = function(a2, b2, c2) {
      for (var d2 = 0, e2 = b2; e2 < c2; e2++)
        d2 += a2[e2] >> 7;
      return c2 - b2 - d2;
    };
    jspb.utils.countVarintFields = function(a2, b2, c2, d2) {
      var e2 = 0;
      d2 = 8 * d2 + jspb.BinaryConstants.WireType.VARINT;
      if (128 > d2)
        for (; b2 < c2 && a2[b2++] == d2; )
          for (e2++; ; ) {
            var f2 = a2[b2++];
            if (0 == (f2 & 128))
              break;
          }
      else
        for (; b2 < c2; ) {
          for (f2 = d2; 128 < f2; ) {
            if (a2[b2] != (f2 & 127 | 128))
              return e2;
            b2++;
            f2 >>= 7;
          }
          if (a2[b2++] != f2)
            break;
          for (e2++; f2 = a2[b2++], 0 != (f2 & 128); )
            ;
        }
      return e2;
    };
    jspb.utils.countFixedFields_ = function(a2, b2, c2, d2, e2) {
      var f2 = 0;
      if (128 > d2)
        for (; b2 < c2 && a2[b2++] == d2; )
          f2++, b2 += e2;
      else
        for (; b2 < c2; ) {
          for (var g = d2; 128 < g; ) {
            if (a2[b2++] != (g & 127 | 128))
              return f2;
            g >>= 7;
          }
          if (a2[b2++] != g)
            break;
          f2++;
          b2 += e2;
        }
      return f2;
    };
    jspb.utils.countFixed32Fields = function(a2, b2, c2, d2) {
      return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED32, 4);
    };
    jspb.utils.countFixed64Fields = function(a2, b2, c2, d2) {
      return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED64, 8);
    };
    jspb.utils.countDelimitedFields = function(a2, b2, c2, d2) {
      var e2 = 0;
      for (d2 = 8 * d2 + jspb.BinaryConstants.WireType.DELIMITED; b2 < c2; ) {
        for (var f2 = d2; 128 < f2; ) {
          if (a2[b2++] != (f2 & 127 | 128))
            return e2;
          f2 >>= 7;
        }
        if (a2[b2++] != f2)
          break;
        e2++;
        for (var g = 0, h = 1; f2 = a2[b2++], g += (f2 & 127) * h, h *= 128, 0 != (f2 & 128); )
          ;
        b2 += g;
      }
      return e2;
    };
    jspb.utils.debugBytesToTextFormat = function(a2) {
      var b2 = '"';
      if (a2) {
        a2 = jspb.utils.byteSourceToUint8Array(a2);
        for (var c2 = 0; c2 < a2.length; c2++)
          b2 += "\\x", 16 > a2[c2] && (b2 += "0"), b2 += a2[c2].toString(16);
      }
      return b2 + '"';
    };
    jspb.utils.debugScalarToTextFormat = function(a2) {
      return "string" === typeof a2 ? goog.string.quote(a2) : a2.toString();
    };
    jspb.utils.stringToByteArray = function(a2) {
      for (var b2 = new Uint8Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
        var d2 = a2.charCodeAt(c2);
        if (255 < d2)
          throw Error("Conversion error: string contains codepoint outside of byte range");
        b2[c2] = d2;
      }
      return b2;
    };
    jspb.utils.byteSourceToUint8Array = function(a2) {
      if (a2.constructor === Uint8Array)
        return a2;
      if (a2.constructor === ArrayBuffer || a2.constructor === Array)
        return new Uint8Array(a2);
      if (a2.constructor === String)
        return goog.crypt.base64.decodeStringToUint8Array(a2);
      if (a2 instanceof Uint8Array)
        return new Uint8Array(a2.buffer, a2.byteOffset, a2.byteLength);
      jspb.asserts.fail("Type not convertible to Uint8Array.");
      return new Uint8Array(0);
    };
    jspb.BinaryDecoder = function(a2, b2, c2) {
      this.bytes_ = null;
      this.cursor_ = this.end_ = this.start_ = 0;
      this.error_ = false;
      a2 && this.setBlock(a2, b2, c2);
    };
    jspb.BinaryDecoder.instanceCache_ = [];
    jspb.BinaryDecoder.alloc = function(a2, b2, c2) {
      if (jspb.BinaryDecoder.instanceCache_.length) {
        var d2 = jspb.BinaryDecoder.instanceCache_.pop();
        a2 && d2.setBlock(a2, b2, c2);
        return d2;
      }
      return new jspb.BinaryDecoder(a2, b2, c2);
    };
    jspb.BinaryDecoder.prototype.free = function() {
      this.clear();
      100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
    };
    jspb.BinaryDecoder.prototype.clone = function() {
      return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
    };
    jspb.BinaryDecoder.prototype.clear = function() {
      this.bytes_ = null;
      this.cursor_ = this.end_ = this.start_ = 0;
      this.error_ = false;
    };
    jspb.BinaryDecoder.prototype.getBuffer = function() {
      return this.bytes_;
    };
    jspb.BinaryDecoder.prototype.setBlock = function(a2, b2, c2) {
      this.bytes_ = jspb.utils.byteSourceToUint8Array(a2);
      this.start_ = void 0 !== b2 ? b2 : 0;
      this.end_ = void 0 !== c2 ? this.start_ + c2 : this.bytes_.length;
      this.cursor_ = this.start_;
    };
    jspb.BinaryDecoder.prototype.getEnd = function() {
      return this.end_;
    };
    jspb.BinaryDecoder.prototype.setEnd = function(a2) {
      this.end_ = a2;
    };
    jspb.BinaryDecoder.prototype.reset = function() {
      this.cursor_ = this.start_;
    };
    jspb.BinaryDecoder.prototype.getCursor = function() {
      return this.cursor_;
    };
    jspb.BinaryDecoder.prototype.setCursor = function(a2) {
      this.cursor_ = a2;
    };
    jspb.BinaryDecoder.prototype.advance = function(a2) {
      this.cursor_ += a2;
      jspb.asserts.assert(this.cursor_ <= this.end_);
    };
    jspb.BinaryDecoder.prototype.atEnd = function() {
      return this.cursor_ == this.end_;
    };
    jspb.BinaryDecoder.prototype.pastEnd = function() {
      return this.cursor_ > this.end_;
    };
    jspb.BinaryDecoder.prototype.getError = function() {
      return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
    };
    jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a2) {
      for (var b2 = 128, c2 = 0, d2 = 0, e2 = 0; 4 > e2 && 128 <= b2; e2++)
        b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 7 * e2;
      128 <= b2 && (b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 28, d2 |= (b2 & 127) >> 4);
      if (128 <= b2)
        for (e2 = 0; 5 > e2 && 128 <= b2; e2++)
          b2 = this.bytes_[this.cursor_++], d2 |= (b2 & 127) << 7 * e2 + 3;
      if (128 > b2)
        return a2(c2 >>> 0, d2 >>> 0);
      jspb.asserts.fail("Failed to read varint, encoding is invalid.");
      this.error_ = true;
    };
    jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a2) {
      return this.readSplitVarint64(function(b2, c2) {
        return jspb.utils.fromZigzag64(b2, c2, a2);
      });
    };
    jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a2) {
      var b2 = this.bytes_, c2 = this.cursor_;
      this.cursor_ += 8;
      for (var d2 = 0, e2 = 0, f2 = c2 + 7; f2 >= c2; f2--)
        d2 = d2 << 8 | b2[f2], e2 = e2 << 8 | b2[f2 + 4];
      return a2(d2, e2);
    };
    jspb.BinaryDecoder.prototype.skipVarint = function() {
      for (; this.bytes_[this.cursor_] & 128; )
        this.cursor_++;
      this.cursor_++;
    };
    jspb.BinaryDecoder.prototype.unskipVarint = function(a2) {
      for (; 128 < a2; )
        this.cursor_--, a2 >>>= 7;
      this.cursor_--;
    };
    jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
      var a2 = this.bytes_;
      var b2 = a2[this.cursor_ + 0];
      var c2 = b2 & 127;
      if (128 > b2)
        return this.cursor_ += 1, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
      b2 = a2[this.cursor_ + 1];
      c2 |= (b2 & 127) << 7;
      if (128 > b2)
        return this.cursor_ += 2, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
      b2 = a2[this.cursor_ + 2];
      c2 |= (b2 & 127) << 14;
      if (128 > b2)
        return this.cursor_ += 3, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
      b2 = a2[this.cursor_ + 3];
      c2 |= (b2 & 127) << 21;
      if (128 > b2)
        return this.cursor_ += 4, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
      b2 = a2[this.cursor_ + 4];
      c2 |= (b2 & 15) << 28;
      if (128 > b2)
        return this.cursor_ += 5, jspb.asserts.assert(this.cursor_ <= this.end_), c2 >>> 0;
      this.cursor_ += 5;
      128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && jspb.asserts.assert(false);
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return c2;
    };
    jspb.BinaryDecoder.prototype.readSignedVarint32 = function() {
      return ~~this.readUnsignedVarint32();
    };
    jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
      return this.readUnsignedVarint32().toString();
    };
    jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
      return this.readSignedVarint32().toString();
    };
    jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
      var a2 = this.readUnsignedVarint32();
      return a2 >>> 1 ^ -(a2 & 1);
    };
    jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
      return this.readSplitVarint64(jspb.utils.joinUint64);
    };
    jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
      return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
    };
    jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
      return this.readSplitVarint64(jspb.utils.joinInt64);
    };
    jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
      return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
    };
    jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
      return this.readSplitVarint64(jspb.utils.joinZigzag64);
    };
    jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
      return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
    };
    jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
      return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
    };
    jspb.BinaryDecoder.prototype.readUint8 = function() {
      var a2 = this.bytes_[this.cursor_ + 0];
      this.cursor_ += 1;
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return a2;
    };
    jspb.BinaryDecoder.prototype.readUint16 = function() {
      var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
      this.cursor_ += 2;
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return a2 << 0 | b2 << 8;
    };
    jspb.BinaryDecoder.prototype.readUint32 = function() {
      var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
      this.cursor_ += 4;
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return (a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24) >>> 0;
    };
    jspb.BinaryDecoder.prototype.readUint64 = function() {
      var a2 = this.readUint32(), b2 = this.readUint32();
      return jspb.utils.joinUint64(a2, b2);
    };
    jspb.BinaryDecoder.prototype.readUint64String = function() {
      var a2 = this.readUint32(), b2 = this.readUint32();
      return jspb.utils.joinUnsignedDecimalString(a2, b2);
    };
    jspb.BinaryDecoder.prototype.readInt8 = function() {
      var a2 = this.bytes_[this.cursor_ + 0];
      this.cursor_ += 1;
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return a2 << 24 >> 24;
    };
    jspb.BinaryDecoder.prototype.readInt16 = function() {
      var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
      this.cursor_ += 2;
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return (a2 << 0 | b2 << 8) << 16 >> 16;
    };
    jspb.BinaryDecoder.prototype.readInt32 = function() {
      var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
      this.cursor_ += 4;
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24;
    };
    jspb.BinaryDecoder.prototype.readInt64 = function() {
      var a2 = this.readUint32(), b2 = this.readUint32();
      return jspb.utils.joinInt64(a2, b2);
    };
    jspb.BinaryDecoder.prototype.readInt64String = function() {
      var a2 = this.readUint32(), b2 = this.readUint32();
      return jspb.utils.joinSignedDecimalString(a2, b2);
    };
    jspb.BinaryDecoder.prototype.readFloat = function() {
      var a2 = this.readUint32();
      return jspb.utils.joinFloat32(a2, 0);
    };
    jspb.BinaryDecoder.prototype.readDouble = function() {
      var a2 = this.readUint32(), b2 = this.readUint32();
      return jspb.utils.joinFloat64(a2, b2);
    };
    jspb.BinaryDecoder.prototype.readBool = function() {
      return !!this.bytes_[this.cursor_++];
    };
    jspb.BinaryDecoder.prototype.readEnum = function() {
      return this.readSignedVarint32();
    };
    jspb.BinaryDecoder.prototype.readString = function(a2) {
      var b2 = this.bytes_, c2 = this.cursor_;
      a2 = c2 + a2;
      for (var d2 = [], e2 = ""; c2 < a2; ) {
        var f2 = b2[c2++];
        if (128 > f2)
          d2.push(f2);
        else if (192 > f2)
          continue;
        else if (224 > f2) {
          var g = b2[c2++];
          d2.push((f2 & 31) << 6 | g & 63);
        } else if (240 > f2) {
          g = b2[c2++];
          var h = b2[c2++];
          d2.push((f2 & 15) << 12 | (g & 63) << 6 | h & 63);
        } else if (248 > f2) {
          g = b2[c2++];
          h = b2[c2++];
          var k = b2[c2++];
          f2 = (f2 & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
          f2 -= 65536;
          d2.push((f2 >> 10 & 1023) + 55296, (f2 & 1023) + 56320);
        }
        8192 <= d2.length && (e2 += String.fromCharCode.apply(null, d2), d2.length = 0);
      }
      e2 += goog.crypt.byteArrayToString(d2);
      this.cursor_ = c2;
      return e2;
    };
    jspb.BinaryDecoder.prototype.readStringWithLength = function() {
      var a2 = this.readUnsignedVarint32();
      return this.readString(a2);
    };
    jspb.BinaryDecoder.prototype.readBytes = function(a2) {
      if (0 > a2 || this.cursor_ + a2 > this.bytes_.length)
        return this.error_ = true, jspb.asserts.fail("Invalid byte length!"), new Uint8Array(0);
      var b2 = this.bytes_.subarray(this.cursor_, this.cursor_ + a2);
      this.cursor_ += a2;
      jspb.asserts.assert(this.cursor_ <= this.end_);
      return b2;
    };
    jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
      return this.readSplitVarint64(jspb.utils.joinHash64);
    };
    jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
      var a2 = this.bytes_, b2 = this.cursor_, c2 = a2[b2 + 0], d2 = a2[b2 + 1], e2 = a2[b2 + 2], f2 = a2[b2 + 3], g = a2[b2 + 4], h = a2[b2 + 5], k = a2[b2 + 6];
      a2 = a2[b2 + 7];
      this.cursor_ += 8;
      return String.fromCharCode(c2, d2, e2, f2, g, h, k, a2);
    };
    jspb.BinaryReader = function(a2, b2, c2) {
      this.decoder_ = jspb.BinaryDecoder.alloc(a2, b2, c2);
      this.fieldCursor_ = this.decoder_.getCursor();
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      this.error_ = false;
      this.readCallbacks_ = null;
    };
    jspb.BinaryReader.instanceCache_ = [];
    jspb.BinaryReader.alloc = function(a2, b2, c2) {
      if (jspb.BinaryReader.instanceCache_.length) {
        var d2 = jspb.BinaryReader.instanceCache_.pop();
        a2 && d2.decoder_.setBlock(a2, b2, c2);
        return d2;
      }
      return new jspb.BinaryReader(a2, b2, c2);
    };
    jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
    jspb.BinaryReader.prototype.free = function() {
      this.decoder_.clear();
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      this.error_ = false;
      this.readCallbacks_ = null;
      100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
    };
    jspb.BinaryReader.prototype.getFieldCursor = function() {
      return this.fieldCursor_;
    };
    jspb.BinaryReader.prototype.getCursor = function() {
      return this.decoder_.getCursor();
    };
    jspb.BinaryReader.prototype.getBuffer = function() {
      return this.decoder_.getBuffer();
    };
    jspb.BinaryReader.prototype.getFieldNumber = function() {
      return this.nextField_;
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "getFieldNumber", jspb.BinaryReader.prototype.getFieldNumber);
    jspb.BinaryReader.prototype.getWireType = function() {
      return this.nextWireType_;
    };
    jspb.BinaryReader.prototype.isDelimited = function() {
      return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "isDelimited", jspb.BinaryReader.prototype.isDelimited);
    jspb.BinaryReader.prototype.isEndGroup = function() {
      return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "isEndGroup", jspb.BinaryReader.prototype.isEndGroup);
    jspb.BinaryReader.prototype.getError = function() {
      return this.error_ || this.decoder_.getError();
    };
    jspb.BinaryReader.prototype.setBlock = function(a2, b2, c2) {
      this.decoder_.setBlock(a2, b2, c2);
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
    };
    jspb.BinaryReader.prototype.reset = function() {
      this.decoder_.reset();
      this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
      this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
    };
    jspb.BinaryReader.prototype.advance = function(a2) {
      this.decoder_.advance(a2);
    };
    jspb.BinaryReader.prototype.nextField = function() {
      if (this.decoder_.atEnd())
        return false;
      if (this.getError())
        return jspb.asserts.fail("Decoder hit an error"), false;
      this.fieldCursor_ = this.decoder_.getCursor();
      var a2 = this.decoder_.readUnsignedVarint32(), b2 = a2 >>> 3;
      a2 &= 7;
      if (a2 != jspb.BinaryConstants.WireType.VARINT && a2 != jspb.BinaryConstants.WireType.FIXED32 && a2 != jspb.BinaryConstants.WireType.FIXED64 && a2 != jspb.BinaryConstants.WireType.DELIMITED && a2 != jspb.BinaryConstants.WireType.START_GROUP && a2 != jspb.BinaryConstants.WireType.END_GROUP)
        return jspb.asserts.fail(
          "Invalid wire type: %s (at position %s)",
          a2,
          this.fieldCursor_
        ), this.error_ = true, false;
      this.nextField_ = b2;
      this.nextWireType_ = a2;
      return true;
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "nextField", jspb.BinaryReader.prototype.nextField);
    jspb.BinaryReader.prototype.unskipHeader = function() {
      this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
    };
    jspb.BinaryReader.prototype.skipMatchingFields = function() {
      var a2 = this.nextField_;
      for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == a2; )
        this.skipField();
      this.decoder_.atEnd() || this.unskipHeader();
    };
    jspb.BinaryReader.prototype.skipVarintField = function() {
      this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (jspb.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
    };
    jspb.BinaryReader.prototype.skipDelimitedField = function() {
      if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
        jspb.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
      else {
        var a2 = this.decoder_.readUnsignedVarint32();
        this.decoder_.advance(a2);
      }
    };
    jspb.BinaryReader.prototype.skipFixed32Field = function() {
      this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
    };
    jspb.BinaryReader.prototype.skipFixed64Field = function() {
      this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
    };
    jspb.BinaryReader.prototype.skipGroup = function() {
      var a2 = this.nextField_;
      do {
        if (!this.nextField()) {
          jspb.asserts.fail("Unmatched start-group tag: stream EOF");
          this.error_ = true;
          break;
        }
        if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
          this.nextField_ != a2 && (jspb.asserts.fail("Unmatched end-group tag"), this.error_ = true);
          break;
        }
        this.skipField();
      } while (1);
    };
    jspb.BinaryReader.prototype.skipField = function() {
      switch (this.nextWireType_) {
        case jspb.BinaryConstants.WireType.VARINT:
          this.skipVarintField();
          break;
        case jspb.BinaryConstants.WireType.FIXED64:
          this.skipFixed64Field();
          break;
        case jspb.BinaryConstants.WireType.DELIMITED:
          this.skipDelimitedField();
          break;
        case jspb.BinaryConstants.WireType.FIXED32:
          this.skipFixed32Field();
          break;
        case jspb.BinaryConstants.WireType.START_GROUP:
          this.skipGroup();
          break;
        default:
          jspb.asserts.fail("Invalid wire encoding for field.");
      }
    };
    jspb.BinaryReader.prototype.registerReadCallback = function(a2, b2) {
      null === this.readCallbacks_ && (this.readCallbacks_ = {});
      jspb.asserts.assert(!this.readCallbacks_[a2]);
      this.readCallbacks_[a2] = b2;
    };
    jspb.BinaryReader.prototype.runReadCallback = function(a2) {
      jspb.asserts.assert(null !== this.readCallbacks_);
      a2 = this.readCallbacks_[a2];
      jspb.asserts.assert(a2);
      return a2(this);
    };
    jspb.BinaryReader.prototype.readAny = function(a2) {
      this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a2);
      var b2 = jspb.BinaryConstants.FieldType;
      switch (a2) {
        case b2.DOUBLE:
          return this.readDouble();
        case b2.FLOAT:
          return this.readFloat();
        case b2.INT64:
          return this.readInt64();
        case b2.UINT64:
          return this.readUint64();
        case b2.INT32:
          return this.readInt32();
        case b2.FIXED64:
          return this.readFixed64();
        case b2.FIXED32:
          return this.readFixed32();
        case b2.BOOL:
          return this.readBool();
        case b2.STRING:
          return this.readString();
        case b2.GROUP:
          jspb.asserts.fail("Group field type not supported in readAny()");
        case b2.MESSAGE:
          jspb.asserts.fail("Message field type not supported in readAny()");
        case b2.BYTES:
          return this.readBytes();
        case b2.UINT32:
          return this.readUint32();
        case b2.ENUM:
          return this.readEnum();
        case b2.SFIXED32:
          return this.readSfixed32();
        case b2.SFIXED64:
          return this.readSfixed64();
        case b2.SINT32:
          return this.readSint32();
        case b2.SINT64:
          return this.readSint64();
        case b2.FHASH64:
          return this.readFixedHash64();
        case b2.VHASH64:
          return this.readVarintHash64();
        default:
          jspb.asserts.fail("Invalid field type in readAny()");
      }
      return 0;
    };
    jspb.BinaryReader.prototype.readMessage = function(a2, b2) {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var c2 = this.decoder_.getEnd(), d2 = this.decoder_.readUnsignedVarint32();
      d2 = this.decoder_.getCursor() + d2;
      this.decoder_.setEnd(d2);
      b2(a2, this);
      this.decoder_.setCursor(d2);
      this.decoder_.setEnd(c2);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readMessage", jspb.BinaryReader.prototype.readMessage);
    jspb.BinaryReader.prototype.readGroup = function(a2, b2, c2) {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
      jspb.asserts.assert(this.nextField_ == a2);
      c2(b2, this);
      this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (jspb.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readGroup", jspb.BinaryReader.prototype.readGroup);
    jspb.BinaryReader.prototype.getFieldDecoder = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var a2 = this.decoder_.readUnsignedVarint32(), b2 = this.decoder_.getCursor(), c2 = b2 + a2;
      a2 = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b2, a2);
      this.decoder_.setCursor(c2);
      return a2;
    };
    jspb.BinaryReader.prototype.readInt32 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint32();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readInt32", jspb.BinaryReader.prototype.readInt32);
    jspb.BinaryReader.prototype.readInt32String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint32String();
    };
    jspb.BinaryReader.prototype.readInt64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint64();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readInt64", jspb.BinaryReader.prototype.readInt64);
    jspb.BinaryReader.prototype.readInt64String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint64String();
    };
    jspb.BinaryReader.prototype.readUint32 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint32();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readUint32", jspb.BinaryReader.prototype.readUint32);
    jspb.BinaryReader.prototype.readUint32String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint32String();
    };
    jspb.BinaryReader.prototype.readUint64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint64();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readUint64", jspb.BinaryReader.prototype.readUint64);
    jspb.BinaryReader.prototype.readUint64String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readUnsignedVarint64String();
    };
    jspb.BinaryReader.prototype.readSint32 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarint32();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readSint32", jspb.BinaryReader.prototype.readSint32);
    jspb.BinaryReader.prototype.readSint64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarint64();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readSint64", jspb.BinaryReader.prototype.readSint64);
    jspb.BinaryReader.prototype.readSint64String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarint64String();
    };
    jspb.BinaryReader.prototype.readFixed32 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readUint32();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readFixed32", jspb.BinaryReader.prototype.readFixed32);
    jspb.BinaryReader.prototype.readFixed64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readUint64();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readFixed64", jspb.BinaryReader.prototype.readFixed64);
    jspb.BinaryReader.prototype.readFixed64String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readUint64String();
    };
    jspb.BinaryReader.prototype.readSfixed32 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readInt32();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed32", jspb.BinaryReader.prototype.readSfixed32);
    jspb.BinaryReader.prototype.readSfixed32String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readInt32().toString();
    };
    jspb.BinaryReader.prototype.readSfixed64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readInt64();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed64", jspb.BinaryReader.prototype.readSfixed64);
    jspb.BinaryReader.prototype.readSfixed64String = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readInt64String();
    };
    jspb.BinaryReader.prototype.readFloat = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
      return this.decoder_.readFloat();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readFloat", jspb.BinaryReader.prototype.readFloat);
    jspb.BinaryReader.prototype.readDouble = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readDouble();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readDouble", jspb.BinaryReader.prototype.readDouble);
    jspb.BinaryReader.prototype.readBool = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return !!this.decoder_.readUnsignedVarint32();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readBool", jspb.BinaryReader.prototype.readBool);
    jspb.BinaryReader.prototype.readEnum = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSignedVarint64();
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readEnum", jspb.BinaryReader.prototype.readEnum);
    jspb.BinaryReader.prototype.readString = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var a2 = this.decoder_.readUnsignedVarint32();
      return this.decoder_.readString(a2);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readString", jspb.BinaryReader.prototype.readString);
    jspb.BinaryReader.prototype.readBytes = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var a2 = this.decoder_.readUnsignedVarint32();
      return this.decoder_.readBytes(a2);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readBytes", jspb.BinaryReader.prototype.readBytes);
    jspb.BinaryReader.prototype.readVarintHash64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readVarintHash64();
    };
    jspb.BinaryReader.prototype.readSintHash64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readZigzagVarintHash64();
    };
    jspb.BinaryReader.prototype.readSplitVarint64 = function(a2) {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSplitVarint64(a2);
    };
    jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a2) {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
      return this.decoder_.readSplitVarint64(function(b2, c2) {
        return jspb.utils.fromZigzag64(b2, c2, a2);
      });
    };
    jspb.BinaryReader.prototype.readFixedHash64 = function() {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readFixedHash64();
    };
    jspb.BinaryReader.prototype.readSplitFixed64 = function(a2) {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
      return this.decoder_.readSplitFixed64(a2);
    };
    jspb.BinaryReader.prototype.readPackedField_ = function(a2) {
      jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
      var b2 = this.decoder_.readUnsignedVarint32();
      b2 = this.decoder_.getCursor() + b2;
      for (var c2 = []; this.decoder_.getCursor() < b2; )
        c2.push(a2.call(this.decoder_));
      return c2;
    };
    jspb.BinaryReader.prototype.readPackedInt32 = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint32);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt32", jspb.BinaryReader.prototype.readPackedInt32);
    jspb.BinaryReader.prototype.readPackedInt32String = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint32String);
    };
    jspb.BinaryReader.prototype.readPackedInt64 = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint64);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt64", jspb.BinaryReader.prototype.readPackedInt64);
    jspb.BinaryReader.prototype.readPackedInt64String = function() {
      return this.readPackedField_(this.decoder_.readSignedVarint64String);
    };
    jspb.BinaryReader.prototype.readPackedUint32 = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint32);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint32", jspb.BinaryReader.prototype.readPackedUint32);
    jspb.BinaryReader.prototype.readPackedUint32String = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
    };
    jspb.BinaryReader.prototype.readPackedUint64 = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint64);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint64", jspb.BinaryReader.prototype.readPackedUint64);
    jspb.BinaryReader.prototype.readPackedUint64String = function() {
      return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
    };
    jspb.BinaryReader.prototype.readPackedSint32 = function() {
      return this.readPackedField_(this.decoder_.readZigzagVarint32);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint32", jspb.BinaryReader.prototype.readPackedSint32);
    jspb.BinaryReader.prototype.readPackedSint64 = function() {
      return this.readPackedField_(this.decoder_.readZigzagVarint64);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint64", jspb.BinaryReader.prototype.readPackedSint64);
    jspb.BinaryReader.prototype.readPackedSint64String = function() {
      return this.readPackedField_(this.decoder_.readZigzagVarint64String);
    };
    jspb.BinaryReader.prototype.readPackedFixed32 = function() {
      return this.readPackedField_(this.decoder_.readUint32);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed32", jspb.BinaryReader.prototype.readPackedFixed32);
    jspb.BinaryReader.prototype.readPackedFixed64 = function() {
      return this.readPackedField_(this.decoder_.readUint64);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed64", jspb.BinaryReader.prototype.readPackedFixed64);
    jspb.BinaryReader.prototype.readPackedFixed64String = function() {
      return this.readPackedField_(this.decoder_.readUint64String);
    };
    jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
      return this.readPackedField_(this.decoder_.readInt32);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed32", jspb.BinaryReader.prototype.readPackedSfixed32);
    jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
      return this.readPackedField_(this.decoder_.readInt64);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed64", jspb.BinaryReader.prototype.readPackedSfixed64);
    jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
      return this.readPackedField_(this.decoder_.readInt64String);
    };
    jspb.BinaryReader.prototype.readPackedFloat = function() {
      return this.readPackedField_(this.decoder_.readFloat);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFloat", jspb.BinaryReader.prototype.readPackedFloat);
    jspb.BinaryReader.prototype.readPackedDouble = function() {
      return this.readPackedField_(this.decoder_.readDouble);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedDouble", jspb.BinaryReader.prototype.readPackedDouble);
    jspb.BinaryReader.prototype.readPackedBool = function() {
      return this.readPackedField_(this.decoder_.readBool);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedBool", jspb.BinaryReader.prototype.readPackedBool);
    jspb.BinaryReader.prototype.readPackedEnum = function() {
      return this.readPackedField_(this.decoder_.readEnum);
    };
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedEnum", jspb.BinaryReader.prototype.readPackedEnum);
    jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
      return this.readPackedField_(this.decoder_.readVarintHash64);
    };
    jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
      return this.readPackedField_(this.decoder_.readFixedHash64);
    };
    jspb.BinaryEncoder = function() {
      this.buffer_ = [];
    };
    jspb.BinaryEncoder.prototype.length = function() {
      return this.buffer_.length;
    };
    jspb.BinaryEncoder.prototype.end = function() {
      var a2 = this.buffer_;
      this.buffer_ = [];
      return a2;
    };
    jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a2, b2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(b2 == Math.floor(b2));
      jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
      for (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32); 0 < b2 || 127 < a2; )
        this.buffer_.push(a2 & 127 | 128), a2 = (a2 >>> 7 | b2 << 25) >>> 0, b2 >>>= 7;
      this.buffer_.push(a2);
    };
    jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a2, b2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(b2 == Math.floor(b2));
      jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
      jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32);
      this.writeUint32(a2);
      this.writeUint32(b2);
    };
    jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      for (jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32); 127 < a2; )
        this.buffer_.push(a2 & 127 | 128), a2 >>>= 7;
      this.buffer_.push(a2);
    };
    jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
      if (0 <= a2)
        this.writeUnsignedVarint32(a2);
      else {
        for (var b2 = 0; 9 > b2; b2++)
          this.buffer_.push(a2 & 127 | 128), a2 >>= 7;
        this.buffer_.push(1);
      }
    };
    jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
      jspb.utils.splitInt64(a2);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitInt64(a2);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
      this.writeUnsignedVarint32((a2 << 1 ^ a2 >> 31) >>> 0);
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitZigzag64(a2);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a2) {
      this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a2));
    };
    jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a2) {
      var b2 = this;
      jspb.utils.splitHash64(a2);
      jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a3, d2) {
        b2.writeSplitVarint64(a3 >>> 0, d2 >>> 0);
      });
    };
    jspb.BinaryEncoder.prototype.writeUint8 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(0 <= a2 && 256 > a2);
      this.buffer_.push(a2 >>> 0 & 255);
    };
    jspb.BinaryEncoder.prototype.writeUint16 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(0 <= a2 && 65536 > a2);
      this.buffer_.push(a2 >>> 0 & 255);
      this.buffer_.push(a2 >>> 8 & 255);
    };
    jspb.BinaryEncoder.prototype.writeUint32 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
      this.buffer_.push(a2 >>> 0 & 255);
      this.buffer_.push(a2 >>> 8 & 255);
      this.buffer_.push(a2 >>> 16 & 255);
      this.buffer_.push(a2 >>> 24 & 255);
    };
    jspb.BinaryEncoder.prototype.writeUint64 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
      jspb.utils.splitUint64(a2);
      this.writeUint32(jspb.utils.split64Low);
      this.writeUint32(jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeInt8 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(-128 <= a2 && 128 > a2);
      this.buffer_.push(a2 >>> 0 & 255);
    };
    jspb.BinaryEncoder.prototype.writeInt16 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(-32768 <= a2 && 32768 > a2);
      this.buffer_.push(a2 >>> 0 & 255);
      this.buffer_.push(a2 >>> 8 & 255);
    };
    jspb.BinaryEncoder.prototype.writeInt32 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
      this.buffer_.push(a2 >>> 0 & 255);
      this.buffer_.push(a2 >>> 8 & 255);
      this.buffer_.push(a2 >>> 16 & 255);
      this.buffer_.push(a2 >>> 24 & 255);
    };
    jspb.BinaryEncoder.prototype.writeInt64 = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitInt64(a2);
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeInt64String = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(+a2 >= -jspb.BinaryConstants.TWO_TO_63 && +a2 < jspb.BinaryConstants.TWO_TO_63);
      jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeFloat = function(a2) {
      jspb.asserts.assert(Infinity === a2 || -Infinity === a2 || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT32_MAX && a2 <= jspb.BinaryConstants.FLOAT32_MAX);
      jspb.utils.splitFloat32(a2);
      this.writeUint32(jspb.utils.split64Low);
    };
    jspb.BinaryEncoder.prototype.writeDouble = function(a2) {
      jspb.asserts.assert(Infinity === a2 || -Infinity === a2 || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT64_MAX && a2 <= jspb.BinaryConstants.FLOAT64_MAX);
      jspb.utils.splitFloat64(a2);
      this.writeUint32(jspb.utils.split64Low);
      this.writeUint32(jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeBool = function(a2) {
      jspb.asserts.assert("boolean" === typeof a2 || "number" === typeof a2);
      this.buffer_.push(a2 ? 1 : 0);
    };
    jspb.BinaryEncoder.prototype.writeEnum = function(a2) {
      jspb.asserts.assert(a2 == Math.floor(a2));
      jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
      this.writeSignedVarint32(a2);
    };
    jspb.BinaryEncoder.prototype.writeBytes = function(a2) {
      this.buffer_.push.apply(this.buffer_, a2);
    };
    jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a2) {
      jspb.utils.splitHash64(a2);
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a2) {
      jspb.utils.splitHash64(a2);
      this.writeUint32(jspb.utils.split64Low);
      this.writeUint32(jspb.utils.split64High);
    };
    jspb.BinaryEncoder.prototype.writeString = function(a2) {
      var b2 = this.buffer_.length;
      jspb.asserts.assertString(a2);
      for (var c2 = 0; c2 < a2.length; c2++) {
        var d2 = a2.charCodeAt(c2);
        if (128 > d2)
          this.buffer_.push(d2);
        else if (2048 > d2)
          this.buffer_.push(d2 >> 6 | 192), this.buffer_.push(d2 & 63 | 128);
        else if (65536 > d2)
          if (55296 <= d2 && 56319 >= d2 && c2 + 1 < a2.length) {
            var e2 = a2.charCodeAt(c2 + 1);
            56320 <= e2 && 57343 >= e2 && (d2 = 1024 * (d2 - 55296) + e2 - 56320 + 65536, this.buffer_.push(d2 >> 18 | 240), this.buffer_.push(d2 >> 12 & 63 | 128), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128), c2++);
          } else
            this.buffer_.push(d2 >> 12 | 224), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128);
      }
      return this.buffer_.length - b2;
    };
    jspb.arith = {};
    jspb.arith.UInt64 = function(a2, b2) {
      this.lo = a2;
      this.hi = b2;
    };
    jspb.arith.UInt64.prototype.cmp = function(a2) {
      return this.hi < a2.hi || this.hi == a2.hi && this.lo < a2.lo ? -1 : this.hi == a2.hi && this.lo == a2.lo ? 0 : 1;
    };
    jspb.arith.UInt64.prototype.rightShift = function() {
      return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
    };
    jspb.arith.UInt64.prototype.leftShift = function() {
      return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
    };
    jspb.arith.UInt64.prototype.msb = function() {
      return !!(this.hi & 2147483648);
    };
    jspb.arith.UInt64.prototype.lsb = function() {
      return !!(this.lo & 1);
    };
    jspb.arith.UInt64.prototype.zero = function() {
      return 0 == this.lo && 0 == this.hi;
    };
    jspb.arith.UInt64.prototype.add = function(a2) {
      return new jspb.arith.UInt64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.UInt64.prototype.sub = function(a2) {
      return new jspb.arith.UInt64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.UInt64.mul32x32 = function(a2, b2) {
      var c2 = a2 & 65535;
      a2 >>>= 16;
      var d2 = b2 & 65535, e2 = b2 >>> 16;
      b2 = c2 * d2 + 65536 * (c2 * e2 & 65535) + 65536 * (a2 * d2 & 65535);
      for (c2 = a2 * e2 + (c2 * e2 >>> 16) + (a2 * d2 >>> 16); 4294967296 <= b2; )
        b2 -= 4294967296, c2 += 1;
      return new jspb.arith.UInt64(b2 >>> 0, c2 >>> 0);
    };
    jspb.arith.UInt64.prototype.mul = function(a2) {
      var b2 = jspb.arith.UInt64.mul32x32(this.lo, a2);
      a2 = jspb.arith.UInt64.mul32x32(this.hi, a2);
      a2.hi = a2.lo;
      a2.lo = 0;
      return b2.add(a2);
    };
    jspb.arith.UInt64.prototype.div = function(a2) {
      if (0 == a2)
        return [];
      var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(this.lo, this.hi);
      a2 = new jspb.arith.UInt64(a2, 0);
      for (var d2 = new jspb.arith.UInt64(1, 0); !a2.msb(); )
        a2 = a2.leftShift(), d2 = d2.leftShift();
      for (; !d2.zero(); )
        0 >= a2.cmp(c2) && (b2 = b2.add(d2), c2 = c2.sub(a2)), a2 = a2.rightShift(), d2 = d2.rightShift();
      return [b2, c2];
    };
    jspb.arith.UInt64.prototype.toString = function() {
      for (var a2 = "", b2 = this; !b2.zero(); ) {
        b2 = b2.div(10);
        var c2 = b2[0];
        a2 = b2[1].lo + a2;
        b2 = c2;
      }
      "" == a2 && (a2 = "0");
      return a2;
    };
    jspb.arith.UInt64.fromString = function(a2) {
      for (var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(0, 0), d2 = 0; d2 < a2.length; d2++) {
        if ("0" > a2[d2] || "9" < a2[d2])
          return null;
        var e2 = parseInt(a2[d2], 10);
        c2.lo = e2;
        b2 = b2.mul(10).add(c2);
      }
      return b2;
    };
    jspb.arith.UInt64.prototype.clone = function() {
      return new jspb.arith.UInt64(this.lo, this.hi);
    };
    jspb.arith.Int64 = function(a2, b2) {
      this.lo = a2;
      this.hi = b2;
    };
    jspb.arith.Int64.prototype.add = function(a2) {
      return new jspb.arith.Int64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.Int64.prototype.sub = function(a2) {
      return new jspb.arith.Int64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
    };
    jspb.arith.Int64.prototype.clone = function() {
      return new jspb.arith.Int64(this.lo, this.hi);
    };
    jspb.arith.Int64.prototype.toString = function() {
      var a2 = 0 != (this.hi & 2147483648), b2 = new jspb.arith.UInt64(this.lo, this.hi);
      a2 && (b2 = new jspb.arith.UInt64(0, 0).sub(b2));
      return (a2 ? "-" : "") + b2.toString();
    };
    jspb.arith.Int64.fromString = function(a2) {
      var b2 = 0 < a2.length && "-" == a2[0];
      b2 && (a2 = a2.substring(1));
      a2 = jspb.arith.UInt64.fromString(a2);
      if (null === a2)
        return null;
      b2 && (a2 = new jspb.arith.UInt64(0, 0).sub(a2));
      return new jspb.arith.Int64(a2.lo, a2.hi);
    };
    jspb.BinaryWriter = function() {
      this.blocks_ = [];
      this.totalLength_ = 0;
      this.encoder_ = new jspb.BinaryEncoder();
      this.bookmarks_ = [];
    };
    jspb.BinaryWriter.prototype.appendUint8Array_ = function(a2) {
      var b2 = this.encoder_.end();
      this.blocks_.push(b2);
      this.blocks_.push(a2);
      this.totalLength_ += b2.length + a2.length;
    };
    jspb.BinaryWriter.prototype.beginDelimited_ = function(a2) {
      this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED);
      a2 = this.encoder_.end();
      this.blocks_.push(a2);
      this.totalLength_ += a2.length;
      a2.push(this.totalLength_);
      return a2;
    };
    jspb.BinaryWriter.prototype.endDelimited_ = function(a2) {
      var b2 = a2.pop();
      b2 = this.totalLength_ + this.encoder_.length() - b2;
      for (jspb.asserts.assert(0 <= b2); 127 < b2; )
        a2.push(b2 & 127 | 128), b2 >>>= 7, this.totalLength_++;
      a2.push(b2);
      this.totalLength_++;
    };
    jspb.BinaryWriter.prototype.writeSerializedMessage = function(a2, b2, c2) {
      this.appendUint8Array_(a2.subarray(b2, c2));
    };
    jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a2, b2, c2) {
      null != a2 && null != b2 && null != c2 && this.writeSerializedMessage(a2, b2, c2);
    };
    jspb.BinaryWriter.prototype.reset = function() {
      this.blocks_ = [];
      this.encoder_.end();
      this.totalLength_ = 0;
      this.bookmarks_ = [];
    };
    jspb.BinaryWriter.prototype.getResultBuffer = function() {
      jspb.asserts.assert(0 == this.bookmarks_.length);
      for (var a2 = new Uint8Array(this.totalLength_ + this.encoder_.length()), b2 = this.blocks_, c2 = b2.length, d2 = 0, e2 = 0; e2 < c2; e2++) {
        var f2 = b2[e2];
        a2.set(f2, d2);
        d2 += f2.length;
      }
      b2 = this.encoder_.end();
      a2.set(b2, d2);
      d2 += b2.length;
      jspb.asserts.assert(d2 == a2.length);
      this.blocks_ = [a2];
      return a2;
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "getResultBuffer", jspb.BinaryWriter.prototype.getResultBuffer);
    jspb.BinaryWriter.prototype.getResultBase64String = function(a2) {
      return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a2);
    };
    jspb.BinaryWriter.prototype.beginSubMessage = function(a2) {
      this.bookmarks_.push(this.beginDelimited_(a2));
    };
    jspb.BinaryWriter.prototype.endSubMessage = function() {
      jspb.asserts.assert(0 <= this.bookmarks_.length);
      this.endDelimited_(this.bookmarks_.pop());
    };
    jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a2, b2) {
      jspb.asserts.assert(1 <= a2 && a2 == Math.floor(a2));
      this.encoder_.writeUnsignedVarint32(8 * a2 + b2);
    };
    jspb.BinaryWriter.prototype.writeAny = function(a2, b2, c2) {
      var d2 = jspb.BinaryConstants.FieldType;
      switch (a2) {
        case d2.DOUBLE:
          this.writeDouble(b2, c2);
          break;
        case d2.FLOAT:
          this.writeFloat(b2, c2);
          break;
        case d2.INT64:
          this.writeInt64(b2, c2);
          break;
        case d2.UINT64:
          this.writeUint64(b2, c2);
          break;
        case d2.INT32:
          this.writeInt32(b2, c2);
          break;
        case d2.FIXED64:
          this.writeFixed64(b2, c2);
          break;
        case d2.FIXED32:
          this.writeFixed32(b2, c2);
          break;
        case d2.BOOL:
          this.writeBool(b2, c2);
          break;
        case d2.STRING:
          this.writeString(b2, c2);
          break;
        case d2.GROUP:
          jspb.asserts.fail("Group field type not supported in writeAny()");
          break;
        case d2.MESSAGE:
          jspb.asserts.fail("Message field type not supported in writeAny()");
          break;
        case d2.BYTES:
          this.writeBytes(b2, c2);
          break;
        case d2.UINT32:
          this.writeUint32(b2, c2);
          break;
        case d2.ENUM:
          this.writeEnum(b2, c2);
          break;
        case d2.SFIXED32:
          this.writeSfixed32(b2, c2);
          break;
        case d2.SFIXED64:
          this.writeSfixed64(b2, c2);
          break;
        case d2.SINT32:
          this.writeSint32(b2, c2);
          break;
        case d2.SINT64:
          this.writeSint64(b2, c2);
          break;
        case d2.FHASH64:
          this.writeFixedHash64(b2, c2);
          break;
        case d2.VHASH64:
          this.writeVarintHash64(b2, c2);
          break;
        default:
          jspb.asserts.fail("Invalid field type in writeAny()");
      }
    };
    jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b2));
    };
    jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
    };
    jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b2));
    };
    jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b2));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b2));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b2));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b2));
    };
    jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b2));
    };
    jspb.BinaryWriter.prototype.writeInt32 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt32", jspb.BinaryWriter.prototype.writeInt32);
    jspb.BinaryWriter.prototype.writeInt32String = function(a2, b2) {
      null != b2 && (b2 = parseInt(b2, 10), jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
    };
    jspb.BinaryWriter.prototype.writeInt64 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a2, b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt64", jspb.BinaryWriter.prototype.writeInt64);
    jspb.BinaryWriter.prototype.writeInt64String = function(a2, b2) {
      null != b2 && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
    };
    jspb.BinaryWriter.prototype.writeUint32 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint32", jspb.BinaryWriter.prototype.writeUint32);
    jspb.BinaryWriter.prototype.writeUint32String = function(a2, b2) {
      null != b2 && (b2 = parseInt(b2, 10), jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
    };
    jspb.BinaryWriter.prototype.writeUint64 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a2, b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint64", jspb.BinaryWriter.prototype.writeUint64);
    jspb.BinaryWriter.prototype.writeUint64String = function(a2, b2) {
      null != b2 && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
    };
    jspb.BinaryWriter.prototype.writeSint32 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a2, b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint32", jspb.BinaryWriter.prototype.writeSint32);
    jspb.BinaryWriter.prototype.writeSint64 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a2, b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint64", jspb.BinaryWriter.prototype.writeSint64);
    jspb.BinaryWriter.prototype.writeSintHash64 = function(a2, b2) {
      null != b2 && this.writeZigzagVarintHash64_(a2, b2);
    };
    jspb.BinaryWriter.prototype.writeSint64String = function(a2, b2) {
      null != b2 && this.writeZigzagVarint64String_(a2, b2);
    };
    jspb.BinaryWriter.prototype.writeFixed32 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed32", jspb.BinaryWriter.prototype.writeFixed32);
    jspb.BinaryWriter.prototype.writeFixed64 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed64", jspb.BinaryWriter.prototype.writeFixed64);
    jspb.BinaryWriter.prototype.writeFixed64String = function(a2, b2) {
      null != b2 && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
    };
    jspb.BinaryWriter.prototype.writeSfixed32 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed32", jspb.BinaryWriter.prototype.writeSfixed32);
    jspb.BinaryWriter.prototype.writeSfixed64 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed64", jspb.BinaryWriter.prototype.writeSfixed64);
    jspb.BinaryWriter.prototype.writeSfixed64String = function(a2, b2) {
      null != b2 && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
    };
    jspb.BinaryWriter.prototype.writeFloat = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeFloat", jspb.BinaryWriter.prototype.writeFloat);
    jspb.BinaryWriter.prototype.writeDouble = function(a2, b2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeDouble", jspb.BinaryWriter.prototype.writeDouble);
    jspb.BinaryWriter.prototype.writeBool = function(a2, b2) {
      null != b2 && (jspb.asserts.assert("boolean" === typeof b2 || "number" === typeof b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeBool", jspb.BinaryWriter.prototype.writeBool);
    jspb.BinaryWriter.prototype.writeEnum = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeEnum", jspb.BinaryWriter.prototype.writeEnum);
    jspb.BinaryWriter.prototype.writeString = function(a2, b2) {
      null != b2 && (a2 = this.beginDelimited_(a2), this.encoder_.writeString(b2), this.endDelimited_(a2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeString", jspb.BinaryWriter.prototype.writeString);
    jspb.BinaryWriter.prototype.writeBytes = function(a2, b2) {
      null != b2 && (b2 = jspb.utils.byteSourceToUint8Array(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), this.appendUint8Array_(b2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeBytes", jspb.BinaryWriter.prototype.writeBytes);
    jspb.BinaryWriter.prototype.writeMessage = function(a2, b2, c2) {
      null != b2 && (a2 = this.beginDelimited_(a2), c2(b2, this), this.endDelimited_(a2));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeMessage", jspb.BinaryWriter.prototype.writeMessage);
    jspb.BinaryWriter.prototype.writeMessageSet = function(a2, b2, c2) {
      null != b2 && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a2), a2 = this.beginDelimited_(3), c2(b2, this), this.endDelimited_(a2), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
    };
    jspb.BinaryWriter.prototype.writeGroup = function(a2, b2, c2) {
      null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2, this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP));
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeGroup", jspb.BinaryWriter.prototype.writeGroup);
    jspb.BinaryWriter.prototype.writeFixedHash64 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(8 == b2.length), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b2));
    };
    jspb.BinaryWriter.prototype.writeVarintHash64 = function(a2, b2) {
      null != b2 && (jspb.asserts.assert(8 == b2.length), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b2));
    };
    jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a2, b2, c2) {
      this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64);
      this.encoder_.writeSplitFixed64(b2, c2);
    };
    jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a2, b2, c2) {
      this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
      this.encoder_.writeSplitVarint64(b2, c2);
    };
    jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a2, b2, c2) {
      this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
      var d2 = this.encoder_;
      jspb.utils.toZigzag64(b2, c2, function(a3, b3) {
        d2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
      });
    };
    jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeSignedVarint32_(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt32", jspb.BinaryWriter.prototype.writeRepeatedInt32);
    jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeInt32String(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeSignedVarint64_(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt64", jspb.BinaryWriter.prototype.writeRepeatedInt64);
    jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a2, b2, c2, d2) {
      if (null != b2)
        for (var e2 = 0; e2 < b2.length; e2++)
          this.writeSplitFixed64(a2, c2(b2[e2]), d2(b2[e2]));
    };
    jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a2, b2, c2, d2) {
      if (null != b2)
        for (var e2 = 0; e2 < b2.length; e2++)
          this.writeSplitVarint64(a2, c2(b2[e2]), d2(b2[e2]));
    };
    jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
      if (null != b2)
        for (var e2 = 0; e2 < b2.length; e2++)
          this.writeSplitZigzagVarint64(a2, c2(b2[e2]), d2(b2[e2]));
    };
    jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeInt64String(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeUnsignedVarint32_(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint32", jspb.BinaryWriter.prototype.writeRepeatedUint32);
    jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeUint32String(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeUnsignedVarint64_(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint64", jspb.BinaryWriter.prototype.writeRepeatedUint64);
    jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeUint64String(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeZigzagVarint32_(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint32", jspb.BinaryWriter.prototype.writeRepeatedSint32);
    jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeZigzagVarint64_(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint64", jspb.BinaryWriter.prototype.writeRepeatedSint64);
    jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeZigzagVarint64String_(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeZigzagVarintHash64_(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeFixed32(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed32", jspb.BinaryWriter.prototype.writeRepeatedFixed32);
    jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeFixed64(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64", jspb.BinaryWriter.prototype.writeRepeatedFixed64);
    jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeFixed64String(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64String", jspb.BinaryWriter.prototype.writeRepeatedFixed64String);
    jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeSfixed32(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed32", jspb.BinaryWriter.prototype.writeRepeatedSfixed32);
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeSfixed64(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed64", jspb.BinaryWriter.prototype.writeRepeatedSfixed64);
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeSfixed64String(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeFloat(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFloat", jspb.BinaryWriter.prototype.writeRepeatedFloat);
    jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeDouble(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedDouble", jspb.BinaryWriter.prototype.writeRepeatedDouble);
    jspb.BinaryWriter.prototype.writeRepeatedBool = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeBool(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBool", jspb.BinaryWriter.prototype.writeRepeatedBool);
    jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeEnum(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedEnum", jspb.BinaryWriter.prototype.writeRepeatedEnum);
    jspb.BinaryWriter.prototype.writeRepeatedString = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeString(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedString", jspb.BinaryWriter.prototype.writeRepeatedString);
    jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeBytes(a2, b2[c2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBytes", jspb.BinaryWriter.prototype.writeRepeatedBytes);
    jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a2, b2, c2) {
      if (null != b2)
        for (var d2 = 0; d2 < b2.length; d2++) {
          var e2 = this.beginDelimited_(a2);
          c2(b2[d2], this);
          this.endDelimited_(e2);
        }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedMessage", jspb.BinaryWriter.prototype.writeRepeatedMessage);
    jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a2, b2, c2) {
      if (null != b2)
        for (var d2 = 0; d2 < b2.length; d2++)
          this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2[d2], this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedGroup", jspb.BinaryWriter.prototype.writeRepeatedGroup);
    jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeFixedHash64(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a2, b2) {
      if (null != b2)
        for (var c2 = 0; c2 < b2.length; c2++)
          this.writeVarintHash64(a2, b2[c2]);
    };
    jspb.BinaryWriter.prototype.writePackedInt32 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeSignedVarint32(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt32", jspb.BinaryWriter.prototype.writePackedInt32);
    jspb.BinaryWriter.prototype.writePackedInt32String = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeSignedVarint32(parseInt(b2[c2], 10));
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedInt64 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeSignedVarint64(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt64", jspb.BinaryWriter.prototype.writePackedInt64);
    jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a2, b2, c2, d2) {
      if (null != b2) {
        a2 = this.beginDelimited_(a2);
        for (var e2 = 0; e2 < b2.length; e2++)
          this.encoder_.writeSplitFixed64(c2(b2[e2]), d2(b2[e2]));
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a2, b2, c2, d2) {
      if (null != b2) {
        a2 = this.beginDelimited_(a2);
        for (var e2 = 0; e2 < b2.length; e2++)
          this.encoder_.writeSplitVarint64(c2(b2[e2]), d2(b2[e2]));
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
      if (null != b2) {
        a2 = this.beginDelimited_(a2);
        for (var e2 = this.encoder_, f2 = 0; f2 < b2.length; f2++)
          jspb.utils.toZigzag64(c2(b2[f2]), d2(b2[f2]), function(a3, b3) {
            e2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
          });
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedInt64String = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = jspb.arith.Int64.fromString(b2[c2]);
          this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
        }
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedUint32 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeUnsignedVarint32(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint32", jspb.BinaryWriter.prototype.writePackedUint32);
    jspb.BinaryWriter.prototype.writePackedUint32String = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeUnsignedVarint32(parseInt(b2[c2], 10));
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedUint64 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeUnsignedVarint64(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint64", jspb.BinaryWriter.prototype.writePackedUint64);
    jspb.BinaryWriter.prototype.writePackedUint64String = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = jspb.arith.UInt64.fromString(b2[c2]);
          this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
        }
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSint32 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeZigzagVarint32(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint32", jspb.BinaryWriter.prototype.writePackedSint32);
    jspb.BinaryWriter.prototype.writePackedSint64 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeZigzagVarint64(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint64", jspb.BinaryWriter.prototype.writePackedSint64);
    jspb.BinaryWriter.prototype.writePackedSint64String = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b2[c2]));
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeZigzagVarintHash64(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    jspb.BinaryWriter.prototype.writePackedFixed32 = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeUint32(b2[a2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed32", jspb.BinaryWriter.prototype.writePackedFixed32);
    jspb.BinaryWriter.prototype.writePackedFixed64 = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeUint64(b2[a2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed64", jspb.BinaryWriter.prototype.writePackedFixed64);
    jspb.BinaryWriter.prototype.writePackedFixed64String = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++) {
          var c2 = jspb.arith.UInt64.fromString(b2[a2]);
          this.encoder_.writeSplitFixed64(c2.lo, c2.hi);
        }
    };
    jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeInt32(b2[a2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed32", jspb.BinaryWriter.prototype.writePackedSfixed32);
    jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeInt64(b2[a2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed64", jspb.BinaryWriter.prototype.writePackedSfixed64);
    jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeInt64String(b2[a2]);
    };
    jspb.BinaryWriter.prototype.writePackedFloat = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeFloat(b2[a2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFloat", jspb.BinaryWriter.prototype.writePackedFloat);
    jspb.BinaryWriter.prototype.writePackedDouble = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeDouble(b2[a2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedDouble", jspb.BinaryWriter.prototype.writePackedDouble);
    jspb.BinaryWriter.prototype.writePackedBool = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeBool(b2[a2]);
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedBool", jspb.BinaryWriter.prototype.writePackedBool);
    jspb.BinaryWriter.prototype.writePackedEnum = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeEnum(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedEnum", jspb.BinaryWriter.prototype.writePackedEnum);
    jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a2, b2) {
      if (null != b2 && b2.length)
        for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
          this.encoder_.writeFixedHash64(b2[a2]);
    };
    jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a2, b2) {
      if (null != b2 && b2.length) {
        a2 = this.beginDelimited_(a2);
        for (var c2 = 0; c2 < b2.length; c2++)
          this.encoder_.writeVarintHash64(b2[c2]);
        this.endDelimited_(a2);
      }
    };
    jspb.Map = function(a2, b2) {
      this.arr_ = a2;
      this.valueCtor_ = b2;
      this.map_ = {};
      this.arrClean = true;
      0 < this.arr_.length && this.loadFromArray_();
    };
    goog.exportSymbol("jspb.Map", jspb.Map);
    jspb.Map.prototype.loadFromArray_ = function() {
      for (var a2 = 0; a2 < this.arr_.length; a2++) {
        var b2 = this.arr_[a2], c2 = b2[0];
        this.map_[c2.toString()] = new jspb.Map.Entry_(c2, b2[1]);
      }
      this.arrClean = true;
    };
    jspb.Map.prototype.toArray = function() {
      if (this.arrClean) {
        if (this.valueCtor_) {
          var a2 = this.map_, b2;
          for (b2 in a2)
            if (Object.prototype.hasOwnProperty.call(a2, b2)) {
              var c2 = a2[b2].valueWrapper;
              c2 && c2.toArray();
            }
        }
      } else {
        this.arr_.length = 0;
        a2 = this.stringKeys_();
        a2.sort();
        for (b2 = 0; b2 < a2.length; b2++) {
          var d2 = this.map_[a2[b2]];
          (c2 = d2.valueWrapper) && c2.toArray();
          this.arr_.push([d2.key, d2.value]);
        }
        this.arrClean = true;
      }
      return this.arr_;
    };
    goog.exportProperty(jspb.Map.prototype, "toArray", jspb.Map.prototype.toArray);
    jspb.Map.prototype.toObject = function(a2, b2) {
      for (var c2 = this.toArray(), d2 = [], e2 = 0; e2 < c2.length; e2++) {
        var f2 = this.map_[c2[e2][0].toString()];
        this.wrapEntry_(f2);
        var g = f2.valueWrapper;
        g ? (jspb.asserts.assert(b2), d2.push([f2.key, b2(a2, g)])) : d2.push([f2.key, f2.value]);
      }
      return d2;
    };
    goog.exportProperty(jspb.Map.prototype, "toObject", jspb.Map.prototype.toObject);
    jspb.Map.fromObject = function(a2, b2, c2) {
      b2 = new jspb.Map([], b2);
      for (var d2 = 0; d2 < a2.length; d2++) {
        var e2 = a2[d2][0], f2 = c2(a2[d2][1]);
        b2.set(e2, f2);
      }
      return b2;
    };
    goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject);
    jspb.Map.ArrayIteratorIterable_ = function(a2) {
      this.idx_ = 0;
      this.arr_ = a2;
    };
    jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
      return this.idx_ < this.arr_.length ? { done: false, value: this.arr_[this.idx_++] } : { done: true, value: void 0 };
    };
    "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
      return this;
    });
    jspb.Map.prototype.getLength = function() {
      return this.stringKeys_().length;
    };
    goog.exportProperty(jspb.Map.prototype, "getLength", jspb.Map.prototype.getLength);
    jspb.Map.prototype.clear = function() {
      this.map_ = {};
      this.arrClean = false;
    };
    goog.exportProperty(jspb.Map.prototype, "clear", jspb.Map.prototype.clear);
    jspb.Map.prototype.del = function(a2) {
      a2 = a2.toString();
      var b2 = this.map_.hasOwnProperty(a2);
      delete this.map_[a2];
      this.arrClean = false;
      return b2;
    };
    goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del);
    jspb.Map.prototype.getEntryList = function() {
      var a2 = [], b2 = this.stringKeys_();
      b2.sort();
      for (var c2 = 0; c2 < b2.length; c2++) {
        var d2 = this.map_[b2[c2]];
        a2.push([d2.key, d2.value]);
      }
      return a2;
    };
    goog.exportProperty(jspb.Map.prototype, "getEntryList", jspb.Map.prototype.getEntryList);
    jspb.Map.prototype.entries = function() {
      var a2 = [], b2 = this.stringKeys_();
      b2.sort();
      for (var c2 = 0; c2 < b2.length; c2++) {
        var d2 = this.map_[b2[c2]];
        a2.push([d2.key, this.wrapEntry_(d2)]);
      }
      return new jspb.Map.ArrayIteratorIterable_(a2);
    };
    goog.exportProperty(jspb.Map.prototype, "entries", jspb.Map.prototype.entries);
    jspb.Map.prototype.keys = function() {
      var a2 = [], b2 = this.stringKeys_();
      b2.sort();
      for (var c2 = 0; c2 < b2.length; c2++)
        a2.push(this.map_[b2[c2]].key);
      return new jspb.Map.ArrayIteratorIterable_(a2);
    };
    goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys);
    jspb.Map.prototype.values = function() {
      var a2 = [], b2 = this.stringKeys_();
      b2.sort();
      for (var c2 = 0; c2 < b2.length; c2++)
        a2.push(this.wrapEntry_(this.map_[b2[c2]]));
      return new jspb.Map.ArrayIteratorIterable_(a2);
    };
    goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values);
    jspb.Map.prototype.forEach = function(a2, b2) {
      var c2 = this.stringKeys_();
      c2.sort();
      for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = this.map_[c2[d2]];
        a2.call(b2, this.wrapEntry_(e2), e2.key, this);
      }
    };
    goog.exportProperty(jspb.Map.prototype, "forEach", jspb.Map.prototype.forEach);
    jspb.Map.prototype.set = function(a2, b2) {
      var c2 = new jspb.Map.Entry_(a2);
      this.valueCtor_ ? (c2.valueWrapper = b2, c2.value = b2.toArray()) : c2.value = b2;
      this.map_[a2.toString()] = c2;
      this.arrClean = false;
      return this;
    };
    goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set);
    jspb.Map.prototype.wrapEntry_ = function(a2) {
      return this.valueCtor_ ? (a2.valueWrapper || (a2.valueWrapper = new this.valueCtor_(a2.value)), a2.valueWrapper) : a2.value;
    };
    jspb.Map.prototype.get = function(a2) {
      if (a2 = this.map_[a2.toString()])
        return this.wrapEntry_(a2);
    };
    goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get);
    jspb.Map.prototype.has = function(a2) {
      return a2.toString() in this.map_;
    };
    goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has);
    jspb.Map.prototype.serializeBinary = function(a2, b2, c2, d2, e2) {
      var f2 = this.stringKeys_();
      f2.sort();
      for (var g = 0; g < f2.length; g++) {
        var h = this.map_[f2[g]];
        b2.beginSubMessage(a2);
        c2.call(b2, 1, h.key);
        this.valueCtor_ ? d2.call(b2, 2, this.wrapEntry_(h), e2) : d2.call(b2, 2, h.value);
        b2.endSubMessage();
      }
    };
    goog.exportProperty(jspb.Map.prototype, "serializeBinary", jspb.Map.prototype.serializeBinary);
    jspb.Map.deserializeBinary = function(a2, b2, c2, d2, e2, f2, g) {
      for (; b2.nextField() && !b2.isEndGroup(); ) {
        var h = b2.getFieldNumber();
        1 == h ? f2 = c2.call(b2) : 2 == h && (a2.valueCtor_ ? (jspb.asserts.assert(e2), g || (g = new a2.valueCtor_()), d2.call(b2, g, e2)) : g = d2.call(b2));
      }
      jspb.asserts.assert(void 0 != f2);
      jspb.asserts.assert(void 0 != g);
      a2.set(f2, g);
    };
    goog.exportProperty(jspb.Map, "deserializeBinary", jspb.Map.deserializeBinary);
    jspb.Map.prototype.stringKeys_ = function() {
      var a2 = this.map_, b2 = [], c2;
      for (c2 in a2)
        Object.prototype.hasOwnProperty.call(a2, c2) && b2.push(c2);
      return b2;
    };
    jspb.Map.Entry_ = function(a2, b2) {
      this.key = a2;
      this.value = b2;
      this.valueWrapper = void 0;
    };
    jspb.ExtensionFieldInfo = function(a2, b2, c2, d2, e2) {
      this.fieldIndex = a2;
      this.fieldName = b2;
      this.ctor = c2;
      this.toObjectFn = d2;
      this.isRepeated = e2;
    };
    goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo);
    jspb.ExtensionFieldBinaryInfo = function(a2, b2, c2, d2, e2, f2) {
      this.fieldInfo = a2;
      this.binaryReaderFn = b2;
      this.binaryWriterFn = c2;
      this.binaryMessageSerializeFn = d2;
      this.binaryMessageDeserializeFn = e2;
      this.isPacked = f2;
    };
    goog.exportSymbol("jspb.ExtensionFieldBinaryInfo", jspb.ExtensionFieldBinaryInfo);
    jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
      return !!this.ctor;
    };
    goog.exportProperty(jspb.ExtensionFieldInfo.prototype, "isMessageType", jspb.ExtensionFieldInfo.prototype.isMessageType);
    jspb.Message = function() {
    };
    goog.exportSymbol("jspb.Message", jspb.Message);
    jspb.Message.GENERATE_TO_OBJECT = true;
    goog.exportProperty(jspb.Message, "GENERATE_TO_OBJECT", jspb.Message.GENERATE_TO_OBJECT);
    jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
    goog.exportProperty(jspb.Message, "GENERATE_FROM_OBJECT", jspb.Message.GENERATE_FROM_OBJECT);
    jspb.Message.GENERATE_TO_STRING = true;
    jspb.Message.ASSUME_LOCAL_ARRAYS = false;
    jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
    jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array;
    jspb.Message.prototype.getJsPbMessageId = function() {
      return this.messageId_;
    };
    goog.exportProperty(jspb.Message.prototype, "getJsPbMessageId", jspb.Message.prototype.getJsPbMessageId);
    jspb.Message.getIndex_ = function(a2, b2) {
      return b2 + a2.arrayIndexOffset_;
    };
    jspb.Message.hiddenES6Property_ = function() {
    };
    jspb.Message.getFieldNumber_ = function(a2, b2) {
      return b2 - a2.arrayIndexOffset_;
    };
    jspb.Message.initialize = function(a2, b2, c2, d2, e2, f2) {
      a2.wrappers_ = null;
      b2 || (b2 = c2 ? [c2] : []);
      a2.messageId_ = c2 ? String(c2) : void 0;
      a2.arrayIndexOffset_ = 0 === c2 ? -1 : 0;
      a2.array = b2;
      jspb.Message.initPivotAndExtensionObject_(a2, d2);
      a2.convertedPrimitiveFields_ = {};
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a2.repeatedFields = e2);
      if (e2)
        for (b2 = 0; b2 < e2.length; b2++)
          c2 = e2[b2], c2 < a2.pivot_ ? (c2 = jspb.Message.getIndex_(a2, c2), a2.array[c2] = a2.array[c2] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[c2] = a2.extensionObject_[c2] || jspb.Message.EMPTY_LIST_SENTINEL_);
      if (f2 && f2.length)
        for (b2 = 0; b2 < f2.length; b2++)
          jspb.Message.computeOneofCase(a2, f2[b2]);
    };
    goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize);
    jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
    jspb.Message.isArray_ = function(a2) {
      return jspb.Message.ASSUME_LOCAL_ARRAYS ? a2 instanceof Array : Array.isArray(a2);
    };
    jspb.Message.isExtensionObject_ = function(a2) {
      return null !== a2 && "object" == typeof a2 && !jspb.Message.isArray_(a2) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array);
    };
    jspb.Message.initPivotAndExtensionObject_ = function(a2, b2) {
      var c2 = a2.array.length, d2 = -1;
      if (c2 && (d2 = c2 - 1, c2 = a2.array[d2], jspb.Message.isExtensionObject_(c2))) {
        a2.pivot_ = jspb.Message.getFieldNumber_(a2, d2);
        a2.extensionObject_ = c2;
        return;
      }
      -1 < b2 ? (a2.pivot_ = Math.max(b2, jspb.Message.getFieldNumber_(a2, d2 + 1)), a2.extensionObject_ = null) : a2.pivot_ = Number.MAX_VALUE;
    };
    jspb.Message.maybeInitEmptyExtensionObject_ = function(a2) {
      var b2 = jspb.Message.getIndex_(a2, a2.pivot_);
      a2.array[b2] || (a2.extensionObject_ = a2.array[b2] = {});
    };
    jspb.Message.toObjectList = function(a2, b2, c2) {
      for (var d2 = [], e2 = 0; e2 < a2.length; e2++)
        d2[e2] = b2.call(a2[e2], c2, a2[e2]);
      return d2;
    };
    goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList);
    jspb.Message.toObjectExtension = function(a2, b2, c2, d2, e2) {
      for (var f2 in c2) {
        var g = c2[f2], h = d2.call(a2, g);
        if (null != h) {
          for (var k in g.fieldName)
            if (g.fieldName.hasOwnProperty(k))
              break;
          b2[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e2) : g.toObjectFn(e2, h) : h;
        }
      }
    };
    goog.exportProperty(jspb.Message, "toObjectExtension", jspb.Message.toObjectExtension);
    jspb.Message.serializeBinaryExtensions = function(a2, b2, c2, d2) {
      for (var e2 in c2) {
        var f2 = c2[e2], g = f2.fieldInfo;
        if (!f2.binaryWriterFn)
          throw Error("Message extension present that was generated without binary serialization support");
        var h = d2.call(a2, g);
        if (null != h)
          if (g.isMessageType())
            if (f2.binaryMessageSerializeFn)
              f2.binaryWriterFn.call(b2, g.fieldIndex, h, f2.binaryMessageSerializeFn);
            else
              throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
          else
            f2.binaryWriterFn.call(b2, g.fieldIndex, h);
      }
    };
    goog.exportProperty(jspb.Message, "serializeBinaryExtensions", jspb.Message.serializeBinaryExtensions);
    jspb.Message.readBinaryExtension = function(a2, b2, c2, d2, e2) {
      var f2 = c2[b2.getFieldNumber()];
      if (f2) {
        c2 = f2.fieldInfo;
        if (!f2.binaryReaderFn)
          throw Error("Deserializing extension whose generated code does not support binary format");
        if (c2.isMessageType()) {
          var g = new c2.ctor();
          f2.binaryReaderFn.call(b2, g, f2.binaryMessageDeserializeFn);
        } else
          g = f2.binaryReaderFn.call(b2);
        c2.isRepeated && !f2.isPacked ? (b2 = d2.call(a2, c2)) ? b2.push(g) : e2.call(a2, c2, [g]) : e2.call(a2, c2, g);
      } else
        b2.skipField();
    };
    goog.exportProperty(jspb.Message, "readBinaryExtension", jspb.Message.readBinaryExtension);
    jspb.Message.getField = function(a2, b2) {
      if (b2 < a2.pivot_) {
        b2 = jspb.Message.getIndex_(a2, b2);
        var c2 = a2.array[b2];
        return c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.array[b2] = [] : c2;
      }
      if (a2.extensionObject_)
        return c2 = a2.extensionObject_[b2], c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.extensionObject_[b2] = [] : c2;
    };
    goog.exportProperty(jspb.Message, "getField", jspb.Message.getField);
    jspb.Message.getRepeatedField = function(a2, b2) {
      return jspb.Message.getField(a2, b2);
    };
    goog.exportProperty(jspb.Message, "getRepeatedField", jspb.Message.getRepeatedField);
    jspb.Message.getOptionalFloatingPointField = function(a2, b2) {
      a2 = jspb.Message.getField(a2, b2);
      return null == a2 ? a2 : +a2;
    };
    goog.exportProperty(jspb.Message, "getOptionalFloatingPointField", jspb.Message.getOptionalFloatingPointField);
    jspb.Message.getBooleanField = function(a2, b2) {
      a2 = jspb.Message.getField(a2, b2);
      return null == a2 ? a2 : !!a2;
    };
    goog.exportProperty(jspb.Message, "getBooleanField", jspb.Message.getBooleanField);
    jspb.Message.getRepeatedFloatingPointField = function(a2, b2) {
      var c2 = jspb.Message.getRepeatedField(a2, b2);
      a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
      if (!a2.convertedPrimitiveFields_[b2]) {
        for (var d2 = 0; d2 < c2.length; d2++)
          c2[d2] = +c2[d2];
        a2.convertedPrimitiveFields_[b2] = true;
      }
      return c2;
    };
    goog.exportProperty(jspb.Message, "getRepeatedFloatingPointField", jspb.Message.getRepeatedFloatingPointField);
    jspb.Message.getRepeatedBooleanField = function(a2, b2) {
      var c2 = jspb.Message.getRepeatedField(a2, b2);
      a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
      if (!a2.convertedPrimitiveFields_[b2]) {
        for (var d2 = 0; d2 < c2.length; d2++)
          c2[d2] = !!c2[d2];
        a2.convertedPrimitiveFields_[b2] = true;
      }
      return c2;
    };
    goog.exportProperty(jspb.Message, "getRepeatedBooleanField", jspb.Message.getRepeatedBooleanField);
    jspb.Message.bytesAsB64 = function(a2) {
      if (null == a2 || "string" === typeof a2)
        return a2;
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
        return goog.crypt.base64.encodeByteArray(a2);
      jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a2));
      return null;
    };
    goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64);
    jspb.Message.bytesAsU8 = function(a2) {
      if (null == a2 || a2 instanceof Uint8Array)
        return a2;
      if ("string" === typeof a2)
        return goog.crypt.base64.decodeStringToUint8Array(a2);
      jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a2));
      return null;
    };
    goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8);
    jspb.Message.bytesListAsB64 = function(a2) {
      jspb.Message.assertConsistentTypes_(a2);
      return a2.length && "string" !== typeof a2[0] ? goog.array.map(a2, jspb.Message.bytesAsB64) : a2;
    };
    goog.exportProperty(jspb.Message, "bytesListAsB64", jspb.Message.bytesListAsB64);
    jspb.Message.bytesListAsU8 = function(a2) {
      jspb.Message.assertConsistentTypes_(a2);
      return !a2.length || a2[0] instanceof Uint8Array ? a2 : goog.array.map(a2, jspb.Message.bytesAsU8);
    };
    goog.exportProperty(jspb.Message, "bytesListAsU8", jspb.Message.bytesListAsU8);
    jspb.Message.assertConsistentTypes_ = function(a2) {
      if (goog.DEBUG && a2 && 1 < a2.length) {
        var b2 = goog.typeOf(a2[0]);
        goog.array.forEach(a2, function(a3) {
          goog.typeOf(a3) != b2 && jspb.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a3) + " expected " + b2);
        });
      }
    };
    jspb.Message.getFieldWithDefault = function(a2, b2, c2) {
      a2 = jspb.Message.getField(a2, b2);
      return null == a2 ? c2 : a2;
    };
    goog.exportProperty(jspb.Message, "getFieldWithDefault", jspb.Message.getFieldWithDefault);
    jspb.Message.getBooleanFieldWithDefault = function(a2, b2, c2) {
      a2 = jspb.Message.getBooleanField(a2, b2);
      return null == a2 ? c2 : a2;
    };
    goog.exportProperty(jspb.Message, "getBooleanFieldWithDefault", jspb.Message.getBooleanFieldWithDefault);
    jspb.Message.getFloatingPointFieldWithDefault = function(a2, b2, c2) {
      a2 = jspb.Message.getOptionalFloatingPointField(a2, b2);
      return null == a2 ? c2 : a2;
    };
    goog.exportProperty(jspb.Message, "getFloatingPointFieldWithDefault", jspb.Message.getFloatingPointFieldWithDefault);
    jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
    goog.exportProperty(jspb.Message, "getFieldProto3", jspb.Message.getFieldProto3);
    jspb.Message.getMapField = function(a2, b2, c2, d2) {
      a2.wrappers_ || (a2.wrappers_ = {});
      if (b2 in a2.wrappers_)
        return a2.wrappers_[b2];
      var e2 = jspb.Message.getField(a2, b2);
      if (!e2) {
        if (c2)
          return;
        e2 = [];
        jspb.Message.setField(a2, b2, e2);
      }
      return a2.wrappers_[b2] = new jspb.Map(e2, d2);
    };
    goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField);
    jspb.Message.setField = function(a2, b2, c2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = c2 : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[b2] = c2);
      return a2;
    };
    goog.exportProperty(jspb.Message, "setField", jspb.Message.setField);
    jspb.Message.setProto3IntField = function(a2, b2, c2) {
      return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
    };
    goog.exportProperty(jspb.Message, "setProto3IntField", jspb.Message.setProto3IntField);
    jspb.Message.setProto3FloatField = function(a2, b2, c2) {
      return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
    };
    goog.exportProperty(jspb.Message, "setProto3FloatField", jspb.Message.setProto3FloatField);
    jspb.Message.setProto3BooleanField = function(a2, b2, c2) {
      return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, false);
    };
    goog.exportProperty(jspb.Message, "setProto3BooleanField", jspb.Message.setProto3BooleanField);
    jspb.Message.setProto3StringField = function(a2, b2, c2) {
      return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
    };
    goog.exportProperty(jspb.Message, "setProto3StringField", jspb.Message.setProto3StringField);
    jspb.Message.setProto3BytesField = function(a2, b2, c2) {
      return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
    };
    goog.exportProperty(jspb.Message, "setProto3BytesField", jspb.Message.setProto3BytesField);
    jspb.Message.setProto3EnumField = function(a2, b2, c2) {
      return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
    };
    goog.exportProperty(jspb.Message, "setProto3EnumField", jspb.Message.setProto3EnumField);
    jspb.Message.setProto3StringIntField = function(a2, b2, c2) {
      return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "0");
    };
    goog.exportProperty(jspb.Message, "setProto3StringIntField", jspb.Message.setProto3StringIntField);
    jspb.Message.setFieldIgnoringDefault_ = function(a2, b2, c2, d2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      c2 !== d2 ? jspb.Message.setField(a2, b2, c2) : b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a2), delete a2.extensionObject_[b2]);
      return a2;
    };
    jspb.Message.addToRepeatedField = function(a2, b2, c2, d2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      b2 = jspb.Message.getRepeatedField(a2, b2);
      void 0 != d2 ? b2.splice(d2, 0, c2) : b2.push(c2);
      return a2;
    };
    goog.exportProperty(jspb.Message, "addToRepeatedField", jspb.Message.addToRepeatedField);
    jspb.Message.setOneofField = function(a2, b2, c2, d2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      (c2 = jspb.Message.computeOneofCase(a2, c2)) && c2 !== b2 && void 0 !== d2 && (a2.wrappers_ && c2 in a2.wrappers_ && (a2.wrappers_[c2] = void 0), jspb.Message.setField(a2, c2, void 0));
      return jspb.Message.setField(a2, b2, d2);
    };
    goog.exportProperty(jspb.Message, "setOneofField", jspb.Message.setOneofField);
    jspb.Message.computeOneofCase = function(a2, b2) {
      for (var c2, d2, e2 = 0; e2 < b2.length; e2++) {
        var f2 = b2[e2], g = jspb.Message.getField(a2, f2);
        null != g && (c2 = f2, d2 = g, jspb.Message.setField(a2, f2, void 0));
      }
      return c2 ? (jspb.Message.setField(a2, c2, d2), c2) : 0;
    };
    goog.exportProperty(jspb.Message, "computeOneofCase", jspb.Message.computeOneofCase);
    jspb.Message.getWrapperField = function(a2, b2, c2, d2) {
      a2.wrappers_ || (a2.wrappers_ = {});
      if (!a2.wrappers_[c2]) {
        var e2 = jspb.Message.getField(a2, c2);
        if (d2 || e2)
          a2.wrappers_[c2] = new b2(e2);
      }
      return a2.wrappers_[c2];
    };
    goog.exportProperty(jspb.Message, "getWrapperField", jspb.Message.getWrapperField);
    jspb.Message.getRepeatedWrapperField = function(a2, b2, c2) {
      jspb.Message.wrapRepeatedField_(a2, b2, c2);
      b2 = a2.wrappers_[c2];
      b2 == jspb.Message.EMPTY_LIST_SENTINEL_ && (b2 = a2.wrappers_[c2] = []);
      return b2;
    };
    goog.exportProperty(jspb.Message, "getRepeatedWrapperField", jspb.Message.getRepeatedWrapperField);
    jspb.Message.wrapRepeatedField_ = function(a2, b2, c2) {
      a2.wrappers_ || (a2.wrappers_ = {});
      if (!a2.wrappers_[c2]) {
        for (var d2 = jspb.Message.getRepeatedField(a2, c2), e2 = [], f2 = 0; f2 < d2.length; f2++)
          e2[f2] = new b2(d2[f2]);
        a2.wrappers_[c2] = e2;
      }
    };
    jspb.Message.setWrapperField = function(a2, b2, c2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      a2.wrappers_ || (a2.wrappers_ = {});
      var d2 = c2 ? c2.toArray() : c2;
      a2.wrappers_[b2] = c2;
      return jspb.Message.setField(a2, b2, d2);
    };
    goog.exportProperty(jspb.Message, "setWrapperField", jspb.Message.setWrapperField);
    jspb.Message.setOneofWrapperField = function(a2, b2, c2, d2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      a2.wrappers_ || (a2.wrappers_ = {});
      var e2 = d2 ? d2.toArray() : d2;
      a2.wrappers_[b2] = d2;
      return jspb.Message.setOneofField(a2, b2, c2, e2);
    };
    goog.exportProperty(jspb.Message, "setOneofWrapperField", jspb.Message.setOneofWrapperField);
    jspb.Message.setRepeatedWrapperField = function(a2, b2, c2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      a2.wrappers_ || (a2.wrappers_ = {});
      c2 = c2 || [];
      for (var d2 = [], e2 = 0; e2 < c2.length; e2++)
        d2[e2] = c2[e2].toArray();
      a2.wrappers_[b2] = c2;
      return jspb.Message.setField(a2, b2, d2);
    };
    goog.exportProperty(jspb.Message, "setRepeatedWrapperField", jspb.Message.setRepeatedWrapperField);
    jspb.Message.addToRepeatedWrapperField = function(a2, b2, c2, d2, e2) {
      jspb.Message.wrapRepeatedField_(a2, d2, b2);
      var f2 = a2.wrappers_[b2];
      f2 || (f2 = a2.wrappers_[b2] = []);
      c2 = c2 ? c2 : new d2();
      a2 = jspb.Message.getRepeatedField(a2, b2);
      void 0 != e2 ? (f2.splice(e2, 0, c2), a2.splice(e2, 0, c2.toArray())) : (f2.push(c2), a2.push(c2.toArray()));
      return c2;
    };
    goog.exportProperty(jspb.Message, "addToRepeatedWrapperField", jspb.Message.addToRepeatedWrapperField);
    jspb.Message.toMap = function(a2, b2, c2, d2) {
      for (var e2 = {}, f2 = 0; f2 < a2.length; f2++)
        e2[b2.call(a2[f2])] = c2 ? c2.call(a2[f2], d2, a2[f2]) : a2[f2];
      return e2;
    };
    goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap);
    jspb.Message.prototype.syncMapFields_ = function() {
      if (this.wrappers_)
        for (var a2 in this.wrappers_) {
          var b2 = this.wrappers_[a2];
          if (Array.isArray(b2))
            for (var c2 = 0; c2 < b2.length; c2++)
              b2[c2] && b2[c2].toArray();
          else
            b2 && b2.toArray();
        }
    };
    jspb.Message.prototype.toArray = function() {
      this.syncMapFields_();
      return this.array;
    };
    goog.exportProperty(jspb.Message.prototype, "toArray", jspb.Message.prototype.toArray);
    jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
      this.syncMapFields_();
      return this.array.toString();
    });
    jspb.Message.prototype.getExtension = function(a2) {
      if (this.extensionObject_) {
        this.wrappers_ || (this.wrappers_ = {});
        var b2 = a2.fieldIndex;
        if (a2.isRepeated) {
          if (a2.isMessageType())
            return this.wrappers_[b2] || (this.wrappers_[b2] = goog.array.map(this.extensionObject_[b2] || [], function(b3) {
              return new a2.ctor(b3);
            })), this.wrappers_[b2];
        } else if (a2.isMessageType())
          return !this.wrappers_[b2] && this.extensionObject_[b2] && (this.wrappers_[b2] = new a2.ctor(this.extensionObject_[b2])), this.wrappers_[b2];
        return this.extensionObject_[b2];
      }
    };
    goog.exportProperty(jspb.Message.prototype, "getExtension", jspb.Message.prototype.getExtension);
    jspb.Message.prototype.setExtension = function(a2, b2) {
      this.wrappers_ || (this.wrappers_ = {});
      jspb.Message.maybeInitEmptyExtensionObject_(this);
      var c2 = a2.fieldIndex;
      a2.isRepeated ? (b2 = b2 || [], a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = goog.array.map(b2, function(a3) {
        return a3.toArray();
      })) : this.extensionObject_[c2] = b2) : a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = b2 ? b2.toArray() : b2) : this.extensionObject_[c2] = b2;
      return this;
    };
    goog.exportProperty(jspb.Message.prototype, "setExtension", jspb.Message.prototype.setExtension);
    jspb.Message.difference = function(a2, b2) {
      if (!(a2 instanceof b2.constructor))
        throw Error("Messages have different types.");
      var c2 = a2.toArray();
      b2 = b2.toArray();
      var d2 = [], e2 = 0, f2 = c2.length > b2.length ? c2.length : b2.length;
      a2.getJsPbMessageId() && (d2[0] = a2.getJsPbMessageId(), e2 = 1);
      for (; e2 < f2; e2++)
        jspb.Message.compareFields(c2[e2], b2[e2]) || (d2[e2] = b2[e2]);
      return new a2.constructor(d2);
    };
    goog.exportProperty(jspb.Message, "difference", jspb.Message.difference);
    jspb.Message.equals = function(a2, b2) {
      return a2 == b2 || !(!a2 || !b2) && a2 instanceof b2.constructor && jspb.Message.compareFields(a2.toArray(), b2.toArray());
    };
    goog.exportProperty(jspb.Message, "equals", jspb.Message.equals);
    jspb.Message.compareExtensions = function(a2, b2) {
      a2 = a2 || {};
      b2 = b2 || {};
      var c2 = {}, d2;
      for (d2 in a2)
        c2[d2] = 0;
      for (d2 in b2)
        c2[d2] = 0;
      for (d2 in c2)
        if (!jspb.Message.compareFields(a2[d2], b2[d2]))
          return false;
      return true;
    };
    goog.exportProperty(jspb.Message, "compareExtensions", jspb.Message.compareExtensions);
    jspb.Message.compareFields = function(a2, b2) {
      if (a2 == b2)
        return true;
      if (!goog.isObject(a2) || !goog.isObject(b2))
        return "number" === typeof a2 && isNaN(a2) || "number" === typeof b2 && isNaN(b2) ? String(a2) == String(b2) : false;
      if (a2.constructor != b2.constructor)
        return false;
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2.constructor === Uint8Array) {
        if (a2.length != b2.length)
          return false;
        for (var c2 = 0; c2 < a2.length; c2++)
          if (a2[c2] != b2[c2])
            return false;
        return true;
      }
      if (a2.constructor === Array) {
        var d2 = void 0, e2 = void 0, f2 = Math.max(a2.length, b2.length);
        for (c2 = 0; c2 < f2; c2++) {
          var g = a2[c2], h = b2[c2];
          g && g.constructor == Object && (jspb.asserts.assert(void 0 === d2), jspb.asserts.assert(c2 === a2.length - 1), d2 = g, g = void 0);
          h && h.constructor == Object && (jspb.asserts.assert(void 0 === e2), jspb.asserts.assert(c2 === b2.length - 1), e2 = h, h = void 0);
          if (!jspb.Message.compareFields(g, h))
            return false;
        }
        return d2 || e2 ? (d2 = d2 || {}, e2 = e2 || {}, jspb.Message.compareExtensions(d2, e2)) : true;
      }
      if (a2.constructor === Object)
        return jspb.Message.compareExtensions(a2, b2);
      throw Error("Invalid type in JSPB array");
    };
    goog.exportProperty(jspb.Message, "compareFields", jspb.Message.compareFields);
    jspb.Message.prototype.cloneMessage = function() {
      return jspb.Message.cloneMessage(this);
    };
    goog.exportProperty(jspb.Message.prototype, "cloneMessage", jspb.Message.prototype.cloneMessage);
    jspb.Message.prototype.clone = function() {
      return jspb.Message.cloneMessage(this);
    };
    goog.exportProperty(jspb.Message.prototype, "clone", jspb.Message.prototype.clone);
    jspb.Message.clone = function(a2) {
      return jspb.Message.cloneMessage(a2);
    };
    goog.exportProperty(jspb.Message, "clone", jspb.Message.clone);
    jspb.Message.cloneMessage = function(a2) {
      return new a2.constructor(jspb.Message.clone_(a2.toArray()));
    };
    jspb.Message.copyInto = function(a2, b2) {
      jspb.asserts.assertInstanceof(a2, jspb.Message);
      jspb.asserts.assertInstanceof(b2, jspb.Message);
      jspb.asserts.assert(a2.constructor == b2.constructor, "Copy source and target message should have the same type.");
      a2 = jspb.Message.clone(a2);
      for (var c2 = b2.toArray(), d2 = a2.toArray(), e2 = c2.length = 0; e2 < d2.length; e2++)
        c2[e2] = d2[e2];
      b2.wrappers_ = a2.wrappers_;
      b2.extensionObject_ = a2.extensionObject_;
    };
    goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto);
    jspb.Message.clone_ = function(a2) {
      if (Array.isArray(a2)) {
        for (var b2 = Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2[c2];
          null != d2 && (b2[c2] = "object" == typeof d2 ? jspb.Message.clone_(jspb.asserts.assert(d2)) : d2);
        }
        return b2;
      }
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
        return new Uint8Array(a2);
      b2 = {};
      for (c2 in a2)
        d2 = a2[c2], null != d2 && (b2[c2] = "object" == typeof d2 ? jspb.Message.clone_(jspb.asserts.assert(d2)) : d2);
      return b2;
    };
    jspb.Message.registerMessageType = function(a2, b2) {
      b2.messageId = a2;
    };
    goog.exportProperty(jspb.Message, "registerMessageType", jspb.Message.registerMessageType);
    jspb.Message.messageSetExtensions = {};
    jspb.Message.messageSetExtensionsBinary = {};
    jspb.Export = {};
    "object" === typeof exports && (exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = { extend: goog.object.extend }, exports.typeOf = goog.typeOf);
  }
});

// Proto/service/service_pb.js
var require_service_pb = __commonJS({
  "Proto/service/service_pb.js"(exports2) {
    "use strict";
    var jspb2 = require_google_protobuf();
    var goog2 = jspb2;
    var global2 = Function("return this")();
    goog2.exportSymbol("proto.service.ActionConfig", null, global2);
    goog2.exportSymbol("proto.service.ActionConfig.Character", null, global2);
    goog2.exportSymbol("proto.service.ActionConfig.Object", null, global2);
    goog2.exportSymbol("proto.service.AudioConfig", null, global2);
    goog2.exportSymbol("proto.service.BlendShapesData", null, global2);
    goog2.exportSymbol("proto.service.FaceModel", null, global2);
    goog2.exportSymbol("proto.service.GetResponseRequest", null, global2);
    goog2.exportSymbol("proto.service.GetResponseRequest.GetResponseConfig", null, global2);
    goog2.exportSymbol("proto.service.GetResponseRequest.GetResponseData", null, global2);
    goog2.exportSymbol("proto.service.GetResponseRequestSingle", null, global2);
    goog2.exportSymbol("proto.service.GetResponseResponse", null, global2);
    goog2.exportSymbol("proto.service.GetResponseResponse.ActionResponse", null, global2);
    goog2.exportSymbol("proto.service.GetResponseResponse.AudioResponse", null, global2);
    goog2.exportSymbol("proto.service.GetResponseResponse.BehaviorTreeResponse", null, global2);
    goog2.exportSymbol("proto.service.GetResponseResponse.UserTranscript", null, global2);
    goog2.exportSymbol("proto.service.HelloRequest", null, global2);
    goog2.exportSymbol("proto.service.HelloResponse", null, global2);
    goog2.exportSymbol("proto.service.STTRequest", null, global2);
    goog2.exportSymbol("proto.service.STTResponse", null, global2);
    goog2.exportSymbol("proto.service.TriggerConfig", null, global2);
    goog2.exportSymbol("proto.service.Viseme", null, global2);
    goog2.exportSymbol("proto.service.VisemesData", null, global2);
    proto.service.AudioConfig = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.AudioConfig, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.AudioConfig.displayName = "proto.service.AudioConfig";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.AudioConfig.prototype.toObject = function(opt_includeInstance) {
        return proto.service.AudioConfig.toObject(opt_includeInstance, this);
      };
      proto.service.AudioConfig.toObject = function(includeInstance, msg) {
        var f2, obj = {
          sampleRateHertz: jspb2.Message.getFieldWithDefault(msg, 1, 0),
          disableAudio: jspb2.Message.getFieldWithDefault(msg, 2, false),
          enableFacialData: jspb2.Message.getFieldWithDefault(msg, 3, false),
          faceModel: jspb2.Message.getFieldWithDefault(msg, 4, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.AudioConfig.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.AudioConfig();
      return proto.service.AudioConfig.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.AudioConfig.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setSampleRateHertz(value);
            break;
          case 2:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setDisableAudio(value);
            break;
          case 3:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setEnableFacialData(value);
            break;
          case 4:
            var value = (
              /** @type {!proto.service.FaceModel} */
              reader.readEnum()
            );
            msg.setFaceModel(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.AudioConfig.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.AudioConfig.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.AudioConfig.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getSampleRateHertz();
      if (f2 !== 0) {
        writer.writeInt32(
          1,
          f2
        );
      }
      f2 = message.getDisableAudio();
      if (f2) {
        writer.writeBool(
          2,
          f2
        );
      }
      f2 = message.getEnableFacialData();
      if (f2) {
        writer.writeBool(
          3,
          f2
        );
      }
      f2 = message.getFaceModel();
      if (f2 !== 0) {
        writer.writeEnum(
          4,
          f2
        );
      }
    };
    proto.service.AudioConfig.prototype.getSampleRateHertz = function() {
      return (
        /** @type {number} */
        jspb2.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.service.AudioConfig.prototype.setSampleRateHertz = function(value) {
      jspb2.Message.setProto3IntField(this, 1, value);
    };
    proto.service.AudioConfig.prototype.getDisableAudio = function() {
      return (
        /** @type {boolean} */
        jspb2.Message.getFieldWithDefault(this, 2, false)
      );
    };
    proto.service.AudioConfig.prototype.setDisableAudio = function(value) {
      jspb2.Message.setProto3BooleanField(this, 2, value);
    };
    proto.service.AudioConfig.prototype.getEnableFacialData = function() {
      return (
        /** @type {boolean} */
        jspb2.Message.getFieldWithDefault(this, 3, false)
      );
    };
    proto.service.AudioConfig.prototype.setEnableFacialData = function(value) {
      jspb2.Message.setProto3BooleanField(this, 3, value);
    };
    proto.service.AudioConfig.prototype.getFaceModel = function() {
      return (
        /** @type {!proto.service.FaceModel} */
        jspb2.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.service.AudioConfig.prototype.setFaceModel = function(value) {
      jspb2.Message.setProto3EnumField(this, 4, value);
    };
    proto.service.TriggerConfig = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.TriggerConfig, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.TriggerConfig.displayName = "proto.service.TriggerConfig";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.TriggerConfig.prototype.toObject = function(opt_includeInstance) {
        return proto.service.TriggerConfig.toObject(opt_includeInstance, this);
      };
      proto.service.TriggerConfig.toObject = function(includeInstance, msg) {
        var f2, obj = {
          triggerName: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          triggerMessage: jspb2.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.TriggerConfig.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.TriggerConfig();
      return proto.service.TriggerConfig.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.TriggerConfig.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTriggerName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTriggerMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.TriggerConfig.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.TriggerConfig.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.TriggerConfig.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getTriggerName();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
      f2 = message.getTriggerMessage();
      if (f2.length > 0) {
        writer.writeString(
          2,
          f2
        );
      }
    };
    proto.service.TriggerConfig.prototype.getTriggerName = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.TriggerConfig.prototype.setTriggerName = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.TriggerConfig.prototype.getTriggerMessage = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.service.TriggerConfig.prototype.setTriggerMessage = function(value) {
      jspb2.Message.setProto3StringField(this, 2, value);
    };
    proto.service.ActionConfig = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, proto.service.ActionConfig.repeatedFields_, null);
    };
    goog2.inherits(proto.service.ActionConfig, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.ActionConfig.displayName = "proto.service.ActionConfig";
    }
    proto.service.ActionConfig.repeatedFields_ = [1, 2, 3];
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.ActionConfig.prototype.toObject = function(opt_includeInstance) {
        return proto.service.ActionConfig.toObject(opt_includeInstance, this);
      };
      proto.service.ActionConfig.toObject = function(includeInstance, msg) {
        var f2, obj = {
          actionsList: jspb2.Message.getRepeatedField(msg, 1),
          charactersList: jspb2.Message.toObjectList(
            msg.getCharactersList(),
            proto.service.ActionConfig.Character.toObject,
            includeInstance
          ),
          objectsList: jspb2.Message.toObjectList(
            msg.getObjectsList(),
            proto.service.ActionConfig.Object.toObject,
            includeInstance
          ),
          classification: jspb2.Message.getFieldWithDefault(msg, 4, ""),
          contextLevel: jspb2.Message.getFieldWithDefault(msg, 5, 0),
          currentAttentionObject: jspb2.Message.getFieldWithDefault(msg, 6, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.ActionConfig.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.ActionConfig();
      return proto.service.ActionConfig.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.ActionConfig.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.addActions(value);
            break;
          case 2:
            var value = new proto.service.ActionConfig.Character();
            reader.readMessage(value, proto.service.ActionConfig.Character.deserializeBinaryFromReader);
            msg.addCharacters(value);
            break;
          case 3:
            var value = new proto.service.ActionConfig.Object();
            reader.readMessage(value, proto.service.ActionConfig.Object.deserializeBinaryFromReader);
            msg.addObjects(value);
            break;
          case 4:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setClassification(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readInt32()
            );
            msg.setContextLevel(value);
            break;
          case 6:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setCurrentAttentionObject(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.ActionConfig.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.ActionConfig.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.ActionConfig.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getActionsList();
      if (f2.length > 0) {
        writer.writeRepeatedString(
          1,
          f2
        );
      }
      f2 = message.getCharactersList();
      if (f2.length > 0) {
        writer.writeRepeatedMessage(
          2,
          f2,
          proto.service.ActionConfig.Character.serializeBinaryToWriter
        );
      }
      f2 = message.getObjectsList();
      if (f2.length > 0) {
        writer.writeRepeatedMessage(
          3,
          f2,
          proto.service.ActionConfig.Object.serializeBinaryToWriter
        );
      }
      f2 = message.getClassification();
      if (f2.length > 0) {
        writer.writeString(
          4,
          f2
        );
      }
      f2 = message.getContextLevel();
      if (f2 !== 0) {
        writer.writeInt32(
          5,
          f2
        );
      }
      f2 = message.getCurrentAttentionObject();
      if (f2.length > 0) {
        writer.writeString(
          6,
          f2
        );
      }
    };
    proto.service.ActionConfig.Character = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.ActionConfig.Character, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.ActionConfig.Character.displayName = "proto.service.ActionConfig.Character";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.ActionConfig.Character.prototype.toObject = function(opt_includeInstance) {
        return proto.service.ActionConfig.Character.toObject(opt_includeInstance, this);
      };
      proto.service.ActionConfig.Character.toObject = function(includeInstance, msg) {
        var f2, obj = {
          name: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          bio: jspb2.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.ActionConfig.Character.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.ActionConfig.Character();
      return proto.service.ActionConfig.Character.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.ActionConfig.Character.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBio(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.ActionConfig.Character.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.ActionConfig.Character.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.ActionConfig.Character.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getName();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
      f2 = message.getBio();
      if (f2.length > 0) {
        writer.writeString(
          2,
          f2
        );
      }
    };
    proto.service.ActionConfig.Character.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.ActionConfig.Character.prototype.setName = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.ActionConfig.Character.prototype.getBio = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.service.ActionConfig.Character.prototype.setBio = function(value) {
      jspb2.Message.setProto3StringField(this, 2, value);
    };
    proto.service.ActionConfig.Object = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.ActionConfig.Object, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.ActionConfig.Object.displayName = "proto.service.ActionConfig.Object";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.ActionConfig.Object.prototype.toObject = function(opt_includeInstance) {
        return proto.service.ActionConfig.Object.toObject(opt_includeInstance, this);
      };
      proto.service.ActionConfig.Object.toObject = function(includeInstance, msg) {
        var f2, obj = {
          name: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          description: jspb2.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.ActionConfig.Object.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.ActionConfig.Object();
      return proto.service.ActionConfig.Object.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.ActionConfig.Object.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setName(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setDescription(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.ActionConfig.Object.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.ActionConfig.Object.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.ActionConfig.Object.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getName();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
      f2 = message.getDescription();
      if (f2.length > 0) {
        writer.writeString(
          2,
          f2
        );
      }
    };
    proto.service.ActionConfig.Object.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.ActionConfig.Object.prototype.setName = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.ActionConfig.Object.prototype.getDescription = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.service.ActionConfig.Object.prototype.setDescription = function(value) {
      jspb2.Message.setProto3StringField(this, 2, value);
    };
    proto.service.ActionConfig.prototype.getActionsList = function() {
      return (
        /** @type {!Array<string>} */
        jspb2.Message.getRepeatedField(this, 1)
      );
    };
    proto.service.ActionConfig.prototype.setActionsList = function(value) {
      jspb2.Message.setField(this, 1, value || []);
    };
    proto.service.ActionConfig.prototype.addActions = function(value, opt_index) {
      jspb2.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.service.ActionConfig.prototype.clearActionsList = function() {
      this.setActionsList([]);
    };
    proto.service.ActionConfig.prototype.getCharactersList = function() {
      return (
        /** @type{!Array<!proto.service.ActionConfig.Character>} */
        jspb2.Message.getRepeatedWrapperField(this, proto.service.ActionConfig.Character, 2)
      );
    };
    proto.service.ActionConfig.prototype.setCharactersList = function(value) {
      jspb2.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.service.ActionConfig.prototype.addCharacters = function(opt_value, opt_index) {
      return jspb2.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.service.ActionConfig.Character, opt_index);
    };
    proto.service.ActionConfig.prototype.clearCharactersList = function() {
      this.setCharactersList([]);
    };
    proto.service.ActionConfig.prototype.getObjectsList = function() {
      return (
        /** @type{!Array<!proto.service.ActionConfig.Object>} */
        jspb2.Message.getRepeatedWrapperField(this, proto.service.ActionConfig.Object, 3)
      );
    };
    proto.service.ActionConfig.prototype.setObjectsList = function(value) {
      jspb2.Message.setRepeatedWrapperField(this, 3, value);
    };
    proto.service.ActionConfig.prototype.addObjects = function(opt_value, opt_index) {
      return jspb2.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.service.ActionConfig.Object, opt_index);
    };
    proto.service.ActionConfig.prototype.clearObjectsList = function() {
      this.setObjectsList([]);
    };
    proto.service.ActionConfig.prototype.getClassification = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 4, "")
      );
    };
    proto.service.ActionConfig.prototype.setClassification = function(value) {
      jspb2.Message.setProto3StringField(this, 4, value);
    };
    proto.service.ActionConfig.prototype.getContextLevel = function() {
      return (
        /** @type {number} */
        jspb2.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.service.ActionConfig.prototype.setContextLevel = function(value) {
      jspb2.Message.setProto3IntField(this, 5, value);
    };
    proto.service.ActionConfig.prototype.getCurrentAttentionObject = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 6, "")
      );
    };
    proto.service.ActionConfig.prototype.setCurrentAttentionObject = function(value) {
      jspb2.Message.setProto3StringField(this, 6, value);
    };
    proto.service.STTRequest = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, proto.service.STTRequest.oneofGroups_);
    };
    goog2.inherits(proto.service.STTRequest, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.STTRequest.displayName = "proto.service.STTRequest";
    }
    proto.service.STTRequest.oneofGroups_ = [[1, 2]];
    proto.service.STTRequest.RequestTypeCase = {
      REQUEST_TYPE_NOT_SET: 0,
      AUDIO_CONFIG: 1,
      AUDIO_CHUNK: 2
    };
    proto.service.STTRequest.prototype.getRequestTypeCase = function() {
      return (
        /** @type {proto.service.STTRequest.RequestTypeCase} */
        jspb2.Message.computeOneofCase(this, proto.service.STTRequest.oneofGroups_[0])
      );
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.STTRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.service.STTRequest.toObject(opt_includeInstance, this);
      };
      proto.service.STTRequest.toObject = function(includeInstance, msg) {
        var f2, obj = {
          audioConfig: (f2 = msg.getAudioConfig()) && proto.service.AudioConfig.toObject(includeInstance, f2),
          audioChunk: msg.getAudioChunk_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.STTRequest.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.STTRequest();
      return proto.service.STTRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.STTRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.service.AudioConfig();
            reader.readMessage(value, proto.service.AudioConfig.deserializeBinaryFromReader);
            msg.setAudioConfig(value);
            break;
          case 2:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setAudioChunk(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.STTRequest.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.STTRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.STTRequest.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getAudioConfig();
      if (f2 != null) {
        writer.writeMessage(
          1,
          f2,
          proto.service.AudioConfig.serializeBinaryToWriter
        );
      }
      f2 = /** @type {!(string|Uint8Array)} */
      jspb2.Message.getField(message, 2);
      if (f2 != null) {
        writer.writeBytes(
          2,
          f2
        );
      }
    };
    proto.service.STTRequest.prototype.getAudioConfig = function() {
      return (
        /** @type{?proto.service.AudioConfig} */
        jspb2.Message.getWrapperField(this, proto.service.AudioConfig, 1)
      );
    };
    proto.service.STTRequest.prototype.setAudioConfig = function(value) {
      jspb2.Message.setOneofWrapperField(this, 1, proto.service.STTRequest.oneofGroups_[0], value);
    };
    proto.service.STTRequest.prototype.clearAudioConfig = function() {
      this.setAudioConfig(void 0);
    };
    proto.service.STTRequest.prototype.hasAudioConfig = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.service.STTRequest.prototype.getAudioChunk = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb2.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.service.STTRequest.prototype.getAudioChunk_asB64 = function() {
      return (
        /** @type {string} */
        jspb2.Message.bytesAsB64(
          this.getAudioChunk()
        )
      );
    };
    proto.service.STTRequest.prototype.getAudioChunk_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb2.Message.bytesAsU8(
          this.getAudioChunk()
        )
      );
    };
    proto.service.STTRequest.prototype.setAudioChunk = function(value) {
      jspb2.Message.setOneofField(this, 2, proto.service.STTRequest.oneofGroups_[0], value);
    };
    proto.service.STTRequest.prototype.clearAudioChunk = function() {
      jspb2.Message.setOneofField(this, 2, proto.service.STTRequest.oneofGroups_[0], void 0);
    };
    proto.service.STTRequest.prototype.hasAudioChunk = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.service.STTResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.STTResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.STTResponse.displayName = "proto.service.STTResponse";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.STTResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.service.STTResponse.toObject(opt_includeInstance, this);
      };
      proto.service.STTResponse.toObject = function(includeInstance, msg) {
        var f2, obj = {
          text: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.STTResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.STTResponse();
      return proto.service.STTResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.STTResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setText(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.STTResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.STTResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.STTResponse.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getText();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
    };
    proto.service.STTResponse.prototype.getText = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.STTResponse.prototype.setText = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.GetResponseRequest = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, proto.service.GetResponseRequest.oneofGroups_);
    };
    goog2.inherits(proto.service.GetResponseRequest, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseRequest.displayName = "proto.service.GetResponseRequest";
    }
    proto.service.GetResponseRequest.oneofGroups_ = [[1, 2]];
    proto.service.GetResponseRequest.RequestTypeCase = {
      REQUEST_TYPE_NOT_SET: 0,
      GET_RESPONSE_CONFIG: 1,
      GET_RESPONSE_DATA: 2
    };
    proto.service.GetResponseRequest.prototype.getRequestTypeCase = function() {
      return (
        /** @type {proto.service.GetResponseRequest.RequestTypeCase} */
        jspb2.Message.computeOneofCase(this, proto.service.GetResponseRequest.oneofGroups_[0])
      );
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseRequest.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseRequest.toObject = function(includeInstance, msg) {
        var f2, obj = {
          getResponseConfig: (f2 = msg.getGetResponseConfig()) && proto.service.GetResponseRequest.GetResponseConfig.toObject(includeInstance, f2),
          getResponseData: (f2 = msg.getGetResponseData()) && proto.service.GetResponseRequest.GetResponseData.toObject(includeInstance, f2)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseRequest.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseRequest();
      return proto.service.GetResponseRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.service.GetResponseRequest.GetResponseConfig();
            reader.readMessage(value, proto.service.GetResponseRequest.GetResponseConfig.deserializeBinaryFromReader);
            msg.setGetResponseConfig(value);
            break;
          case 2:
            var value = new proto.service.GetResponseRequest.GetResponseData();
            reader.readMessage(value, proto.service.GetResponseRequest.GetResponseData.deserializeBinaryFromReader);
            msg.setGetResponseData(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseRequest.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseRequest.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getGetResponseConfig();
      if (f2 != null) {
        writer.writeMessage(
          1,
          f2,
          proto.service.GetResponseRequest.GetResponseConfig.serializeBinaryToWriter
        );
      }
      f2 = message.getGetResponseData();
      if (f2 != null) {
        writer.writeMessage(
          2,
          f2,
          proto.service.GetResponseRequest.GetResponseData.serializeBinaryToWriter
        );
      }
    };
    proto.service.GetResponseRequest.GetResponseConfig = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.GetResponseRequest.GetResponseConfig, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseRequest.GetResponseConfig.displayName = "proto.service.GetResponseRequest.GetResponseConfig";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseRequest.GetResponseConfig.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseRequest.GetResponseConfig.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseRequest.GetResponseConfig.toObject = function(includeInstance, msg) {
        var f2, obj = {
          characterId: jspb2.Message.getFieldWithDefault(msg, 2, ""),
          apiKey: jspb2.Message.getFieldWithDefault(msg, 3, ""),
          sessionId: jspb2.Message.getFieldWithDefault(msg, 4, ""),
          audioConfig: (f2 = msg.getAudioConfig()) && proto.service.AudioConfig.toObject(includeInstance, f2),
          actionConfig: (f2 = msg.getActionConfig()) && proto.service.ActionConfig.toObject(includeInstance, f2),
          speaker: jspb2.Message.getFieldWithDefault(msg, 7, ""),
          languageCode: jspb2.Message.getFieldWithDefault(msg, 8, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseRequest.GetResponseConfig.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseRequest.GetResponseConfig();
      return proto.service.GetResponseRequest.GetResponseConfig.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseRequest.GetResponseConfig.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setCharacterId(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setApiKey(value);
            break;
          case 4:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSessionId(value);
            break;
          case 5:
            var value = new proto.service.AudioConfig();
            reader.readMessage(value, proto.service.AudioConfig.deserializeBinaryFromReader);
            msg.setAudioConfig(value);
            break;
          case 6:
            var value = new proto.service.ActionConfig();
            reader.readMessage(value, proto.service.ActionConfig.deserializeBinaryFromReader);
            msg.setActionConfig(value);
            break;
          case 7:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSpeaker(value);
            break;
          case 8:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setLanguageCode(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseRequest.GetResponseConfig.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseRequest.GetResponseConfig.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getCharacterId();
      if (f2.length > 0) {
        writer.writeString(
          2,
          f2
        );
      }
      f2 = message.getApiKey();
      if (f2.length > 0) {
        writer.writeString(
          3,
          f2
        );
      }
      f2 = message.getSessionId();
      if (f2.length > 0) {
        writer.writeString(
          4,
          f2
        );
      }
      f2 = message.getAudioConfig();
      if (f2 != null) {
        writer.writeMessage(
          5,
          f2,
          proto.service.AudioConfig.serializeBinaryToWriter
        );
      }
      f2 = message.getActionConfig();
      if (f2 != null) {
        writer.writeMessage(
          6,
          f2,
          proto.service.ActionConfig.serializeBinaryToWriter
        );
      }
      f2 = message.getSpeaker();
      if (f2.length > 0) {
        writer.writeString(
          7,
          f2
        );
      }
      f2 = message.getLanguageCode();
      if (f2.length > 0) {
        writer.writeString(
          8,
          f2
        );
      }
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.getCharacterId = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.setCharacterId = function(value) {
      jspb2.Message.setProto3StringField(this, 2, value);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.getApiKey = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.setApiKey = function(value) {
      jspb2.Message.setProto3StringField(this, 3, value);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.getSessionId = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 4, "")
      );
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.setSessionId = function(value) {
      jspb2.Message.setProto3StringField(this, 4, value);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.getAudioConfig = function() {
      return (
        /** @type{?proto.service.AudioConfig} */
        jspb2.Message.getWrapperField(this, proto.service.AudioConfig, 5)
      );
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.setAudioConfig = function(value) {
      jspb2.Message.setWrapperField(this, 5, value);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.clearAudioConfig = function() {
      this.setAudioConfig(void 0);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.hasAudioConfig = function() {
      return jspb2.Message.getField(this, 5) != null;
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.getActionConfig = function() {
      return (
        /** @type{?proto.service.ActionConfig} */
        jspb2.Message.getWrapperField(this, proto.service.ActionConfig, 6)
      );
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.setActionConfig = function(value) {
      jspb2.Message.setWrapperField(this, 6, value);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.clearActionConfig = function() {
      this.setActionConfig(void 0);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.hasActionConfig = function() {
      return jspb2.Message.getField(this, 6) != null;
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.getSpeaker = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 7, "")
      );
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.setSpeaker = function(value) {
      jspb2.Message.setProto3StringField(this, 7, value);
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.getLanguageCode = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 8, "")
      );
    };
    proto.service.GetResponseRequest.GetResponseConfig.prototype.setLanguageCode = function(value) {
      jspb2.Message.setProto3StringField(this, 8, value);
    };
    proto.service.GetResponseRequest.GetResponseData = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, proto.service.GetResponseRequest.GetResponseData.oneofGroups_);
    };
    goog2.inherits(proto.service.GetResponseRequest.GetResponseData, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseRequest.GetResponseData.displayName = "proto.service.GetResponseRequest.GetResponseData";
    }
    proto.service.GetResponseRequest.GetResponseData.oneofGroups_ = [[1, 2, 3]];
    proto.service.GetResponseRequest.GetResponseData.InputTypeCase = {
      INPUT_TYPE_NOT_SET: 0,
      AUDIO_DATA: 1,
      TEXT_DATA: 2,
      TRIGGER_DATA: 3
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.getInputTypeCase = function() {
      return (
        /** @type {proto.service.GetResponseRequest.GetResponseData.InputTypeCase} */
        jspb2.Message.computeOneofCase(this, proto.service.GetResponseRequest.GetResponseData.oneofGroups_[0])
      );
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseRequest.GetResponseData.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseRequest.GetResponseData.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseRequest.GetResponseData.toObject = function(includeInstance, msg) {
        var f2, obj = {
          audioData: msg.getAudioData_asB64(),
          textData: jspb2.Message.getFieldWithDefault(msg, 2, ""),
          triggerData: (f2 = msg.getTriggerData()) && proto.service.TriggerConfig.toObject(includeInstance, f2)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseRequest.GetResponseData.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseRequest.GetResponseData();
      return proto.service.GetResponseRequest.GetResponseData.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseRequest.GetResponseData.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setAudioData(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTextData(value);
            break;
          case 3:
            var value = new proto.service.TriggerConfig();
            reader.readMessage(value, proto.service.TriggerConfig.deserializeBinaryFromReader);
            msg.setTriggerData(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseRequest.GetResponseData.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseRequest.GetResponseData.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = /** @type {!(string|Uint8Array)} */
      jspb2.Message.getField(message, 1);
      if (f2 != null) {
        writer.writeBytes(
          1,
          f2
        );
      }
      f2 = /** @type {string} */
      jspb2.Message.getField(message, 2);
      if (f2 != null) {
        writer.writeString(
          2,
          f2
        );
      }
      f2 = message.getTriggerData();
      if (f2 != null) {
        writer.writeMessage(
          3,
          f2,
          proto.service.TriggerConfig.serializeBinaryToWriter
        );
      }
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.getAudioData = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.getAudioData_asB64 = function() {
      return (
        /** @type {string} */
        jspb2.Message.bytesAsB64(
          this.getAudioData()
        )
      );
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.getAudioData_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb2.Message.bytesAsU8(
          this.getAudioData()
        )
      );
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.setAudioData = function(value) {
      jspb2.Message.setOneofField(this, 1, proto.service.GetResponseRequest.GetResponseData.oneofGroups_[0], value);
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.clearAudioData = function() {
      jspb2.Message.setOneofField(this, 1, proto.service.GetResponseRequest.GetResponseData.oneofGroups_[0], void 0);
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.hasAudioData = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.getTextData = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.setTextData = function(value) {
      jspb2.Message.setOneofField(this, 2, proto.service.GetResponseRequest.GetResponseData.oneofGroups_[0], value);
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.clearTextData = function() {
      jspb2.Message.setOneofField(this, 2, proto.service.GetResponseRequest.GetResponseData.oneofGroups_[0], void 0);
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.hasTextData = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.getTriggerData = function() {
      return (
        /** @type{?proto.service.TriggerConfig} */
        jspb2.Message.getWrapperField(this, proto.service.TriggerConfig, 3)
      );
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.setTriggerData = function(value) {
      jspb2.Message.setOneofWrapperField(this, 3, proto.service.GetResponseRequest.GetResponseData.oneofGroups_[0], value);
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.clearTriggerData = function() {
      this.setTriggerData(void 0);
    };
    proto.service.GetResponseRequest.GetResponseData.prototype.hasTriggerData = function() {
      return jspb2.Message.getField(this, 3) != null;
    };
    proto.service.GetResponseRequest.prototype.getGetResponseConfig = function() {
      return (
        /** @type{?proto.service.GetResponseRequest.GetResponseConfig} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseRequest.GetResponseConfig, 1)
      );
    };
    proto.service.GetResponseRequest.prototype.setGetResponseConfig = function(value) {
      jspb2.Message.setOneofWrapperField(this, 1, proto.service.GetResponseRequest.oneofGroups_[0], value);
    };
    proto.service.GetResponseRequest.prototype.clearGetResponseConfig = function() {
      this.setGetResponseConfig(void 0);
    };
    proto.service.GetResponseRequest.prototype.hasGetResponseConfig = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.service.GetResponseRequest.prototype.getGetResponseData = function() {
      return (
        /** @type{?proto.service.GetResponseRequest.GetResponseData} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseRequest.GetResponseData, 2)
      );
    };
    proto.service.GetResponseRequest.prototype.setGetResponseData = function(value) {
      jspb2.Message.setOneofWrapperField(this, 2, proto.service.GetResponseRequest.oneofGroups_[0], value);
    };
    proto.service.GetResponseRequest.prototype.clearGetResponseData = function() {
      this.setGetResponseData(void 0);
    };
    proto.service.GetResponseRequest.prototype.hasGetResponseData = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.service.GetResponseRequestSingle = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.GetResponseRequestSingle, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseRequestSingle.displayName = "proto.service.GetResponseRequestSingle";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseRequestSingle.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseRequestSingle.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseRequestSingle.toObject = function(includeInstance, msg) {
        var f2, obj = {
          responseConfig: (f2 = msg.getResponseConfig()) && proto.service.GetResponseRequest.toObject(includeInstance, f2),
          responseData: (f2 = msg.getResponseData()) && proto.service.GetResponseRequest.toObject(includeInstance, f2)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseRequestSingle.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseRequestSingle();
      return proto.service.GetResponseRequestSingle.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseRequestSingle.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.service.GetResponseRequest();
            reader.readMessage(value, proto.service.GetResponseRequest.deserializeBinaryFromReader);
            msg.setResponseConfig(value);
            break;
          case 2:
            var value = new proto.service.GetResponseRequest();
            reader.readMessage(value, proto.service.GetResponseRequest.deserializeBinaryFromReader);
            msg.setResponseData(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseRequestSingle.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseRequestSingle.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseRequestSingle.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getResponseConfig();
      if (f2 != null) {
        writer.writeMessage(
          1,
          f2,
          proto.service.GetResponseRequest.serializeBinaryToWriter
        );
      }
      f2 = message.getResponseData();
      if (f2 != null) {
        writer.writeMessage(
          2,
          f2,
          proto.service.GetResponseRequest.serializeBinaryToWriter
        );
      }
    };
    proto.service.GetResponseRequestSingle.prototype.getResponseConfig = function() {
      return (
        /** @type{?proto.service.GetResponseRequest} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseRequest, 1)
      );
    };
    proto.service.GetResponseRequestSingle.prototype.setResponseConfig = function(value) {
      jspb2.Message.setWrapperField(this, 1, value);
    };
    proto.service.GetResponseRequestSingle.prototype.clearResponseConfig = function() {
      this.setResponseConfig(void 0);
    };
    proto.service.GetResponseRequestSingle.prototype.hasResponseConfig = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.service.GetResponseRequestSingle.prototype.getResponseData = function() {
      return (
        /** @type{?proto.service.GetResponseRequest} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseRequest, 2)
      );
    };
    proto.service.GetResponseRequestSingle.prototype.setResponseData = function(value) {
      jspb2.Message.setWrapperField(this, 2, value);
    };
    proto.service.GetResponseRequestSingle.prototype.clearResponseData = function() {
      this.setResponseData(void 0);
    };
    proto.service.GetResponseRequestSingle.prototype.hasResponseData = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.service.GetResponseResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, proto.service.GetResponseResponse.oneofGroups_);
    };
    goog2.inherits(proto.service.GetResponseResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseResponse.displayName = "proto.service.GetResponseResponse";
    }
    proto.service.GetResponseResponse.oneofGroups_ = [[2, 3, 4, 5, 6, 7]];
    proto.service.GetResponseResponse.ResponseTypeCase = {
      RESPONSE_TYPE_NOT_SET: 0,
      ACTION_RESPONSE: 2,
      AUDIO_RESPONSE: 3,
      DEBUG_LOG: 4,
      USER_QUERY: 5,
      BT_RESPONSE: 6,
      EMOTION_RESPONSE: 7
    };
    proto.service.GetResponseResponse.prototype.getResponseTypeCase = function() {
      return (
        /** @type {proto.service.GetResponseResponse.ResponseTypeCase} */
        jspb2.Message.computeOneofCase(this, proto.service.GetResponseResponse.oneofGroups_[0])
      );
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseResponse.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseResponse.toObject = function(includeInstance, msg) {
        var f2, obj = {
          sessionId: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          actionResponse: (f2 = msg.getActionResponse()) && proto.service.GetResponseResponse.ActionResponse.toObject(includeInstance, f2),
          audioResponse: (f2 = msg.getAudioResponse()) && proto.service.GetResponseResponse.AudioResponse.toObject(includeInstance, f2),
          debugLog: jspb2.Message.getFieldWithDefault(msg, 4, ""),
          userQuery: (f2 = msg.getUserQuery()) && proto.service.GetResponseResponse.UserTranscript.toObject(includeInstance, f2),
          btResponse: (f2 = msg.getBtResponse()) && proto.service.GetResponseResponse.BehaviorTreeResponse.toObject(includeInstance, f2),
          emotionResponse: jspb2.Message.getFieldWithDefault(msg, 7, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseResponse();
      return proto.service.GetResponseResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setSessionId(value);
            break;
          case 2:
            var value = new proto.service.GetResponseResponse.ActionResponse();
            reader.readMessage(value, proto.service.GetResponseResponse.ActionResponse.deserializeBinaryFromReader);
            msg.setActionResponse(value);
            break;
          case 3:
            var value = new proto.service.GetResponseResponse.AudioResponse();
            reader.readMessage(value, proto.service.GetResponseResponse.AudioResponse.deserializeBinaryFromReader);
            msg.setAudioResponse(value);
            break;
          case 4:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setDebugLog(value);
            break;
          case 5:
            var value = new proto.service.GetResponseResponse.UserTranscript();
            reader.readMessage(value, proto.service.GetResponseResponse.UserTranscript.deserializeBinaryFromReader);
            msg.setUserQuery(value);
            break;
          case 6:
            var value = new proto.service.GetResponseResponse.BehaviorTreeResponse();
            reader.readMessage(value, proto.service.GetResponseResponse.BehaviorTreeResponse.deserializeBinaryFromReader);
            msg.setBtResponse(value);
            break;
          case 7:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setEmotionResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseResponse.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getSessionId();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
      f2 = message.getActionResponse();
      if (f2 != null) {
        writer.writeMessage(
          2,
          f2,
          proto.service.GetResponseResponse.ActionResponse.serializeBinaryToWriter
        );
      }
      f2 = message.getAudioResponse();
      if (f2 != null) {
        writer.writeMessage(
          3,
          f2,
          proto.service.GetResponseResponse.AudioResponse.serializeBinaryToWriter
        );
      }
      f2 = /** @type {string} */
      jspb2.Message.getField(message, 4);
      if (f2 != null) {
        writer.writeString(
          4,
          f2
        );
      }
      f2 = message.getUserQuery();
      if (f2 != null) {
        writer.writeMessage(
          5,
          f2,
          proto.service.GetResponseResponse.UserTranscript.serializeBinaryToWriter
        );
      }
      f2 = message.getBtResponse();
      if (f2 != null) {
        writer.writeMessage(
          6,
          f2,
          proto.service.GetResponseResponse.BehaviorTreeResponse.serializeBinaryToWriter
        );
      }
      f2 = /** @type {string} */
      jspb2.Message.getField(message, 7);
      if (f2 != null) {
        writer.writeString(
          7,
          f2
        );
      }
    };
    proto.service.GetResponseResponse.AudioResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, proto.service.GetResponseResponse.AudioResponse.oneofGroups_);
    };
    goog2.inherits(proto.service.GetResponseResponse.AudioResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseResponse.AudioResponse.displayName = "proto.service.GetResponseResponse.AudioResponse";
    }
    proto.service.GetResponseResponse.AudioResponse.oneofGroups_ = [[6, 7]];
    proto.service.GetResponseResponse.AudioResponse.FaceDataTypeCase = {
      FACE_DATA_TYPE_NOT_SET: 0,
      VISEMES_DATA: 6,
      BLENDSHAPES_DATA: 7
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getFaceDataTypeCase = function() {
      return (
        /** @type {proto.service.GetResponseResponse.AudioResponse.FaceDataTypeCase} */
        jspb2.Message.computeOneofCase(this, proto.service.GetResponseResponse.AudioResponse.oneofGroups_[0])
      );
    };
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseResponse.AudioResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseResponse.AudioResponse.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseResponse.AudioResponse.toObject = function(includeInstance, msg) {
        var f2, obj = {
          audioData: msg.getAudioData_asB64(),
          audioConfig: (f2 = msg.getAudioConfig()) && proto.service.AudioConfig.toObject(includeInstance, f2),
          textData: jspb2.Message.getFieldWithDefault(msg, 3, ""),
          endOfResponse: jspb2.Message.getFieldWithDefault(msg, 4, false),
          faceData: jspb2.Message.getFieldWithDefault(msg, 5, ""),
          visemesData: (f2 = msg.getVisemesData()) && proto.service.VisemesData.toObject(includeInstance, f2),
          blendshapesData: (f2 = msg.getBlendshapesData()) && proto.service.BlendShapesData.toObject(includeInstance, f2)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseResponse.AudioResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseResponse.AudioResponse();
      return proto.service.GetResponseResponse.AudioResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseResponse.AudioResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!Uint8Array} */
              reader.readBytes()
            );
            msg.setAudioData(value);
            break;
          case 2:
            var value = new proto.service.AudioConfig();
            reader.readMessage(value, proto.service.AudioConfig.deserializeBinaryFromReader);
            msg.setAudioConfig(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTextData(value);
            break;
          case 4:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setEndOfResponse(value);
            break;
          case 5:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setFaceData(value);
            break;
          case 6:
            var value = new proto.service.VisemesData();
            reader.readMessage(value, proto.service.VisemesData.deserializeBinaryFromReader);
            msg.setVisemesData(value);
            break;
          case 7:
            var value = new proto.service.BlendShapesData();
            reader.readMessage(value, proto.service.BlendShapesData.deserializeBinaryFromReader);
            msg.setBlendshapesData(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseResponse.AudioResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseResponse.AudioResponse.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getAudioData_asU8();
      if (f2.length > 0) {
        writer.writeBytes(
          1,
          f2
        );
      }
      f2 = message.getAudioConfig();
      if (f2 != null) {
        writer.writeMessage(
          2,
          f2,
          proto.service.AudioConfig.serializeBinaryToWriter
        );
      }
      f2 = message.getTextData();
      if (f2.length > 0) {
        writer.writeString(
          3,
          f2
        );
      }
      f2 = message.getEndOfResponse();
      if (f2) {
        writer.writeBool(
          4,
          f2
        );
      }
      f2 = message.getFaceData();
      if (f2.length > 0) {
        writer.writeString(
          5,
          f2
        );
      }
      f2 = message.getVisemesData();
      if (f2 != null) {
        writer.writeMessage(
          6,
          f2,
          proto.service.VisemesData.serializeBinaryToWriter
        );
      }
      f2 = message.getBlendshapesData();
      if (f2 != null) {
        writer.writeMessage(
          7,
          f2,
          proto.service.BlendShapesData.serializeBinaryToWriter
        );
      }
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getAudioData = function() {
      return (
        /** @type {!(string|Uint8Array)} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getAudioData_asB64 = function() {
      return (
        /** @type {string} */
        jspb2.Message.bytesAsB64(
          this.getAudioData()
        )
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getAudioData_asU8 = function() {
      return (
        /** @type {!Uint8Array} */
        jspb2.Message.bytesAsU8(
          this.getAudioData()
        )
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.setAudioData = function(value) {
      jspb2.Message.setProto3BytesField(this, 1, value);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getAudioConfig = function() {
      return (
        /** @type{?proto.service.AudioConfig} */
        jspb2.Message.getWrapperField(this, proto.service.AudioConfig, 2)
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.setAudioConfig = function(value) {
      jspb2.Message.setWrapperField(this, 2, value);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.clearAudioConfig = function() {
      this.setAudioConfig(void 0);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.hasAudioConfig = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getTextData = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.setTextData = function(value) {
      jspb2.Message.setProto3StringField(this, 3, value);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getEndOfResponse = function() {
      return (
        /** @type {boolean} */
        jspb2.Message.getFieldWithDefault(this, 4, false)
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.setEndOfResponse = function(value) {
      jspb2.Message.setProto3BooleanField(this, 4, value);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getFaceData = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 5, "")
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.setFaceData = function(value) {
      jspb2.Message.setProto3StringField(this, 5, value);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getVisemesData = function() {
      return (
        /** @type{?proto.service.VisemesData} */
        jspb2.Message.getWrapperField(this, proto.service.VisemesData, 6)
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.setVisemesData = function(value) {
      jspb2.Message.setOneofWrapperField(this, 6, proto.service.GetResponseResponse.AudioResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.clearVisemesData = function() {
      this.setVisemesData(void 0);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.hasVisemesData = function() {
      return jspb2.Message.getField(this, 6) != null;
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.getBlendshapesData = function() {
      return (
        /** @type{?proto.service.BlendShapesData} */
        jspb2.Message.getWrapperField(this, proto.service.BlendShapesData, 7)
      );
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.setBlendshapesData = function(value) {
      jspb2.Message.setOneofWrapperField(this, 7, proto.service.GetResponseResponse.AudioResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.clearBlendshapesData = function() {
      this.setBlendshapesData(void 0);
    };
    proto.service.GetResponseResponse.AudioResponse.prototype.hasBlendshapesData = function() {
      return jspb2.Message.getField(this, 7) != null;
    };
    proto.service.GetResponseResponse.ActionResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.GetResponseResponse.ActionResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseResponse.ActionResponse.displayName = "proto.service.GetResponseResponse.ActionResponse";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseResponse.ActionResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseResponse.ActionResponse.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseResponse.ActionResponse.toObject = function(includeInstance, msg) {
        var f2, obj = {
          action: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseResponse.ActionResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseResponse.ActionResponse();
      return proto.service.GetResponseResponse.ActionResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseResponse.ActionResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setAction(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseResponse.ActionResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseResponse.ActionResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseResponse.ActionResponse.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getAction();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
    };
    proto.service.GetResponseResponse.ActionResponse.prototype.getAction = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.GetResponseResponse.ActionResponse.prototype.setAction = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.GetResponseResponse.BehaviorTreeResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseResponse.BehaviorTreeResponse.displayName = "proto.service.GetResponseResponse.BehaviorTreeResponse";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseResponse.BehaviorTreeResponse.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseResponse.BehaviorTreeResponse.toObject = function(includeInstance, msg) {
        var f2, obj = {
          btCode: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          btConstants: jspb2.Message.getFieldWithDefault(msg, 2, ""),
          narrativeSectionId: jspb2.Message.getFieldWithDefault(msg, 3, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseResponse.BehaviorTreeResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseResponse.BehaviorTreeResponse();
      return proto.service.GetResponseResponse.BehaviorTreeResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBtCode(value);
            break;
          case 2:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBtConstants(value);
            break;
          case 3:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setNarrativeSectionId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseResponse.BehaviorTreeResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getBtCode();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
      f2 = message.getBtConstants();
      if (f2.length > 0) {
        writer.writeString(
          2,
          f2
        );
      }
      f2 = message.getNarrativeSectionId();
      if (f2.length > 0) {
        writer.writeString(
          3,
          f2
        );
      }
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.getBtCode = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.setBtCode = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.getBtConstants = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 2, "")
      );
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.setBtConstants = function(value) {
      jspb2.Message.setProto3StringField(this, 2, value);
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.getNarrativeSectionId = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 3, "")
      );
    };
    proto.service.GetResponseResponse.BehaviorTreeResponse.prototype.setNarrativeSectionId = function(value) {
      jspb2.Message.setProto3StringField(this, 3, value);
    };
    proto.service.GetResponseResponse.UserTranscript = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.GetResponseResponse.UserTranscript, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.GetResponseResponse.UserTranscript.displayName = "proto.service.GetResponseResponse.UserTranscript";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.GetResponseResponse.UserTranscript.prototype.toObject = function(opt_includeInstance) {
        return proto.service.GetResponseResponse.UserTranscript.toObject(opt_includeInstance, this);
      };
      proto.service.GetResponseResponse.UserTranscript.toObject = function(includeInstance, msg) {
        var f2, obj = {
          textData: jspb2.Message.getFieldWithDefault(msg, 1, ""),
          isFinal: jspb2.Message.getFieldWithDefault(msg, 2, false),
          endOfResponse: jspb2.Message.getFieldWithDefault(msg, 3, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.GetResponseResponse.UserTranscript.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.GetResponseResponse.UserTranscript();
      return proto.service.GetResponseResponse.UserTranscript.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.GetResponseResponse.UserTranscript.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setTextData(value);
            break;
          case 2:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setIsFinal(value);
            break;
          case 3:
            var value = (
              /** @type {boolean} */
              reader.readBool()
            );
            msg.setEndOfResponse(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.GetResponseResponse.UserTranscript.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.GetResponseResponse.UserTranscript.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.GetResponseResponse.UserTranscript.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getTextData();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
      f2 = message.getIsFinal();
      if (f2) {
        writer.writeBool(
          2,
          f2
        );
      }
      f2 = message.getEndOfResponse();
      if (f2) {
        writer.writeBool(
          3,
          f2
        );
      }
    };
    proto.service.GetResponseResponse.UserTranscript.prototype.getTextData = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.GetResponseResponse.UserTranscript.prototype.setTextData = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.GetResponseResponse.UserTranscript.prototype.getIsFinal = function() {
      return (
        /** @type {boolean} */
        jspb2.Message.getFieldWithDefault(this, 2, false)
      );
    };
    proto.service.GetResponseResponse.UserTranscript.prototype.setIsFinal = function(value) {
      jspb2.Message.setProto3BooleanField(this, 2, value);
    };
    proto.service.GetResponseResponse.UserTranscript.prototype.getEndOfResponse = function() {
      return (
        /** @type {boolean} */
        jspb2.Message.getFieldWithDefault(this, 3, false)
      );
    };
    proto.service.GetResponseResponse.UserTranscript.prototype.setEndOfResponse = function(value) {
      jspb2.Message.setProto3BooleanField(this, 3, value);
    };
    proto.service.GetResponseResponse.prototype.getSessionId = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.GetResponseResponse.prototype.setSessionId = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.GetResponseResponse.prototype.getActionResponse = function() {
      return (
        /** @type{?proto.service.GetResponseResponse.ActionResponse} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseResponse.ActionResponse, 2)
      );
    };
    proto.service.GetResponseResponse.prototype.setActionResponse = function(value) {
      jspb2.Message.setOneofWrapperField(this, 2, proto.service.GetResponseResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.prototype.clearActionResponse = function() {
      this.setActionResponse(void 0);
    };
    proto.service.GetResponseResponse.prototype.hasActionResponse = function() {
      return jspb2.Message.getField(this, 2) != null;
    };
    proto.service.GetResponseResponse.prototype.getAudioResponse = function() {
      return (
        /** @type{?proto.service.GetResponseResponse.AudioResponse} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseResponse.AudioResponse, 3)
      );
    };
    proto.service.GetResponseResponse.prototype.setAudioResponse = function(value) {
      jspb2.Message.setOneofWrapperField(this, 3, proto.service.GetResponseResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.prototype.clearAudioResponse = function() {
      this.setAudioResponse(void 0);
    };
    proto.service.GetResponseResponse.prototype.hasAudioResponse = function() {
      return jspb2.Message.getField(this, 3) != null;
    };
    proto.service.GetResponseResponse.prototype.getDebugLog = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 4, "")
      );
    };
    proto.service.GetResponseResponse.prototype.setDebugLog = function(value) {
      jspb2.Message.setOneofField(this, 4, proto.service.GetResponseResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.prototype.clearDebugLog = function() {
      jspb2.Message.setOneofField(this, 4, proto.service.GetResponseResponse.oneofGroups_[0], void 0);
    };
    proto.service.GetResponseResponse.prototype.hasDebugLog = function() {
      return jspb2.Message.getField(this, 4) != null;
    };
    proto.service.GetResponseResponse.prototype.getUserQuery = function() {
      return (
        /** @type{?proto.service.GetResponseResponse.UserTranscript} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseResponse.UserTranscript, 5)
      );
    };
    proto.service.GetResponseResponse.prototype.setUserQuery = function(value) {
      jspb2.Message.setOneofWrapperField(this, 5, proto.service.GetResponseResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.prototype.clearUserQuery = function() {
      this.setUserQuery(void 0);
    };
    proto.service.GetResponseResponse.prototype.hasUserQuery = function() {
      return jspb2.Message.getField(this, 5) != null;
    };
    proto.service.GetResponseResponse.prototype.getBtResponse = function() {
      return (
        /** @type{?proto.service.GetResponseResponse.BehaviorTreeResponse} */
        jspb2.Message.getWrapperField(this, proto.service.GetResponseResponse.BehaviorTreeResponse, 6)
      );
    };
    proto.service.GetResponseResponse.prototype.setBtResponse = function(value) {
      jspb2.Message.setOneofWrapperField(this, 6, proto.service.GetResponseResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.prototype.clearBtResponse = function() {
      this.setBtResponse(void 0);
    };
    proto.service.GetResponseResponse.prototype.hasBtResponse = function() {
      return jspb2.Message.getField(this, 6) != null;
    };
    proto.service.GetResponseResponse.prototype.getEmotionResponse = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 7, "")
      );
    };
    proto.service.GetResponseResponse.prototype.setEmotionResponse = function(value) {
      jspb2.Message.setOneofField(this, 7, proto.service.GetResponseResponse.oneofGroups_[0], value);
    };
    proto.service.GetResponseResponse.prototype.clearEmotionResponse = function() {
      jspb2.Message.setOneofField(this, 7, proto.service.GetResponseResponse.oneofGroups_[0], void 0);
    };
    proto.service.GetResponseResponse.prototype.hasEmotionResponse = function() {
      return jspb2.Message.getField(this, 7) != null;
    };
    proto.service.VisemesData = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.VisemesData, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.VisemesData.displayName = "proto.service.VisemesData";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.VisemesData.prototype.toObject = function(opt_includeInstance) {
        return proto.service.VisemesData.toObject(opt_includeInstance, this);
      };
      proto.service.VisemesData.toObject = function(includeInstance, msg) {
        var f2, obj = {
          visemes: (f2 = msg.getVisemes()) && proto.service.Viseme.toObject(includeInstance, f2)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.VisemesData.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.VisemesData();
      return proto.service.VisemesData.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.VisemesData.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.service.Viseme();
            reader.readMessage(value, proto.service.Viseme.deserializeBinaryFromReader);
            msg.setVisemes(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.VisemesData.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.VisemesData.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.VisemesData.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getVisemes();
      if (f2 != null) {
        writer.writeMessage(
          1,
          f2,
          proto.service.Viseme.serializeBinaryToWriter
        );
      }
    };
    proto.service.VisemesData.prototype.getVisemes = function() {
      return (
        /** @type{?proto.service.Viseme} */
        jspb2.Message.getWrapperField(this, proto.service.Viseme, 1)
      );
    };
    proto.service.VisemesData.prototype.setVisemes = function(value) {
      jspb2.Message.setWrapperField(this, 1, value);
    };
    proto.service.VisemesData.prototype.clearVisemes = function() {
      this.setVisemes(void 0);
    };
    proto.service.VisemesData.prototype.hasVisemes = function() {
      return jspb2.Message.getField(this, 1) != null;
    };
    proto.service.Viseme = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.Viseme, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.Viseme.displayName = "proto.service.Viseme";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.Viseme.prototype.toObject = function(opt_includeInstance) {
        return proto.service.Viseme.toObject(opt_includeInstance, this);
      };
      proto.service.Viseme.toObject = function(includeInstance, msg) {
        var f2, obj = {
          sil: +jspb2.Message.getFieldWithDefault(msg, 1, 0),
          pp: +jspb2.Message.getFieldWithDefault(msg, 2, 0),
          ff: +jspb2.Message.getFieldWithDefault(msg, 3, 0),
          th: +jspb2.Message.getFieldWithDefault(msg, 4, 0),
          dd: +jspb2.Message.getFieldWithDefault(msg, 5, 0),
          kk: +jspb2.Message.getFieldWithDefault(msg, 6, 0),
          ch: +jspb2.Message.getFieldWithDefault(msg, 7, 0),
          ss: +jspb2.Message.getFieldWithDefault(msg, 8, 0),
          nn: +jspb2.Message.getFieldWithDefault(msg, 9, 0),
          rr: +jspb2.Message.getFieldWithDefault(msg, 10, 0),
          aa: +jspb2.Message.getFieldWithDefault(msg, 11, 0),
          e: +jspb2.Message.getFieldWithDefault(msg, 12, 0),
          ih: +jspb2.Message.getFieldWithDefault(msg, 13, 0),
          oh: +jspb2.Message.getFieldWithDefault(msg, 14, 0),
          ou: +jspb2.Message.getFieldWithDefault(msg, 15, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.Viseme.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.Viseme();
      return proto.service.Viseme.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.Viseme.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setSil(value);
            break;
          case 2:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setPp(value);
            break;
          case 3:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setFf(value);
            break;
          case 4:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setTh(value);
            break;
          case 5:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setDd(value);
            break;
          case 6:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setKk(value);
            break;
          case 7:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setCh(value);
            break;
          case 8:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setSs(value);
            break;
          case 9:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setNn(value);
            break;
          case 10:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setRr(value);
            break;
          case 11:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setAa(value);
            break;
          case 12:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setE(value);
            break;
          case 13:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setIh(value);
            break;
          case 14:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setOh(value);
            break;
          case 15:
            var value = (
              /** @type {number} */
              reader.readFloat()
            );
            msg.setOu(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.Viseme.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.Viseme.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.Viseme.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getSil();
      if (f2 !== 0) {
        writer.writeFloat(
          1,
          f2
        );
      }
      f2 = message.getPp();
      if (f2 !== 0) {
        writer.writeFloat(
          2,
          f2
        );
      }
      f2 = message.getFf();
      if (f2 !== 0) {
        writer.writeFloat(
          3,
          f2
        );
      }
      f2 = message.getTh();
      if (f2 !== 0) {
        writer.writeFloat(
          4,
          f2
        );
      }
      f2 = message.getDd();
      if (f2 !== 0) {
        writer.writeFloat(
          5,
          f2
        );
      }
      f2 = message.getKk();
      if (f2 !== 0) {
        writer.writeFloat(
          6,
          f2
        );
      }
      f2 = message.getCh();
      if (f2 !== 0) {
        writer.writeFloat(
          7,
          f2
        );
      }
      f2 = message.getSs();
      if (f2 !== 0) {
        writer.writeFloat(
          8,
          f2
        );
      }
      f2 = message.getNn();
      if (f2 !== 0) {
        writer.writeFloat(
          9,
          f2
        );
      }
      f2 = message.getRr();
      if (f2 !== 0) {
        writer.writeFloat(
          10,
          f2
        );
      }
      f2 = message.getAa();
      if (f2 !== 0) {
        writer.writeFloat(
          11,
          f2
        );
      }
      f2 = message.getE();
      if (f2 !== 0) {
        writer.writeFloat(
          12,
          f2
        );
      }
      f2 = message.getIh();
      if (f2 !== 0) {
        writer.writeFloat(
          13,
          f2
        );
      }
      f2 = message.getOh();
      if (f2 !== 0) {
        writer.writeFloat(
          14,
          f2
        );
      }
      f2 = message.getOu();
      if (f2 !== 0) {
        writer.writeFloat(
          15,
          f2
        );
      }
    };
    proto.service.Viseme.prototype.getSil = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.service.Viseme.prototype.setSil = function(value) {
      jspb2.Message.setProto3FloatField(this, 1, value);
    };
    proto.service.Viseme.prototype.getPp = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 2, 0)
      );
    };
    proto.service.Viseme.prototype.setPp = function(value) {
      jspb2.Message.setProto3FloatField(this, 2, value);
    };
    proto.service.Viseme.prototype.getFf = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 3, 0)
      );
    };
    proto.service.Viseme.prototype.setFf = function(value) {
      jspb2.Message.setProto3FloatField(this, 3, value);
    };
    proto.service.Viseme.prototype.getTh = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 4, 0)
      );
    };
    proto.service.Viseme.prototype.setTh = function(value) {
      jspb2.Message.setProto3FloatField(this, 4, value);
    };
    proto.service.Viseme.prototype.getDd = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 5, 0)
      );
    };
    proto.service.Viseme.prototype.setDd = function(value) {
      jspb2.Message.setProto3FloatField(this, 5, value);
    };
    proto.service.Viseme.prototype.getKk = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 6, 0)
      );
    };
    proto.service.Viseme.prototype.setKk = function(value) {
      jspb2.Message.setProto3FloatField(this, 6, value);
    };
    proto.service.Viseme.prototype.getCh = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 7, 0)
      );
    };
    proto.service.Viseme.prototype.setCh = function(value) {
      jspb2.Message.setProto3FloatField(this, 7, value);
    };
    proto.service.Viseme.prototype.getSs = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 8, 0)
      );
    };
    proto.service.Viseme.prototype.setSs = function(value) {
      jspb2.Message.setProto3FloatField(this, 8, value);
    };
    proto.service.Viseme.prototype.getNn = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 9, 0)
      );
    };
    proto.service.Viseme.prototype.setNn = function(value) {
      jspb2.Message.setProto3FloatField(this, 9, value);
    };
    proto.service.Viseme.prototype.getRr = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 10, 0)
      );
    };
    proto.service.Viseme.prototype.setRr = function(value) {
      jspb2.Message.setProto3FloatField(this, 10, value);
    };
    proto.service.Viseme.prototype.getAa = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 11, 0)
      );
    };
    proto.service.Viseme.prototype.setAa = function(value) {
      jspb2.Message.setProto3FloatField(this, 11, value);
    };
    proto.service.Viseme.prototype.getE = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 12, 0)
      );
    };
    proto.service.Viseme.prototype.setE = function(value) {
      jspb2.Message.setProto3FloatField(this, 12, value);
    };
    proto.service.Viseme.prototype.getIh = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 13, 0)
      );
    };
    proto.service.Viseme.prototype.setIh = function(value) {
      jspb2.Message.setProto3FloatField(this, 13, value);
    };
    proto.service.Viseme.prototype.getOh = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 14, 0)
      );
    };
    proto.service.Viseme.prototype.setOh = function(value) {
      jspb2.Message.setProto3FloatField(this, 14, value);
    };
    proto.service.Viseme.prototype.getOu = function() {
      return (
        /** @type {number} */
        +jspb2.Message.getFieldWithDefault(this, 15, 0)
      );
    };
    proto.service.Viseme.prototype.setOu = function(value) {
      jspb2.Message.setProto3FloatField(this, 15, value);
    };
    proto.service.BlendShapesData = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.BlendShapesData, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.BlendShapesData.displayName = "proto.service.BlendShapesData";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.BlendShapesData.prototype.toObject = function(opt_includeInstance) {
        return proto.service.BlendShapesData.toObject(opt_includeInstance, this);
      };
      proto.service.BlendShapesData.toObject = function(includeInstance, msg) {
        var f2, obj = {
          blendshapeData: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.BlendShapesData.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.BlendShapesData();
      return proto.service.BlendShapesData.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.BlendShapesData.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setBlendshapeData(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.BlendShapesData.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.BlendShapesData.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.BlendShapesData.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getBlendshapeData();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
    };
    proto.service.BlendShapesData.prototype.getBlendshapeData = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.BlendShapesData.prototype.setBlendshapeData = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.HelloRequest = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.HelloRequest, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.HelloRequest.displayName = "proto.service.HelloRequest";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.HelloRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.service.HelloRequest.toObject(opt_includeInstance, this);
      };
      proto.service.HelloRequest.toObject = function(includeInstance, msg) {
        var f2, obj = {
          name: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.HelloRequest.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.HelloRequest();
      return proto.service.HelloRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.HelloRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setName(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.HelloRequest.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.HelloRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.HelloRequest.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getName();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
    };
    proto.service.HelloRequest.prototype.getName = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.HelloRequest.prototype.setName = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.HelloResponse = function(opt_data) {
      jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog2.inherits(proto.service.HelloResponse, jspb2.Message);
    if (goog2.DEBUG && !COMPILED) {
      proto.service.HelloResponse.displayName = "proto.service.HelloResponse";
    }
    if (jspb2.Message.GENERATE_TO_OBJECT) {
      proto.service.HelloResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.service.HelloResponse.toObject(opt_includeInstance, this);
      };
      proto.service.HelloResponse.toObject = function(includeInstance, msg) {
        var f2, obj = {
          message: jspb2.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.service.HelloResponse.deserializeBinary = function(bytes) {
      var reader = new jspb2.BinaryReader(bytes);
      var msg = new proto.service.HelloResponse();
      return proto.service.HelloResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.service.HelloResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.service.HelloResponse.prototype.serializeBinary = function() {
      var writer = new jspb2.BinaryWriter();
      proto.service.HelloResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.service.HelloResponse.serializeBinaryToWriter = function(message, writer) {
      var f2 = void 0;
      f2 = message.getMessage();
      if (f2.length > 0) {
        writer.writeString(
          1,
          f2
        );
      }
    };
    proto.service.HelloResponse.prototype.getMessage = function() {
      return (
        /** @type {string} */
        jspb2.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.service.HelloResponse.prototype.setMessage = function(value) {
      jspb2.Message.setProto3StringField(this, 1, value);
    };
    proto.service.FaceModel = {
      FACE_MODEL_UNSPECIFIED: 0,
      FACE_MODEL_A_2F_MODEL_NAME: 1,
      FACE_MODEL_PHONEMES_MODEL_NAME: 2,
      FACE_MODEL_OVR_MODEL_NAME: 3
    };
    goog2.object.extend(exports2, proto.service);
  }
});

// Proto/service/service_pb_service.js
var require_service_pb_service = __commonJS({
  "Proto/service/service_pb_service.js"(exports2) {
    "use strict";
    var service_service_pb = require_service_pb();
    var grpc2 = require_grpc_web_client().grpc;
    var ConvaiService2 = function() {
      function ConvaiService3() {
      }
      ConvaiService3.serviceName = "service.ConvaiService";
      return ConvaiService3;
    }();
    ConvaiService2.Hello = {
      methodName: "Hello",
      service: ConvaiService2,
      requestStream: false,
      responseStream: false,
      requestType: service_service_pb.HelloRequest,
      responseType: service_service_pb.HelloResponse
    };
    ConvaiService2.HelloStream = {
      methodName: "HelloStream",
      service: ConvaiService2,
      requestStream: true,
      responseStream: true,
      requestType: service_service_pb.HelloRequest,
      responseType: service_service_pb.HelloResponse
    };
    ConvaiService2.SpeechToText = {
      methodName: "SpeechToText",
      service: ConvaiService2,
      requestStream: true,
      responseStream: true,
      requestType: service_service_pb.STTRequest,
      responseType: service_service_pb.STTResponse
    };
    ConvaiService2.GetResponse = {
      methodName: "GetResponse",
      service: ConvaiService2,
      requestStream: true,
      responseStream: true,
      requestType: service_service_pb.GetResponseRequest,
      responseType: service_service_pb.GetResponseResponse
    };
    ConvaiService2.GetResponseSingle = {
      methodName: "GetResponseSingle",
      service: ConvaiService2,
      requestStream: false,
      responseStream: true,
      requestType: service_service_pb.GetResponseRequestSingle,
      responseType: service_service_pb.GetResponseResponse
    };
    exports2.ConvaiService = ConvaiService2;
    function ConvaiServiceClient(serviceHost, options) {
      this.serviceHost = serviceHost;
      this.options = options || {};
    }
    ConvaiServiceClient.prototype.hello = function hello(requestMessage, metadata, callback) {
      if (arguments.length === 2) {
        callback = arguments[1];
      }
      var client = grpc2.unary(ConvaiService2.Hello, {
        request: requestMessage,
        host: this.serviceHost,
        metadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function(response) {
          if (callback) {
            if (response.status !== grpc2.Code.OK) {
              var err = new Error(response.statusMessage);
              err.code = response.status;
              err.metadata = response.trailers;
              callback(err, null);
            } else {
              callback(null, response.message);
            }
          }
        }
      });
      return {
        cancel: function() {
          callback = null;
          client.close();
        }
      };
    };
    ConvaiServiceClient.prototype.helloStream = function helloStream(metadata) {
      var listeners = {
        data: [],
        end: [],
        status: []
      };
      var client = grpc2.client(ConvaiService2.HelloStream, {
        host: this.serviceHost,
        metadata,
        transport: this.options.transport
      });
      client.onEnd(function(status, statusMessage, trailers) {
        listeners.status.forEach(function(handler) {
          handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners.end.forEach(function(handler) {
          handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners = null;
      });
      client.onMessage(function(message) {
        listeners.data.forEach(function(handler) {
          handler(message);
        });
      });
      client.start(metadata);
      return {
        on: function(type, handler) {
          listeners[type].push(handler);
          return this;
        },
        write: function(requestMessage) {
          client.send(requestMessage);
          return this;
        },
        end: function() {
          client.finishSend();
        },
        cancel: function() {
          listeners = null;
          client.close();
        }
      };
    };
    ConvaiServiceClient.prototype.speechToText = function speechToText(metadata) {
      var listeners = {
        data: [],
        end: [],
        status: []
      };
      var client = grpc2.client(ConvaiService2.SpeechToText, {
        host: this.serviceHost,
        metadata,
        transport: this.options.transport
      });
      client.onEnd(function(status, statusMessage, trailers) {
        listeners.status.forEach(function(handler) {
          handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners.end.forEach(function(handler) {
          handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners = null;
      });
      client.onMessage(function(message) {
        listeners.data.forEach(function(handler) {
          handler(message);
        });
      });
      client.start(metadata);
      return {
        on: function(type, handler) {
          listeners[type].push(handler);
          return this;
        },
        write: function(requestMessage) {
          client.send(requestMessage);
          return this;
        },
        end: function() {
          client.finishSend();
        },
        cancel: function() {
          listeners = null;
          client.close();
        }
      };
    };
    ConvaiServiceClient.prototype.getResponse = function getResponse(metadata) {
      var listeners = {
        data: [],
        end: [],
        status: []
      };
      var client = grpc2.client(ConvaiService2.GetResponse, {
        host: this.serviceHost,
        metadata,
        transport: this.options.transport
      });
      client.onEnd(function(status, statusMessage, trailers) {
        listeners.status.forEach(function(handler) {
          handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners.end.forEach(function(handler) {
          handler({ code: status, details: statusMessage, metadata: trailers });
        });
        listeners = null;
      });
      client.onMessage(function(message) {
        listeners.data.forEach(function(handler) {
          handler(message);
        });
      });
      client.start(metadata);
      return {
        on: function(type, handler) {
          listeners[type].push(handler);
          return this;
        },
        write: function(requestMessage) {
          client.send(requestMessage);
          return this;
        },
        end: function() {
          client.finishSend();
        },
        cancel: function() {
          listeners = null;
          client.close();
        }
      };
    };
    ConvaiServiceClient.prototype.getResponseSingle = function getResponseSingle(requestMessage, metadata) {
      var listeners = {
        data: [],
        end: [],
        status: []
      };
      var client = grpc2.invoke(ConvaiService2.GetResponseSingle, {
        request: requestMessage,
        host: this.serviceHost,
        metadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onMessage: function(responseMessage) {
          listeners.data.forEach(function(handler) {
            handler(responseMessage);
          });
        },
        onEnd: function(status, statusMessage, trailers) {
          listeners.status.forEach(function(handler) {
            handler({ code: status, details: statusMessage, metadata: trailers });
          });
          listeners.end.forEach(function(handler) {
            handler({ code: status, details: statusMessage, metadata: trailers });
          });
          listeners = null;
        }
      });
      return {
        on: function(type, handler) {
          listeners[type].push(handler);
          return this;
        },
        cancel: function() {
          listeners = null;
          client.close();
        }
      };
    };
    exports2.ConvaiServiceClient = ConvaiServiceClient;
  }
});

// src/helper/mappingMorphs.ts
var VisemeMap = {
  0: "sil",
  1: "PP",
  2: "FF",
  3: "TH",
  4: "DD",
  5: "KK",
  6: "CH",
  7: "SS",
  8: "NN",
  9: "RR",
  10: "AA",
  11: "E",
  12: "I",
  13: "O",
  14: "U"
};
var Reallusion = {
  sil: {
    V_Explosive: 0,
    V_Lip_Open: 0,
    V_Dental_Lip: 0,
    V_Tight_O: 0,
    V_Tongue_Out: 0,
    Mouth_Drop_Lower: 0,
    Mouth_Shrug_Upper: 0,
    Open_Jaw: 0,
    Tongue: 0
  },
  PP: {
    V_Explosive: 1
  },
  FF: {
    V_Dental_Lip: 1
  },
  TH: {
    Mouth_Drop_Lower: 0.5,
    V_Tongue_Out: 0.5,
    Open_Jaw: 0.2,
    Tongue: 0.1
  },
  DD: {
    Mouth_Drop_Lower: 0.2,
    Mouth_Shrug_Upper: 0.5,
    Open_Jaw: 0.1,
    Tongue: 0
  },
  KK: {
    Mouth_Drop_Lower: 0.5,
    Mouth_Shrug_Upper: 0.1,
    Open_Jaw: 0.5,
    Tongue: 0
  },
  CH: {
    Mouth_Drop_Lower: 0.7,
    Mouth_Shrug_Upper: 0.1,
    V_Lip_Open: 1,
    Open_Jaw: 0,
    Tongue: 0
  },
  SS: {
    Mouth_Drop_Lower: 0.5,
    Mouth_Shrug_Upper: 1,
    Open_Jaw: 0,
    Tongue: 0
  },
  NN: {
    Mouth_Drop_Lower: 0.5,
    V_Tongue_Out: 0.5,
    Mouth_Shrug_Upper: 1,
    Open_Jaw: 0.2,
    Tongue: 0.2
  },
  RR: {
    Mouth_Drop_Lower: 0.5,
    V_Tongue_Out: 0.4,
    Mouth_Shrug_Upper: 1,
    Open_Jaw: 0.2,
    Tongue: 0.15
  },
  AA: {
    Mouth_Shrug_Upper: 1,
    Open_Jaw: 1,
    Tongue: 0
  },
  E: {
    Mouth_Drop_Lower: 0.7,
    Mouth_Shrug_Upper: 0.3,
    Open_Jaw: 0.2,
    Tongue: 0
  },
  I: {
    Mouth_Drop_Lower: 0.7,
    Mouth_Shrug_Upper: 0.5,
    Mouth_Press_R: 0,
    Mouth_Press_L: 0,
    Open_Jaw: 0.3,
    Tongue: 0
  },
  O: {
    V_Tight_O: 0.9,
    Open_Jaw: 0.8,
    Tongue: 0
  },
  U: {
    V_Tight_O: 1,
    Open_Jaw: 0.3,
    Tongue: 0
  }
};
var OvrToMorph = (viseme, blendShapeRef) => {
  if (typeof viseme === "object") {
    const blendShape = {
      Mouth_Drop_Lower: 0,
      Mouth_Shrug_Upper: 0.17,
      Mouth_Press_R: 0,
      Mouth_Press_L: 0,
      V_Explosive: 0,
      V_Lip_Open: 0,
      V_Dental_Lip: 0,
      V_Tight_O: 0,
      V_Tongue_Out: 0,
      Open_Jaw: 0,
      Tongue: 0
    };
    for (const key in viseme) {
      if (viseme.hasOwnProperty(key)) {
        const visemeValue = viseme[key];
        const currentBlend = Reallusion[VisemeMap[key]];
        for (const blend in currentBlend) {
          for (const key2 in viseme) {
            if (viseme.hasOwnProperty(key2)) {
              const morphKey = key2;
              const morphValue = viseme[key2];
              blendShape[morphKey] = morphValue;
            }
          }
          const blendValue = currentBlend[blend] * visemeValue;
          blendShape[blend] = (blendShape[blend] || 0) + blendValue;
        }
      }
    }
    blendShapeRef.current.push(blendShape);
  }
};

// src/ConvaiClient/convai_grpc_client.ts
var import_grpc_web = __toESM(require_grpc_web_client());
var import_service_pb_service = __toESM(require_service_pb_service());
var import_service_pb = __toESM(require_service_pb());
var import_service_pb2 = __toESM(require_service_pb());
var import_service_pb3 = __toESM(require_service_pb());
var GRPC_HOST = "https://webstream.convai.com";
var ConvaiGRPCClient = class {
  constructor(apiKey, characterId, sessionId, responseCallback, languageCode, disableAudioGeneration, enableFacialData, faceModel, actionList, classifications, currentAttentionObject) {
    this.apiKey = apiKey;
    this.characterId = characterId;
    this.sessionId = sessionId;
    this.languageCode = languageCode;
    this.disableAudioGeneration = disableAudioGeneration;
    this.enableFacialData = enableFacialData;
    this.faceModel = faceModel;
    if (actionList) {
      this.actionList = actionList;
    }
    if (classifications) {
      this.classifications = classifications;
    }
    if (currentAttentionObject) {
      this.currentAttentionObject = currentAttentionObject;
    }
    this.client = import_grpc_web.grpc.client(import_service_pb_service.ConvaiService.GetResponse, {
      host: GRPC_HOST,
      transport: import_grpc_web.grpc.WebsocketTransport()
    });
    this.client.onMessage((response) => {
      responseCallback(response);
    });
    this.client.onEnd(
      (status, statusMessage, trailers) => {
        if (status != import_grpc_web.grpc.Code.OK) {
          console.log("GetResponse Failed: ", status, statusMessage);
        }
      }
    );
  }
  /**
   * Sends text to the ConvaiService.
   * @param {string} text - The text to send.
   */
  sendText(text) {
    if (this.inputMode == "audio") {
      console.log("Error: Cannot send text in audio input mode.");
      return;
    }
    this.inputMode = "text";
    if (!this.isStarted) {
      this.start();
    }
    var req = new import_service_pb.GetResponseRequest();
    var getResponseData = new import_service_pb.GetResponseRequest.GetResponseData();
    getResponseData.setTextData(text);
    req.setGetResponseData(getResponseData);
    this.client.send(req);
    this.client.finishSend();
  }
  /**
   * Sends an audio chunk to the ConvaiService.
   * @param {ArrayBuffer} chunk - The audio chunk to send.
   */
  sendAudioChunk(chunk) {
    if (this.inputMode == "text") {
      console.log("Error: Cannot send audio in text input mode.");
      return;
    }
    this.inputMode = "audio";
    if (!this.isStarted) {
      this.start();
    }
    var req = new import_service_pb.GetResponseRequest();
    var getResponseData = new import_service_pb.GetResponseRequest.GetResponseData();
    getResponseData.setAudioData(new Uint8Array(chunk));
    req.setGetResponseData(getResponseData);
    this.client.send(req);
  }
  /**
   * Finishes sending data to the ConvaiService.
   */
  finishSend() {
    this.client.finishSend();
  }
  start() {
    this.client.start();
    var firstReq = new import_service_pb.GetResponseRequest();
    var getResponseConfig = new import_service_pb.GetResponseRequest.GetResponseConfig();
    getResponseConfig.setApiKey(this.apiKey);
    getResponseConfig.setCharacterId(this.characterId);
    getResponseConfig.setSessionId(this.sessionId);
    getResponseConfig.setLanguageCode(this.languageCode);
    let audioConfig = new import_service_pb2.AudioConfig();
    audioConfig.setSampleRateHertz(44100);
    audioConfig.setEnableFacialData(this.enableFacialData);
    if (this.disableAudioGeneration)
      audioConfig.setDisableAudio(this.disableAudioGeneration);
    else {
      audioConfig.setDisableAudio(false);
    }
    audioConfig.setFaceModel(this.faceModel);
    getResponseConfig.setAudioConfig(audioConfig);
    let actionConfig = new import_service_pb3.ActionConfig();
    for (let i = 0; i < this.actionList.length; i++) {
      actionConfig.addActions(this.actionList[i], i);
    }
    actionConfig.setCurrentAttentionObject(this.currentAttentionObject);
    actionConfig.setClassification(this.classifications);
    getResponseConfig.setActionConfig(actionConfig);
    firstReq.setGetResponseConfig(getResponseConfig);
    this.client.send(firstReq);
    this.isStarted = true;
  }
  /**
   * Closes the gRPC client connection.
   */
  closeConnection() {
    this.client.close();
    this.isStarted = false;
  }
};

// src/helper/CharacterUtil.ts
var AsyncBlockingQueue = class {
  constructor() {
    this.resolvers = [];
    this.promises = [];
  }
  // This function asynchronously adds a new promise to the queue
  _add() {
    return __async(this, null, function* () {
      const promise = new Promise((resolve) => {
        this.resolvers.push(resolve);
      });
      this.promises.push(promise);
      yield Promise.all(this.promises);
    });
  }
  // Enqueue a value into the queue
  enqueue(value) {
    if (!this.resolvers.length) {
      this._add();
    }
    this.resolvers.shift()(value);
  }
  // Dequeue a value from the queue
  dequeue() {
    return __async(this, null, function* () {
      if (!this.promises.length) {
        this._add();
      }
      const result = yield Promise.all([this.promises.shift()]);
      return result[0];
    });
  }
  // Check if the queue is empty
  isEmpty() {
    return this.promises.length === 0;
  }
  // Check if the queue is waiting for values
  isBlocked() {
    return this.resolvers.length > 0;
  }
  // Get the number of pending promises in the queue
  get length() {
    return this.promises.length - this.resolvers.length;
  }
  // Implement an asynchronous iterator for the queue
  [Symbol.asyncIterator]() {
    return __asyncGenerator(this, null, function* () {
      while (true) {
        const value = yield new __await(this.dequeue());
        yield value;
      }
    });
  }
};

// src/ConvaiClient/audio_player_new.ts
var AudioPlayer = class {
  /**
   * Creates an instance of AudioPlayer.
   * @param {number} sampleRate - The sample rate of the audio.
   */
  constructor(sampleRate) {
    this.isPlaying = false;
    this.sampleRate = sampleRate;
    this.asyncQueue = new AsyncBlockingQueue();
    this.audio = new Audio();
    this.audio.crossOrigin = "anonymous";
    this.audio.onended = () => __async(this, null, function* () {
      var _a;
      const url = yield this.asyncQueue.dequeue();
      if (url != null) {
        this.playAudio(url);
      } else {
        this.isPlaying = false;
        (_a = this.onStop) == null ? void 0 : _a.call(this);
        this.asyncQueue = new AsyncBlockingQueue();
      }
    });
    this.onPlay = null;
    this.onStop = null;
  }
  /**
   * Plays the audio from the given URL.
   * @param {string} url - The URL of the audio to play.
   * @private
   */
  playAudio(url) {
    var _a;
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
    (_a = this.onPlay) == null ? void 0 : _a.call(this);
    this.isPlaying = true;
  }
  /**
   * Adds a chunk of audio data to the queue.
   * @param {Uint8Array | null} data - The audio data to add to the queue.
   * @param {number | null} sampleRate - The sample rate of the audio data.
   */
  addChunk(data, sampleRate = null) {
    if (data == null) {
      this.asyncQueue.enqueue(null);
      return;
    }
    const blob = new Blob([data], { type: "audio/wav" });
    const url = URL.createObjectURL(blob);
    if (!this.isPlaying) {
      this.playAudio(url);
    } else {
      this.asyncQueue.enqueue(url);
    }
  }
  /**
   * Gets the current volume of the audio player.
   * @returns {number} The current volume of the audio player.
   */
  getVolume() {
    return this.audio.volume;
  }
  /**
   * Sets the volume of the audio player.
   * @param {number} volume - The volume to set. Must be between 0 and 1.
   * @throws {Error} If the volume value is invalid.
   */
  setAudioVolume(volume) {
    if (volume < 0 || volume > 1) {
      throw new Error("Invalid volume value. Volume must be between 0 and 1.");
    }
    this.audio.volume = volume;
  }
  /**
   * Sets a callback function to be called when audio playback starts.
   * @param {() => void} fn - The callback function to set.
   */
  onPlayStart(fn) {
    this.onPlay = fn;
  }
  /**
   * Sets a callback function to be called when audio playback stops.
   * @param {() => void} fn - The callback function to set.
   */
  onPlayStop(fn) {
    this.onStop = fn;
  }
};

// src/ConvaiClient/audio_recorder_processor.ts
var audio_reocrder_processor = `class AudioRecorderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.recording = false;
    this.chunkSize = 4096;
    this.sampleAccumulator = new Float32Array(this.chunkSize);
    this.accumulatedSamples = 0;
    this.port.onmessage = (event) => {
      if (!event.data.command) {
        return;
      }
      if (event.data.command === 'start') {
        this.recording = true;
      } else if (event.data.command === 'stop') {
        this.recording = false;
      }
    };
  }

  process(inputs, outputs) {
    if (!this.recording) {
      return true;
    }
    const input = inputs[0];
    const output = outputs[0];
    output[0].set(input[0]);
    for (let i = 0; i < input[0].length; i++) {
      this.sampleAccumulator[this.accumulatedSamples++] = input[0][i];
      if (this.accumulatedSamples >= this.chunkSize) {
        this.port.postMessage(this.sampleAccumulator.buffer);
        this.sampleAccumulator = new Float32Array(this.chunkSize);
        this.accumulatedSamples = 0;
      }
    }
    return true;
  }
}

registerProcessor('audio-recorder-processor', AudioRecorderProcessor);`;

// src/ConvaiClient/audio_recorder.ts
var AudioRecorder = class {
  constructor() {
    var _a;
    this.audioContext = new AudioContext();
    let blob = new Blob([audio_reocrder_processor], { type: "application/javascript" });
    this.audioWorkletModule = (_a = this.audioContext) == null ? void 0 : _a.audioWorklet.addModule(URL.createObjectURL(blob));
    this.mediaStream = null;
    this.workletNode = null;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia supported.");
      this.userMedia = navigator.mediaDevices.getUserMedia({ audio: true });
    } else {
      console.log("getUserMedia not supported on your browser!");
    }
  }
  convertoFloat32ToInt16(buffer) {
    var l = buffer.length;
    var buf = new Int16Array(l);
    while (l--) {
      buf[l] = buffer[l] * 65535;
    }
    return buf.buffer;
  }
  /**
   * Starts recording audio from the user's microphone.
   * @param audioCallback A function that will be called with the recorded audio as an ArrayBuffer.
   */
  start(audioCallback) {
    this.audioCallback = audioCallback;
    this.userMedia.then((stream) => {
      this.mediaStream = stream;
      this.audioWorkletModule.then(() => {
        const source = this.audioContext.createMediaStreamSource(this.mediaStream);
        this.workletNode = new AudioWorkletNode(this.audioContext, "audio-recorder-processor");
        this.workletNode.port.onmessage = (event) => {
          if (event.data.command) {
            return;
          }
          const buffer = new Float32Array(event.data);
          const pcm_buffer = this.convertoFloat32ToInt16(buffer);
          this.audioCallback(pcm_buffer);
        };
        source.connect(this.workletNode);
        this.audioContext.resume();
        this.workletNode.port.postMessage({ command: "start" });
      });
    });
  }
  /**
   * Stops recording audio.
   */
  stop() {
    if (this.workletNode) {
      this.workletNode.port.postMessage({ command: "stop" });
      this.workletNode.disconnect();
      this.workletNode = null;
    }
  }
};

// src/ConvaiClient/convai_client.ts
var ConvaiClient = class {
  constructor(params) {
    this.apiKey = params.apiKey;
    this.characterId = params.characterId;
    this.enableAudio = params.enableAudio;
    this.languageCode = params.languageCode || "en-US";
    this.sessionId = params.sessionId;
    this.enableAudio = params.enableAudio;
    this.disableAudioGeneration = params.disableAudioGeneration || false;
    this.enableFacialData = params.enableFacialData || false;
    this.faceModel = params.faceModel || 3;
    if (this.enableAudio) {
      this.audioRecorder = new AudioRecorder();
      this.audioPlayer = new AudioPlayer(24e3);
    }
    console.warn = () => {
    };
  }
  validateBeforeRequest() {
    if (this.responseCallback == void 0) {
      console.log("CONVAI(ERROR): responseCallback needs to set before making any request.");
      return false;
    }
    return true;
  }
  resetSession() {
    this.sessionId = "-1";
    this.convaiGrpcClient = void 0;
  }
  setResponseCallback(fn) {
    this.responseCallback = (resp) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (resp.getSessionId() !== "") {
        this.sessionId = resp.getSessionId();
      }
      if (this.enableAudio && !this.disableAudioGeneration && resp.hasAudioResponse() && !((_a = resp.getAudioResponse()) == null ? void 0 : _a.hasVisemesData())) {
        (_d = this.audioPlayer) == null ? void 0 : _d.addChunk(resp.getAudioResponse().getAudioData_asU8(), (_c = (_b = resp == null ? void 0 : resp.getAudioResponse()) == null ? void 0 : _b.getAudioConfig()) == null ? void 0 : _c.getSampleRateHertz());
        if ((_e = resp.getAudioResponse()) == null ? void 0 : _e.getEndOfResponse()) {
          (_f = this.audioPlayer) == null ? void 0 : _f.addChunk(null);
        }
      } else if (this.enableAudio && !this.disableAudioGeneration && resp.hasAudioResponse() && ((_g = resp.getAudioResponse()) == null ? void 0 : _g.getEndOfResponse())) {
        (_h = this.audioPlayer) == null ? void 0 : _h.addChunk(null);
      }
      fn(resp);
    };
  }
  sendTextChunk(text) {
    if (!this.validateBeforeRequest()) {
      return;
    }
    if (this.convaiGrpcClient == void 0) {
      if (this.responseCallback) {
        this.convaiGrpcClient = new ConvaiGRPCClient(
          this.apiKey,
          this.characterId,
          this.sessionId,
          this.responseCallback,
          this.languageCode,
          this.disableAudioGeneration,
          this.enableFacialData,
          this.faceModel
        );
      }
    }
    if (this.convaiGrpcClient) {
      this.convaiGrpcClient.sendText(text);
    }
    this.convaiGrpcClient = void 0;
  }
  startAudioChunk() {
    var _a;
    if (!this.validateBeforeRequest()) {
      return;
    }
    if (this.enableAudio != true) {
      console.log("CONVAI(ERROR): Audio mode disabled.");
      return;
    }
    if (this.convaiGrpcClient == void 0) {
      this.convaiGrpcClient = new ConvaiGRPCClient(this.apiKey, this.characterId, this.sessionId, this.responseCallback, this.languageCode, this.disableAudioGeneration, this.enableFacialData, this.faceModel);
    }
    (_a = this.audioRecorder) == null ? void 0 : _a.start((chunk) => {
      var _a2;
      (_a2 = this.convaiGrpcClient) == null ? void 0 : _a2.sendAudioChunk(chunk);
    });
  }
  endAudioChunk() {
    var _a, _b;
    if (this.enableAudio != true) {
      console.log("CONVAI(ERROR): Audio mode disabled.");
      return;
    }
    (_a = this.audioRecorder) == null ? void 0 : _a.stop();
    (_b = this.convaiGrpcClient) == null ? void 0 : _b.finishSend();
    this.convaiGrpcClient = void 0;
  }
  toggleAudioVolume() {
    var _a, _b, _c;
    if (!this.enableAudio) {
      console.log("CONVAI(ERROR): Audio mode disabled.");
      return;
    }
    if (this.audioPlayer) {
      const currentVolume = (_a = this.audioPlayer) == null ? void 0 : _a.getVolume();
      if (currentVolume === 0) {
        (_b = this.audioPlayer) == null ? void 0 : _b.setAudioVolume(1);
      } else {
        (_c = this.audioPlayer) == null ? void 0 : _c.setAudioVolume(0);
      }
    }
  }
  getAudioVolume() {
    var _a;
    if (this.audioPlayer) {
      const currentVolume = (_a = this.audioPlayer) == null ? void 0 : _a.getVolume();
      return currentVolume;
    }
  }
  onAudioPlay(fn) {
    var _a;
    (_a = this.audioPlayer) == null ? void 0 : _a.onPlayStart(fn);
  }
  onAudioStop(fn) {
    var _a;
    (_a = this.audioPlayer) == null ? void 0 : _a.onPlayStop(fn);
  }
  closeConnection() {
    var _a;
    (_a = this.convaiGrpcClient) == null ? void 0 : _a.closeConnection();
    console.log("Connection closed with Convai.");
  }
};
export {
  ConvaiClient,
  OvrToMorph
};
//# sourceMappingURL=index.mjs.map