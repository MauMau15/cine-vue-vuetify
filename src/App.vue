<template>
  <v-app>
    <v-toolbar color="primary" dark app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{titulo}}</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <component :is="componenteActual" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import Registro from '@/views/usuario/Registro.vue'
import Login from '@/views/usuario/Login.vue'
import Home from '@/views/Home.vue'
export default {
  components: { Home, Registro, Login },
  name: 'App',
  data () {
    return {
      titulo: 'Super Opera',
      componenteActual: 'Login'
    }
  }
}
</script>
