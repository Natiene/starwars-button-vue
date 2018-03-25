<template>
  <b-conteiner>
  <div class="button-top">
    <b-button-group>
      <b-button variant="success" @click="btn1">People One</b-button>
      <b-button variant="danger" @click="btn2">People Two</b-button>
      <b-button variant="info" @click="btn3">People Three</b-button>
    </b-button-group>
  </div>
    <hr/>

    <b-row>
    <div class="people">
      <p>Nome: {{mostrar.name}}<br/>
      Altura: {{mostrar.height}}<br/>
        Peso: {{mostrar.mass}}<br/></p>
  </div>
    </b-row>

  </b-conteiner>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      mostrar: ''
    }
  },
  methods: {

    btn1: function () {
      axios.get('https://swapi.co/api/people/1/').then(response => {
        this.mostrar = response.data
      })
    },
    btn2: function () {
      axios.get('https://swapi.co/api/people/2/').then(response => {
        this.mostrar = response.data
      })
    },
    btn3: function () {
      axios.get('https://swapi.co/api/people/3/').then(response => {
        this.mostrar = response.data
      })
    }
  }
}
</script>

<style scoped>

  .button-top {
    margin-top: 10vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .people {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
