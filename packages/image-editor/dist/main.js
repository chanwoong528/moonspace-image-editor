var i = Object.defineProperty;
var c = (s, a, t) => a in s ? i(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var n = (s, a, t) => c(s, typeof a != "symbol" ? a + "" : a, t);
class r {
  constructor(a) {
    n(this, "container");
    n(this, "canvas", null);
    this.container = a;
  }
  initCanvas() {
    this.canvas = document.createElement("canvas"), this.container.appendChild(this.canvas), this.canvas.width = 100, this.canvas.height = 100, this.canvas.style.border = "1px solid #000", this.canvas.style.backgroundColor = "red";
  }
  getCanvas() {
    return this.canvas;
  }
}
export {
  r as ImageEditor
};
