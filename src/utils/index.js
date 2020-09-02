/* eslint-disable */
Function.prototype.myCall = function (context) {
  const _this = context || window;
  _this.__fn__ = this;
  const args = [];
  for (let i = 1; i < arguments.length; i += 1) {
    args.push(arguments[i]);
  }

  const result = eval(`_this.__fn__(${args})`);

  delete _this.__fn__;
  return result;
};

Function.prototype.myApply = function (context) {
  const _this = context || window;
  _this.__fn__ = this;

  const args = [].concat(arguments[1]);
  const result = eval(`_this.__fn__(${args})`);

  delete _this.__fn__;
  return result;
};

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }

  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  const FnOp = function () {};

  const fbound = function () {
    self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
  };

  FnOp.prototype = this.prototype;
  fbound.prototype = new FnOp();

  return fbound;
};
