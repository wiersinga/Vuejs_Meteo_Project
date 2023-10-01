<script setup>
import props from './CityWeather.vue'

</script>

<script>
const props =  {
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: Date
  }
  export {props}
</script>


<template>
  <div class="cityDataWeather">
    <h3> {{ name }}</h3>
    <ul>
      <li>Météo : {{ weather }}</li>
      <li>Temperature : {{ temperature }}</li>
      <li>Date : {{ updatedAt.toLocaleString() }}</li>
    </ul>
  </div>
</template>
