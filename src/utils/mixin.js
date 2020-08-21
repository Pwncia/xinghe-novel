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

export const bookReaderMixin = {
    computed: {
        ...mapGetters([
            'isChapterCatelogueShow',
            'chapterList'
        ])
    },
    methods: {
        ...mapActions([
            'setIsChapterCatelogueShow',
            'setChapterList'
        ])
    }
}