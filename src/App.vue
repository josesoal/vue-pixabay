<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container> <!-- To avoid content sticked to the left -->
        <b-navbar-brand>Menu</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/">Imágenes</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/pixa">Imágenes</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
