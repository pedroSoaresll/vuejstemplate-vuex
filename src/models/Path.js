
/**
 * Cria uma objeto de path
 * 
 * @class Path
 * @argument {string} name Path name
 * @argument {string} href Path url
 * @return {void}
 */
export default class Path {
  constructor (name, href) {
    this.name = name
    this.href = href
  }

  get name () {
    return this._name
  }

  set name (name) {
    if (!name || name == "") throw Erro("Deve informar {name}")
    this._name = name
  }

  get href () {
    return this._href
  }

  set href (href) {
    if (!href || href == "") throw Erro("Deve informar {href}")
    this._href = href
  }

  get active () {
    return this._active
  }

  set active (active) {
    if (active == undefined) throw Error("Deve informar {active}")
    this._active = active
  }

  get nivel () {
    return this._nivel
  }

  set nivel (number) {
    this._nivel = number
  }

  getObject () {
    return {
      name: this._name,
      href: this._href,
      active: this._active,
      nivel: this._nivel,
      goBack: (router, store) => {
        router.go(this._nivel)
      }
    }
  }
}