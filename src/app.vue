<template>
<div>
<v-app class="hide-overflow transparent">
  <Header></Header>
  <v-content>
    <v-container fluid>
      <Alert></Alert>
      <router-view/>
    </v-container>
  </v-content>
</v-app>
<Footer></Footer>
</div>
</template>
<style src="./app.css"></style>
<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
import Alert from '@/components/card/alert.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Alert
  }
}
</script>
