<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import WorksDisplay from '@/components/WorksDisplay.vue';
    import ChapterSelect from '@/components/ChapterSelect.vue';
    
    const route = useRoute();
</script>

<template>
    <div class="container">
        <RouterLink class="backHome" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <p>回到首頁</p>
        </RouterLink>
        <WorksDisplay :id="route.params.id"></WorksDisplay>
        <ChapterSelect :id="route.params.id"></ChapterSelect>
    </div>
</template>

<style scoped>
    .container {
        position: relative;
        display: block;
    }

    .backHome {
        display: flex;
        align-items: end;
        overflow: hidden;
        width: 140px;
        height: 80px;
    }

    .backHome::before {
        content: "";
        width: 40px;
    }

    .backHome svg{
        width: 30px;
        margin-right: 10px;

        transition: .2s ease-in-out;
    }

    .backHome p {
        word-break: keep-all;
        color: transparent;

        transition: .2s ease-in-out;
    }

    .backHome:hover svg {
        transform: translateX(-50px);
        fill: transparent;
    }

    .backHome:hover p {
        transform: translateX(-45px);
        color: black;
    }
</style>
