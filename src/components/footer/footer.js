import { mapGetters } from 'vuex'
import { BarLoader } from '@saeris/vue-spinners'

export default {
  components: {
    BarLoader
  },
  data: () => ({
    links: [
      {
        to: '/',
        name: 'Accueil'
      },
      {
        to: 'projects',
        name: 'Projects'
      }
    ]
  }),
  methods: {
    copy (element) {
      if (element.copy) {
        this.$copyText(element.name).then(function (e) {
          element.old = element.name
          element.name = 'Email copié'
          element.copy = false
          console.log('Copied')
          setTimeout(function () {
            element.name = element.old
            element.copy = true
          }, 2500)
        }, function (e) {
          console.log('Can not copy')
        })
      }
    }
  },
  computed: {
    ...mapGetters('contacts', [
      'getAll',
      'loading'
    ])
  },
  created () {
    this.$store.dispatch('contacts/fetchContacts')
  }
}
