<template>
  <v-layout column justify-center text-xs-center>
    <div class="home-titulo" color="primary">
      <h1>Super Opera</h1>
    </div>
    <v-layout wrap>
      <v-flex align-content-space-between xs12 sm6 md4 lg3 v-for="item in 4" :key="item">
        <v-card class="ma-2" :hover="true">
          <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQIZeA1J1sMUDK1xuTzx1LKpGC4cFBE8_XV08L_fQG_vZ--KF"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<style lang="scss">
  .home-titulo{
    font-family: 'Marcellus SC', serif;
    font-size: 2rem;
    font-weight: 100;
  }
</style>

