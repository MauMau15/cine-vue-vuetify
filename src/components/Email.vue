<template>
    <div class="terciario">
        <div>
            <!-- <input 
                type="text" 
                @keyup.enter="actualizarEmail"> -->
            <input type="text" v-model="email" @keyup.enter="actualizarEmail">
        </div>
        <!-- <div class="email">
            <span>
                Email: {{email}}
            </span>
        </div> -->
    </div>
</template>

<script>
export default {
    props:['emailRecibido'],
    data(){
        return{
            email:''
        }
    },
    methods:{
        actualizarEmail(){
            // this.email = event.target.value
            this.$emit('onCambioEmail',this.email)
        }
    },
    watch: {
        emailRecibido(){
            this.email = this.emailRecibido
        }
    }
}
</script>
