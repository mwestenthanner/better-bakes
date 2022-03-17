<template>
    <main>

        <h2>Pan Size Converter</h2>

        <label for="pan-type-before"><b>Convert from...</b></label>    
        <select name="pan-type-before" id="pan-type-before" v-model="panBefore" @change="isRectangle()">
            <option v-for="option in options" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>

        <label for="before">Original diameter/length</label>
        <input id="before" type="number" v-model="numberBefore" />
        <select class="unit" name="unit-before" id="unit-before" v-model="unitBefore">
            <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ unit }}</option>
        </select>
        
        <div class="width" v-if="rectangleBefore">
            <label for="width-before">Original width</label>
            <input id="width-before" type="number" v-model="widthBefore" />
            <select class="unit" name="unit-width-before" id="unit-width-before" v-model="unitBefore">
                <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ unit }}</option>
            </select>
        </div>

        <label for="pan-type-after"><b>...to:</b></label>  
        <select name="pan-type-after" id="pan-type-after" v-model="panAfter" @change="isRectangle()">
            <option v-for="option in options" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </select>

        <label for="after">Desired diameter/length</label>
        <input id="after" type="number" v-model="numberAfter" />
        <select class="unit" name="unit-after" id="unit-after" v-model="unitAfter">
            <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ unit }}</option>
        </select>

        <div class="width" v-if="rectangleAfter">
            <label for="width-after">Desired width</label>
            <input id="width-after" type="number" v-model="widthAfter" />
            <select class="unit" name="unit-width-after" id="unit-width-after" v-model="unitBefore">
                <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ unit }}</option>
            </select>
        </div>

        <button @click="calculateRatio()">Convert</button>

        <div class="result" v-if="ratio != 0">
            <p>Conversion factor:</p>
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
        const widthBefore = ref();

        const numberAfter = ref();
        const unitAfter = ref('cm');
        const panAfter = ref('round');
        const widthAfter = ref();

        const rectangleBefore = ref(false);
        const rectangleAfter = ref(false);
        const ratio = ref(0);
        const tooltip = ref('');

        const units = [
            'cm',
            'inch'
        ]

        const options = [
            'Round',
            'Square',
            'Sheet/Rectangle',
            'Loaf'
        ];

        function isRectangle() {

            if (panBefore.value == "sheet/rectangle") {
                rectangleBefore.value = true;
            } else rectangleBefore.value = false;

            if (panAfter.value == "sheet/rectangle") {
                rectangleAfter.value = true;
            } else rectangleAfter.value = false;

        }

        function calculateRatio() {
            const before = calculate(unitBefore.value, panBefore.value, numberBefore.value, widthBefore.value);
            const after = calculate(unitAfter.value, panAfter.value, numberAfter.value, widthAfter.value);

            const ratioValue = after / before;

            if (Number.isNaN(ratioValue)) {
                ratio.value = 0;
            } else ratio.value = Math.round(ratioValue * 100) / 100 ;

            setTooltip(panBefore.value, panAfter.value);
        }

        function calculate(unit: string, panType: string, value: number, width: number) {

            if(unit == 'inch') {
                value = convertInchToCm(value);
                width = convertInchToCm(width);
            }

            let volume = 1;

            switch(panType) {
                case 'round':
                    volume = calculateVolumeRound(value);
                    break;
                case 'square':
                    volume = calculateVolumeSquare(value);
                    break;
                case 'sheet/rectangle':
                    volume = calculateVolumeRect(value, width);
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

        function calculateVolumeRect(length: number, width: number) {
            return length * width * 4;
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
            widthBefore,
            numberAfter,
            unitAfter,
            panAfter,
            widthAfter,
            rectangleBefore,
            rectangleAfter,
            ratio,
            tooltip,
            isRectangle,
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

button {
    margin-bottom: 3rem;
}

.unit {
    width: 40%;
}

.result {
    font-size: 110%;
    margin-bottom: 8rem;
}

.result-value {
    font-size: 200%;
}

.tooltip {
    margin-top: 2rem;
}

</style>
