<template>
  <v-layout text-xs-center align-start justify-center>
    <v-flex xs12 sm6>
      <v-card class="elevation-12" :hover="true">
        <v-img :src="usuario.foto" :alt="usuario.nombres" height="200px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{usuario.nombres}}</div>
            <span class="grey--text">{{usuario.apellidos}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="primary" :href="usuario.biografia" target="_blank">Biografía</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text
            text-sm-left
            v-show="show">{{usuario.descripcion}}</v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            show: false
        }
    },
    computed: {
        ...mapState('sesion',['usuario'])
        // usuario() {
        //     //return this.$store.state.usuario
        //     return this.usuario
        // }
    }
};
</script>


<style lang="scss">
.fotoPerfil {
  width: 200px;
  height: 100%;
}
</style>
