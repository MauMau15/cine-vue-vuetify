<template>
    <div class="secundario">
        {{title}}
        <Anuncio />
        <Cliente 
            :email="email" 
            @onCambioEmail="actualizarEmail"/>
        <Boletos
            @onAsignaComision="actualizarComision"
            :comision="comision"
             />
        <Comision 
            :comisionAsignada="comision" />
        <Firma />
        <Email 
            :emailRecibido="email"
            @onCambioEmail="actualizarEmail"/>
    </div>
</template>

<script>
import Cliente from '@/components/Cliente.vue'
import Anuncio from '@/components/Anuncio.vue'
import Boletos from '@/components/Boletos.vue'
import Firma from '@/components/Firma.vue'
import Email from '@/components/Email.vue'
import Comision from '@/components/Comision.vue'

export default {
    components: { Cliente, Anuncio, Boletos, Firma, Email, Comision },
    data(){
        return{
            title:'Entradas',
            email: '',
            comision: 0
        }
    },
    methods:{
        actualizarEmail(email){
            this.email = email
        },
        actualizarComision(cantidadBoletos){
            this.comision = cantidadBoletos * 15
        }
    }
}
</script>