<template>
  <div class="titleListCities">
    <h1>{{ msg }}</h1>

  </div>
  <div v-for="city in cities" v-bind:key="city.id">
    <CityWeather
        :name=city.name
        :weather=city.weather
        :temperature=city.temperature
        :updatedAt=city.updatedAt
    />
  </div>
</template>

<script>
import CityWeather from "@/components/CityWeather.vue";
import {format} from 'timeago.js';
export default {
  name: 'Météo - listes des villes',
  components: { CityWeather },
  props: {
    msg: String
  },
  data(){
    return {
      cities: [
        {
          id:1,
          name:"Annemasse",
          weather:'Ensoleillé',
          temperature:19.5,
          updatedAt:format(new Date())
        },
        {
          id:2,
          name:"Lyon",
          weather:'Ensoleillé',
          temperature:18.5,
          updatedAt:format(new Date())
        }
      ]
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>