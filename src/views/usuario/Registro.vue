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
                            clearable
                            v-model="credenciales.email"
                            :error-messages="erroresEmail"
                            @blur="$v.credenciales.email.$touch()"
                            @keyup.enter="ingresarNombres"
                        ></v-text-field>
                        <v-text-field
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                            clearable
                            v-model="credenciales.password"
                            :error-messages="erroresPassword"
                            @blur="$v.credenciales.password.$touch()"
                            @keyup.enter="ingresarNombres"
                        ></v-text-field>
                        <v-text-field
                            name="repeatPassword"
                            label="Repetir Password"
                            id="repeatPassword"
                            type="password"
                            clearable
                            v-model="credenciales.repetirPassword"
                            :error-messages="erroresRepetirPassword"
                            @blur="$v.credenciales.repetirPassword.$touch()"
                            @keyup.enter="ingresarNombres"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-text>
                        <v-layout justify-end>
                            <v-btn @click="ingresarNombres" :disabled="$v.credenciales.$invalid">Siguiente</v-btn>
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
                            v-model="nombres.nombres"
                            :error-messages="erroresNombres"
                            @blur="$v.nombres.nombres.$touch"
                            @keyup.enter="irFechaNac"
                        ></v-text-field>
                        <v-text-field
                            name="apellido"
                            label="Apellido"
                            id="apellido"
                            v-model="nombres.apellidos"
                            :error-messages="erroresApellidos"
                            @blur="$v.nombres.apellidos.$touch"
                            @keyup.enter="irFechaNac"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-text>
                        <v-layout justify-space-between>
                            <v-btn @click="vista--">Atras</v-btn>
                            <v-btn @click="irFechaNac" :disabled="$v.nombres.$invalid">Siguiente</v-btn>
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
                            <v-date-picker :max="fechaMaxima" class="elevation-3" v-model="fechaNacimiento" reactive locale="es-mx"></v-date-picker>    
                        </v-layout>
                    </v-card-text>
                    <v-card-text>
                        <v-layout justify-space-between>
                            <v-btn @click="vista--">Atras</v-btn>
                            <v-btn @click="vista++">Siguiente</v-btn>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-slide-y-transition>
        </v-flex>    
    </v-layout>
</template>

<script>
import { email, required, sameAs, minLength, maxLength, alpha } from 'vuelidate/lib/validators'
export default {
    data(){
        return{
            vista: 1,
            fechaNacimiento: null,
            credenciales:{
                email:'',
                password:'',
                repetirPassword:''
            },
            nombres:{
                nombres:'',
                apellidos:''
            },
            fechaMaxima: ''
        }
    },
    validations:{
        credenciales:{
            email:{
                required,
                email
            },
            password:{
                required,
                minLength: minLength(6),
                maxLength: maxLength(20),
            },
            repetirPassword:{
                sameAs: sameAs('password')
            }
        },
        nombres:{
            nombres:{
                required,
                minLength:minLength(3),
                maxLength:maxLength(30),
                alpha
            },
            apellidos:{
                required,
                minLength:minLength(3),
                maxLength:maxLength(30),
                alpha
            }
        }
    },
    computed:{
        erroresEmail(){
            let errores = []
            if(!this.$v.credenciales.email.$dirty){return errores}
            if(!this.$v.credenciales.email.required){errores.push('Ingrese un email')}
            if(!this.$v.credenciales.email.email){errores.push('El email que ha ingresado no es valido')}
            return errores
        },
        erroresPassword(){
            let errores = []
            if(!this.$v.credenciales.password.$dirty){return errores}
            if(!this.$v.credenciales.password.required){errores.push('Ingresa una contraseña valida')}
            if(!this.$v.credenciales.password.minLength){errores.push('Ingresa una contraseña valida con mas de 6 caracteres')}
            if(!this.$v.credenciales.password.maxLength){errores.push('Ingresa una contraseña valida con menos de 20 caracteres')}
            return errores
        },
        erroresRepetirPassword(){
            let errores = []
            if(!this.$v.credenciales.repetirPassword.$dirty){return errores}
            // if(!this.$v.credenciales.repetirPassword.required){errores.push('Ingresa una contraseña valida')}
            // if(!this.$v.credenciales.repetirPassword.minLength){errores.push('Ingresa una contraseña valida con mas de 6 caracteres')}
            // if(!this.$v.credenciales.repetirPassword.maxLength){errores.push('Ingresa una contraseña valida con menos de 20 caracteres')}
            if(!this.$v.credenciales.repetirPassword.sameAs){errores.push('Las contraseñas deben coincidir')}
            return errores
        },
        erroresNombres(){
            let errores = []
            if(!this.$v.nombres.nombres.$dirty){return errores}
            if(!this.$v.nombres.nombres.required){errores.push('Ingresa un nombre')}
            if(!this.$v.nombres.nombres.minLength){errores.push('Ingresa una nombre valido con mas de 6 caracteres')}
            if(!this.$v.nombres.nombres.maxLength){errores.push('Ingresa una nombre valido con menos de 30 caracteres')}
            if(!this.$v.nombres.nombres.alpha){errores.push('Ingresa solo letras')}
            return errores
        },
        erroresApellidos(){
            let errores = []
            if(!this.$v.nombres.apellidos.$dirty){return errores}
            if(!this.$v.nombres.apellidos.required){errores.push('Ingresa un apellido')}
            if(!this.$v.nombres.apellidos.minLength){errores.push('Ingresa una apellido valido con mas de 6 caracteres')}
            if(!this.$v.nombres.apellidos.maxLength){errores.push('Ingresa una apellido valido con menos de 30 caracteres')}
            if(!this.$v.nombres.apellidos.alpha){errores.push('Ingresa solo letras')}
            return errores
        }
    },
    methods: {
        ingresarNombres(){
            if(this.$v.credenciales.$invalid){
                this.$v.credenciales.$touch()
                return
            }
            this.vista++
        },
        irFechaNac(){
            if(this.$v.nombres.$invalid){
                this.$v.nombres.$touch()
                return
            }
            this.vista++
        }
    },
    created(){
        let fechaActual = new Date()
        this.fechaMaxima = new Date(fechaActual.setFullYear(fechaActual.getFullYear() - 13))
            .toISOString()
            .substring(0,10)
    }
}
</script>

