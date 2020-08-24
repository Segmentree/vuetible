<template>
  <div>
    <v-container>
      <v-flex xs12>
        <h2></h2>
      </v-flex>
      <Search 
        @find="processFind"
      ></Search>
      <List
        :city="city"
        :fahrenheitTemperature="fahrenheitTemperature"
      ></List>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/search.vue'
import List from '../components/list.vue'
import Model from '../views/Home_TS/Model.ts'
const model = new Model();
export default {
  name: 'Home',
  data() {
    return {
      title: "Test Title",
      fahrenheitTemperature: 10,
      city: '',
    }
  },
  components: {
    Search,
    List,
  },
  methods: {
    processFind(word){
      const data = model.fetchResponse(window.fetch, word);
      data.then(res => {
        const KelvinTemp = res.main.temp;
        this.fahrenheitConverter(KelvinTemp);
        this.city = res.name;
      })
    },
    convertToFahrenheit(kelvinTemp){
      return (Math.round((kelvinTemp-273.15)*1.8)+32)
    },
  },
}
</script>
