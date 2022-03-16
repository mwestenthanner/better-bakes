<template>
    <main>

        <h2>Pan Size Converter</h2>

        <label for="before">Original diameter/length</label>
        <input id="before" type="number" v-model="numberBefore" />
        <select class="unit" name="unit-before" id="unit-before" v-model="unitBefore">
            <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ unit }}</option>
        </select>

        <select name="pan-type-before" id="pan-type-before" v-model="panBefore">
            <option v-for="option in options" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>

        <label for="after">Desired diameter/length</label>
        <input id="after" type="number" v-model="numberAfter" />
        <select class="unit" name="unit-after" id="unit-after" v-model="unitAfter">
            <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ unit }}</option>
        </select>

        <select name="pan-type-after" id="pan-type-after" v-model="panAfter">
            <option v-for="option in options" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>

        <button @click="calculateRatio()">Convert</button>

        <div class="result" v-if="ratio != 0">
            <p>Conversion value:</p>
            <p class="result-value">{{ ratio }}</p>
            <p class="tooltip">{{ tooltip }}</p>
        </div>


    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {

        const numberBefore = ref();
        const unitBefore = ref('cm');
        const panBefore = ref('round');
        const numberAfter = ref();
        const unitAfter = ref('cm');
        const panAfter = ref('round');

        const ratio = ref(0);
        const tooltip = ref('');

        const units = [
            'cm',
            'inch'
        ]

        const options = [
            'Round',
            'Square',
            'Loaf'
        ];

        function calculateRatio() {
            const before = calculate(unitBefore.value, panBefore.value, numberBefore.value);
            const after = calculate(unitAfter.value, panAfter.value, numberAfter.value);

            const ratioValue = after / before;

            if (Number.isNaN(ratioValue)) {
                ratio.value = 0;
            } else ratio.value = Math.round(ratioValue * 100) / 100 ;

            setTooltip(panBefore.value, panAfter.value);
        }

        function calculate(unit: string, panType: string, value: number) {

            if(unit == 'inch') {
                value = convertInchToCm(value);
            }

            let volume = 1;

            switch(panType) {
                case 'round':
                    volume = calculateVolumeRound(value);
                    break;
                case 'square':
                    volume = calculateVolumeSquare(value);
                    break;
                case 'loaf':
                    volume = calculateVolumeLoaf(value);
                    break;
            }

            return volume;

        }

        // convert inches to cm
        function convertInchToCm(value: number) {
            return value * 2.54;
        }

        // Calculate volume, based on value in cm
        function calculateVolumeRound(diameter: number) {
            const radius = diameter / 2;
            return radius * radius * Math.PI * 5;
        }

        function calculateVolumeSquare(length: number) {
            return length * length * 4;
        }

        function calculateVolumeLoaf(length: number) {
            return length * 10 * 7;
        }

        // Additional tip based on pans
        function setTooltip(panBefore: string, panAfter: string) {

            if (panBefore == 'loaf' && panAfter == 'round') {
                tooltip.value = "If you're baking a loaf recipe in a round pan, the cake will need about 10 to 15 min less in the oven."
            }

            if (panBefore == 'round' && panAfter == 'loaf') {
                tooltip.value = 'A loaf needs longer in the oven than a round cake - you should bake it for about an hour and check regularly.'
            }

            if (panBefore != 'square' && panAfter == 'square') {
                tooltip.value = 'Square cakes typically are thinner than round cakes or loaf cakes - bake them for at least 15 min less and check regularly.'
            }

        }

        return {
            options,
            units,
            numberBefore,
            unitBefore,
            panBefore,
            numberAfter,
            unitAfter,
            panAfter,
            ratio,
            tooltip,
            calculateRatio
        }

    }

});
</script>

<style scoped>

input, .unit {
    display: inline-block;
}

input {
    width: 55%;
    margin-right: 5%;
}

.unit {
    width: 40%;
}

.result {
    font-size: 110%;
    margin-top: 2rem;
}

.result-value {
    font-size: 200%;
}

.tooltip {
    margin-top: 2rem;
}

</style>
