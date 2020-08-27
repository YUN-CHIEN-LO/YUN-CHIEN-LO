var job_data = [
  {
    date: "2020",
    company: "連想創意",
    position: "分鏡腳本以及角色設計",
    discription: "在連想創意實習的半年中，我參與了大小專案共三個。其中在「今天誰來代課？(暫定)」原創動畫影集我做繪製分鏡腳本共三集；在「拾憶男孩(暫定)」動畫長片中負責角色設計；在「你會唱歌嗎？」公視水果奶奶音樂MV中負責故事腳本。在這次經驗中學習到了動畫製作的不同細節、透過分鏡和角色說故事的方法，熟悉軟體「Ｓtoryboarder」操作，以及團隊合作與互動。",
    url: "https://i.imgur.com/i1HfxbZ.png"
  },
  {
    date: "2019",
    company: "速速製衣",
    position: "製衣美術",
    discription: "速速製衣為一個清大學生經營的製衣公司，主要業務為製作團體服裝。我在速速製衣的半年中，工作內容為協助客戶製作客製化t-shirt、帽t、旗子等織品，工作內容包括設計圖案、描圖、微調、轉檔、概念圖製作等，經手約20餘組客戶。",
    url: "https://i.imgur.com/pAqWoTG.png"
  },
  {
    date: "2019",
    company: "清大ocw",
    position: "海報與文宣品設計",
    discription: "清大ocw是清大的線上課程平台，我在此單位做美術工讀生為期兩年的時間。清大online course website 課程海報繪製以及周邊文宣商品設計，製作過六堂課程宣傳、三組文宣品與數次文宣圖。",
    url: "https://i.imgur.com/i5KMjEx.png"
  },
  {
    date: "2019",
    company: "清大小菜籃",
    position: "海報與文宣品設計",
    discription: "清大小菜籃為提倡友善食材的學生企劃，在團隊中擔任視覺設計與各樣宣傳圖文製作。",
    url: "https://i.imgur.com/sPbI9Sp.png"
  },
  {
    date: "2019",
    company: "清大拾穗計畫",
    position: "logo設計",
    discription: "為清大教務處課組設計清大拾穗計畫logo，應用於官方網站、宣傳印刷品，以及各式文件。此為一次性的案件。",
    url: "https://i.imgur.com/NefUScP.png"
  },
  {
    date: "2019",
    company: "清交柏克萊學生團契",
    position: "網路宣傳圖文",
    discription: "清交柏克萊學生團契為一學校社團，在社團中擔任宣傳美編，負責各項活動的網路宣傳與印刷品。",
    url: "https://i.imgur.com/vpaWaYr.png"
  },
  {
    date: "2019",
    company: "Photoshop 家教",
    position: "Photoshop 軟體基礎操作認識與熟悉",
    discription: "一對一授課，家教對象為國小生。",
    url: "https://i.imgur.com/qDSKXfO.png"
  },
  {
    date: "2018",
    company: "力和博創業工作坊",
    position: "角色設計",
    discription: "參與力和博創業工作坊中，密室逃脫角色設計。七個角色分別代表七項創業因素，以探險遠征隊為設計概念。",
    url: "https://i.imgur.com/zCdE8wL.png"
  },
  {
    date: "2018",
    company: "ZU創意教學",
    position: "教材插圖與宣傳圖文",
    discription: "繪製針對小學生科普教育的教材插圖，以及經營粉專宣傳圖文。",
    url: "https://i.imgur.com/wGbr8T5.png"
  }
  // ,{
  //   date: "",
  //   company: "",
  //   position: "",
  //   discription: ""
  // }
  
];

var per_data = [
  {
    parta: "姓名",
    partb: "羅云謙"
  },{
    parta: "年次",
    partb: "1998"
  },{
    parta: "信箱",
    partb: "yunchienlo@gmail.com"
  },{
    parta: "地點",
    partb: "台灣新竹市"
  }
]

var skill_data=[
  {
    item: "網頁前端設計",
    percentage: "85"
  },
  {
    item: "Html/Pug",
    percentage: "90"
  },{
    item: "CSS/SASS",
    percentage: "90"
  },
  {
    item: "Bootstrap/RWD",
    percentage: "85"
  },
  {
    item: "Javascript",
    percentage: "80"
  },{
    item: "jQuery",
    percentage: "80"
  },{
    item: "Vue.js",
    percentage: "75"
  },
  {
    item: "Photoshop",
    percentage: "95"
  },
  {
    item: "Illustrator",
    percentage: "90"
  },
  {
    item: "平面設計",
    percentage: "85"
  },
  {
    item: "風格插畫",
    percentage: "90"
  },
  {
    item: "python",
    percentage: "70"
  },
  {
    item: "Word",
    percentage: "90"
  },{
    item: "PowerPoint",
    percentage: "90"
  },{
    item: "Excel",
    percentage: "80"
  },
  //   {
  //   item: "",
  //   percentage: "",
  //   discription: ""
  // }
]


var vm_skill = new Vue({
  el: "#skill",
  data: {
    skills: skill_data
  }
})


var vm_job = new Vue({
  el: "#job",
  data: {
    jobs: job_data
  }
});

var vm_personal = new Vue({
  el: "#personal",
  data: {
    pers: per_data
  }
});