<template>
  <div class="main">
    <v-container fluid fill-height class="my-5 mx-0">
      <v-layout justify-center align-center>
        <v-flex xs12 sm12 md10 lg8>
          <!-- Intro -->
          <v-card class="my-2" elevation="5" v-bind:dark="darkTheme">
            <v-card-title class="headline">Créateur de thème</v-card-title>
            <v-card-text class="body-2">
              Créez un thème clair/obscur pour <span class="primary--text">Vue.js</span><br>
              Switchez-le avec ce bouton :
              <v-btn icon  @click="toggleTheme">
                <v-icon>
                  mdi-theme-light-dark
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-card >
          <!-- Themes -->
          <v-card class="my-2 pa-3" elevation="5" v-for="theme in themes" :key="theme.name" v-bind:dark="theme.isDark">
            <v-card-title class="title">
              {{theme.title}}
            </v-card-title>
            <v-card-text>
              <v-card flat v-for="color in theme.colors" :key="color.id" width="100%">
                <v-divider class="ma-2"></v-divider>
                <v-card-title>
                  <v-btn icon v-if="color.removable" @click="deleteColor()">
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                  <v-list-tile-avatar :color="color.default"></v-list-tile-avatar>
                  <v-text-field label="Nom" :placeholder="color.placeholder" v-model="color.name" flat :rules="[rules.name]"></v-text-field>
                  <v-spacer></v-spacer>
                  <v-text-field label="Couleur par défaut" v-model="color.default" flat></v-text-field>
                  <v-spacer></v-spacer>
                  <v-switch v-model="color.activateShade" label="Activer les nuances" row :color="color.default" value="true"></v-switch>
                </v-card-title>
            <!-- Shades -->
                <v-card-text v-if="color.activateShade">
                  <v-list two-line>
                    <v-list-tile v-for="shade in color.shades" :key="shade.id">
                      <v-list-tile-action><v-checkbox v-model="shade.active"></v-checkbox></v-list-tile-action>
                      <v-list-tile-avatar :color="shade.value"></v-list-tile-avatar>
                      <v-list-tile-title>{{shade.name}}</v-list-tile-title>
                      <v-list-tile-sub-title>
                        <v-text-field v-model="shade.value" flat :disabled="!shade.active">
                        </v-text-field>
                      </v-list-tile-sub-title>
                    </v-list-tile>
                  </v-list>
                </v-card-text>
          <!-- End shades -->
              </v-card>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn flat class="text-none" @click="addColor()" large>
                <v-icon>mdi-plus-box</v-icon>
                Ajouter une couleur
              </v-btn>
              <v-btn class="text-none" @click="generateTheme()" large>
                Générer
              </v-btn>
            </v-card-actions>
          </v-card>
          <!-- End Themes -->
          <!-- Result -->
          <v-card v-bind:dark="darkTheme" class="my-4 px-3">
            <v-card-title class="title">
              Résultat
              <v-spacer></v-spacer>
              <v-btn icon  @click="toggleTheme">
                <v-icon>
                  mdi-theme-light-dark
                </v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <!-- Card test -->
              <v-card elevation="5" class="pa-2">
                <v-card-title class="title primary--text">Lorem ipsum</v-card-title>
                <v-card-text>
                <p class="secondary--text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora corporis laudantium laboriosam est ipsum! Delectus esse et modi minima similique maiores, eum nemo voluptatem animi, magni cupiditate. Obcaecati, dolorem ut!
                </p>
                <p class="primary--text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora corporis laudantium laboriosam est ipsum! Delectus esse et modi minima similique maiores, eum nemo voluptatem animi, magni cupiditate. Obcaecati, dolorem ut!
                </p>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn class="primary--text">
                  Go it!
                </v-btn>
              </v-card-actions>
              </v-card>
              <!-- end Card test -->
            </v-card-text>
          </v-card>
          <!-- Code generated -->
          <v-card dark v-show="css != ''">
            <v-card-title class="title">
              Code css à copier :
              <v-spacer></v-spacer>
              <v-btn class="text-none" @click="generateTheme()">
                Générer
              </v-btn>
            </v-card-title>
            <v-card-text ref="result">
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script src="./theme.js"></script>
