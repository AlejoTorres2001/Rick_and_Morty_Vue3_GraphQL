<template>
  <div id="nav">
    <router-link to="/episodios">episodios</router-link> |
    <router-link to="/ubicaciones">ubicaciones</router-link> |
    <router-link to="/personajes">personajes</router-link> |
   
  </div>
  <router-view/>
  <hr>
  <nav>

    <router-link :to="prevComp">Prev</router-link> 
    |
    <router-link :to="nextComp">Next</router-link> 
  </nav>
</template>
<script setup> //shortcut a la funcion setup en vez de return 
import { ref } from "@vue/reactivity";
import { computed, provide } from "@vue/runtime-core";

const {useRouter} = require('vue-router')

const info = ref({
  count:0,
  pages:0,
  next:0,
  prev:0
});

provide("info",info); //componente padre provee a hijos
const route= useRouter()

 const prevComp= computed(()=>({ //el obj computed revisa las referencias  asociadas y se recalcula automaticamente
  name:route.name, // route hace referencia a la ruta actual en la que estoy
  params:{page:info.value.prev || route.name},
}))
 const nextComp= computed(()=>(
  { 
  name:route.name, 
  params:{page:info.value.next || route.name},
  }
 ))


</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
