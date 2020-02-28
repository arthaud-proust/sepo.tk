<script>/* eslint-disable */</script>
<template>
<div class="main">
  <BarLoader style="margin: 0 auto;" color="#eee" class="mt-5" v-if="loading"></BarLoader>
  <v-container fluid fill-height class="my-5">
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md4 >
        <v-card
            v-if="jwt"
            max-width="600"
            color="grey darken-4"
            dark
            :class="{'my-3 pa-1': $vuetify.breakpoint.smAndDown, 'ma-3 px-1 py-0': $vuetify.breakpoint.smAndUp}"
            elevation="10"
          >
            <v-card-title class="title">
              Nouveau sujet
              <v-spacer></v-spacer>
              <CreateDialog></CreateDialog>
            </v-card-title>
          </v-card>
        
        <SubjectCard v-bind="subject" :editable="true" v-for="subject in getAll" :key="subject.id"></SubjectCard>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<style src="./about.css"></style>
<script src="./about.js"></script>
