import { mapGetters, mapActions } from 'vuex'
export const bookStoreMixin = {
    computed: {
        ...mapGetters([
            'cateList',
            'rankList',
            'isLoadShow',
            'minorCate'
        ])
    },
    methods: {
        ...mapActions([
            'setCateList',
            'setRankList',
            'setIsLoadShow',
            'setMinorCate'
        ])
    }
}