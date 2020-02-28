import ProjectCard from '@/components/card/project.vue'
import CreateDialog from '@/components/dialog/project/create.vue'
import { mapGetters } from 'vuex'
import { BarLoader } from '@saeris/vue-spinners'

export default {
  components: {
    ProjectCard,
    CreateDialog,
    BarLoader
  },
  computed: {
    ...mapGetters('jwt', [
      'jwt'
    ]),
    ...mapGetters('projects', [
      'getAll',
      'loading'
    ])
  },
  // Fetches posts when the component is created.
  created () {
    if (this.$route.meta.background) {
      document.body.setAttribute('class', 'bg' + this.$route.meta.background)
    }
    window.scrollTo(0, 0)
    this.$store.dispatch('projects/fetchProjects')
  }
}
