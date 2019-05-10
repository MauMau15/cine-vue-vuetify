<template>
    <div>
        <transition name="fade" mode="out-in">
            <span :key="indice">{{presentaciones[indice]}}</span>
        </transition>
    </div>
</template>


<script>
export default {
    data(){
        return {
            presentaciones: [
                'Hamilton - 20:30',
                'Frozen - 15:00',
                'Anastasia - 14:00',
                'Avengers - 10:00'
            ],
            indice:0
        }
    },
    methods:{
        mostrarAnuncio: function(){
            this.indice++
            if(this.indice == this.presentaciones.length){
                this.indice = 0
            }
        }
    },
    mounted(){
        setInterval(this.mostrarAnuncio,2000)
    }
}
</script>

<style lang="scss">
.fade-enter{
    opacity: 0;
}

.fade-enter-active{
    transition: opacity 1s ease-out;
}

.fade-leave-active{
    transition: opacity .6s ease-out;
    opacity: 0;
}
</style>
