export default class Path {
  constructor (text, href, active=false) {
    this.setText(text)
    this.setHref(href)
    this.setActive(active)
  }

  get text () {
    return this._text
  }

  get href () {
    return this._href
  }

  get active () {
    return this._active
  }

  setText (text) {
    if (!text || text == "") throw Erro("Deve informar {text}")
    this._text = text
  }

  setHref (href) {
    if (!href || href == "") throw Erro("Deve informar {href}")
    this._href = href
  }

  setActive (active) {
    if (active == undefined) throw Error("Deve informar {active}")
    this._active = active
  }

  getObject () {
    return {
      text: this._text,
      href: this._href,
      active: this._active
    }
  }
}