const state = {
  properties: {
    content: "欢迎公益事业促进会会长一行莅临指导！",
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
    state.properties = newProperty;
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
