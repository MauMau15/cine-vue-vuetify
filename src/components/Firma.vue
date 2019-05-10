<template>
    <canvas 
        @mousemove="dibujar"
        @mousedown.left="iniciarDibujo"
        @mousedown.right="iniciarBorrado"
        @mouseup="detener"
        @contextmenu.prevent
        ref="firma" 
        class="firma" 
        width="380" 
        height="200">

    </canvas>
</template>

<script>
export default {
    data(){
        return{
            ctx: null,
            x0: -1,
            y0: -1,
            dibujando: false
        }
    },
    mounted(){
        this.ctx = this.$refs.firma.getContext('2d')
        this.ctx.lineCap='round'
    },
    methods:{
        dibujar(event){
            if(!this.dibujando){ return }

            if(this.x0 == -1 || this.y0 == -1){
                this.x0 = event.offsetX
                this.y0 = event.offsetY
            }
            
            const x1 = event.offsetX
            const y1 = event.offsetY
            this.ctx.beginPath()
            this.ctx.moveTo(this.x0,this.y0)
            this.ctx.lineTo(x1,y1)
            this.ctx.stroke()

            this.x0 = x1
            this.y0 = y1
        },
        detener(){
            this.dibujando = false
            this.x0 = -1
            this.y0 = -1
        },
        iniciarDibujo(){
            this.dibujando = true
            this.ctx.strokeStyle='#303030'
            this.ctx.lineWidth = 5
            
        },
        iniciarBorrado(){
            this.dibujando = true
            this.ctx.strokeStyle='#fff'
            this.ctx.lineWidth = 50
        }
    }
}
</script>


<style lang="scss">
.firma{
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9);
}
</style>
