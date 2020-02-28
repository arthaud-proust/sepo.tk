<template>
  <v-card
    dark
    :class="{'my-3 pa-2': $vuetify.breakpoint.smAndDown, 'ma-4 pa-2': $vuetify.breakpoint.smAndUp}"
    elevation="10"
    itemscope
    itemtype="http://schema.org/Thing"
  >
    <v-card-title class="title">
      <h4 v-html="title" itemprop="name"></h4>
      <v-spacer></v-spacer>
      <EditDialog v-if="editable" :name="name" :title="title" :content="content" :lang="lang" :link="link"></EditDialog>
      <DeleteDialog v-if="editable" :name="name"></DeleteDialog>
    </v-card-title>
    <v-card-text class="desc" v-html="content" itemprop="description"></v-card-text>
    <v-divider></v-divider>
    <v-card-actions :class="{'d-block': $vuetify.breakpoint.smAndDown}">
      <kbd class="ma-1 pa-1 caption" v-if="lang" itemprop="category">{{lang}}</kbd>
      <v-spacer ></v-spacer>
      <v-btn color="grey lighten-2" class="text-none mt-3" light v-if="href" :to="href" itemprop="url">Découvrir</v-btn>
      <v-btn color="grey lighten-2" class="text-none mt-3" light v-if="link" :href="link" itemprop="url">Découvrir</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import EditDialog from '@/components/dialog/project/edit.vue'
import DeleteDialog from '@/components/dialog/project/delete.vue'

export default {
  props: ['name', 'title', 'content', 'lang', 'link', 'href', 'editable'],
  components: {
    EditDialog,
    DeleteDialog
  }
}
</script>
