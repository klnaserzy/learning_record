<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { works } from '@/utils/image';

    const route = useRoute();
    const content = computed(() => {
        const index = fileName.value.findIndex(file => file === selectedFile.value);
        return fileData.value[index]
    });

    const id = computed(() => parseInt(route.params.id)); // 取得當前的路由 ID
    const workData = ref(works.find(data => data.id === id.value)); // 根據 ID 設置初始工作數據

    const repo = ref(workData.value.gitApiPath.repo);  //儲存庫名稱
    const filePath = ref(workData.value.gitApiPath.filePath);  //git檔案陣列
    const fileName = ref([]);
    const fileData = ref([]);
    const selectedFile = ref('');

    filePath.value.map(async path => {
        try{
            const response = await fetch(`https://api.github.com/repos/klnaserzy/${repo.value}/contents/${path}`);

            if(!response.ok)
                throw Error(`failed to fetch path: ${path}`)

            const data = await response.json();

            fileName.value.push(...path.match(/\/.+/));
            fileData.value.push(atob(data.content));
            
            selectedFile.value = fileName.value[0];
        }
        catch(err) {
            throw Error(err);
        }
    })

</script>

<template>
    <div class="program-container">
        <a class='backPrevious' @click='$router.go(-1)'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/></svg>
            <p>返回上頁</p>
        </a>
        <div class="file-selector">
            <div v-for="(file, index) in fileName" :key="index">
                <input 
                    type="radio" 
                    :id="'file-' + index" 
                    class="program-folder" 
                    name='selectedFile' 
                    :value='file' 
                    v-model='selectedFile'
                />
                <label :for="'file-' + index">{{ file.slice(1) }}</label>
            </div>
        </div>
        <pre class="program">
{{ content }}
        </pre>
        {{  }}
    </div>
</template>



<style scoped>
    .program-container {
        position: relative;
        min-height: 100vh;
        padding-bottom: 20px;
        display: flex;
        background: linear-gradient(135deg, #f0f0f0 30%, #c2e9fb 100%);
    }

    .backPrevious {
        display: flex;
        align-items: end;
        overflow: hidden;
        width: 140px;
        height: 60px;
        position: fixed;
    }
    
    .backPrevious:hover{
        cursor: pointer;
    }
    
    .backPrevious::before {
        content: '';
        width: 40px;
    }

    .backPrevious svg{
        width: 30px;
        margin-right: 10px;

        transition: .2s ease-in-out;
    }

    .backPrevious p {
        word-break: keep-all;
        color: transparent;

        transition: .2s ease-in-out;
    }

    .backPrevious:hover svg {
        transform: translateX(-50px);
        fill: transparent;
    }

    .backPrevious:hover p {
        transform: translateX(-45px);
        color: black;
    }

    .file-selector {
        width: 300px;
        top: 120px;
        left: 10px;
        border-radius: 10px;
        position: fixed;
    }
    
    input[type='radio'].program-folder {
        opacity: 0;
        position: absolute;
    }
    
    input[type='radio'].program-folder + label {
        display: block;
        width: 100%;
        padding: 0 0 3px 3px;
    }

    input[type='radio'].program-folder:checked + label {
        padding-left: 7px;
        background-color: #ffffff;
        border-radius: 10px 0 0 10px;
    }

    .program {
        margin-left: 310px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin-top: 20px;
        margin-right: 20px;
        width: 80%;
        height: calc(100vh - 40px);
        overflow-y: auto;

        
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #ababab48;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #dadce0;
        border: 1px solid transparent;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgb(177, 177, 177)
    }
</style>