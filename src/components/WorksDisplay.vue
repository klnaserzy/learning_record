<script setup>
    import { ref, watch, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { works } from '@/utils/image';

    const route = useRoute();
    const router = useRouter();
    const id = computed(() => parseInt(route.params.id)); // 取得當前的路由 ID
    const worksLen = works.length - 1; // 記得長度是 index 的最大值
    const workData = ref(works.find(data => data.id === id.value)); // 根據 ID 設置初始工作數據
    
    // 用於向左或向右切換的 DOM 元素
    const workSwitchLeft = ref(null);
    const workSwitchRight = ref(null);

    // 切換作品
    const changeWork = (move) => {
        const nextId = id.value + move;
        if (nextId < 0 || nextId > worksLen) return; // 檢查範圍

        router.push(`/worksArea/${nextId}`); // 更新 URL 路由
    };
    
    // 轉換為小寫並添加空格
    const lowerCaseTransform = computed(() => 
        workData.value.name.replace(/[A-Z]/g, ($1) => ' ' + $1.toLowerCase())
    );
    
    // 描述文本的換行處理
    const newLineText = computed(() => workData.value.describe);

    // 發送 modal 開關事件
    const emit = defineEmits(['toggleModal']);
    const openModal = () => {
        emit('toggleModal', workData.value.programUrl); // 傳送程式URL
    };

    // 監聽 ID 的變化
    watch(id, () => {
        // 更新左右箭頭的顏色
        workSwitchLeft.value.style.color = id.value === 0 ? '#0000002f' : 'black';
        workSwitchRight.value.style.color = id.value === worksLen ? '#0000002f' : 'black';

        // 更新當前工作數據
        workData.value = works.find(data => data.id === id.value);
    });
</script>

<template>
    <div class='work-container'>
        <div ref='workSwitchLeft' class='work-switch-left' @click='changeWork(-1)'><</div>
        <main class='display-container'>
            <div class="img-container">
                <img class='display-img' :src='workData.img' :alt='`${workData.name} image`'>
                <div class="cover">
                    <p>{{ workData.name }}</p>
                    <p>{{ workData.toolUse }}</p>
                </div>
            </div>
            <div class='introduction'>
                <article>
                    <h1>{{ lowerCaseTransform }}</h1>
                    <p v-html='newLineText'></p>
                </article>
                <div class='program-website-links'>
                    <div class="link" @click='openModal()'>程式</div>
                    <a class="link" :href='workData.webpageUrl' target="_blank">網頁畫面</a>
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

    .img-container {
        position: relative;
        text-align: center;
    }

    .display-img {
        max-width: 550px;
        height: 100%;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 2em;
        background-color: transparent;
        color: transparent;
        transition: .3s ease-in-out;
        border-radius: 15px;
    }
  
    .cover p {
        position: relative;
        top: calc(50% - 48px);
    }

    .img-container:hover .cover {
        color: white;
        background-color: #00000086;
    }

    .img-container:hover .display-img {
        filter: blur(2px);
    }

    .introduction {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 300px;
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

    .program-website-links {
        display: block;
        text-align: right;
    }
    
    .program-website-links .link {
        display: inline;
        padding: 0 10px;
        position: relative;
        transition: .1s ease-in-out;
    }

    .program-website-links .link:last-child {
        border-left: 1px solid rgba(0, 0, 0, 0.267);
    }

    .program-website-links .link:hover {
        color: white;
        cursor: pointer;
    }

    .program-website-links .link::after {
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

    .program-website-links .link:hover::after {
        opacity: 1;
    }
</style>