<template>
  <ul class="data-list">
    <li v-for="resultado in resultados" :key="resultado.id">
      {{ resultado.name }}
      <img v-if="personajes" :src="resultado.image" alt="imagen">
    </li>
  </ul>
</template>
<script>
export default {
    name:'DataList',
    props:{
        resultados:Object,
        personajes:Boolean,
    }
}
</script>

<style>

</style>