import todoList from '@/assets/image/todoList.png'
import nutSelling from '@/assets/image/nut_Selling.png'
import incomeExpenses from '@/assets/image/income_expenses.png'
import palindromeChecker from '@/assets/image/回文檢查.png'
import romanNumeralConverter from '@/assets/image/數字轉羅馬符號.png'
import telephoneNumberValidator from '@/assets/image/電話碼檢查.png'
import cashRegister from '@/assets/image/建立收銀機.png'
import PokemonSearch from '@/assets/image/Pokemon搜尋程式.png'

const works =
  [
    {
      id: 0,
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
      toolUse: 'html css js AJAX API',
      toolKeys: [
        'html',
        'css',
        'js',
        'javascript',
        'ajax',
        'api'
      ]
    },
    {
      id: 1,
      name: 'to do list', 
      img: todoList,
      describe: '這份原本主要要練習串接pexels網頁的圖片的 後來都花時間在想怎麼在前端安全的用api key 目前只知道還是靠後端來處理比較好 <br>當時興高采烈地用了table導致後來想要做rwd做不出來 應該要用grid的 所以目前只能先放置了',
      webpageUrl: 'https://klnaserzy.github.io/toDoList/#home',
      programUrl: 'https://github.com/klnaserzy/toDoList',
      gitApiPath: {
        repo: 'toDoList',
        filePath: [
          'addDeleteToDo.js',
          'background_image_path.json',
          'base.css',
          'body_background_img.js',
          'fetchBackgroundImg.js',
          'homePage.css',
          'imgGallery.css',
          'imgGallery.js',
          'index.html',
          'router.js',
          'sidebarDrop.js',
        ]
      },
      toolUse: 'html css js AJAX',
      toolKeys: [
        'html',
        'css',
        'js',
        'javascript',
        'ajax'
      ]
    }, 
    {
      id: 2,
      name: 'nutSelling', 
      img: nutSelling,
      describe: '朋友提及他要賣東西時想到電商網站 好玩就嘗試做了一個 剛好那時候再看一些vue的教學學到router 就馬上來試看看了',
      webpageUrl: 'https://klnaserzy.github.io/nut_selling/',
      programUrl: 'https://github.com/klnaserzy/nut_selling',
      gitApiPath: {
        repo: 'nut_selling',
        filePath: [
          'src/components/EnterWebTitle.vue',
          'src/components/IntroductionProduct.vue',
          'src/components/Nav.vue',
          'src/router/index.js',
          'src/views/HomeView.vue',
          'src/views/OrderConfirmationView.vue',
          'src/views/SellView.vue'
        ]
      },
      toolUse: 'vue vueRouter RWD',
      toolKeys: [
        'html',
        'css',
        'js',
        'javascript',
        'vue',
        'router',
        'spa',
        'single', 
        'page', 
        'application',
        'responsive',
        'web',
        'design'
      ]
    }, 
    {
      id: 3,
      name: 'incomeExpenses',
      img: incomeExpenses,
      describe: '用來模擬接API 接Pokemon的API外 用json弄最久的東西了 一開始的json太複雜 後來刪掉我一開始放得太多餘的部分 也是用來練習跟vue相關的技巧的 <br>背景太空了 放一隻貓咪壓壓驚',
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
      toolUse: 'vue AJAX',
      toolKeys: [
        'html',
        'css',
        'js',
        'javascript',
        'vue',
        'ajax'
      ]
    }
  ]
  
export { works }