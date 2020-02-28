<template>
  <v-dialog v-model="dialog" width="500" v-if="jwt">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="amber--text text--darken-3"><v-icon>mdi-folder-plus</v-icon></v-btn>
    </template>
    <v-card dark pa-4 class="dialog">
      <v-container>
        <v-card-title class="headline">Créer un projet</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form
          ref="form"
          v-model="valid"
        >
            <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="255"
                label="Name *"
                required
                clearable
                color="amber darken-3"
              ></v-text-field>
            <v-text-field
                v-model="title"
                :rules="nameRules"
                :counter="255"
                label="Title *"
                required
                clearable
                color="amber darken-3"
              ></v-text-field>
            <v-textarea v-model="content" :rules="contentRules" required auto-grow clearable color="amber darken-3" label="Content *">
            </v-textarea>
          </v-form>
          <br>
          <h2>Other</h2>
          <v-divider></v-divider>
          <v-form>
            <v-text-field
                v-model="lang"
                label="lang"
                clearable
                color="amber darken-3"
              ></v-text-field>
              <v-text-field
                v-model="link"
                :rules="nameRules"
                :counter="255"
                label="Link *"
                required
                clearable
                color="amber darken-3"
              ></v-text-field>
            <v-btn
              color="amber darken-3 black--text" block @click="postProject">
              Créer
            </v-btn>
          </v-form>
        </v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      dialog: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Ce champs est requis',
        v => v.length <= 255 || 'Maximum 255 charactères'
      ],
      title: '',
      content: '',
      contentRules: [
        v => !!v || 'Ce champs est requis'
      ],
      lang: null,
      link: ''
    }
  },
  computed: {
    ...mapGetters('jwt', [
      'jwt'
    ])
  },
  methods: {
    ...mapActions('alert', [
      'newAlert'
    ]),
    postProject () {
      axios({
        method: 'post',
        url: 'https://api.sepo.tk/api/project/new',
        headers: {
          Authorization: `Bearer ${this.jwt}`
        },
        data: {
          name: this.name,
          title: this.title,
          content: this.content,
          lang: this.lang,
          link: this.link
        }
      })
        .then(response => {
          let body = response.data.error ? 'Please check all fields, else it\'s an internal error' : `Project<created>${this.title}</created>`
          this.newAlert({ type: response.data.status, content: body, show: true })
          this.$store.dispatch('projects/fetchProjects')
        })
    }
  }
}
</script>
