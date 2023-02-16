module.exports = {
  ifCond: function (a, b, options) { // 這裡不能用箭頭函式，會導致this 指向外層
    return String(a) === String(b) ? options.fn(this) : options.inverse(this)
  }
}