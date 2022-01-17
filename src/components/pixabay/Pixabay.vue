<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row>
      <b-col>
        <Buscador v-on:buscarDesdeHijo="buscarImagenes"></Buscador>
      </b-col>
    </b-row>
    <b-row id="my-images">
      <b-col 
        v-for="img in pixaImagenes" 
        v-bind:key='img.id' 
        md="2" class="py-2"
      >
        <Imagen v-bind:img="img"></Imagen>
      </b-col>
    </b-row>
    <b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-images"
        @input="buscarImagenesPaginado"
      ></b-pagination>
    </b-row>
  </b-container>
</template>

<script>
import ServicioAPI from "./ServicioAPI";
import Imagen from "./Imagen.vue";
import Buscador from "./Buscador.vue";

export default {
  name: "Pixabay",
  components: {
    Imagen,
    Buscador
  },
  data() {
    return {
      pixaImagenes: [],
      buscar: "",
      //for b-pagination
      currentPage: 1,
      rows: 1,
      perPage: 20
    }
  },
  methods: {
    async buscarImagenesPaginado() {
      const consulta = await ServicioAPI.getImages( this.buscar, this.currentPage );
      this.pixaImagenes = consulta.hits;
      console.log( consulta );
      this.rows = consulta.totalHits;
    },
    buscarImagenes(buscar="") {
      this.buscar = buscar;
      this.currentPage = 1;
      this.buscarImagenesPaginado();
    }
  },
  mounted() {
    this.buscarImagenes();
  }
}
</script>

<style lang="stylus" scoped>

</style>