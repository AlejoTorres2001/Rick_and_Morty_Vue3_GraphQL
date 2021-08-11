import { inject, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { request as fetchGQL } from "graphql-request";
export function usarQuery(query) {
  let resultados = ref([]); //referencia al array,esto esta vivo para Vue.SI CAMBIA DEBE REALIZAR LOS TRIGGERS
  const info = inject("info");
  const route = useRoute();
  watchEffect(() => {
    fetchGQL("https://rickandmortyapi.com/graphql", query, {
      page: parseInt(route.params.page),
    }).then((data) => {
      resultados.value = data.results.results;
      console.log(data);
      info.value = data.results.info;
    });
  });

  return {
    resultados,
  };
}
