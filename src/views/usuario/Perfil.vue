<template>
    <v-layout text-xs-center align-start justify-center>
        <v-card class="elevation-12">
            <v-card-text>
                <div class="ma-2">
                    Nombre y Apellidos
                </div>
                <img class="ma-2" :src="require('@/assets/user.png')" alt="">
                <div class="ma-2">Descripcion</div>
                    <v-btn outline color="primary">Biografía</v-btn>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<style lang="scss">
    .fotoPerfil{
        width: 200px;
        height: 100%;
    }
</style>
