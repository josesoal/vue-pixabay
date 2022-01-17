<template>
  <div>
    <b-row align-h="center">
      <b-col cols="6">
        <b-form-input 
          v-model="buscar" placeholder="Ingrese texto a buscar"
          v-on:keypress.enter="buscarHijo"
        ></b-form-input>
      </b-col>
      <b-col cols="1">
        <b-button variant="danger" v-on:click="buscarHijo">Buscar</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Buscador",
  data() {
    return {
      buscar: ""
    }
  },
  methods: {
    buscarHijo() {
      this.$emit("buscarDesdeHijo", this.buscar);
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>