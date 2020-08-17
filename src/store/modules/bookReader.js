const bookReader = {
    state: {
        isChapterCatelogueShow: false
    },
    mutations: {
        SET_ISCHAPTERCATELOGUESHOW: (state, val) => {
            state.isChapterCatelogueShow = val
        }
    }
}

export default bookReader