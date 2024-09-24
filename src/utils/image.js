import surveyForm from '@/assets/image/survey_form.png'
import tributePage from '@/assets/image/tribute_page.png'
import documentationPage from '@/assets/image/documentation_page.png'
import productLandingPage from '@/assets/image/product_landing_page.png'
import personalPortfolioWebpage from '@/assets/image/personal_portfolio_webpage.png'
import todoList from '@/assets/image/todoList.png'
import nutSelling from '@/assets/image/nut_Selling.png'
import incomeExpenses from '@/assets/image/income_expenses.png'
import headshot1 from '@/assets/image/headshot1.png'
import headshot2 from '@/assets/image/headshot2.png'
import palindromeChecker from '@/assets/image/回文檢查.png'
import romanNumeralConverter from '@/assets/image/數字轉羅馬符號.png'
import telephoneNumberValidator from '@/assets/image/電話碼檢查.png'
import cashRegister from '@/assets/image/建立收銀機.png'
import PokemonSearch from '@/assets/image/Pokemon搜尋程式.png'

const headshotImg = { headshot1: headshot1, headshot2: headshot2}

const works =
  [
    {
      id: 0,
      name: 'surveyForm', 
      img: surveyForm,
      describe: '最一開始學習前端時 在freeCodeCamp的第一項任務 在沒有學到css的情況下 做出來的東西非常的簡陋 只能將html拼拼湊湊來達到freeCodeCamp的條件',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E8%AA%BF%E6%9F%A5%E8%A1%A8%E5%96%AE/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E8%AA%BF%E6%9F%A5%E8%A1%A8%E5%96%AE',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '調查表單/index.html'
        ]
      },
      toolUse: 'html'
    },
    {
      id: 1,
      name: 'tributePage', 
      img: tributePage,
      describe: '第二份致敬頁 開始慢慢熟悉html的一些簡單元素 css可以做簡單的置中位置排版 看起來好像有模有樣的',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E8%87%B4%E6%95%AC%E9%A0%81/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E8%87%B4%E6%95%AC%E9%A0%81',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '致敬頁/index.html',
          '致敬頁/styles.css'
        ]
      },
      toolUse: 'html css'
    },
    {
      id: 2,
      name: 'documentationPage', 
      img: documentationPage,
      describe: '這次使用到fixed以及網頁內導覽 明白許多網頁中目錄的實踐方式 這份網頁也做了點rwd 將fixed的部分移到最上面',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E6%8A%80%E8%A1%93%E6%96%87%E6%AA%94%E9%A0%81%E9%9D%A2/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E6%8A%80%E8%A1%93%E6%96%87%E6%AA%94%E9%A0%81%E9%9D%A2',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '技術文檔頁面/index.html',
          '技術文檔頁面/styles.css'
        ]
      },
      toolUse: 'html css'
    },
    {
      id: 3,
      name: 'productLandingPage', 
      img: productLandingPage,
      describe: '從前一份開始用到rwd之後 學習的內容都開始會要求能做出rwd的頁面 因為不熟也是花了很多時間調整',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E7%94%A2%E5%93%81%E7%99%BB%E9%8C%84%E9%A0%81/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E7%94%A2%E5%93%81%E7%99%BB%E9%8C%84%E9%A0%81',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '產品登錄頁/index.html',
          '產品登錄頁/styles.css'
        ]
      },
      toolUse: 'html css RWD'
    },
    {
      id: 4,
      name: 'personalPortfolioWebpage', 
      img: personalPortfolioWebpage,
      describe: '最後一份只有html與css的項目了 因為剛學到linear-gradient所以這裡用了很多 讓畫面感覺有點亂亂的 一開始第一頁還有用keyframes的動畫效果 那是真的讓眼睛很花',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E5%80%8B%E4%BA%BA%E4%BD%9C%E5%93%81%E9%9B%86%E9%A0%81%E9%9D%A2/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E5%80%8B%E4%BA%BA%E4%BD%9C%E5%93%81%E9%9B%86%E9%A0%81%E9%9D%A2',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '個人作品集頁面/index.html',
          '個人作品集頁面/styles.css'
        ]
      },
      toolUse: 'html css RWD'
    }, 
    {
      id: 5,
      name: 'palindromeChecker',
      img: palindromeChecker,
      describe: '',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E5%9B%9E%E6%96%87%E6%AA%A2%E6%9F%A5%E5%99%A8js/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E5%9B%9E%E6%96%87%E6%AA%A2%E6%9F%A5%E5%99%A8js',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '回文檢查器js/index.html',
          '回文檢查器js/styles.css',
          '回文檢查器js/script.js'
        ]
      },
      toolUse: 'html css js'
    }, 
    {
      id: 6,
      name: 'romanNumeralConverter',
      img: romanNumeralConverter,
      describe: '',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E6%95%B8%E5%AD%97%E8%BD%89%E7%BE%85%E9%A6%AC%E7%AC%A6%E8%99%9Fjs/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E6%95%B8%E5%AD%97%E8%BD%89%E7%BE%85%E9%A6%AC%E7%AC%A6%E8%99%9Fjs',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '數字轉羅馬符號js/index.html',
          '數字轉羅馬符號js/styles.css',
          '數字轉羅馬符號js/script.js'
        ]
      },
      toolUse: 'html css js'
    }, 
    {
      id: 7,
      name: 'telephoneNumberValidator',
      img: telephoneNumberValidator,
      describe: '',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E9%9B%BB%E8%A9%B1%E7%A2%BC%E6%AA%A2%E6%9F%A5js/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E9%9B%BB%E8%A9%B1%E7%A2%BC%E6%AA%A2%E6%9F%A5js',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '電話碼檢查js/index.html',
          '電話碼檢查js/styles.css',
          '電話碼檢查js/script.js'
        ]
      },
      toolUse: 'html css js'
    }, 
    {
      id: 8,
      name: 'cashRegister',
      img: cashRegister,
      describe: '',
      webpageUrl: 'https://klnaserzy.github.io/klna/%E5%BB%BA%E7%AB%8B%E6%94%B6%E9%8A%80%E6%A9%9Fjs/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/%E5%BB%BA%E7%AB%8B%E6%94%B6%E9%8A%80%E6%A9%9Fjs',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          '建立收銀機js/index.html',
          '建立收銀機js/styles.css',
          '建立收銀機js/script.js'
        ]
      },
      toolUse: 'html css js'
    }, 
    {
      id: 9,
      name: 'PokemonSearch',
      img: PokemonSearch,
      describe: '',
      webpageUrl: 'https://klnaserzy.github.io/klna/pokemon%E6%90%9C%E5%B0%8B%E7%A8%8B%E5%BC%8F/index.html',
      programUrl: 'https://github.com/klnaserzy/klna/tree/main/pokemon%E6%90%9C%E5%B0%8B%E7%A8%8B%E5%BC%8F',
      gitApiPath: {
        repo: 'klna',
        filePath: [
          'pokemon搜尋程式/index.html',
          'pokemon搜尋程式/styles.css',
          'pokemon搜尋程式/script.js'
        ]
      },
      toolUse: 'html css js AJAX'
    },
    {
      id: 10,
      name: 'todoList', 
      img: todoList,
      describe: '這份原本主要要練習串接pexels網頁的圖片的 後來都花時間在想怎麼在前端安全的用api key 目前只知道還是靠後端來處理比較好 <br>當時興高采烈地用了table導致後來想要做rwd做不出來 應該要用grid的 所以目前只能先放置了',
      webpageUrl: 'https://klnaserzy.github.io/todoList/the_same_background_rotation/index.html',
      programUrl: 'https://github.com/klnaserzy/todoList/tree/master/the_same_background_rotation',
      gitApiPath: {
        repo: 'todoList',
        filePath: [
          'the_same_background_rotation/index.html',
          'the_same_background_rotation/background.html',
          'the_same_background_rotation/styles.css',
          'the_same_background_rotation/watch_backgroundImg.css',
          'the_same_background_rotation/body_background_img.js',
          'the_same_background_rotation/watch_backgroundImg.js',
          'the_same_background_rotation/fetchBackgroundImg.js'
        ]
      },
      toolUse: 'html css js AJAX'
    }, 
    {
      id: 11,
      name: 'nutSelling', 
      img: nutSelling,
      describe: '朋友提及他要賣的東西 覺得好玩就做了一個 剛好那時候再看一些vue的教學學到router 就馬上來試看看了',
      webpageUrl: 'https://klnaserzy.github.io/nut_selling/',
      programUrl: 'https://github.com/klnaserzy/nut_selling',
      gitApiPath: {
        repo: 'nut_selling',
        filePath: [
          'src/components/EnterWebTitle.vue',
          'src/components/IntroduceProduct.vue',
          'src/components/Nav.vue',
          'src/router/index.js',
          'src/views/HomeView.vue',
          'src/views/PreparingView.vue'
        ]
      },
      toolUse: 'vue vueRouter RWD'
    }, 
    {
      id: 12,
      name: 'incomeExpenses',
      img: incomeExpenses,
      describe: '這是目前除了free code camp的最後一項js實作 接pokemon的api外 用json弄最久的東西了 一開始的json太複雜 後來刪掉我一開始放得太多餘的部分 也是用來練習跟vue相關的技巧的 <br>背景太空了 放一隻貓咪壓壓驚',
      webpageUrl: 'https://klnaserzy.github.io/income_and_expenses/',
      programUrl: 'https://github.com/klnaserzy/income_and_expenses',
      gitApiPath: {
        repo: 'income_and_expenses',
        filePath: [
          'src/components/NumeralCalculations.vue',
          'src/components/SelectionPeriod.vue',
          'src/views/MonthView.vue'
        ]
      },
      toolUse: 'vue'
    }
  ]
  
export { works, headshotImg }