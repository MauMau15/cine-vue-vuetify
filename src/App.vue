<template>
  <v-app>
    <v-navigation-drawer v-model="menu" app>
      <v-list>
        <v-list-tile @click="render('home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Inicio'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="render('Perfil')">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Perfil'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="render('Registro')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Registro'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="render('Login')">
          <v-list-tile-action>
            <v-icon>arrow_forward</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Login'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark app>
      <v-toolbar-side-icon @click="menu = !menu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase logo" @click="componenteActual = 'Home'">
        <span class="titulo">{{titulo}}</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <component :is="componenteActual" />
      </v-container>
    </v-content>
    <v-footer color="primary" dark>
      <v-layout justify-center>
        <span>Super Opera &copy;</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

import Registro from '@/views/usuario/Registro.vue'
import Login from '@/views/usuario/Login.vue'
import Home from '@/views/Home.vue'
import Perfil from '@/views/usuario/Perfil.vue'
export default {
  components: { Home, Registro, Login, Perfil },
  name: 'App',
  data () {
    return {
      titulo: 'Super Opera',
      componenteActual: 'Home',
      menu:false
    }
  },
  methods: {
    render(vista){
      this.componenteActual = vista
      this.menu = false
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Marcellus+SC|Montserrat&display=swap');

  .titulo{
    font-family: 'Marcellus SC', serif;
  }
  
  .logo{
    cursor: pointer;
  }
</style>
