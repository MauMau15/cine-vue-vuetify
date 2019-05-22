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

        <v-list-tile v-if="usuario" @click="render('Perfil')">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Perfil'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-tile @click="render('Registro')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Registro'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        <v-list-tile v-if="!usuario" @click="render('Login')">
          <v-list-tile-action>
            <v-icon>arrow_forward</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Login'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="usuario" @click="salir">
          <v-list-tile-action>
            <v-icon>arrow_back</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Salir'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar color="primary" dark app>
      <v-toolbar-side-icon @click="menu = !menu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase logo" @click="componenteActual = 'Home'">
        <span class="titulo">{{titulo}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="usuario">{{ usuario.nombres }}</span>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <component :is="componenteActual" />
      </v-container>
    </v-content>

    <v-snackbar
      v-model="notificacion.visible" 
      :color="notificacion.color"
      multi-line
      top
      :timeout="6000"
      dark>
      {{notificacion.mensaje}}
      <v-btn flat color="white" @click="ocultarNotificacion">Cerrar</v-btn>
    </v-snackbar>

    <v-dialog v-model="ocupado.visible" max-width="400" persistent>
      <v-card>
        <v-toolbar color="primary" dark card>
          <v-toolbar-title>
            {{ocupado.titulo}}
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="subheading">
          {{ocupado.mensaje}}
        </v-card-text>
        <v-card-text>
          <v-progress-linear :indeterminate="true" color="primary"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

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

import {mapState,mapMutations,mapActions} from 'vuex'

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
    },
    ...mapMutations(['ocultarNotificacion']),
    ...mapActions('sesion',['cerrarSesion']),
    // ocultarNotificacion(){
    //   this.$store.commit('ocultarNotificacion')
    // },
    salir(){
      // this.$store.dispatch('salir')
      this.cerrarSesion()
      this.menu = false
    }
  },
  computed:{
    ...mapState(['notificacion','ocupado']),
    ...mapState('sesion',['usuario'])
    //...mapState({usuario: state => state.sesion.usuario})
    //...mapState(['usuario','notificacion','ocupado'])
    // usuario(){
    //   return this.$store.state.usuario
    // },
    // notificacion(){
    //   return this.$store.state.notificacion
    // },
    // ocupado(){
    //   return this.$store.state.ocupado
    // }
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
