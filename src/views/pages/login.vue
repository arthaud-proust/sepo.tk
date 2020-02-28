<template>
<div class="main">
  <Alert></Alert>
  <v-container fluid fill-height class="my-5" >
    <v-layout justify-center align-center >
      <v-flex xs12 sm8 md4>
        <v-card dark elevation="10" v-if="!jwt" :class="{'my-3 pa-2': $vuetify.breakpoint.smAndDown, 'ma-3 pa-2': $vuetify.breakpoint.smAndUp}">
          <v-card-title class="title">Accès admin</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                  v-model="name"
                  :rules="loginRules"
                  label="Name *"
                  required
                  clearable
                  color="white"
                ></v-text-field>
              <v-text-field
                  v-model="password"
                  :rules="loginRules"
                  label="Password *"
                  required
                  :type="showPwd ? 'text' : 'password'"
                  @click:append="showPwd = !showPwd"
                  :append-icon="showPwd ? 'visibility' : 'visibility_off'"
                  color="white"
                ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="postLogin" block class="mt-4" color="white black--text">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else dark :class="{'my-3 pa-2': $vuetify.breakpoint.smAndDown, 'ma-3 pa-2': $vuetify.breakpoint.smAndUp}"
            elevation="10">
          <v-card-title class="title">Déjà connecté !</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import Alert from '@/components/card/alert.vue'

export default {
  components: {
    Alert
  },
  data () {
    return {
      valid: false,
      name: '',
      password: '',
      showPwd: false,
      loginRules: [
        v => !!v || 'Ce champs est requis'
      ]
    }
  },
  computed: mapGetters('jwt', [
    'jwt',
    'jwtSubject',
    'jwtIssuer'
  ]),
  methods: {
    ...mapActions('jwt', [
      'setJwt'
    ]),
    ...mapActions('alert', [
      'resetAlert',
      'newAlert'
    ]),
    // Pushes posts to the server when called.
    postLogin () {
      axios({
        method: 'post',
        url: 'https://api.sepo.tk/public/api/login',
        data: {
          name: this.name,
          password: this.password
        }
      })
        .then(response => {
          if (response.data.token) {
            this.setJwt(response.data.token)
            this.newAlert({ type: 'success', content: 'Logged' })
            this.$router.push('/')
          }
        })
        .catch(e => {
          this.newAlert({ type: 'error', content: 'Invalid credentials' })
        })
    }
  },
  created () {
    if (this.$route.meta.background) {
      document.body.setAttribute('class', 'bg' + this.$route.meta.background)
    }
    window.scrollTo(0, 0)
  }
}
</script>
