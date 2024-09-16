<script setup>
    import { ref, watch, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { works } from '@/utils/image';

    const route = useRoute();
    const router = useRouter();
    const id = computed(() => parseInt(route.params.id));
    const workData = ref(works.find(data => data.id === id.value));
    const workSwitchLeft = ref(null);
    const workSwitchRight = ref(null);
    const changeWork = (move) => {
        const nextId = id.value + move;
        if(nextId < 0 || nextId > 7) return 

        workData.value = works.find(data => data.id === nextId);
        router.push(`/worksArea/${id.value + move}`);
        
    }
    const lowerCaseTransform = computed(() => workData.value.name.replace(/[A-Z]/g, ($1) => ' ' + $1.toLowerCase()))
    const newLineText = computed(() => workData.value.describe);
    watch(() => id.value, () => {
        if(id.value === 0)
            workSwitchLeft.value.style.color = '#0000002f';
        else
            workSwitchLeft.value.style.color = 'black';
        
        if(id.value === 7)
            workSwitchRight.value.style.color = '#0000002f';
        else
            workSwitchRight.value.style.color = 'black';

        workData.value = works.find(data => data.id === id.value);
    })
</script>

<template>
    <div class='work-container'>
        <div ref='workSwitchLeft' class='work-switch-left' @click='changeWork(-1)'><</div>
        <main class='display-container'>
            <img class='display-img' :src='workData.img' :alt='`${workData.name} image`'>
            <div class='introduction'>
                <article>
                    <h1>{{ lowerCaseTransform }}</h1>
                    <p v-html='newLineText'></p>
                </article>
                <div class='program-website-link'>
                    <a :href='workData.programUrl' target="_blank">程式</a>
                    <a :href='workData.webpageUrl' target="_blank">網頁畫面</a>
                </div>
            </div>
        </main>
        <div ref='workSwitchRight' class='work-switch-right' @click='changeWork(1)'>></div>
    </div>
</template>

<style scoped>
    .work-container {
        width: 100vw;
        height: 60vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .work-switch-left, .work-switch-right{
        font-size: 60px;
        transition: .2s ease-in-out;
        user-select: none; /* 禁止選取文本 */
        -webkit-user-select: none; /* 對於 Webkit 引擎（如 Chrome, Safari） */
        -moz-user-select: none; /* 對於 Firefox */
        -ms-user-select: none; /* 對於 IE/Edge */
    } 

    .work-switch-left:hover, .work-switch-right:hover{
        cursor: pointer;
    }

    .work-switch-left:hover{
        transform: translateX(5px);
    }
    
    .work-switch-right:hover{
        transform: translateX(-5px)
    }

    .display-container {
        width: 80%;
        max-width: 1000px;
        height: 80%;
        display: flex;
        gap: 30px;
    }

    .display-img {
        max-width: 600px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .introduction {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    article {
        max-width: 300px;
    }

    article h1 {
        font-size: 1.8em;
        font-weight: 600;
        margin-bottom: 20px;
        white-space: nowrap;
    }

    .program-website-link {
        display: block;
        text-align: right;
    }
    
    .program-website-link a {
        padding: 0 10px;
        position: relative;
        transition: .1s ease-in-out;
    }

    .program-website-link a:last-child {
        border-left: 1px solid rgba(0, 0, 0, 0.267);
    }

    .program-website-link a:hover {
        color: white;
    }

    .program-website-link a::after {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 1px;
        position: absolute;
        z-index: -1;
        opacity: 0;
        background-image: linear-gradient(135deg, #6e8efb, #a777e3);
        transition: opacity .1s ease-in-out;
    }

    .program-website-link a:hover::after {
        opacity: 1;
    }
</style>