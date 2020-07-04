import { mapGetters, mapActions } from 'vuex'
export const bookStoreMixin = {
    computed: {
        ...mapGetters([
            'cateList',
            'rankList',
            'isLoadShow'
        ])
    },
    methods: {
        ...mapActions([
            'setCateList',
            'setRankList',
            'setIsLoadShow'
        ])
    }
}