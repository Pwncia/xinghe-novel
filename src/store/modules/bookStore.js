const bookStore = {
    state: {
        //分类列表
        cateList: null
    },
    mutations: {
        //更该分类列表
        SET_CATELIST: (state, newVal) => {
            state.cateList = newVal
        }
    }
}
export default bookStore