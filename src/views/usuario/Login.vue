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
                        v-model="formulario.email"
                        :error-messages="erroresEmail"
                        @blur="$v.formulario.email.$touch()"
                        clearable
                        @keyup.enter="ingresar"
                    ></v-text-field>
                    <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                        v-model="formulario.password"
                        :error-messages="erroresPassword"
                        @blur="$v.formulario.password.$touch()"
                        clearable
                        @keyup.enter="ingresar"
                    ></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-layout justify-end>
                        <v-btn @click="ingresar" :disabled="$v.formulario.$invalid">Siguiente</v-btn>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { setTimeout } from 'timers';
import {mapMutations,mapGetters} from 'vuex'
export default {
    data(){
        return {
            formulario: {
                email:'',
                password:''
            }
        }
    },
    methods:{
        ...mapMutations(['mostrarOcupado','ocultarOcupado','mostrarExito']),
        ...mapMutations('sesion',['actualizarUsuario']),
        ingresar(){
            if(this.$v.formulario.$invalid){ 
                this.$v.formulario.$touch()
                return 
            }
            let usuario = {
                userName: 'Mauricio',
                nombres:'Mauricio',
                apellidos:'Renero',
                sexo: 'M',
                descripcion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',
                biografia:'facebook.com',
                foto:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            }

            let ocupado = {
                titulo: 'Validando Credenciles',
                mensaje: 'Estamos validando tu información...'
            }

            //this.$store.commit('mostrarOcupado',ocupado)
            this.mostrarOcupado(ocupado)

            setTimeout(() => {
                //this.$store.commit('ocultarOcupado')
                this.ocultarOcupado()

                //this.$store.state.usuario = usuario
                //this.$store.commit('actualizarUsuario',usuario)
                this.actualizarUsuario(usuario)
                
                //this.$store.commit('mostrarExito',this.$store.getters.saludo)
                //this.$store.commit('mostrarExito',this.saludo)
                this.mostrarExito(this.saludo)
            },1000)
        }
    },
    validations:{
        formulario:{
            email:{
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6),
                maxLength: maxLength(20)
            }
        }
    },
    computed:{
        // ...mapGetters(['saludo']),
        ...mapGetters('sesion',['saludo']),
        erroresEmail(){
            let errores = []
            if(!this.$v.formulario.email.$dirty){ return errores }
            if(!this.$v.formulario.email.required){ errores.push("Ingresa tu email") }
            if(!this.$v.formulario.email.email){ errores.push("Ingresa un email válido") }
            return errores
        },
        erroresPassword(){
            let errores = []
            if(!this.$v.formulario.password.$dirty){ return errores }
            if(!this.$v.formulario.password.required){ errores.push('Ingresa tu password') }
            if(!this.$v.formulario.password.minLength){ errores.push('Ingresa un password válido') }
            if(!this.$v.formulario.password.maxLength){ errores.push('Ingresa un password válido') }
            return errores
        }
    }
}
</script>
