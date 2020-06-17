// eslint-disable-next-line
Function.prototype.myCall = function (context) {
  const _this = context || window;
  _this.__fn__ = this;
  const args = [];
  for (let i = 1; i < arguments.length; i += 1) {
    // eslint-disable-next-line
    args.push(arguments[i]);
  }
  // eslint-disable-next-line
  const result = eval(`_this.__fn__(${args})`);

  delete _this.__fn__;
  return result;
};
