const getters = {
    cateList: state => state.bookStore.cateList,
    rankList: state => state.bookStore.rankList,
    isLoadShow: state => state.bookStore.isLoadShow,
    minorCate: state => state.bookStore.minorCate,
    isChapterCatelogueShow: state => state.bookReader.isChapterCatelogueShow,
    currentChapter: state => state.bookReader.currentChapter
}
export default getters