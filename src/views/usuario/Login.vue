<template>
    <v-layout justify-center align-center>
        <v-flex xs12 sm8 md6 lg5 xl4>
            <v-card class="elevation-6">
                <v-toolbar color="primary" dark card>
                    <v-toolbar-title>
                        Ingresa tus credenciales
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                    ></v-text-field>
                    <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                    ></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-layout justify-end>
                        <v-btn @click="vista++">Siguiente</v-btn>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
