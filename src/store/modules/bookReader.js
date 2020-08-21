const bookReader = {
    state: {
        isChapterCatelogueShow: false,
        chapterList: ''
    },
    mutations: {
        SET_ISCHAPTERCATELOGUESHOW: (state, val) => {
            state.isChapterCatelogueShow = val
        },
        SET_CHAPTERLIST: (state, val) => {
            state.chapterList = val
        }
    }
}

export default bookReader