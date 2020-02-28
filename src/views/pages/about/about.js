import DeleteDialog from '@/components/dialog/subject/delete.vue'
import EditDialog from '@/components/dialog/subject/edit.vue'
import CreateDialog from '@/components/dialog/subject/create.vue'
import SubjectCard from '@/components/card/subject.vue'
import { mapGetters } from 'vuex'
import { BarLoader } from '@saeris/vue-spinners'

export default {
  components: {
    SubjectCard,
    CreateDialog,
    DeleteDialog,
    EditDialog,
    BarLoader
  },
  computed: {
    ...mapGetters('jwt', [
      'jwt'
    ]),
    ...mapGetters('subjects', [
      'getAll',
      'loading'
    ])
  },
  created () {
    if (this.$route.meta.background) {
      document.body.setAttribute('class', 'bg' + this.$route.meta.background)
    }
    window.scrollTo(0, 0)
    this.$store.dispatch('subjects/fetchSubjects')
  }
}
