// functions
function validatePath (state, path) {
  if (!path.name) throw Error("Deve informar {name}")
  if (!path.href) throw Error("Deve informar {href}")
}

function setActiveFalse (listPaths) {
  return listPaths.map(path => {
    path.active = false
    return path
  })
}

function sortPaths (listPaths) {
  return listPaths.map((path, index) => {
    path.nivel = (index - listPaths.length) + 1

    return path
  })
}

function exists (state, path) {
  const existPath = state.paths.filter(statePath => statePath.name == path.name)
  return new Boolean(existPath.length).valueOf()
}

function remove (state, classPath) {
  let index = 0

  // console.log('procurando..')
  // console.log(path)
  // console.log(classPath)
  // console.log(index)
  // console.log(state.paths.length)

  const a = state.paths.map((path, index) => {
    if (index !== 0) return false
    if (path.name == classPath.name) index = 1
    
    return path
  })
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