<template>
  <h1>Ubicaciones</h1>
   <DataList :resultados="resultados" :personajes="false"></DataList>
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
           results: locations(page: $page){
                info{
                    count
                    pages
                    next
                    prev
                }
                results{
                    id
                    name
                    type
                    dimension
                    created
                }
            }
        }`;
    const resultados = usarQuery(query);
    return resultados;
  },
}
</script>

<style>

</style>