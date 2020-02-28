<template>
  <v-dialog v-model="dialog" width="500" v-if="jwt">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="green--text text--lighten-1"><v-icon>mdi-lead-pencil</v-icon></v-btn>
    </template>
    <v-card dark pa-4 class="dialog">
      <v-container>
        <v-card-title class="headline">Editer le sujet</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form
          ref="form"
          v-model="valid"
        >
            <v-text-field
                v-model="editedTitle"
                :rules="editedNameRules"
                :counter="255"
                label="Title *"
                required
                clearable
                color="green lighten-1"
              ></v-text-field>
            <v-textarea v-model="editedContent" :rules="editedContentRules" required auto-grow clearable color="green lighten-1" label="Content *">
            </v-textarea>
          </v-form>
          <br>
          <h2>Other</h2>
          <v-divider></v-divider>
          <v-form>
            <v-text-field
                v-model="editedLang"
                label="Lang"
                :counter="20"
                clearable
                color="green lighten-1"
              ></v-text-field>
              <v-text-field
                v-model="editedLink_name"
                :counter="20"
                label="Link name"
                clearable
                color="green lighten-1"
              ></v-text-field>
              <v-text-field
                v-model="editedLink_to"
                :counter="255"
                label="Link"
                clearable
                color="green lighten-1"
              ></v-text-field>
            <v-btn
              color="green lighten-1 black--text" block @click="postEdit">
              Editer
            </v-btn>
          </v-form>
        </v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['name', 'title', 'content', 'lang', 'link_name', 'link_to', 'editable'],
  data () {
    return {
      dialog: false,
      valid: false,
      editedTitle: this.title,
      editedNameRules: [
        v => !!v || 'Ce champs est requis',
        v => v.length <= 255 || 'Maximum 255 charactères'
      ],

      editedContent: this.content,
      editedContentRules: [
        v => !!v || 'Ce champs est requis'
      ],
      editedLang: this.lang,
      editedLink_name: this.link_name,
      editedLink_to: this.link_to
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
    postEdit () {
      axios({
        method: 'post',
        url: `https://api.sepo.tk/api/subject/${this.name}/edit`,
        headers: {
          Authorization: `Bearer ${this.jwt}`
        },
        data: {
          title: this.editedTitle,
          content: this.editedContent,
          lang: this.editedLang,
          link_name: this.editedLink_name,
          link_to: this.editedLink_to
        }
      })
        .then(response => {
          let body = response.data.error ? 'Please check all fields, else it\'s an internal error' : `Subject<updated>${this.title}</updated>`
          this.newAlert({ type: response.data.status, content: body, show: true })
          this.$store.dispatch('subjects/fetchSubjects')
          this.dialog = false
        })
    }
  }
}
</script>
