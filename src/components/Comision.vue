<template>
    <div class="terciario">
        Comision
        <div :class="claseComision">
            $ {{comision}}
        </div>
    </div>
</template>


<script>
export default {
    props: ['comisionAsignada'],
    data(){
        return{
            comision: 0,
            claseComision:'neutro'
        }
    },
    watch:{
        comisionAsignada(){
            this.comision = this.comisionAsignada
            if(this.comision == 0){
                this.claseComision = 'neutro'
            }else if(this.comision == 150){
                this.claseComision = 'tope'
            }else{
                this.claseComision = 'permitido'
            }
        }
    }
}
</script>

<style lang="scss">
.neutro{
    color: blue;
}

.permitido{
    color: green;
}

.tope{
    color: red;
}
</style>
