<template>
  <v-card dark elevation="10" class="mb-4" itemscope itemtype="http://schema.org/Thing">
    <v-container :class="{'pa-1': $vuetify.breakpoint.smAndDown}">
      <v-card-title class="display-1">
        <div v-html="title" itemprop="name"></div>
        <v-spacer></v-spacer>
        <EditDialog v-if="editable" :name="name" :title="title" :content="content" :lang="lang" :link_name="link_name" :link_to="link_to"></EditDialog>
        <DeleteDialog v-if="editable" :name="name"></DeleteDialog>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="font-weight-light" v-html="content" itemprop="description"></v-card-text>
      <v-card-actions :class="{'d-block': $vuetify.breakpoint.smAndDown}">
        <kbd class="ma-1 pa-1" v-if="lang" itemprop="category">{{lang}}</kbd>
        <v-spacer></v-spacer>
        <div v-if="link_name">
          <v-btn color="grey lighten-1" light class="text-none mt-3" v-if="link_to.split('://').includes('https')" :href="link_to" itemprop="url">{{link_name}}</v-btn>
          <v-btn color="grey lighten-1" light class="text-none mt-3" v-else :to="link_to" target="blank" itemprop="url">{{link_name}}</v-btn>
        </div>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
import EditDialog from '@/components/dialog/subject/edit.vue'
import DeleteDialog from '@/components/dialog/subject/delete.vue'

export default {
  props: ['name', 'title', 'content', 'lang', 'link_name', 'link_to', 'editable'],
  components: {
    EditDialog,
    DeleteDialog
  }
}
</script>
