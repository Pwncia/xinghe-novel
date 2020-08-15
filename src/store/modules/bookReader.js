const bookReader = {
    state: {
        isChapterCategoryShow: false
    },
    mutations: {
        SET_ISCHAPTERCATEGORYSHOW: (state, val) => {
            state.isChapterCategoryShow = val
        }
    }
}

export default bookReader