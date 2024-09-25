<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router';
import { works } from '@/utils/image'; // 引入工作和頭像圖片數據
import IconGithub from '@/components/Icons/IconGithub.vue';
import IconTwitter from '@/components/Icons/IconTwitter.vue';
import IconDiscord from '@/components/Icons/IconDiscord.vue';
import IconFaceBook from '@/components/Icons/IconFaceBook.vue';

const liElement = ref([]); // 存儲列表項元素
const navLinkElement = ref([]); // 存儲導航鏈接元素
const workElement = ref([]); // 存儲工作元素
const searchVal = ref('');

// 滾動事件處理函數
const handleScroll = () => {
  workElement.value.map((el, index) => {
      const elOffsetTop = el.$el.offsetTop; // 元素距離頂部的距離
      const elOffsetHeight = el.$el.offsetHeight; // 元素的高度

      // 判斷當前滾動位置是否在該元素的範圍內
      if (window.scrollY > elOffsetTop - 20 && window.scrollY < (elOffsetTop + elOffsetHeight + 40)) {
        liElement.value[index].classList.add('active'); // 添加活動樣式
        navLinkElement.value[index].classList.add('active'); // 添加活動樣式
      } else {
        liElement.value[index].classList.remove('active'); // 移除活動樣式
        navLinkElement.value[index].classList.remove('active'); // 移除活動樣式
      }
  });
};

// 搜尋資料取得
const searchResult = computed(() => {
  if(searchVal.value === '') return works
  
  return works.filter(work => {
    return work.toolKeys.some(key => key.includes(searchVal.value.toLowerCase()))
  });
  
})

// 當組件掛載時，添加滾動事件監聽
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

// 當組件卸載時，移除滾動事件監聽
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

</script>

<template>
  <header class='filling'></header>
  <aside class='profile'>
    <div class="left-ear">
      <div class="left-inner-ear"></div>
    </div>
    <div class="right-ear">
      <div class="right-inner-ear"></div>
      </div>
    <img class='photo_stickers' src='@/assets/image/headshot1.png' alt='photo stickers'/>
    <nav class='community'>
      <a class='communityLink' href='https://github.com/klnaserzy' target='_blank'><IconGithub></IconGithub></a>
      <a class='communityLink' href='https://x.com/forfunuserk' target='_blank'><IconTwitter></IconTwitter></a>
      <a class='communityLink' href='https://discordapp.com/users/_chengno' target='_blank'><IconDiscord></IconDiscord></a>
      <a class='communityLink' href='https://www.facebook.com/klnaserzy/?locale=zh_TW' target='_blank'><IconFaceBook></IconFaceBook></a>
    </nav>
    <nav class='worksNav'>
      <ul>
        <li 
          v-for='(work, index) in searchResult' 
          :key='index' 
          ref='liElement'
        >
          <a ref='navLinkElement' class='navLink' :href='"#" + work.name'>{{ work.name }}</a>
        </li>
      </ul>
    </nav>
  </aside>
  <div class='content' >
    <div class='search-wrapper'>
      <label for='search-tool'>搜尋: </label>
      <input v-model='searchVal' id='search-tool' type='text' placeholder='例: vue'/>
    </div>
    <RouterLink 
      ref='workElement' 
      v-for='(work, index) in searchResult' 
      :to='"/worksArea/" + work.id' 
      :key='index' 
      :id='work.name' 
      class='work'
    >
      <img :src='work.img' :alt='`${work.name} image`'/>
      <div class='cover'>
        <p>{{work.name}}</p>
        <p>{{ work.toolUse }}</p>
      </div>
    </RouterLink>
  </div>
  <footer class='filling'></footer>
</template>

<style scoped>
  .filling{
    width: 100%;
    height: 30vh;
    background-color: gray;
  }

  .profile {
    width: 120px;
    height: 123px;
    position: fixed;
    right: 200px;
    background-color: var(--vt-c-white-mute);;
    margin-top: -123px;
    padding: 10px;
    border-radius: 100px 100px 0 0;
  }

  .left-ear {
    width: 30px;
    height: 30px;
    left: -7px;
    top: -7px;
    position: absolute;
    border-radius: 7% 93% 80% 20% / 7% 20% 80% 93%;
    background-color: #f2f2f2;
  }

  .left-inner-ear {
    width: 20px;
    height: 20px;
    left: 7px;
    top: 7px;
    position: absolute;
    border-radius: 7% 93% 80% 20% / 7% 20% 80% 93%;
    background-color: gray;
  }

  .right-ear {
    width: 30px;
    height: 30px;
    right: -7px;
    top: -7px;
    position: absolute;
    border-radius: 93% 7% 20% 80% / 20% 7% 93% 80%;
    background-color: #f2f2f2;
  }

  .right-inner-ear {
    width: 20px;
    height: 20px;
    right: 7px;
    top: 7px;
    position: absolute;
    border-radius: 93% 7% 20% 80% / 20% 7% 93% 80%;
    background-color: gray;
  }

  .photo_stickers {
    display: block;
    height: 114px;
    width: auto;
    margin: 0 auto;
    border-radius: 100px 100px 0 0;
    background-color: #999;
  }

  .photo_stickers:hover {
    content: url('@/assets/image/headshot2.png');
  }

  .community {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    gap: 10px;
  }

  .communityLink {
    display: inline;
    text-align: center;
    height: 30px;
    transition: .15s ease-in-out;
  }

  .communityLink:hover {
    transform: scale(1.1)
  }

  svg {
    width: 30px;
    height: 30px;
  }

  .worksNav {
    margin: 20px 0 0 20px;
  }

  ul {
    list-style-type: circle;
    color: rgba(0, 0, 0, 0.3);
  }

  ul li, ul li a {
    transition: .2s ease-in-out;
  }
  
  ul li.active {
    list-style-type: disc;
    color: black;
  }

  ul li a.active {
    list-style-type: disc;
    font-weight: bold;
    font-size: 1.2rem;
    background: linear-gradient(180deg, transparent 83%, #000000 83%, #000000 88%, transparent 88%);
  }

  .content {
    margin: 30px 450px 300px 60px;
  }

  .work {
    display: block;
    width: 100%;
    max-width: 700px;
    text-align: center;
    margin: 60px auto;
    box-shadow: 5px 5px 10px rgb(81, 81, 81);
    position: relative;
    transition: .3s ease-in-out
  }

  .work:hover {
    transform: scale(1.02, 1.02);
  }

  .work:hover img {
    filter: blur(2px);
  }

  img {
    max-width: 95%;
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
    transition: .3s ease-in-out
  }
  
  .work:hover .cover {
    color: white;
    background-color: #00000086;
  }
  
  .cover p {
    position: relative;
    top: calc(50% - 48px);
  }
</style>