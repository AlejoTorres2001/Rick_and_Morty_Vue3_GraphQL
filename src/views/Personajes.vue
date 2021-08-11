<template>
  <h1>Personajes</h1>
    <DataList :resultados="resultados" :personajes="true"></DataList>
</template>

<script>
import { usarQuery } from '../composables/Query';
import DataList from '../components/DataList.vue';
export default {
  components:{
    DataList,
  },
   setup() {
    const query = `query($page:Int){
           results: characters(page: $page){
                info{
                    count
                    pages
                    next
                    prev
                }
                results{
                    id
                    name
                    image
                }
            }
        }`;
    const resultados = usarQuery(query);
    return resultados;
  },
};
</script>

<style>
</style>