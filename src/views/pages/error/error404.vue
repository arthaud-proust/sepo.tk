<template>
  <v-container>
  <center>
    <div id="error">
      <h1>Où allez-vous?</h1>
      <h3>La page que vous cherchez n'existe pas</h3>
      <h4><a href="/">Revenir parmis nous</a></h4>
    </div>
  </center>
  </v-container>
</template>
<style>
  @media (max-width: 700px) {
    #error {
    height: 500px;
    width: 300px;
    background-image: url(../../../assets/svg/blob1_mobile.svg);
    color: #bbb;
    padding-top: 214px;
    line-height: 25px;
    }
    #error h1 {
      font-size: 1.5em;
    }
    #error h3 {
      font-size: 0.9em;
    }
    #error h4 {
      font-size: 0.8em;
    }
}

@media (min-width: 700px) {
    #error {
    height: 600px;
    width: 600px;
    background-image: url(../../../assets/svg/blob1_large.svg);
    color: #bbb;
    padding-top: 225px;
    line-height: 43px;
  }
}

</style>
<script>
export default {
  created () {
    if (this.$route.meta.background) {
      document.body.setAttribute('class', 'bg' + this.$route.meta.background)
    }
  }
}
</script>
