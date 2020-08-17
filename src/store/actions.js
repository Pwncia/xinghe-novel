const actions = {
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
    },
    //阅读器actions
    setIsChapterCatelogueShow: ({ commit }, val) => {
        return commit('SET_ISCHAPTERCATELOGUESHOW', val)
    },
    setCurrentChapter: ({ commit }, val) => {
        return commit('SET_CURRENTCHAPTER', val)
    }
}

export default actions