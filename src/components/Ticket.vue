<template>
    <div class="terciario">
        <div class="ticket">
            <div class="obra">
                <slot name="obra"/>
            </div>
            <hr>
            <div class="horario">
                <slot name="horario"/>
            </div>
            <div class="asientos">
                <slot name="asientos"/>
            </div>
            <div class="total">
                <slot name="total"/>
            </div>
            <div class="comision">
                <slot name="comision"/>
            </div>
            <hr>
            <div class="totalPagar">
                <slot name="totalPagar"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.ticket{
    background-color: white;
    color: black;
    font-size: 2rem;
    font-weight: 100;
    border-radius: 5px;
    padding: 10px;
    text-align: right;

    & > *:not(:nth-child(n+4)){
        text-align: left;
    }

    & > *{
        margin: .2rem;
    }

    & > .asientos{
        text-align: center;
        
        & > div > .asiento{
            background-color: white;
            border: 1px solid black;
            color: black;
            font-weight: 100;
            cursor: default;
        }
    }
    
}
</style>
