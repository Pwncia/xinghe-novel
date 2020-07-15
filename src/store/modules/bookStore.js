const bookStore = {
    state: {
        //分类列表
        cateList: '',
        rankList: '',
        isLoadShow: '',
        minorCate: ''
    },
    mutations: {
        //更该分类列表
        SET_CATELIST: (state, newVal) => {
            state.cateList = newVal
        },
        //设值排行榜列表
        SET_RANKLIST: (state, newVal) => {
            state.rankList = newVal
        },
        SET_ISLOADSHOW: (state, val) => {
            state.isLoadShow = val
        },
        SET_MINORCATE: (state, newVal) => {
            state.minorCate = newVal
        }
    }
}
export default bookStore