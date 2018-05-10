// functions
function validatePath (state, path) {
  
}

function setActiveFalse (listPaths) {
  
}

function sortPaths (listPaths) {
  
}

function exists (state, path) {
  
}

function remove (state, classPath) {
  
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

  add (state, classPath) {
    validatePath(state, classPath)

    state.paths = setActiveFalse(state.paths)

    !exists(state, classPath) ? state.paths.push(classPath) : remove(state, classPath)

    state.paths = sortPaths(state.paths)
  },

  remove (state, classPath) {
    remove(state, classPath)
  },

  create (state, listPaths) {
    if (!listPaths.length) throw Error("Deve informar uma lista válida")
    
    listPaths.forEach(path => validatePath(state, path))
    state.paths = listPaths
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