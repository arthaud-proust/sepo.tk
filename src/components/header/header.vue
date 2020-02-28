<template>
    <v-toolbar app dark flat fixed :class="{'mobile': $vuetify.breakpoint.smAndDown, 'large': $vuetify.breakpoint.smAndUp}">
        <v-toolbar-title class="hidden-sm-and-down" to="/"><h1>Arthaud Proust</h1></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn bd-0 flat to="/" rel="tag">
                <div class="icon">
                    <span>Qui suis-je?</span>
                    <v-icon>mdi-fingerprint</v-icon>
                </div>
            </v-btn>
            <v-btn bd-0 flat to="/projects" rel="tag">
                <div class="icon">
                    <span >Mes projets</span>
                    <v-icon>mdi-flask-outline</v-icon>
                </div>
            </v-btn>
        </v-toolbar-items>
        <v-spacer class="hidden-md-and-up"></v-spacer>
    </v-toolbar>
</template>
<script src="./header.js"></script>
<style src="./header.css"></style>
