<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { works, photoSticker } from '@/utils/image';


</script>

<template>
  <div class='filling'></div>
  <div class='profile'>
    <img class='photo_stickers' :src='photoSticker' alt='photo stickers'/>
    <div class='community'>
      <a class='communityLink' href='https://github.com/klnaserzy' target='_blank'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'/></svg></a>
      <a class='communityLink' href='https://x.com/forfunuserk' target='_blank'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z'/></svg></a>
      <a class='communityLink' href='https://discordapp.com/users/_chengno' target='_blank'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'><path d='M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z'/></svg></a>
      <a class='communityLink' href='https://www.facebook.com/klnaserzy/?locale=zh_TW' target='_blank'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z'/></svg></a>
    </div>
    <nav>
      <ul v-for='(work, index) in works' :key='index'>
        <li><a class='navLink' :href='"#" + work.name'>{{ work.name }}</a></li>
      </ul>
    </nav>
  </div>
  <div class='content' >
    <RouterLink v-for='(work, index) in works' :to='"/worksArea/" + work.id' :key='index' :id='work.name' class='work'>
      <img :src='work.img' :alt='`${work.name} image`'/>
      <div class="cover">
        <p>{{work.name}}</p>
      </div>
    </RouterLink>
  </div>
  <div class='filling'></div>
</template>

<style scoped>
  .filling{
    width: 100%;
    height: 30vh;
    background-color: gray;
  }

  .profile {
    width: 100px;
    height: 400px;
    position: fixed;
    right: 200px;
    background-color: rgb(255, 255, 255);
    margin-top: -123px;
    padding: 10px;
    border-radius: 10px;
  }

  .photo_stickers {
    display: block;
    width: auto;
    height: 30%;
    margin: 0 auto;
    border-radius: 15px;
    background-color: #999;
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
    border-radius: 5px;
    height: 30px;
    transition: all .15s ease-in-out;
  }

  .communityLink:hover {
    background-color: black;
    fill: white;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  nav {
    margin: 30px 0 0 20px;
  }

  ul {
    list-style-type: circle;
    color: rgba(0, 0, 0, 0.559);
  }
  
  ul li.active {
    list-style-type: disc;
    color: black;
  }

  ul li a.active {
    list-style-type: disc;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .content {
    margin: 30px 450px 270px 60px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s ease-in-out
  }

  .work:hover .cover {
    color: white;
    background-color: #00000086;
  }
</style>