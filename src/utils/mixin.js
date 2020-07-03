import { mapGetters, mapActions } from 'vuex'
export const bookStoreMixin = {
    computed: {
        ...mapGetters([
            'cateList'
        ])
    },
    methods: {
        ...mapActions([
            'setCateList'
        ])
    }
}