<template>
  <v-dialog v-model="dialog" width="500" v-if="jwt">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="red--text text--lighten-1"><v-icon>mdi-delete</v-icon></v-btn>
    </template>
    <v-card dark class="dialog">
      <v-container>
        <v-card-title class="headline">Supprimer le projet {{name}}</v-card-title>
        <v-card-text>
          <v-text-field
                v-model="title"
                :rules="titleRules"
                :counter="255"
                label="Title *"
                required
                clearable
                color="red lighten-1"
              ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="red lighten-1" block @click="postDelete">
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['name'],
  data () {
    return {
      dialog: false,
      valid: false,
      title: '',
      titleRules: [
        v => !!v || 'Ce champs est requis',
        v => v.length <= 255 || 'Maximum 255 charactères'
      ]
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

    postDelete () {
      axios({
        method: 'post',
        url: `https://api.sepo.tk/api/project/${this.name}/delete`,
        headers: {
          Authorization: `Bearer ${this.jwt}`
        },
        data: {
          title: this.title
        }
      })
        .then(response => {
          console.log(response.data)
          let body = response.data.error ? 'Wrong title' : `Project <deleted>${this.title}</deleted>`
          this.newAlert({ type: response.data.status, content: body, show: true })
          this.$store.dispatch('projects/fetchProjects')
          this.dialog = false
        })
    }
  }
}
</script>
