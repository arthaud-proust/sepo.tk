<template>
  <v-footer
    dark
    height="auto"
    class="grey darken-4"
  >
    <v-layout column>
      <v-layout row wrap justify-center class="my-3">
        <v-flex xs9 sm4 md6 lg2>
          <v-card flat dark class="my-3 mx-3 px-4 py-2 rounded-corner" >
            <v-layout column align-center>
              <v-card-title class="title grey--text text--lighten-4" >Pages</v-card-title>
              <v-card-actions v-for="link in links" v-bind:key="link.id">
                <v-btn class="text-none grey--text text--lighten-3" flat round target="blank" :href="link.href" :to="link.to" @click="copy(link)" v-if="link.name">
                  {{link.name}}
                </v-btn>
                <v-btn class="text-none grey--text text--lighten-3" flat icon target="blank" :href="link.href" :to="link.to" v-if="link.icon">
                  <v-icon>{{item.icon}}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs9 sm4 md6 lg2>
          <v-card flat dark class="my-3 mx-3 px-4 py-2 rounded-corner" >
            <v-layout column align-center>
              <v-card-title class="title grey--text text--lighten-4" >Contact</v-card-title>
                <BarLoader color="#eee" v-if="loading"></BarLoader>
              <v-card-actions v-for="item in getAll" v-bind:key="item.id">
                <v-btn class="text-none grey--text text--lighten-3" flat round target="blank" :href="item.href" :to="item.to" @click="copy(item)" v-if="item.name">
                  {{item.name}}
                </v-btn>
                <v-btn class="text-none grey--text text--lighten-3" flat icon target="blank" :href="item.href" :to="item.to" v-if="item.icon">
                  <v-icon>{{item.icon}}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-flex py-2 px-4 text-xs-right white--text xs12 class="body-1">
          Développé par Arthaud Proust | &copy; {{ new Date().getFullYear() + 2 }}
          <v-spacer></v-spacer>
        </v-flex>
    </v-layout>
  </v-footer>
</template>
<style>
footer {
  font-family: Roboto,sans-serif;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  letter-spacing: 0.2px;
}

.rounded-corner {
  border-radius: 5px !important;
  background: #505050 !important;
}

</style>
<script src="./footer.js"></script>
