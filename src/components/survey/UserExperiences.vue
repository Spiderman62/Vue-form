<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <p v-else-if="results.length === 0">Can not find in store!</p>
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import db from '../../firebase/init.js';
import {query,collection,getDocs} from 'firebase/firestore';
export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results:[],
      isLoading:false,
      error:null
    }
  },
  methods:{
    async loadExperiences(){
      this.isLoading = true;
      this.results = [];
      const surveysCollection = collection(db,'surveys');
      const queryData = query(surveysCollection);
      const getData = await getDocs(queryData);
      getData.forEach(item=>{
          this.results.push(item.data());
      });
      this.isLoading = false;
    }
  },
  mounted(){
    this.loadExperiences().catch(err=>{
      console.log(err);
      this.error = 'Request to fetch data failure!';
    })
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>