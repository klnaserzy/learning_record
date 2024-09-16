import surveyForm from '@/assets/image/survey_form.png'
import tributePage from '@/assets/image/tribute_page.png'
import documentationPage from '@/assets/image/documentation_page.png'
import productLandingPage from '@/assets/image/product_landing_page.png'
import personalPortfolioWebpage from '@/assets/image/personal_portfolio_webpage.png'
import todoList from '@/assets/image/todoList.png'
import nutSelling from '@/assets/image/nut_Selling.png'
import incomeExpenses from '@/assets/image/income_expenses.png'
import photoSticker from '@/assets/image/photo_sticker.png'

const photoStickerImg = { img: photoSticker}

const works =
  [
    {
      id: 0,
      name: 'surveyForm', 
      img: surveyForm,
      describe: '最一開始學習前端時 在freeCodeCamp的第一項任務 在沒有學到css的情況下 做出來的東西非常的簡陋 只能將html拼拼湊湊來達到freeCodeCamp的條件',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E8%AA%BF%E6%9F%A5%E8%A1%A8%E5%96%AE/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E8%AA%BF%E6%9F%A5%E8%A1%A8%E5%96%AE'
    },
    {
      id: 1,
      name: 'tributePage', 
      img: tributePage,
      describe: '第二份致敬頁 開始慢慢熟悉html的一些簡單元素 css可以做簡單的置中位置排版 看起來好像還算有模有樣',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E8%87%B4%E6%95%AC%E9%A0%81/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E8%87%B4%E6%95%AC%E9%A0%81'
    },
    {
      id: 2,
      name: 'documentationPage', 
      img: documentationPage,
      describe: '這次使用到fixed以及網頁內導覽 明白許多網頁中目錄的實踐方式 這份網頁也做了點rwd 將fixed的部分移到最上面',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E6%8A%80%E8%A1%93%E6%96%87%E6%AA%94%E9%A0%81%E9%9D%A2/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E6%8A%80%E8%A1%93%E6%96%87%E6%AA%94%E9%A0%81%E9%9D%A2'
    },
    {
      id: 3,
      name: 'productLandingPage', 
      img: productLandingPage,
      describe: '從前一份開始用到rwd之後 學習的內容都開始會要求能做出rwd的頁面 因為不熟也是花了很多時間調整',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E7%94%A2%E5%93%81%E7%99%BB%E9%8C%84%E9%A0%81/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E7%94%A2%E5%93%81%E7%99%BB%E9%8C%84%E9%A0%81'
    },
    {
      id: 4,
      name: 'personalPortfolioWebpage', 
      img: personalPortfolioWebpage,
      describe: '最後一份只有html與css的項目了 因為剛學到linear-gradient所以這裡用了很多 讓畫面感覺有點亂亂的 一開始第一頁還有用keyframes的動畫效果 那是真的讓眼睛很花',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E5%80%8B%E4%BA%BA%E4%BD%9C%E5%93%81%E9%9B%86%E9%A0%81%E9%9D%A2/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E5%80%8B%E4%BA%BA%E4%BD%9C%E5%93%81%E9%9B%86%E9%A0%81%E9%9D%A2'
    },
    {
      id: 5,
      name: 'todoList', 
      img: todoList,
      describe: '到這裡之前還有一些js練習的網頁 之後可能才會放上來 都忘記還有js的部分了 <br>這份原本主要要練習用fetch去串接pexels網頁的圖片的 後來都花時間在想怎麼在前端安全的用api key 目前只知道還是靠後端來處理比較好 <br>當時興高采烈地用了table導致後來想要做rwd做不出來 應該要用grid的 所以目前只能先放置了',
      webpageUrl: 'https://klnaserzy.github.io/todoList/the_same_background_rotation/index.html',
      programUrl: 'https://github.com/klnaserzy/todoList/tree/master/the_same_background_rotation'
    }, 
    {
      id: 6,
      name: 'nutSelling', 
      img: nutSelling,
      describe: '朋友提及他要賣的東西 覺得好玩就做了一個 剛好那時候再看一些vue的教學提到router 就馬上來試看看了',
      webpageUrl: 'https://klnaserzy.github.io/nut_selling/',
      programUrl: 'https://github.com/klnaserzy/nut_selling'
    }, 
    {
      id: 7,
      name: 'incomeExpenses',
      img: incomeExpenses,
      describe: '這是目前除了free code camp的最後一項js實作 接pokemon的api外 用json弄最久的東西了 一開始的json太複雜 後來刪掉我一開始放得太多餘的部分 也是用來練習跟vue相關的技巧的 <br>背景太空了 放一隻貓咪壓壓驚',
      webpageUrl: 'https://klnaserzy.github.io/income_and_expenses/',
      programUrl: 'https://github.com/klnaserzy/income_and_expenses'
    }
  ]
  
export { works, photoSticker }