<template>
    <div class="terciario boletos">
        <div>
            <div>Boletos</div>
            <span>{{boletos}}</span>
            <!-- <div v-if="!pago">
                <button @click="actualizarBoletos(1)">+</button>
                <button @click="actualizarBoletos(-1)">-</button>
            </div> -->
        </div>
        <div>
            <div>Asientos</div>
            <div class="asientos">
                <transition-group name="superior">
                    <button 
                        v-for="(asiento,index) in asientos" 
                        :key="asiento"
                        @click="seleccionar(asiento,index)"
                        class="asiento">{{asiento}}</button>
                </transition-group>
            </div>
            <div class="alert warning" v-show="asientos.length === 0">
                No hay asientos disponibles
            </div>
        </div>
        <div>
            <div>Seleccionados</div>
            <div class="asientos">
                <transition-group name="superior">
                    <button 
                    v-for="(asiento,index) in seleccionados" 
                    :key="asiento"
                    @click="remover(asiento,index)"
                    class="asiento">{{asiento}}</button>
                </transition-group>
            </div>
        </div>
        <div v-if="!pago && boletos > 0">
            <button @click="pago = true">Pagar</button>
        </div>
        <div v-if="pago">
            <button @click="reiniciar">Reiniciar</button>
        </div>
        <transition name="scale-y" mode="out-in">
            <div :key="1" v-if="!pago && boletos == 0" class="alert danger">
                Selecciona por lo menos un boleto
            </div>
            <div :key="2" v-else-if="!pago && boletos > 0" class="alert warning">
                Recuerda pagar tu compra
            </div>
            <div :key="3" v-else-if="pago && boletos > 0" class="alert success">
                Muchas gracias por su compra
            </div>
        </transition>
        <div v-if="pago">
            <Ticket>
                <div slot="obra">
                    <span>Obra: Avengers</span>
                </div>
                <div slot="horario">
                    <span>Horario: 10:00 pm</span>
                </div>
                <div slot="asientos" style="margin: 3rem 0;">
                    <div>Asientos</div>
                    <button 
                        v-for="(asiento,index) in seleccionados" 
                        :key="asiento"
                        @click="remover(asiento,index)"
                        class="asiento">{{asiento}}</button>
                </div>
                <div slot="total">
                    <span>Total Boletos: ${{totalBoletos}}</span>
                </div>
                <div slot="comision">
                    <span>Comision: ${{comision}}</span>
                </div>
                <div slot="totalPagar">
                    <span>A Pagar: ${{totalPagar}}</span>
                </div>
            </Ticket>
        </div>
        
    </div>
</template>

<script>
import Ticket from '@/components/Ticket.vue'
export default {
    components: { Ticket },
    props:['comision'],
    data(){
        return{
            boletos:0,
            pago: false,
            asientos: [
                'A1','A2','A3','A4','A5',
                'B1','B2','B3','B4','B5'
            ],
            seleccionados: []
        }
    },
    computed:{
        totalBoletos: function(){
            return this.boletos * 130
        },
        totalPagar: function(){
            return this.totalBoletos + this.comision
        }
    },
    methods: {
        actualizarBoletos(cantidad){
            this.boletos += cantidad
            if(this.boletos > 10){
                this.boletos = 10
            }else if(this.boletos < 0){
                this.pago = false
                this.boletos = 0
            }
            this.$emit('onAsignaComision',this.boletos)
        },
        reiniciar(){
            this.boletos = 0
            this.pago = false
            this.$emit('onAsignaComision',this.boletos)
            this.asientos.push(...this.seleccionados)
            this.asientos.sort()
            this.seleccionados = []
        },
        seleccionar(asiento,index){
            if(this.pago){ return }
            this.asientos.splice(index,1)
            this.seleccionados.push(asiento)
            this.seleccionados.sort()
            this.boletos += 1
            if(this.boletos > 10){
                this.boletos = 10
            }else if(this.boletos < 0){
                this.pago = false
                this.boletos = 0
            }
            this.$emit('onAsignaComision',this.boletos)
        },
        remover(asiento,index){
            if(this.pago){ return }
            this.seleccionados.splice(index,1)
            this.asientos.push(asiento)
            this.asientos.sort()
            this.boletos -= 1
            if(this.boletos > 10){
                this.boletos = 10
            }else if(this.boletos < 0){
                this.pago = false
                this.boletos = 0
            }
            this.$emit('onAsignaComision',this.boletos)
        }
    }
}
</script>

<style lang="scss">
    .boletos{
        font-size:4rem;
        font-weight: bold;
    }

    .warning{
        border: 2px solid yellow;
    }

    .danger{
        border: 2px solid red;
    }

    .success{
        border: 2px solid blue;
    }

    .alert{
        font-size: 2rem;
        padding: 5px;
        width: 75%;
        margin: 0 auto;
    }

    .asientos{
        max-width: 250px;
        margin: 0 auto;
    }

    .asiento{
        background-color: purple;
        color: white;
        border: none;
        font-size: 2rem;
        margin: .2rem;
        font-weight: bold;
        border-radius: 5px;
        padding: 10px;
        outline: none;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: background-color .2s ease-in-out;

        &:hover{
            background-color: royalblue;
        }
    }

    .scale-y-enter{
        opacity: 0;
    }

    .scale-y-enter-active{
        transition: opacity 0.3s ease-out;
        animation: mensaje-in 0.3s ease-out forwards;
    }

    .scale-y-leave-active{
        transition: opacity 0.2s ease-out;
        animation: mensaje-out 0.2s ease-out forwards;
        opacity: 0;
    }

    @keyframes mensaje-in {
        from{
            transform: scaleY(0);
        }
        to{
            transform: scaleY(1);
        }
    }

    @keyframes mensaje-out {
        from{
            transform: scaleY(1)
        }
        to{
            transform: scaleY(0)
        }
    }

    .superior-enter{
        opacity: 0;
    }

    .superior-enter-active{
        transition: opacity 0.3s ease-out;
        animation: superior-in 0.5s ease-out forwards;
    }

    .superior-leave-active{
        transition: opacity 0.2s ease-out;
        animation: superior-out 0.5s ease-out forwards;
        opacity: 0;
    }

    @keyframes superior-in {
        0%{
            transform: translateY(0)
        }
        25%{
            transform: translateY(50px)
        }
        50%{
            transform: translateY(10px)
        }
        70%{
            transform: translateY(-25px)
        }
        100%{
            transform: translateY(0)
        }
    }

    @keyframes superior-out {
        0%{
            transform: translateY(0)
        }
        25%{
            transform: translateY(-50px)
        }
        50%{
            transform: translateY(-10px)
        }
        70%{
            transform: translateY(25px)
        }
        100%{
            transform: translateY(0)
        }
    }
</style>