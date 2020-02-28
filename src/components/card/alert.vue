<template>
<div>
  <v-alert :value="alert.show" :type="alert.type" outline transition="scale-transition" v-for="alert in alerts" :key="alert.id" v-html="alert.content">
  </v-alert>
</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('alert', [
    'alerts'
  ])
}
</script>
<style>
  .v-alert {
    border-radius: 7px !important;
    background: rgba(0, 0, 0, 0.514) !important;
  }

  created, deleted, updated {color: white;}
  created::before {content: '[Created]: ';color: #50af4c;}
  deleted::before {content: '[Deleted]: ';color: #af504C;}
  updated::before {content: '[Updated]: ';color: #4c50af;}

</style>
