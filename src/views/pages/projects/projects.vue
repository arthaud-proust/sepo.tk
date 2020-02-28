<template>
<div>
  <BarLoader style="margin: 0 auto;" color="#eee" class="mt-5" v-if="loading"></BarLoader>
  <v-container class="my-5">
    <v-flex xs12 sm5 md4 lg3 v-if="jwt">
      <v-card
        max-width="600"
        color="grey darken-4"
        dark
        :class="{'my-3 pa-2': $vuetify.breakpoint.smAndDown, 'ma-3 px-2 py-0': $vuetify.breakpoint.smAndUp}"
        elevation="10"
      >
        <v-card-title class="title">
          Nouveau projet
          <v-spacer></v-spacer>
          <CreateDialog></CreateDialog>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-layout row wrap >
      <v-flex xs12 sm6 md6 lg4 v-for="project in getAll.slice().reverse()" :key="project.id">
        <ProjectCard
          :editable="true"
          v-bind="project"
        ></ProjectCard>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script src="./projects.js"></script>
