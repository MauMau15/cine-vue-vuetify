<template>
  <div id="app" class="principal">
    <Entrada/>
  </div>
</template>

<script>
import Entrada from '@/views/Entrada.vue'

export default {
  name: 'App',
  components: { Entrada },
  data(){
    return{ 
      appName: 'Clientes'
    }
  },
  computed:{
    reversed: function(){
      return this.appName.split('').reverse().join('')
    }
  }
}

</script>

<style lang="scss">
  html{
    font-size: 62.5% !important;
  }

  .principal{
    color: white;
    background-color: #a21010;
    width: 400px;
    text-align: center;padding: 10px;
    padding: 10px;
    border-radius: 5px;
    font-size: 3rem;
  }

  .terciario{
      background-color: gray;
      margin: 10px 0;
      border-radius: 5px;
      padding: 10px;
  }
</style>

