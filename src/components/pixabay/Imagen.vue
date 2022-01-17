<template>
  <div>
    <b-img 
      thumbnail fluid 
      v-bind:src="img.previewURL"
      v-b-popover.hover.top="img.tags" 
      title="Tags"
      v-on:click="showModal"
    ></b-img>
    <b-modal v-bind:ref="img.id" hide-footer v-bind:title="img.tags">
      <b-img-lazy fluid v-bind:src="img.largeImageURL"></b-img-lazy>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Imagen",
  props: ["img"],
  methods: {
    showModal() {
      this.$refs[this.img.id].show();
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>