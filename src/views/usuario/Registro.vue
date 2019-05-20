<template>
    <v-layout justify-center align-center>
        <v-flex xs12 sm8 md6 lg5 xl4>
            <v-slide-y-transition mode="out-in">
                <v-card v-if="vista === 1" transition="slide-x-transition" :key="1" class="elevation-6">
                    <v-toolbar color="primary" dark card>
                        <v-toolbar-title>
                            Registrate
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
                <v-card v-if="vista === 2" :key="2" class="elevation-6">
                    <v-toolbar color="primary" dark card>
                        <v-toolbar-title>
                            Ingresa tu nombre y apellidos
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                            name="nombre"
                            label="Nombre"
                            id="nombre"
                        ></v-text-field>
                        <v-text-field
                            name="apellido"
                            label="Apellido"
                            id="apellido"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-text>
                        <v-layout justify-end>
                            <v-btn @click="vista++">Siguiente</v-btn>
                        </v-layout>
                    </v-card-text>
                </v-card>
                <v-card v-if="vista === 3" :key="3" class="elevation-6">
                    <v-toolbar color="primary" dark card>
                        <v-toolbar-title>
                            Selecciona tu fecha de nacimiento
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-layout justify-center>
                            <v-date-picker class="elevation-3" v-model="fechaNacimiento" reactive locale="es-mx"></v-date-picker>    
                        </v-layout>
                    </v-card-text>
                    <v-card-text>
                        <v-layout justify-end>
                            <v-btn @click="vista++">Siguiente</v-btn>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-slide-y-transition>
        </v-flex>    
    </v-layout>
</template>

<script>
export default {
    data(){
        return{
            vista: 1,
            fechaNacimiento: null
        }
    }
}
</script>

