<template>
  <header>
    <img :src="image" alt="logo">
  </header>
</template>

<script>
export default {
  name : "Header",
  data () {
    return {
      image : require('@/assets/logo.png')
    }
  }
}
</script>

<style scoped>
  header img {
    width: 300px;
  }

  @media screen and (max-width:700px ){
    img {
      display: block;
      margin: auto;
    }
  }
</style>
