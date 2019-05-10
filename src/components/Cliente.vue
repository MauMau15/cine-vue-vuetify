<template>
    <div class="terciario">
        <div>{{nombreCompleto}}</div>
        <div>Edad: {{edad}}</div>
        <img :src="foto" :alt="nombreCompleto" class="foto">
        <div>{{email}}</div>
    </div>
</template>

<script>
export default {
    props: ['email'],
    data(){
        return{
            nombre: 'Mauricio',
            apellido: 'Renero',
            fechaNac: '1995-06-15',
            foto: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_496,h_620/v1554939197/assets/c1/6367a6-71e0-48c4-8910-7ebfa9af8bc9/original/UberIM_010182.jpg'
        }
    },
    computed: {
        nombreCompleto: function(){
            return `${this.nombre} ${this.apellido}`
        },
        edad: function(){
            return this.calcularEdad(this.fechaNac)
        }
    },
    methods:{
        calcularEdad(fecha){
            let fechaNac = new Date(fecha)
            let fechaActual = new Date()
            return Math.floor((fechaActual - fechaNac) / (1000 * 60 * 60 * 24 * 365.25))
        }
    },
    created(){
        this.$emit('onCambioEmail','newton')
    }
}
</script>


<style lang="scss">
    .foto{
        width:25rem;
    }
</style>
