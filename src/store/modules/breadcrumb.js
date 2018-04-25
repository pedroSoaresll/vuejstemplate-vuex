// functions
function validatePath (path) {
  if (!path.text) throw Error("Deve informar {text}")
  if (!path.href) throw Error("Deve informar {href}")
  if (path.active == undefined) throw Error("Deve informar {active}")
}


// objects store
const state = {
  paths: []
}

const getters = {
  paths: state => state.paths,
  count: state => state.paths.length
}

const mutations = {
  reset (state) {
    state.paths = []
  },

  add (state, objectPath) {
    validatePath(objectPath)
    state.paths.push(objectPath)
  },

  remove (state, classPath) {
    state.paths
      .filter(path => path.text != classPath.text)
  },

  create (state, arrayObjectPaths) {
    if (!arrayObjectPaths.length) throw Error("Deve informar uma lista válida")
    
    arrayObjectPaths.forEach(path => validatePath(path))
    state.paths = arrayObjectPaths
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}


// example object here
// this.breadCrumb = [{
//   text: 'Admin',
//   href: '#'
// }, {
//   text: 'Manage',
//   href: '#'
// }, {
//   text: 'Library',
//   active: true
// }]