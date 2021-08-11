<template>
  <h1>Episodios</h1>
 <DataList :resultados="resultados" :personajes="false"></DataList>
</template>

<script>
import { usarQuery } from "../composables/Query";
import DataList from '../components/DataList.vue';
export default {
  components:{
    DataList
  },
  setup() {
    const query = `query($page:Int){
           results: episodes(page: $page){
                info{
                    count
                    pages
                    next
                    prev
                }
                results{
                    id
                    name
                    air_date
                    episode
                    created
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