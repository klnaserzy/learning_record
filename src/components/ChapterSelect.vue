<script setup>
    import { works } from '@/utils/image';
    import { computed, ref } from 'vue';
    import { useRoute } from 'vue-router';
 
    const route = useRoute();
    const id = computed(() => parseInt(route.params.id));
    const props = defineProps(['id']);
    const workImage = ref(null);
    const emit = defineEmits(['selectIndex']);
    const chapterClick = (index) => {
        emit('selectIndex', index);
    }
    const dotActive = (index) => computed(() => index === id.value)
    const dotMouseover = (index) => workImage.value.src = works[index].img
    const dotMouseout = () => workImage.value.src = ''
    
</script>

<template>
    <div class='select-section'>
        <div class="dot-group">
            <div 
                v-for='(work, index) in works' 
                class="dot-link" 
                :class='{ active: dotActive(index).value}'
                @click='() => chapterClick(index)'
                @mouseover="() => dotMouseover(index)"
                @mouseout="dotMouseout()"
                :key="index"
            ></div>
        </div>
        <div class="works-container">
            <div class="work-link" >
                <img ref="workImage" class='work-img' />
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
        width: 30px;
        height: 12px;
        margin: 0 6px;
        border-radius: 7px;
        border: 1px solid rgb(49, 211, 111);
        transition: .2s ease-in-out;
    }

    .dot-link:hover {
        cursor: pointer;
        background-color: rgb(169, 255, 203);
    }

    .dot-link.active {
        background-color: rgb(56, 245, 128);
    }

    .works-container {
        display: flex;
        height: 15vh;
        width: 100%;
        justify-content: center;
    }

    .work-link {
        width: 200px;
        transition: .2s ease-in-out;
        object-fit: cover;
    }

    .work-img {
        width: 100%;
    }
</style>