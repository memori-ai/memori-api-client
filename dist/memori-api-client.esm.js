import fetch$1 from 'cross-fetch';
import { SpeechConfig, SpeakerAudioDestination, AudioConfig, SpeechSynthesizer, SpeechRecognizer, ResultReason, CancellationReason } from 'microsoft-cognitiveservices-speech-sdk';

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var getApiUrl = function getApiUrl(hostname) {
  return hostname ? new URL(hostname.startsWith('http') ? hostname : "https://" + hostname).origin.replace('http://', 'https://') : 'https://backend.memori.ai';
};

var apiFetcher = function apiFetcher(path, opts) {
  return fetch$1("" + opts.apiUrl + path, _extends({}, opts, {
    body: opts != null && opts.body ? JSON.stringify(opts.body) : undefined,
    mode: 'cors',
    credentials: 'include',
    headers: _extends({
      // "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }, opts == null ? void 0 : opts.headers)
  })).then(function (res) {
    return opts != null && opts.text ? res.text() : res.json();
  });
};

var memori = (function (apiUrl) {
  return {
    /**
     * Gets a list of all the public Memori objects for a specific Tenant.
     * @param tenant - The name of the tenant
     * @returns A list of Memori objects
     */
    getTenantPublicMemoriList: function getTenantPublicMemoriList(tenant) {
      return apiFetcher("/TenantPublicMemori/" + encodeURI(tenant), {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of all the public Memori objects for a specific Tenant accessible from user session.
     * @param authToken - The login token
     * @returns A list of Memori objects
     */
    getPublicMemoriList: function getPublicMemoriList(authToken) {
      return apiFetcher("/PublicMemori/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of all Memori objects.
     * @param authToken - The login token
     * @returns A list of Memori objects
     */
    getAllMemori: function getAllMemori(authToken) {
      return apiFetcher("/AllMemori/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of Memori objects for the currently logged in User.
     * @param authToken - The login token
     * @returns A list of Memori objects
     */
    getUserMemoriList: function getUserMemoriList(authToken) {
      return apiFetcher("/Memori/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of Memori objects for the currently logged in User.
     * @param authToken - The login token
     * @returns A list of Memori objects
     */
    getSharedMemoriList: function getSharedMemoriList(authToken) {
      return apiFetcher("/SharedMemori/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of all the known Memori categories (or tags).
     * @param {string} tenant - The name of the tenant
     * @returns A list of Memori categories
     */
    getTenantCategories: function getTenantCategories(tenant) {
      return apiFetcher("/TenantMemoriCategories/" + encodeURI(tenant), {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of all the Memori Configuration objects.
     * @param authToken - The login token
     * @returns A list of Memori Configuration objects
     */
    getMemoriConfigs: function getMemoriConfigs(authToken) {
      return apiFetcher("/MemoriConfigs/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Register a new Memori object.
     * @param authToken - The login token
     * @param memori - The Memori object
     * @returns The created Memori object
     */
    createMemori: function createMemori(authToken, memori) {
      return apiFetcher("/Memori/" + authToken, {
        apiUrl: apiUrl,
        body: memori,
        method: 'POST'
      });
    },

    /**
     * Update an existing Memori object.
     * @param authToken - The login token
     * @param memori - The Memori object
     * @returns The created Memori object
     */
    updateMemori: function updateMemori(authToken, memori) {
      return apiFetcher("/Memori/" + authToken + "/" + memori.memoriID, {
        apiUrl: apiUrl,
        body: memori,
        method: 'PATCH'
      });
    },

    /**
     * Deletes an existing Memori object.
     * @param authToken - The login token
     * @param memori - The Memori object
     */
    deleteMemori: function deleteMemori(authToken, memori) {
      return apiFetcher("/Memori/" + authToken, {
        apiUrl: apiUrl,
        body: memori,
        method: 'DELETE'
      });
    },

    /**
     * Gets the details of a Memori object of the currently logged in User.
     * @param authToken - The login token
     * @param memoriID - The ID of the Memori object
     * @returns A Memori object
     */
    getMemoriById: function getMemoriById(authToken, memoriID) {
      return apiFetcher("/Memori/" + authToken + "/" + memoriID, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the details of a Memori object of the currently logged in User.
     * @param {string} tenantName - The Name of the Tenant
     * @param {string} userID - The ID of the User object
     * @param {string} memoriID - The ID of the Memori object
     * @param {string?} authToken - The login token
     * @returns A Memori object
     */
    getMemoriByUserAndId: function getMemoriByUserAndId(tenantName, userID, memoriID, authToken) {
      return apiFetcher("/MemoriById/" + tenantName + "/" + userID + "/" + memoriID + (authToken ? "/" + authToken : ''), {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the details of a Memori object by name, owner and tenant
     * @param {string} tenant - The name of the tenant
     * @param {string} userName - The name of the user
     * @param {string} memoriName - The name of the Memori object
     * @param {string=} [authToken=''] - The token of the Memori object
     */
    getMemori: function getMemori(tenant, userName, memoriName, authToken) {
      return apiFetcher("/Memori/" + encodeURI(tenant) + "/" + encodeURI(userName) + "/" + encodeURI(memoriName) + "/" + (authToken != null ? authToken : ''), {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the statistics for sessions opened in a specified interval for the specified Memori object.
     * @param {string} authToken - The login token
     * @param {string} memoriID - The ID of the Memori object
     * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getMemoriSessions: function getMemoriSessions(authToken, memoriID, dateFrom, dateTo) {
      return apiFetcher("/MemoriSessions/" + authToken + "/" + memoriID + (dateFrom ? "/" + dateFrom : '') + (dateFrom && dateTo ? "/" + dateTo : ''), {
        apiUrl: apiUrl
      });
    },

    /**
     * Transfers an existing Memori object to another User.
     * The new owner must be specified by either a OwnerUserID or a OwnerUserName-OwnerTenantName pair.
     * The OwnerUserName may also specify a user e-mail.
     * @param {string} authToken - The login token
     * @param {Memori} memori - The Memori object
     */
    transferMemori: function transferMemori(authToken, memori) {
      return apiFetcher("/TransferMemori/" + authToken, {
        apiUrl: apiUrl,
        body: memori,
        method: 'POST'
      });
    }
  };
});

var user = (function (apiUrl) {
  return {
    /**
     * Registers a new user.
     * @param user - The user object
     * @returns The created user object
     */
    userSignIn: function userSignIn(user) {
      return apiFetcher('/User', {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    },

    /**
     * Confirms the registration of a User and performs a Login.
     * @param user - The user object
     * @returns The created user object
     */
    userConfirmSignIn: function userConfirmSignIn(user) {
      return apiFetcher('/UserConfirm', {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    },

    /**
     * Tries a login with the specified credentials and returns a login token if successful.
     * @param user - The user object
     * @returns The logged in user object
     */
    userLogin: function userLogin(user) {
      return apiFetcher('/Login', {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    },

    /**
     * Logs out the user.
     * @param authToken - The login token
     */
    userLogout: function userLogout(authToken) {
      return apiFetcher("/Logout/" + authToken, {
        apiUrl: apiUrl,
        method: 'POST'
      });
    },

    /**
     * Gets the details of a User object.
     * @param authToken - The login token
     * @param userID - The user ID
     * @returns The user object
     */
    getUser: function getUser(authToken, userID) {
      return apiFetcher("/User/" + authToken + "/" + userID, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of all the existing User objects.
     * @param authToken - The login token
     * @returns A list of User objects
     */
    getUsersList: function getUsersList(authToken) {
      return apiFetcher("/Users/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Deletes the currently logged in User.
     * @param {string} authToken - The login token
     * @param {string} userID: The User ID
     */
    deleteUser: function deleteUser(authToken, userID) {
      return apiFetcher("/User/" + authToken + "/" + userID, {
        apiUrl: apiUrl,
        method: 'DELETE'
      });
    },

    /**
     * Updates the details of a User object.
     * @param authToken - The login token
     * @param userID - The user ID
     * @returns The user object
     */
    updateUser: function updateUser(authToken, userID, user) {
      return apiFetcher("/User/" + authToken + "/" + userID, {
        apiUrl: apiUrl,
        method: 'PATCH',
        body: user
      });
    },

    /**
     * Resets a User's password.
     * If found, the User receives a verification code via e-mail.
     * The code must be sent via the ResetConfirm API, passing the same User object
     * sent to this API with the addition of the verification code and the new password.
     * @param {User} user - The user object
     */
    resetPassword: function resetPassword(user) {
      return apiFetcher("/ResetPassword", {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    },

    /**
     * Confirms the password reset of a User and performs a Login
     * @param {User} user - The user object
     */
    resetConfirm: function resetConfirm(user) {
      return apiFetcher("/ResetConfirm", {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    },

    /**
     * Recovers a User's name and sends it to their configured e-mail.
     * @param {User} user - The user object
     */
    recoverUsername: function recoverUsername(user) {
      return apiFetcher("/RecoverUsername", {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    },

    /**
     * Gets the details of a Tenant object.
     * @param tenantName - The name of the tenant
     */
    getTenantConfig: function getTenantConfig(tenantName) {
      return apiFetcher("/Tenant/" + tenantName, {
        apiUrl: apiUrl
      });
    },

    /**
     * Re-sends the verification code to confirm a pending User registration.
     * @param {User} user - The user object
     */
    resendVerificationCode: function resendVerificationCode(user) {
      return apiFetcher("/ResendVerificationCode", {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    },

    /**
     * Registers a new user.
     * @param {User} user - The user object
     */
    createUser: function createUser(authToken, user) {
      return apiFetcher("/User/" + authToken, {
        apiUrl: apiUrl,
        body: user,
        method: 'POST'
      });
    }
  };
});

var integration = (function (apiUrl) {
  return {
    /**
     * Gets a list of integration objects for a specified Memori object.
     * @param memoriID - The id of the Memori object
     * @param authToken - The login token
     * @returns A list of Integration objects
     */
    getMemoriIntegrationsList: function getMemoriIntegrationsList(authToken, memoriID) {
      return apiFetcher("/Integrations/" + authToken + "/" + memoriID, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of integration objects.
     * @param authToken - The login token
     * @returns A list of Integration objects
     */
    getAllIntegrationsList: function getAllIntegrationsList(authToken) {
      return apiFetcher("/AllIntegrations/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the detail of an integration object of the currently logged in User.
     * @param authToken - The login token
     * @param integrationID - The ID of the integration object
     * @returns The Integration object
     */
    getIntegration: function getIntegration(authToken, integrationID) {
      return apiFetcher("/Integration/" + authToken + "/" + integrationID, {
        apiUrl: apiUrl
      });
    },

    /**
     * Delete an exsisting integration object.
     * @param authToken - The login token
     * @param integrationID - The ID of the integration object
     */
    deleteIntegration: function deleteIntegration(authToken, integrationID) {
      return apiFetcher("/Integration/" + authToken + "/" + integrationID, {
        apiUrl: apiUrl,
        method: 'DELETE'
      });
    },

    /**
     * Register a new integration object.
     * @param authToken - The login token
     * @param integration - The Integration object
     * @returns The Integration object
     */
    createIntegration: function createIntegration(authToken, integration) {
      return apiFetcher("/Integration/" + authToken, {
        apiUrl: apiUrl,
        method: 'POST',
        body: integration
      });
    },

    /**
     * Updates the integration object.
     * @param authToken - The login token
     * @param integrationID - The id of the Integration object
     * @param integration - The Integration object
     * @returns The Integration object
     */
    updateIntegration: function updateIntegration(authToken, integrationID, integration) {
      return apiFetcher("/Integration/" + authToken + "/" + integrationID, {
        apiUrl: apiUrl,
        method: 'PATCH',
        body: integration
      });
    }
  };
});

var asset = (function (apiUrl) {
  return {
    /**
     * URL to upload a file creating a new Asset object to access it.
     * @param {string} authToken - The login token
     * @param {string} memoriID - The memori ID
     * @param {string=} memoryID - The memory ID
     * @returns The URL to upload a file
     */
    getUploadAssetURL: function getUploadAssetURL(authToken, memoriID, memoryID) {
      return apiUrl + "/Asset/" + authToken + "/" + memoriID + (memoryID ? "/" + memoryID : '');
    },

    /**
     * Uploads a file and creates a new Asset object to access it.
     * @param {string} authToken - The login token
     * @param {string} memoriID - The memori ID
     * @param {string=} memoryID - The memory ID
     * @returns Response of an Upload Asset request.
     */
    uploadAsset: function () {
      var _uploadAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fileName, fileUrl, authToken, memoriID, memoryID) {
        var data, file, fileBlob, upload;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = new FormData();
                _context.next = 3;
                return fetch(fileUrl);

              case 3:
                file = _context.sent;
                _context.next = 6;
                return file.blob();

              case 6:
                fileBlob = _context.sent;
                data.append(fileName, fileBlob, fileName);
                _context.next = 10;
                return fetch(apiUrl + "/Asset/" + authToken + "/" + memoriID + (memoryID ? "/" + memoryID : ''), {
                  method: 'POST',
                  body: data
                });

              case 10:
                upload = _context.sent;
                _context.next = 13;
                return upload.json();

              case 13:
                return _context.abrupt("return", _context.sent);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function uploadAsset(_x, _x2, _x3, _x4, _x5) {
        return _uploadAsset.apply(this, arguments);
      }

      return uploadAsset;
    }(),

    /**
     * Downloads a file from an Asset object
     * @param {string} fileName - The file name
     * @param {string} sessionID - The session ID
     * @returns The asset file
     */
    getAsset: function getAsset(fileName, sessionID) {
      return apiFetcher("/Asset/" + fileName + "/" + sessionID, {
        apiUrl: apiUrl,
        method: 'GET'
      });
    },

    /**
     * Updates an Asset object
     * @param {string} authToken - The login token
     * @param {string} assetURL - The asset URL
     * @returns The updated asset object
     */
    updateAsset: function updateAsset(authToken, assetURL, asset) {
      return apiFetcher("/Asset/" + authToken + "/" + assetURL.split('/').reverse()[0], {
        apiUrl: apiUrl,
        method: 'PATCH',
        body: asset
      });
    },

    /**
     * Deletes an Asset object
     * @param {string} authToken - The login token
     * @param {string} assetURL - The asset URL
     */
    deleteAsset: function deleteAsset(authToken, assetURL) {
      return apiFetcher("/Asset/" + authToken + "/" + assetURL.split('/').reverse()[0], {
        apiUrl: apiUrl,
        method: 'DELETE'
      });
    }
  };
});

var invitation = (function (apiUrl) {
  return {
    /**
     * Gets a list of invitations sent by the currently logged in User.
     * @param {string} authToken - The login token
     * @returns The list of Invitation objects.
     */
    getSentInvitations: function getSentInvitations(authToken) {
      return apiFetcher("/SentInvitations/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of invitations received by the currently logged in User.
     * @param {string} authToken - The login token
     * @returns The list of Invitation objects.
     */
    getReceivedInvitations: function getReceivedInvitations(authToken) {
      return apiFetcher("/ReceivedInvitations/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets a list of all invitation objects
     * @param {string} authToken - The login token
     * @returns The list of Invitation objects.
     */
    getAllInvitations: function getAllInvitations(authToken) {
      return apiFetcher("/AllInvitations/" + authToken, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the details of an Invitation object of the currently logged in User.
     * @param {string} authToken - The login token
     * @param {string} invitationId - The ID of the Invitation object
     * @returns The Invitation object.
     */
    getInvitation: function getInvitation(authToken, invitationId) {
      return apiFetcher("/Invitation/" + authToken + "/" + invitationId, {
        apiUrl: apiUrl
      });
    },

    /**
     * Updates an existing Invitation object sent by the currently logged in User.
     * @param {string} authToken - The login token
     * @param {Invitation} invitation - The Invitation object
     * @returns The Invitation object.
     */
    updateInvitation: function updateInvitation(authToken, invitation) {
      return apiFetcher("/Invitation/" + authToken + "/" + invitation.invitationID, {
        apiUrl: apiUrl,
        method: 'PATCH',
        body: invitation
      });
    },

    /**
     * Deletes an existing Invitation object.
     * @param {string} authToken - The login token
     * @param {string} invitationId - The ID of the Invitation object
     * @returns The Invitation object.
     */
    deleteInvitation: function deleteInvitation(authToken, invitationId) {
      return apiFetcher("/Invitation/" + authToken + "/" + invitationId, {
        apiUrl: apiUrl,
        method: 'DELETE'
      });
    },

    /**
     * Accepts an Invitation object.
     * @param {string} authToken - The login token
     * @param {string} invitationId - The ID of the Invitation object
     * @returns The Invitation object.
     */
    acceptInvitation: function acceptInvitation(authToken, invitationId) {
      return apiFetcher("/AcceptInvitation/" + authToken + "/" + invitationId, {
        apiUrl: apiUrl,
        method: 'POST'
      });
    },

    /**
     * Rejects an Invitation object.
     * @param {string} authToken - The login token
     * @param {string} invitationId - The ID of the Invitation object
     * @returns The Invitation object.
     */
    rejectInvitation: function rejectInvitation(authToken, invitationId) {
      return apiFetcher("/RejectInvitation/" + authToken + "/" + invitationId, {
        apiUrl: apiUrl,
        method: 'POST'
      });
    },

    /**
     * Send a new Invitation object
     * @param {string} authToken - The login token
     * @param {Invitation} invitation - The Invitation object
     * @returns The Invitation object.
     */
    sendInvitation: function sendInvitation(authToken, invitation) {
      return apiFetcher("/SendInvitation/" + authToken, {
        apiUrl: apiUrl,
        method: 'POST',
        body: invitation
      });
    }
  };
});

var consumptionLogs = (function (apiUrl) {
  return {
    /**
     * Gets the Consumption Log objects for a specific Tenant in a specific date interval.
     * @param {string} authToken - The login token
     * @param {string} tenantID - The name of the tenant
     * @param {string} type - Type of consumption (i.e. granularity), it may either be Daily or Monthly
     * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMdd
     * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMdd
     * @returns The list of Consumption Logs objects.
     */
    getTenantConsumptionLogs: function getTenantConsumptionLogs(authToken, tenantID, type, dateFrom, dateTo) {
      return apiFetcher("/TenantConsumptionLogs/" + authToken + "/" + tenantID + "/" + type + (dateFrom ? "/" + dateFrom : '') + (dateFrom && dateTo ? "/" + dateTo : ''), {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the Consumption Log objects for a specific User in a specific date interval.
     * @param {string} authToken - The login token
     * @param {string} userID - The ID of the User object
     * @param {string} type - Type of consumption (i.e. granularity), it may either be Daily or Monthly
     * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMdd
     * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMdd
     * @returns The list of Consumption Logs objects.
     */
    getUserConsumptionLogs: function getUserConsumptionLogs(authToken, userID, type, dateFrom, dateTo) {
      return apiFetcher("/UserConsumptionLogs/" + authToken + "/" + userID + "/" + type + (dateFrom ? "/" + dateFrom : '') + (dateFrom && dateTo ? "/" + dateTo : ''), {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the Consumption Log objects for a specific Memori in a specific date interval.
     * @param {string} authToken - The login token
     * @param {string} memoriID - The ID of the Memori object
     * @param {string} type - Type of consumption (i.e. granularity), it may either be Daily or Monthly
     * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMdd
     * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMdd
     * @returns The list of Consumption Logs objects.
     */
    getMemoriConsumptionLogs: function getMemoriConsumptionLogs(authToken, memoriID, type, dateFrom, dateTo) {
      return apiFetcher("/MemoriConsumptionLogs/" + authToken + "/" + memoriID + "/" + type + (dateFrom ? "/" + dateFrom : '') + (dateFrom && dateTo ? "/" + dateTo : ''), {
        apiUrl: apiUrl
      });
    }
  };
});

var notifications = (function (apiUrl) {
  return {
    /**
     * Gets the Notification objects available for a specific Tenant.
     * @param {string} tenantID - The name of the tenant
     * @returns The list of Notification objects.
     */
    getTenantNotifications: function getTenantNotifications(tenantID) {
      return apiFetcher("/TenantNotifications/" + tenantID, {
        apiUrl: apiUrl
      });
    },

    /**
     * Gets the Notification objects available for a specific User.
     * @param {string} authToken - The login token
     * @returns The list of Notification objects.
     */
    getUserNotifications: function getUserNotifications(authToken) {
      return apiFetcher("/UserNotifications/" + authToken, {
        apiUrl: apiUrl
      });
    }
  };
});

var backendAPI = function backendAPI(apiUrl) {
  return _extends({
    asset: asset(apiUrl),
    memori: memori(apiUrl),
    user: user(apiUrl),
    integration: integration(apiUrl),
    invitation: invitation(apiUrl),
    consumptionLogs: consumptionLogs(apiUrl),
    notifications: notifications(apiUrl)
  }, asset(apiUrl), memori(apiUrl), user(apiUrl), integration(apiUrl), invitation(apiUrl), consumptionLogs(apiUrl), notifications(apiUrl));
};

/****************************
 *                          *
 *     CorrelationPairs     *
 *                          *
 ****************************/

var correlationPairs = (function (apiUrl) {
  return {
    /**
     * Lists all Correlation Pair objects.
     * @param {string} sessionId The session ID
     */
    getCorrelationPairs: function () {
      var _getCorrelationPairs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/CorrelationPairs/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getCorrelationPairs(_x) {
        return _getCorrelationPairs.apply(this, arguments);
      }

      return getCorrelationPairs;
    }(),

    /**
     * Removes an existing Correlation Pair object.
     * @param {string} sessionId The session ID
     * @param {string} pairId The Correlation Pair object ID
     */
    deleteCorrelationPair: function () {
      var _deleteCorrelationPair = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, pairId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/CorrelationPair/" + sessionId + "/" + pairId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteCorrelationPair(_x2, _x3) {
        return _deleteCorrelationPair.apply(this, arguments);
      }

      return deleteCorrelationPair;
    }()
  };
});

/******************
 *                *
 *     Dialog     *
 *                *
 ******************/

var dialog = (function (apiUrl) {
  return {
    /**
     * Submits a Text Entered event to the session's Dialog State Machine.
     * @param {object} params
     * @param {string} params.sessionId The session ID
     * @param {string} params.text The text entered by the user
     */
    postTextEnteredEvent: function () {
      var _postTextEnteredEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var sessionId, text;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionId = _ref.sessionId, text = _ref.text;
                return _context.abrupt("return", apiFetcher("/TextEnteredEvent/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: {
                    text: text
                  }
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function postTextEnteredEvent(_x) {
        return _postTextEnteredEvent.apply(this, arguments);
      }

      return postTextEnteredEvent;
    }(),

    /**
     * Submits a Place Changed event to the session's Dialog State Machine.
     * @param {object} params
     * @param {string} params.sessionId - The session ID
     * @param {string} params.placeName - The name of the place
     * @param {number} params.latitude - The latitude of the place
     * @param {number} params.longitude - The longitude of the place
     * @param {number} params.uncertaintyKm - The uncertainty of the place in kilometers
     */
    postPlaceChangedEvent: function () {
      var _postPlaceChangedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var sessionId, placeName, latitude, longitude, uncertaintyKm;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sessionId = _ref2.sessionId, placeName = _ref2.placeName, latitude = _ref2.latitude, longitude = _ref2.longitude, uncertaintyKm = _ref2.uncertaintyKm;
                return _context2.abrupt("return", apiFetcher("/PlaceChangedEvent/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: {
                    placeName: placeName,
                    latitude: latitude,
                    longitude: longitude,
                    uncertaintyKm: uncertaintyKm
                  }
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function postPlaceChangedEvent(_x2) {
        return _postPlaceChangedEvent.apply(this, arguments);
      }

      return postPlaceChangedEvent;
    }(),

    /**
     * Submits a Date Changed event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postDateChangedEvent: function () {
      var _postDateChangedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/DateChangedEvent/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function postDateChangedEvent(_x3) {
        return _postDateChangedEvent.apply(this, arguments);
      }

      return postDateChangedEvent;
    }(),

    /**
     * Submits a Tag Changed event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     * @param {string} tag The tag to set
     */
    postTagChangedEvent: function () {
      var _postTagChangedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, tag) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/TagChangedEvent/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: {
                    tag: tag
                  }
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function postTagChangedEvent(_x4, _x5) {
        return _postTagChangedEvent.apply(this, arguments);
      }

      return postTagChangedEvent;
    }(),

    /**
     * Submits a Timeout event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postTimeoutEvent: function () {
      var _postTimeoutEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/TimeoutEvent/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function postTimeoutEvent(_x6) {
        return _postTimeoutEvent.apply(this, arguments);
      }

      return postTimeoutEvent;
    }(),

    /**
     * Submits a Medium Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     * @param {Medium} medium The medium to set
     */
    postMediumSelectedEvent: function () {
      var _postMediumSelectedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(sessionId, medium) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", apiFetcher("/MediumSelectedEvent/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: {
                    medium: medium
                  }
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function postMediumSelectedEvent(_x7, _x8) {
        return _postMediumSelectedEvent.apply(this, arguments);
      }

      return postMediumSelectedEvent;
    }(),

    /**
     * Submits a Date Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postDateSelectedEvent: function () {
      var _postDateSelectedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(sessionId) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", apiFetcher("/DateSelectedEvent/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function postDateSelectedEvent(_x9) {
        return _postDateSelectedEvent.apply(this, arguments);
      }

      return postDateSelectedEvent;
    }(),

    /**
     * Submits a Place Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postPlaceSelectedEvent: function () {
      var _postPlaceSelectedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(sessionId) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", apiFetcher("/PlaceSelectedEvent/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function postPlaceSelectedEvent(_x10) {
        return _postPlaceSelectedEvent.apply(this, arguments);
      }

      return postPlaceSelectedEvent;
    }(),

    /**
     * Submits a Tag Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postTagSelectedEvent: function () {
      var _postTagSelectedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(sessionId) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", apiFetcher("/TagSelectedEvent/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function postTagSelectedEvent(_x11) {
        return _postTagSelectedEvent.apply(this, arguments);
      }

      return postTagSelectedEvent;
    }()
  };
});

/************************
 *                      *
 *     ImportExport     *
 *                      *
 ************************/

var importExport = (function (apiUrl) {
  return {
    /**
     * Imports memories from a CSV file.
     * @param {string} sessionId The session ID
     * @param {string[]} csvRows Rows of the CSV file.
     * @param {ImportCSVParams} params The specifications and content of the CSV file
     */
    importCSV: function () {
      var _importCSV = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId, csvRows, params) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/ImportExport/ImportCSV/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: _extends({
                    csvRows: csvRows
                  }, params)
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function importCSV(_x, _x2, _x3) {
        return _importCSV.apply(this, arguments);
      }

      return importCSV;
    }(),

    /**
     * Exports memories to a CSV file.
     * @param {string} sessionID The session ID
     * @param {ExportCSVParams} params - The specifications of the CSV file
     * @returns The CSV file content
     */
    exportCSV: function () {
      var _exportCSV = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionID, params) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/ImportExport/ExportCSV/" + sessionID, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: params,
                  text: true
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function exportCSV(_x4, _x5) {
        return _exportCSV.apply(this, arguments);
      }

      return exportCSV;
    }()
  };
});

/*******************
 *                 *
 *     Intents     *
 *                 *
 *******************/

var intents = (function (apiUrl) {
  return {
    /**
     * Lists all Intent objects.
     * @param {string} sessionId The session ID
     */
    getIntents: function () {
      var _getIntents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/Intents/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getIntents(_x) {
        return _getIntents.apply(this, arguments);
      }

      return getIntents;
    }(),

    /**
     * Gets the details of an Intent object.
     * @param {string} sessionId The session ID
     * @param {string} intentId The Intent object ID
     */
    getIntent: function () {
      var _getIntent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, intentId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/Intent/" + sessionId + "/" + intentId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getIntent(_x2, _x3) {
        return _getIntent.apply(this, arguments);
      }

      return getIntent;
    }(),

    /**
     * Updates an existing Intent object.
     * @param {string} sessionId The session ID
     * @param {Intent} intent The Intent object
     */
    patchIntent: function () {
      var _patchIntent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, intent) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/Intent/" + sessionId + "/" + intent.intentID, {
                  method: 'PATCH',
                  apiUrl: apiUrl,
                  body: intent
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function patchIntent(_x4, _x5) {
        return _patchIntent.apply(this, arguments);
      }

      return patchIntent;
    }(),

    /**
     * Removes an existing Intent object.
     * @param {string} sessionId The session ID
     * @param {string} intentId The Intent object ID
     */
    deleteIntent: function () {
      var _deleteIntent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, intentId) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/Intent/" + sessionId + "/" + intentId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteIntent(_x6, _x7) {
        return _deleteIntent.apply(this, arguments);
      }

      return deleteIntent;
    }(),

    /**
     * Adds a new Intent object.
     * @param {string} sessionId The session ID
     * @param {Intent} intent The Intent object
     */
    createIntent: function () {
      var _createIntent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, intent) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/Intent/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: intent
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function createIntent(_x8, _x9) {
        return _createIntent.apply(this, arguments);
      }

      return createIntent;
    }(),

    /**
     * Lists all Intent Slot objects.
     * @param {string} sessionId The session ID
     */
    getIntentSlots: function () {
      var _getIntentSlots = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(sessionId) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", apiFetcher("/IntentSlots/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getIntentSlots(_x10) {
        return _getIntentSlots.apply(this, arguments);
      }

      return getIntentSlots;
    }(),

    /**
     * Gets the details of an Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {string} slotId The Intent Slot object ID
     */
    getIntentSlot: function () {
      var _getIntentSlot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(sessionId, slotId) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", apiFetcher("/IntentSlot/" + sessionId + "/" + slotId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getIntentSlot(_x11, _x12) {
        return _getIntentSlot.apply(this, arguments);
      }

      return getIntentSlot;
    }(),

    /**
     * Updates an existing Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {IntentSlot} intentSlot The Intent Slot object
     */
    patchIntentSlot: function () {
      var _patchIntentSlot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(sessionId, intentSlot) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", apiFetcher("/IntentSlot/" + sessionId + "/" + intentSlot.intentSlotID, {
                  method: 'PATCH',
                  apiUrl: apiUrl,
                  body: intentSlot
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function patchIntentSlot(_x13, _x14) {
        return _patchIntentSlot.apply(this, arguments);
      }

      return patchIntentSlot;
    }(),

    /**
     * Removes an existing Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {string} slotId The Intent Slot object ID
     */
    deleteIntentSlot: function () {
      var _deleteIntentSlot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(sessionId, slotId) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", apiFetcher("/IntentSlot/" + sessionId + "/" + slotId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function deleteIntentSlot(_x15, _x16) {
        return _deleteIntentSlot.apply(this, arguments);
      }

      return deleteIntentSlot;
    }(),

    /**
     * Adds a new Intent Slot object.
     * @param {string} sessionId The session ID
     */
    createIntentSlot: function () {
      var _createIntentSlot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(sessionId, intentSlot) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", apiFetcher("/IntentSlot/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: intentSlot
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function createIntentSlot(_x17, _x18) {
        return _createIntentSlot.apply(this, arguments);
      }

      return createIntentSlot;
    }()
  };
});

/****************************
 *                          *
 *     LocalizationKeys     *
 *                          *
 ****************************/

var localizationKeys = (function (apiUrl) {
  return {
    /**
     * Lists all Localizaiton Keys.
     * @param {string} sessionId The session ID
     */
    getLocalizationKeys: function () {
      var _getLocalizationKeys = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/LocalizationKeys/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getLocalizationKeys(_x) {
        return _getLocalizationKeys.apply(this, arguments);
      }

      return getLocalizationKeys;
    }(),

    /**
     * Get an existing Localizaiton Key.
     * @param {string} sessionId The session ID
     * @param {string} key The key of the Localization Key
     */
    getLocalizationKey: function () {
      var _getLocalizationKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, key) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/LocalizationKey/" + sessionId + "/" + key, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getLocalizationKey(_x2, _x3) {
        return _getLocalizationKey.apply(this, arguments);
      }

      return getLocalizationKey;
    }(),

    /**
     * Removes an existing Localizaiton Key. This is only possible if the key is part of
     *  a key set, where a key set is a set of keys of a common prefix and an index,
     *  e.g.: <code>INPUT_QUIT_1</code>, <code>INPUT_QUIT_2</code> etc.
     *  Any index can be specified, the key set will be reordered appropriately.
     * @param {string} sessionId The session ID
     * @param {string} key The key of the Localization Key
     */
    deleteLocalizationKey: function () {
      var _deleteLocalizationKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, key) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/LocalizationKey/" + sessionId + "/" + key, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteLocalizationKey(_x4, _x5) {
        return _deleteLocalizationKey.apply(this, arguments);
      }

      return deleteLocalizationKey;
    }(),

    /**
     * Add an new Localization Key. This is only possible if the key is part of
     *  a key set, where a key set is a set of keys of a common prefix and an index,
     *  e.g.: <code>INPUT_QUIT_1</code>, <code>INPUT_QUIT_2</code> etc.
     *  Any index can be specified, the key set will be reordered appropriately.
     * @param {string} sessionId The session ID
     * @param {LocalizaitonKeyContent} localizationKey Localization Key
     */
    postLocalizationKey: function () {
      var _postLocalizationKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, localizationKey) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/LocalizationKey/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: localizationKey
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function postLocalizationKey(_x6, _x7) {
        return _postLocalizationKey.apply(this, arguments);
      }

      return postLocalizationKey;
    }(),

    /**
     * Updates an existing Localization Key.
     * @param {string} sessionId The session ID
     * @param {LocalizationKey} localizationKey Localization Key
     */
    patchLocalizationKey: function () {
      var _patchLocalizationKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, localizationKey) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/LocalizationKey/" + sessionId, {
                  method: 'PATCH',
                  apiUrl: apiUrl,
                  body: localizationKey
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function patchLocalizationKey(_x8, _x9) {
        return _patchLocalizationKey.apply(this, arguments);
      }

      return patchLocalizationKey;
    }()
  };
});

/*****************
 *               *
 *     Media     *
 *               *
 *****************/

var media = (function (apiUrl) {
  return {
    /**
     * Lists all Medium objects of a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    getMedia: function () {
      var _getMedia = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId, memoryId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/Media/" + sessionId + "/" + memoryId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getMedia(_x, _x2) {
        return _getMedia.apply(this, arguments);
      }

      return getMedia;
    }(),

    /**
     * Removes all Medium objects from a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    deleteMedia: function () {
      var _deleteMedia = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, memoryId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/Media/" + sessionId + "/" + memoryId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteMedia(_x3, _x4) {
        return _deleteMedia.apply(this, arguments);
      }

      return deleteMedia;
    }(),

    /**
     * Gets the details of a Medium object of a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     * @param {string} mediumId The Medium object ID
     */
    getMedium: function () {
      var _getMedium = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, memoryId, mediumId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/Medium/" + sessionId + "/" + memoryId + "/" + mediumId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getMedium(_x5, _x6, _x7) {
        return _getMedium.apply(this, arguments);
      }

      return getMedium;
    }(),

    /**
     * Updates an existing Medium object of a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     * @param {string} mediumId The Medium object ID
     */
    patchMedium: function () {
      var _patchMedium = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, memoryId, mediumId) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/Medium/" + sessionId + "/" + memoryId + "/" + mediumId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function patchMedium(_x8, _x9, _x10) {
        return _patchMedium.apply(this, arguments);
      }

      return patchMedium;
    }(),

    /**
     * Removes an existing Medium object from a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     * @param {string} mediumId The Medium object ID
     */
    deleteMedium: function deleteMedium(sessionId, memoryId, mediumId) {
      return apiFetcher("/Medium/" + sessionId + "/" + memoryId + "/" + mediumId, {
        method: 'GET',
        apiUrl: apiUrl
      });
    },

    /**
     * Adds a new Medium object to a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    postMedium: function () {
      var _postMedium = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, memoryId) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/Medium/" + sessionId + "/" + memoryId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function postMedium(_x11, _x12) {
        return _postMedium.apply(this, arguments);
      }

      return postMedium;
    }()
  };
});

/********************
 *                  *
 *     Memories     *
 *                  *
 ********************/

var memories = (function (apiUrl) {
  return {
    /**
     * Lists all Memory objects.
     * @param {string} sessionId The session ID
     */
    getMemories: function () {
      var _getMemories = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/Memories/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getMemories(_x) {
        return _getMemories.apply(this, arguments);
      }

      return getMemories;
    }(),

    /**
     * Gets the details of a Memory object.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    getMemory: function () {
      var _getMemory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, memoryId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/Memory/" + sessionId + "/" + memoryId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getMemory(_x2, _x3) {
        return _getMemory.apply(this, arguments);
      }

      return getMemory;
    }(),

    /**
     * Updates an existing Memory object.
     * @param {string} sessionId The session ID
     * @param {Memory} memory The Memory object
     */
    patchMemory: function () {
      var _patchMemory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, memory) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/Memory/" + sessionId + "/" + memory.memoryID, {
                  method: 'PATCH',
                  apiUrl: apiUrl,
                  body: memory
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function patchMemory(_x4, _x5) {
        return _patchMemory.apply(this, arguments);
      }

      return patchMemory;
    }(),

    /**
     * Removes an existing Memory object.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    deleteMemory: function () {
      var _deleteMemory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, memoryId) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/Memory/" + sessionId + "/" + memoryId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteMemory(_x6, _x7) {
        return _deleteMemory.apply(this, arguments);
      }

      return deleteMemory;
    }(),

    /**
     * Adds a new Memory object.
     * @param {string} sessionId The session ID
     * @param {Memory} memory The Memory object
     */
    postMemory: function () {
      var _postMemory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, memory) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/Memory/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: memory
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function postMemory(_x8, _x9) {
        return _postMemory.apply(this, arguments);
      }

      return postMemory;
    }(),

    /**
     * Checks if a Memory object is accessible from the specified session.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    getMemoryAccess: function () {
      var _getMemoryAccess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(sessionId, memoryId) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", apiFetcher("/MemoryAccess/" + sessionId + "/" + memoryId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getMemoryAccess(_x10, _x11) {
        return _getMemoryAccess.apply(this, arguments);
      }

      return getMemoryAccess;
    }()
  };
});

/***************
 *             *
 *     NLP     *
 *             *
 ***************/

var nlp = (function (apiUrl) {
  return {
    /**
     * Looks up the vector definition for a word.
     * @param {string} sessionId The session ID
     * @param {string} word Word to be looked up
     */
    getWordVector: function () {
      var _getWordVector = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId, word) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/WordVector/" + sessionId + "/" + word, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getWordVector(_x, _x2) {
        return _getWordVector.apply(this, arguments);
      }

      return getWordVector;
    }(),

    /**
     * Searches for the 10 words most semantically similar words to the specified word.
     * @param {string} sessionId The session ID
     * @param {string} word Word to be looked up
     */
    getSimilarWords: function () {
      var _getSimilarWords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, word) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/SimilarWords/" + sessionId + "/" + word, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getSimilarWords(_x3, _x4) {
        return _getSimilarWords.apply(this, arguments);
      }

      return getSimilarWords;
    }(),

    /**
     * Tries to guess the language of a sentence by analyzing key word occurrences.
     * @param {string} sessionId The session ID
     * @param {string} text Text to be used for guessing the language.
     */
    guessLanguage: function () {
      var _guessLanguage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, text) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/GuessLanguage/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: {
                    text: text
                  }
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function guessLanguage(_x5, _x6) {
        return _guessLanguage.apply(this, arguments);
      }

      return guessLanguage;
    }(),

    /**
     * Computes the similarity between a reference and a comparison sentences.
     * @param {string} sessionId The session ID
     * @param {string} referenceText Text of the reference sentence.
     * @param {'QUESTION' | 'ANSWER'} referenceTextType Type of reference text, i.e. question or answer. Only types supported are: 'QUESTION' and 'ANSWER'.
     * @param {string} comparisonText Text of the comparison sentence.
     * @param {'QUESTION' | 'ANSWER'} comparisonTextType Type of comparison text, i.e. question or answer. Only types supported are: 'QUESTION' and 'ANSWER'.
     */
    computeSimilarity: function () {
      var _computeSimilarity = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, referenceText, referenceTextType, comparisonText, comparisonTextType) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/ComputeSimilarity/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: {
                    referenceText: referenceText,
                    referenceTextType: referenceTextType,
                    comparisonText: comparisonText,
                    comparisonTextType: comparisonTextType
                  }
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function computeSimilarity(_x7, _x8, _x9, _x10, _x11) {
        return _computeSimilarity.apply(this, arguments);
      }

      return computeSimilarity;
    }(),

    /**
     * Checks the words of a sentence for their definition in the word vector dictionary.
     * @param {string} sessionId The session ID
     * @param {string} text Text of the sentence.
     */
    checkWords: function () {
      var _checkWords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, text) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/CheckWords/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: {
                    text: text
                  }
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function checkWords(_x12, _x13) {
        return _checkWords.apply(this, arguments);
      }

      return checkWords;
    }()
  };
});

/******************
 *                *
 *     People     *
 *                *
 ******************/

var people = (function (apiUrl) {
  return {
    /**
     * Lists all Person objects.
     * @param {string} sessionId The session ID
     */
    getPeople: function () {
      var _getPeople = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/People/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getPeople(_x) {
        return _getPeople.apply(this, arguments);
      }

      return getPeople;
    }(),

    /**
     * Gets the details of a Person object.
     * @param {string} sessionId The session ID
     * @param {string} personId The Person object ID
     */
    getPerson: function () {
      var _getPerson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, personId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/Person/" + sessionId + "/" + personId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPerson(_x2, _x3) {
        return _getPerson.apply(this, arguments);
      }

      return getPerson;
    }(),

    /**
     * Updates an existing Person object.
     * @param {string} sessionId The session ID
     * @param {Person} person The Person object
     */
    patchPerson: function () {
      var _patchPerson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, person) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/Person/" + sessionId + "/" + person.personID, {
                  method: 'PATCH',
                  body: person,
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function patchPerson(_x4, _x5) {
        return _patchPerson.apply(this, arguments);
      }

      return patchPerson;
    }(),

    /**
     * Removes an existing Person object.
     * @param {string} sessionId The session ID
     * @param {string} personId The Person object ID
     */
    deletePerson: function () {
      var _deletePerson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, personId) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/Person/" + sessionId + "/" + personId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deletePerson(_x6, _x7) {
        return _deletePerson.apply(this, arguments);
      }

      return deletePerson;
    }(),

    /**
     * Adds a new Person object.
     * @param {string} sessionId - The session ID
     * @param {Person} person - The Person object
     */
    postPerson: function () {
      var _postPerson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, person) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/Person/" + sessionId, {
                  method: 'POST',
                  body: person,
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function postPerson(_x8, _x9) {
        return _postPerson.apply(this, arguments);
      }

      return postPerson;
    }()
  };
});

/*****************************
 *                           *
 *     PromptedQuestions     *
 *                           *
 *****************************/

var promptedQuestions = (function (apiUrl) {
  return {
    /**
     * Lists all Prompted Question objects.
     * @param {string} sessionId The session ID
     */
    getPromptedQuestions: function () {
      var _getPromptedQuestions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/PromptedQuestions/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getPromptedQuestions(_x) {
        return _getPromptedQuestions.apply(this, arguments);
      }

      return getPromptedQuestions;
    }(),

    /**
     * Gets the details of a Prompted Question object.
     * @param {string} sessionId The session ID
     * @param {string} promptId The Prompted Question object ID
     */
    getPromptedQuestion: function () {
      var _getPromptedQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, promptId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/PromptedQuestion/" + sessionId + "/" + promptId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPromptedQuestion(_x2, _x3) {
        return _getPromptedQuestion.apply(this, arguments);
      }

      return getPromptedQuestion;
    }(),

    /**
     * Updates an existing Prompted Question object.
     * @param {string} sessionId The session ID
     * @param {string} promptId The Prompted Question object ID
     */
    patchPromptedQuestion: function () {
      var _patchPromptedQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, promptId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/PromptedQuestion/" + sessionId + "/" + promptId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function patchPromptedQuestion(_x4, _x5) {
        return _patchPromptedQuestion.apply(this, arguments);
      }

      return patchPromptedQuestion;
    }(),

    /**
     * Removes an existing Prompted Question object.
     * @param {string} sessionId The session ID
     * @param {string} promptId The Prompted Question object ID
     */
    deletePromptedQuestion: function () {
      var _deletePromptedQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, promptId) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/PromptedQuestion/" + sessionId + "/" + promptId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deletePromptedQuestion(_x6, _x7) {
        return _deletePromptedQuestion.apply(this, arguments);
      }

      return deletePromptedQuestion;
    }(),

    /**
     * Adds a new Prompted Question object.
     * @param {string} sessionId The session ID
     */
    postPromptedQuestion: function () {
      var _postPromptedQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/PromptedQuestion/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function postPromptedQuestion(_x8) {
        return _postPromptedQuestion.apply(this, arguments);
      }

      return postPromptedQuestion;
    }()
  };
});

/******************
 *                *
 *     Search     *
 *                *
 ******************/

var search = (function (apiUrl) {
  return {
    /**
     * Searches for matching Memory objects using the same algorithm employed in the Text Entered event of the R1 state of the Dialog State Machine.
     * @param {string} sessionId The session ID
     * @param {SearchQuery} query Search query params
     */
    searchMemory: function () {
      var _searchMemory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId, query) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/Search/" + sessionId, {
                  method: 'POST',
                  body: query,
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchMemory(_x, _x2) {
        return _searchMemory.apply(this, arguments);
      }

      return searchMemory;
    }(),

    /**
     * Picks up to 5 random Memory objects using the same algorithm employed in the
     * Timeout event of the R1 state of the Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postRandom: function () {
      var _postRandom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/Random/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function postRandom(_x3) {
        return _postRandom.apply(this, arguments);
      }

      return postRandom;
    }(),

    /**
     * Picks up to 20 Memory Hint objects, obtained by searching for Story objects with a date or place set,
     * and clustering dates and places within an uncertainty of at least 1 year or at least 100 km.
     * Each Memory Hint may either suggest a date or a place, but not both.
     * @param {string} sessionId The session ID
     */
    postHints: function () {
      var _postHints = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/Hints/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function postHints(_x4) {
        return _postHints.apply(this, arguments);
      }

      return postHints;
    }()
  };
});

/*******************
 *                 *
 *     Session     *
 *                 *
 *******************/

var session = (function (apiUrl) {
  return {
    /**
     * Initializes a new Dialog State Machine session for an existing Memori.
     */
    initSession: function () {
      var _initSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/Session", {
                  method: 'POST',
                  body: params,
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function initSession(_x) {
        return _initSession.apply(this, arguments);
      }

      return initSession;
    }(),

    /**
     * Returns the current state of a session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    getSession: function () {
      var _getSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/Session/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getSession(_x2) {
        return _getSession.apply(this, arguments);
      }

      return getSession;
    }(),

    /**
     * Closes the session and disposes of its Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    deleteSession: function () {
      var _deleteSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/Session/" + sessionId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteSession(_x3) {
        return _deleteSession.apply(this, arguments);
      }

      return deleteSession;
    }()
  };
});

/*****************
 *               *
 *     Stats     *
 *               *
 *****************/

var stats = (function (apiUrl) {
  return {
    /**
     * Computes usage statistics for the Memori of the current session.
     * @param {string} sessionId The session ID
     */
    getStatistics: function () {
      var _getStatistics = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/Statistics/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getStatistics(_x) {
        return _getStatistics.apply(this, arguments);
      }

      return getStatistics;
    }(),

    /**
     * Computes content quality indexes for a Memori.
     * @param {string} memoriID - The Memori object ID
     */
    getContentQualityIndexes: function () {
      var _getContentQualityIndexes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(memoriID) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/ContentQualityIndexes/" + memoriID, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getContentQualityIndexes(_x2) {
        return _getContentQualityIndexes.apply(this, arguments);
      }

      return getContentQualityIndexes;
    }(),

    /**
     * Computes text quality indexes for a Memori.
     * @param {string} sessionId - The session ID
     */
    getTextQualityIndexes: function () {
      var _getTextQualityIndexes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/TextQualityIndexes/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getTextQualityIndexes(_x3) {
        return _getTextQualityIndexes.apply(this, arguments);
      }

      return getTextQualityIndexes;
    }(),

    /**
     * Get the Event Log objects for the Memori of the current session in a specific date interval
     * @param {string} sessionId The session ID
     * @param {string} strDateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {string} strDateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getEventLogs: function () {
      var _getEventLogs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, strDateFrom, strDateTo) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/EventLogs/" + sessionId + "/" + strDateFrom + "/" + strDateTo, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getEventLogs(_x4, _x5, _x6) {
        return _getEventLogs.apply(this, arguments);
      }

      return getEventLogs;
    }(),

    /**
     * Gets the Event Log objects for a specific Memory object in a specific date interval.
     * @param {string} sessionId - The session ID
     * @param {string} memoryId - The Memory object ID
     * @param {string} strDateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {string} strDateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getMemoryEventLogs: function () {
      var _getMemoryEventLogs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, memoryId, strDateFrom, strDateTo) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/EventLogs/" + sessionId + "/" + memoryId + "/" + strDateFrom + "/" + strDateTo, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getMemoryEventLogs(_x7, _x8, _x9, _x10) {
        return _getMemoryEventLogs.apply(this, arguments);
      }

      return getMemoryEventLogs;
    }(),

    /**
     * Gets the Event Log objects for a specific Intent object in a specific date interval.
     * @param {string} sessionId - The session ID
     * @param {string} intentId - The Intent object ID
     * @param {string} strDateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {string} strDateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getIntentEventLogs: function () {
      var _getIntentEventLogs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(sessionId, intentId, strDateFrom, strDateTo) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", apiFetcher("/EventLogs/" + sessionId + "/" + intentId + "/" + strDateFrom + "/" + strDateTo, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getIntentEventLogs(_x11, _x12, _x13, _x14) {
        return _getIntentEventLogs.apply(this, arguments);
      }

      return getIntentEventLogs;
    }()
  };
});

/*******************************
 *                             *
 *     UnansweredQuestions     *
 *                             *
 *******************************/

var unansweredQuestions = (function (apiUrl) {
  return {
    /**
     * Lists all Unanswered Question objects.
     * @param {string} sessionId The session ID
     */
    getUnansweredQuestions: function () {
      var _getUnansweredQuestions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/UnansweredQuestions/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUnansweredQuestions(_x) {
        return _getUnansweredQuestions.apply(this, arguments);
      }

      return getUnansweredQuestions;
    }(),

    /**
     * Removes an existing Unanswered Question object.
     * @param {string} sessionId The session ID
     * @param {string} unansweredQuestionId The Unanswered Question object ID
     */
    deleteUnansweredQuestion: function () {
      var _deleteUnansweredQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, unansweredQuestionId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/UnansweredQuestion/" + sessionId + "/" + unansweredQuestionId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteUnansweredQuestion(_x2, _x3) {
        return _deleteUnansweredQuestion.apply(this, arguments);
      }

      return deleteUnansweredQuestion;
    }()
  };
});

/****************************
 *                          *
 *       ContextVars        *
 *                          *
 ****************************/

var contextVars = (function (apiUrl) {
  return {
    /**
     * Gets a list of currently known context variables.
     * @param {string} sessionId The session ID
     */
    getContextVars: function () {
      var _getContextVars = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/ContextVars/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getContextVars(_x) {
        return _getContextVars.apply(this, arguments);
      }

      return getContextVars;
    }(),

    /**
     * Gets a list of currently known context variable names.
     * @param {string} sessionId The session ID
     */
    getContextVarNames: function () {
      var _getContextVarNames = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/ContextVarNames/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getContextVarNames(_x2) {
        return _getContextVarNames.apply(this, arguments);
      }

      return getContextVarNames;
    }(),

    /**
     * /memori/v2/ContextVarValues/{strSessionID}/{contextVarName}
     * @param {string} sessionId The session ID
     * @param {string} contextVarName The name of the context variable
     */
    getContextVarValues: function () {
      var _getContextVarValues = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, contextVarName) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/ContextVarValues/" + sessionId + "/" + contextVarName, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getContextVarValues(_x3, _x4) {
        return _getContextVarValues.apply(this, arguments);
      }

      return getContextVarValues;
    }()
  };
});

/****************************
 *                          *
 *     CustomDictionary     *
 *                          *
 ****************************/

var customDictionary = (function (apiUrl) {
  return {
    /**
     * Lists all Custom Words.
     * @param {string} sessionId The session ID
     */
    getCustomWords: function () {
      var _getCustomWords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/CustomWords/" + sessionId, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getCustomWords(_x) {
        return _getCustomWords.apply(this, arguments);
      }

      return getCustomWords;
    }(),

    /**
     * Gets the details of a Custom Word object.
     * @param {string} sessionId The session ID
     * @param {string} customWordID The Custom Word object ID
     */
    getCustomWord: function () {
      var _getCustomWord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, customWordID) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/CustomWord/" + sessionId + "/" + customWordID, {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getCustomWord(_x2, _x3) {
        return _getCustomWord.apply(this, arguments);
      }

      return getCustomWord;
    }(),

    /**
     * Removes an existing Custom Word object.
     * @param {string} sessionId The session ID
     * @param {string} key The key of the Custom Word
     */
    deleteCustomWord: function () {
      var _deleteCustomWord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, key) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/CustomWord/" + sessionId + "/" + key, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteCustomWord(_x4, _x5) {
        return _deleteCustomWord.apply(this, arguments);
      }

      return deleteCustomWord;
    }(),

    /**
     * Adds a new Custom Word object.
     * @param {string} sessionId The session ID
     * @param {CustomWord} customWord Custom Word
     */
    postCustomWord: function () {
      var _postCustomWord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sessionId, customWord) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", apiFetcher("/CustomWord/" + sessionId, {
                  method: 'POST',
                  apiUrl: apiUrl,
                  body: customWord
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function postCustomWord(_x6, _x7) {
        return _postCustomWord.apply(this, arguments);
      }

      return postCustomWord;
    }(),

    /**
     * Updates an existing Custom Word object.
     * Only the Definition field is considered for update. To change the Word field a new Custom Word must be added and the existing must be removed.
     * @param {string} sessionId The session ID
     * @param {CustomWord} customWord Custom Word
     */
    patchCustomWord: function () {
      var _patchCustomWord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sessionId, customWord) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", apiFetcher("/CustomWord/" + sessionId + "/" + customWord.customWordID, {
                  method: 'PATCH',
                  apiUrl: apiUrl,
                  body: customWord
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function patchCustomWord(_x8, _x9) {
        return _patchCustomWord.apply(this, arguments);
      }

      return patchCustomWord;
    }()
  };
});

/*************************
 *                       *
 *       ChatLogs        *
 *                       *
 *************************/

var chatLogs = (function (apiUrl) {
  return {
    /**
     * Gets the Chat Log objects for the Memori of the current session in a specific date interval.
     * @param {string} sessionId The session ID
     * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getChatLogs: function () {
      var _getChatLogs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sessionId, dateFrom, dateTo) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", apiFetcher("/ChatLogs/" + sessionId + (dateFrom ? "/" + dateFrom : '') + (dateFrom && dateTo ? "/" + dateTo : ''), {
                  method: 'GET',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getChatLogs(_x, _x2, _x3) {
        return _getChatLogs.apply(this, arguments);
      }

      return getChatLogs;
    }(),

    /**
     * Removes all Chat Log objects in a specific date internval.
     * @param {string} sessionId The session ID
     * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    deleteChatLogs: function () {
      var _deleteChatLogs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sessionId, dateFrom, dateTo) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", apiFetcher("/ChatLogs/" + sessionId + (dateFrom ? "/" + dateFrom : '') + (dateFrom && dateTo ? "/" + dateTo : ''), {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteChatLogs(_x4, _x5, _x6) {
        return _deleteChatLogs.apply(this, arguments);
      }

      return deleteChatLogs;
    }(),

    /**
     * Removes an existing Chat Log object.
     * @param {string} sessionId The session ID
     * @param {string} chatLogId The Chat Log object ID
     */
    deleteChatLog: function () {
      var _deleteChatLog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sessionId, chatLogId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", apiFetcher("/ChatLog/" + sessionId + "/" + chatLogId, {
                  method: 'DELETE',
                  apiUrl: apiUrl
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteChatLog(_x7, _x8) {
        return _deleteChatLog.apply(this, arguments);
      }

      return deleteChatLog;
    }()
  };
});

var engine = (function (apiUrl) {
  return _extends({
    correlationPairs: correlationPairs(apiUrl)
  }, correlationPairs(apiUrl), {
    dialog: dialog(apiUrl)
  }, dialog(apiUrl), {
    importExport: importExport(apiUrl)
  }, importExport(apiUrl), {
    intents: intents(apiUrl)
  }, intents(apiUrl), {
    localizationKeys: localizationKeys(apiUrl)
  }, localizationKeys(apiUrl), {
    media: media(apiUrl)
  }, media(apiUrl), {
    memories: memories(apiUrl)
  }, memories(apiUrl), {
    nlp: nlp(apiUrl)
  }, nlp(apiUrl), {
    people: people(apiUrl)
  }, people(apiUrl), {
    promptedQuestions: promptedQuestions(apiUrl)
  }, promptedQuestions(apiUrl), {
    search: search(apiUrl)
  }, search(apiUrl), {
    session: session(apiUrl)
  }, session(apiUrl), {
    stats: stats(apiUrl)
  }, stats(apiUrl), {
    unansweredQuestions: unansweredQuestions(apiUrl)
  }, unansweredQuestions(apiUrl), {
    contextVars: contextVars(apiUrl)
  }, contextVars(apiUrl), {
    customDictionary: customDictionary(apiUrl)
  }, customDictionary(apiUrl), {
    chatLogs: chatLogs(apiUrl)
  }, chatLogs(apiUrl));
});

var allowedMediaTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/pdf', 'video/mp4', 'video/avi', 'audio/mpeg3', 'audio/wav', 'audio/mpeg', 'video/mpeg', 'model/gltf-binary'];
var anonTag = '👤';

var constants = {
  __proto__: null,
  allowedMediaTypes: allowedMediaTypes,
  anonTag: anonTag
};

var getTTSVoice = function getTTSVoice(lang, voiceType) {
  var voice = '';
  var voiceLang = lang.toUpperCase();

  switch (voiceLang) {
    case 'IT':
      voice = "" + (voiceType === 'MALE' ? 'it-IT-DiegoNeural' : 'it-IT-ElsaNeural');
      break;

    case 'DE':
      voice = "" + (voiceType === 'MALE' ? 'de-DE-ConradNeural' : 'de-DE-KatjaNeural');
      break;

    case 'EN':
      voice = "" + (voiceType === 'MALE' ? 'en-GB-RyanNeural' : 'en-GB-SoniaNeural');
      break;

    case 'ES':
      voice = "" + (voiceType === 'MALE' ? 'es-ES-AlvaroNeural' : 'es-ES-ElviraNeural');
      break;

    case 'FR':
      voice = "" + (voiceType === 'MALE' ? 'fr-FR-HenriNeural' : 'fr-FR-DeniseNeural');
      break;

    case 'PT':
      voice = "" + (voiceType === 'MALE' ? 'pt-PT-DuarteNeural' : 'pt-PT-RaquelNeural');
      break;

    default:
      voice = "" + (voiceType === 'MALE' ? 'it-IT-DiegoNeural' : 'it-IT-IsabellaNeural');
      break;
  }

  return voice;
};

var getCultureCodeByLanguage = function getCultureCodeByLanguage(lang) {
  var voice = '';
  var voiceLang = lang.toUpperCase();

  switch (voiceLang) {
    case 'IT':
      voice = 'it-IT';
      break;

    case 'DE':
      voice = 'de-DE';
      break;

    case 'EN':
      voice = 'en-US';
      break;

    case 'ES':
      voice = 'es-ES';
      break;

    case 'FR':
      voice = 'fr-FR';
      break;

    case 'PT':
      voice = 'pt-PT';
      break;

    default:
      voice = 'it-IT';
      break;
  }

  return voice;
};
/**
 * EXPERIMENTAL
 */


var speech = function speech(AZURE_COGNITIVE_SERVICES_TTS_KEY, DEBUG) {
  if (DEBUG === void 0) {
    DEBUG = false;
  }

  return function (lang, voiceType) {
    var speechConfig = SpeechConfig.fromSubscription(AZURE_COGNITIVE_SERVICES_TTS_KEY, 'eastus');
    var speechSynthesizer;
    var audioDestination;
    audioDestination = new SpeakerAudioDestination();
    var audioOutputConfig = AudioConfig.fromSpeakerOutput(audioDestination); // https://docs.microsoft.com/it-it/azure/cognitive-services/speech-service/language-support#text-to-speech

    speechConfig.speechSynthesisVoiceName = getTTSVoice(lang, voiceType);
    var langCultureCode = getCultureCodeByLanguage(lang);
    speechConfig.speechSynthesisLanguage = langCultureCode;
    speechConfig.speechRecognitionLanguage = langCultureCode;
    /**
     * speak
     * @description Speaks the text using the speech synthesizer. (TTS)
     * @param {string} text - The text to be synthesized.
     * @param {func=} onAudioEnd - The callback to be invoked when the synthesized audio is finished.
     */

    var speak = function speak(text, onAudioEnd) {
      stopSpeaking();
      speechSynthesizer = new SpeechSynthesizer(speechConfig, audioOutputConfig);
      if (onAudioEnd) audioDestination.onAudioEnd = onAudioEnd;
      speechSynthesizer.speakTextAsync(text, function (result) {
        if (result) {
          try {
            if (DEBUG) console.log('speak result', result);

            if (speechSynthesizer) {
              speechSynthesizer.close();
              speechSynthesizer = null;
            }
          } catch (e) {
            console.error('speak error: ', e);
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
          }
        } else if (DEBUG) {
          console.log('speak no result', result);
        }
      }, function (error) {
        console.error('speak:', error);
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
      });
    };
    /**
     * isSpeaking
     * @description Returns true if the synthesizer is speaking.
     * @returns {boolean}
     */


    var isSpeaking = function isSpeaking() {
      return !!speechSynthesizer;
    };
    /**
     * stopSpeaking
     * @description Stops the speech synthesizer if it is synthesizing.
     */


    var stopSpeaking = function stopSpeaking() {
      if (audioDestination) audioDestination.pause();

      if (speechSynthesizer) {
        speechSynthesizer.close();
        speechSynthesizer = null;
      }
    };

    var audioInputConfig = AudioConfig.fromDefaultMicrophoneInput();
    var recognizer;
    /**
     * recognize
     * @description Starts the speech recognition.
     * @param {func=} onRecognized - Callback method invoked when the speech is recognized with the text.
     */

    var recognize = function recognize(onRecognized) {
      recognizer = new SpeechRecognizer(speechConfig, audioInputConfig);

      recognizer.recognizing = function (_s, e) {
        if (DEBUG) console.log("RECOGNIZING: Text=" + e.result.text);
      };

      recognizer.recognized = function (_s, e) {
        if (e.result.reason === ResultReason.RecognizedSpeech) {
          var _e$result$text;

          if (DEBUG) console.log("RECOGNIZED: Text=" + e.result.text);
          onRecognized((_e$result$text = e.result.text) != null ? _e$result$text : '');
        } else if (e.result.reason === ResultReason.NoMatch && DEBUG) {
          console.log('NOMATCH: Speech could not be recognized.');
        }
      };

      recognizer.canceled = function (_s, e) {
        if (DEBUG) console.log("CANCELED: Reason=" + e.reason);

        if (e.reason === CancellationReason.Error && DEBUG) {
          console.log("\"CANCELED: ErrorCode=" + e.errorCode);
          console.log("\"CANCELED: ErrorDetails=" + e.errorDetails);
          console.log('CANCELED: Did you set the speech resource key and region values?');
        }

        stopRecognizing();
      };

      recognizer.sessionStopped = function (_s, _e) {
        if (DEBUG) console.log('\n    Session stopped event.');
        if (recognizer) recognizer.stopContinuousRecognitionAsync();
      };

      recognizer.startContinuousRecognitionAsync();
    };
    /**
     * isRecognizing
     * @description Returns true if the recognizer is recognizing.
     * @returns {boolean}
     */


    var isRecognizing = function isRecognizing() {
      return !!recognizer;
    };
    /**
     * stopRecognizing
     * @description Stops the speech recognizer if it is recognizing.
     * @param {func=} onStop - (optional) The callback to be invoked when the speech recognition is stopped.
     */


    var stopRecognizing = function stopRecognizing(onStop) {
      if (recognizer) {
        recognizer.stopContinuousRecognitionAsync();
        recognizer.close();
        recognizer = null;
        if (onStop) onStop();
      }
    };

    return {
      speak: speak,
      isSpeaking: isSpeaking,
      stopSpeaking: stopSpeaking,
      recognize: recognize,
      isRecognizing: isRecognizing,
      stopRecognizing: stopRecognizing
    };
  };
};

var asset$1 = (function (apiUrl) {
  return {
    /**
     * getResourceUrl
     * @description Returns the correct URL of a resource from the DB.
     * @param {obj} params
     * @param {string=} params.type - wheather is the avatar or the cover
     * @param {string=} params.resourceURI - the resource URI
     * @param {string=} params.sessionID - the session ID, required for memory media attachments
     * @param {string=} params.baseURL - the base URL for default static assets (defaults to https://app.twincreator.com)
     * @returns {string}
     */
    getResourceUrl: function getResourceUrl(_ref) {
      var type = _ref.type,
          resourceURI = _ref.resourceURI,
          sessionID = _ref.sessionID,
          _ref$baseURL = _ref.baseURL,
          baseURL = _ref$baseURL === void 0 ? 'https://app.twincreator.com' : _ref$baseURL;
      var defaultUri = type === 'cover' ? baseURL + "/images/memoriCover.png" : baseURL + "/images/memoriAvatar.png";

      if (!resourceURI || resourceURI.length === 0) {
        return defaultUri;
      } else if (resourceURI.includes('memoriai/memory')) {
        return resourceURI + "?memori-ai-session-id=" + sessionID;
      } else if (resourceURI.startsWith('https://') || resourceURI.startsWith('http://')) {
        return "" + resourceURI + (sessionID ? "/" + sessionID : '');
      } else if (resourceURI.startsWith('cloud://')) {
        return apiUrl.replace(/v2/, 'v1') + "/CloudAsset/" + resourceURI.replace('cloud://', '');
      } else if (resourceURI.startsWith('guid://')) {
        return apiUrl.replace(/v2/, 'v1') + "/GuidAsset/" + resourceURI.replace('guid://', '');
      } else {
        return defaultUri;
      }
    }
  };
});

var api = function api(hostname) {
  var apiUrl = getApiUrl(hostname);
  return _extends({
    backend: backendAPI(apiUrl + "/api/v2")
  }, engine(apiUrl + "/memori/v2"), {
    speech: speech,
    constants: constants,
    asset: asset$1(apiUrl + "/api/v2")
  });
};

export default api;
//# sourceMappingURL=memori-api-client.esm.js.map
