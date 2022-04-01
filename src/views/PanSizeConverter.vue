<template>
    <main>

        <h2>{{ t("pan-sizes.heading") }}</h2>

        <label for="pan-type-before"><b>{{ t("pan-sizes.from") }}</b></label>    
        <select name="pan-type-before" id="pan-type-before" v-model="panBefore" @change="isRectangle()">
            <option v-for="option in options" :key="option" :value="option.toLowerCase()">{{ t("pans." + option) }}</option>
        </select>

        <label for="before">{{ t("pan-sizes.before") }}</label>
        <input id="before" type="number" v-model="numberBefore" />
        <select class="unit" name="unit-before" id="unit-before" v-model="unitBefore">
            <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ t('units.' + unit) }}</option>
        </select>
        
        <div class="width" v-if="rectangleBefore">
            <label for="width-before">{{ t("pan-sizes.before-width") }}</label>
            <input id="width-before" type="number" v-model="widthBefore" />
            <select class="unit" name="unit-width-before" id="unit-width-before" v-model="unitBefore">
                <option v-for="unit in units" :key="unit" :value="unit.toLowerCase()">{{ t('units.' + unit) }}</option>
            </select>
        </div>

        <label for="pan-type-after"><b>{{ t("pan-sizes.to") }}</b></label>  
        <select name="pan-type-after" id="pan-type-after" v-model="panAfter" @change="isRectangle()">
            <option v-for="option in options" :key="option" :value="option.toLowerCase()">{{ t("pans." + option) }}</option>
        </select>

        <label for="after">{{ t("pan-sizes.after") }}</label>
        <input id="after" type="number" v-model="numberAfter" />
        <select class="unit" name="unit-after" id="unit-after" v-model="unitAfter">
            <option v-for="unit in units" :key="unit" :value="unit">{{ t('units.' + unit) }}</option>
        </select>

        <div class="width" v-if="rectangleAfter">
            <label for="width-after">{{ t("pan-sizes.after-width") }}</label>
            <input id="width-after" type="number" v-model="widthAfter" />
            <select class="unit" name="unit-width-after" id="unit-width-after" v-model="unitBefore">
                <option v-for="unit in units" :key="unit" :value="unit">{{ t('units.' + unit) }}</option>
            </select>
        </div>

        <button @click="calculateRatio()">{{ t("pan-sizes.submit") }}</button>

        <div class="result" v-if="ratio != 0">
            <p>{{ t("pan-sizes.factor") }}</p>
            <p class="result-value">{{ ratio }}</p>
            <p class="tooltip">{{ t('tooltips.' + tooltip) }}</p>
        </div>


    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineComponent({
    setup() {

        const {t} = useI18n({})
        
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
            'round',
            'square',
            'rect',
            'loaf'
        ];

        function isRectangle() {

            if (panBefore.value == "rect") {
                rectangleBefore.value = true;
            } else rectangleBefore.value = false;

            if (panAfter.value == "rect") {
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
                case 'rect':
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
                tooltip.value = 'loaf-to-round' 
            }

            if (panBefore == 'round' && panAfter == 'loaf') {
                tooltip.value = 'round-to-loaf'
            }

            if (panBefore != 'rect' && panAfter == 'rect') {
                tooltip.value = 'square'
            }

            else tooltip.value = 'empty'

        }

        return {
            t,
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
