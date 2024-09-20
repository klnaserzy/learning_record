<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter, RouterLink } from 'vue-router';
    import WorksDisplay from '@/components/WorksDisplay.vue';
    import ChapterSelect from '@/components/ChapterSelect.vue';
    
    const route = useRoute();
    const router = useRouter();
    const toggle = ref(false);
    const githubUrl = ref('');
    const modalCover = ref(null);
    const modalContainer = ref(null);
    const id = ref(route.params.id);
    const changeIndex = (index) => {
        router.push(`/worksArea/${index}`);
        id.value = index;
    }
    const onModalToggle = (programUrl) => {
        toggle.value = true;
        githubUrl.value = programUrl;
    }

    window.onclick = (event) => {
        if(event.target === modalCover.value || event.target === modalContainer.value)
            toggle.value = false;
    }

</script>

<template>
    <div class='container'>
        <div v-show='toggle' class='modal-cover' ref='modalCover'>
            <div class="modal-container" ref='modalContainer'>
                <RouterLink class="modal-wrapper" :to='`${id}/program`'>
                    <div class='modal-left'>
                        <div class='guide'>
                            <p>程式展示區傳送卡</p>
                            <strong>位於當前網域內</strong>
                        </div>
                        <p>請選擇你要前往的卡片</p>
                    </div>
                    <div class="backCard">想想</div>
                </RouterLink>
                <div class="modal-wrapper" @click='toggle = !toggle'>
                    <div class='modal-center'>
                        <div class='guide'>
                            <p>再看一次這是去哪後悔卡</p>
                            <strong>返回</strong>
                        </div>
                        <p>請選擇你要前往的卡片</p>
                    </div>
                    <div class="backCard">你要</div>
                </div>
                <a class="modal-wrapper" @click='toggle = !toggle' :href='githubUrl' target='_blank'>
                    <div class='modal-right'>
                        <div class='guide'>
                            <p>想離開這裡了門禁卡</p>
                            <strong>github</strong>
                        </div>
                        <p>請選擇你要前往的卡片</p>
                    </div>
                    <div class="backCard">去哪</div>
                </a>
            </div>
        </div>
        <RouterLink class='backHome' to='/'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/></svg>
            <p>回到首頁</p>
        </RouterLink>
        <WorksDisplay @toggleModal='(programUrl) => onModalToggle(programUrl)'></WorksDisplay>
        <ChapterSelect :id='id' @selectIndex='(index) => changeIndex(index)'></ChapterSelect>
    </div>
</template>

<style scoped>
    .modal-cover {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
        font-size: 1.4em;
    }

    .modal-container {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .modal-wrapper {
        width: 25%;
        height: 34%;
        text-align: center;
        position: relative;
    }

    .modal-left, .modal-center, .modal-right, .backCard {
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;
        padding: 15px;
        border-radius: 15px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: .3s ease-in-out;
        transform: rotateY(0deg);
        backface-visibility: hidden;
    }

    .modal-wrapper:hover .modal-left, .modal-wrapper:hover .modal-center, .modal-wrapper:hover .modal-right {
        cursor: pointer;
        transform: rotateY(180deg);
    }

    .backCard {
        cursor: pointer;
        transform: rotateY(-180deg);
    }
    
    .modal-wrapper:hover .backCard {
        transform: rotateY(0deg);
    }
    
    strong {
        font-weight: bold;
    }

    .container {
        position: relative;
        display: block;
    }

    .backHome {
        display: flex;
        align-items: end;
        overflow: hidden;
        width: 140px;
        height: 60px;
    }

    .backHome::before {
        content: '';
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
