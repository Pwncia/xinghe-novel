const bookStoreActions = {
    setCateList: ({ commit }, newVal) => {
        return commit('SET_CATELIST', newVal)
    },
    setRankList: ({ commit }, newVal) => {
        return commit('SET_RANKLIST', newVal)
    },
    setIsLoadShow: ({ commit }, val) => {
        return commit('SET_ISLOADSHOW', val)
    },
    setMinorCate: ({ commit }, val) => {
        return commit('SET_MINORCATE', val)
    }
}
export default bookStoreActions