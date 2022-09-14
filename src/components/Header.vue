<template>
    <header>
        <span class="donut">🍩</span>
        <h1><span class="line-1">better</span><br><span class="line-2">bakes</span></h1>
    </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>

header {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    align-items: center;
}

h1 {
    line-height: 60%;
}

.donut {
    font-size: 200%;
}

.line-1 {
    font-weight: 500;
}

.line-2 {
    font-weight: 700;
}

</style>
