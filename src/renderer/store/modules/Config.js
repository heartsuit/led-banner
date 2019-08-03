const state = {
  properties: {
    fontFamily: "Microsoft YaHei",
    fontSize: 90,
    color: "yellow",
    backgroundColor: "red",
    lineHeight: 100,
    letterSpacing: 16
  }
}

const mutations = {
  UPDATE_PROPERTY(state, newProperty) {
    state.properties = Object.assign({}, state.properties, newProperty);
  }
}

const actions = {
  UPDATE_PROPERTY({ commit }, newProperty) {
    // do something async
    commit('UPDATE_PROPERTY', newProperty)
  }
}

export default {
  state,
  mutations,
  actions
}
