<script setup>
    import { works } from '@/utils/image';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
 
    const route = useRoute();
    const id = computed(() => parseInt(route.params.id));
    const props = defineProps(['id']);
    const emit = defineEmits(['selectIndex'])
    const chapterClick = (index) => {
        emit('selectIndex', index);
    }
    const dotActive = (index) => computed(() => index === id.value)
    
</script>

<template>
    <div class='select-section'>
        <div class="dot-group">
            <div 
                v-for='(work, index) in works' 
                class="dot-link" 
                :class='{ active: dotActive(index).value}'
                @click='chapterClick(index)'
            ></div>
        </div>
        <div class="works-container">
            <div class="work-link" v-for='(work, index) in works'>
                <div @click='chapterClick(index)'>
                    <img :src='work.img' class='work-img' />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .select-section {
        width: 100%;
        margin-top: 30px;
    }

    .dot-group {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    .dot-link {
        width: 20px;
        height: 8px;
        margin: 0 2px;
        border-radius: 7px;
        border: 1px solid rgb(59, 255, 134);
        transition: .2s ease-in-out;
    }

    .dot-link:hover {
        cursor: pointer;
        background-color: rgb(169, 255, 203);
    }

    .dot-link.active {
        background-color: rgb(59, 255, 134);
    }

    .works-container {
        display: flex;
        height: 15vh;
    }

    .work-link {
        width: calc(100% / 6);
        transition: .2s ease-in-out;
        object-fit: cover;
        display: flex;
        flex-direction: row;
    }

    .work-link:hover {
        width: calc(100% / 4);
    }

    .work-img {
        width: 100%;
    }
</style>