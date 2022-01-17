<template>
  <b-container>
    <b-row>
      <b-col class="text-center">
        <h1>Bienvenidos</h1>
        <img src="../assets/logo.png" alt="">
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="red in redes" :key="red.text" class="text-center">
        <b-link :href="red.url" target="_blank">
          <b-alert show :variant="red.color">
            {{red.text}}
          </b-alert>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      redes: [
        {
          text: 'Vue homepage',
          url: 'https://vuejs.org/',
          color: 'info'
        },
        {
          text: 'Vue in Wikipedia',
          url: 'https://es.wikipedia.org/wiki/Vue.js',
          color: 'warning'
        },
        {
          text: 'Vue/CLI homepage',
          url: 'https://cli.vuejs.org/',
          color: 'danger'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>