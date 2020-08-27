var job_data = [
  {
    date: "2020",
    company: "連想創意",
    position: "分鏡腳本以及角色設計",
    discription:
      "在連想創意實習的半年中，我參與了大小專案共三個。其中在「今天誰來代課？(暫定)」原創動畫影集我做繪製分鏡腳本共三集；在「拾憶男孩(暫定)」動畫長片中負責角色設計；在「你會唱歌嗎？」公視水果奶奶音樂MV中負責故事腳本。在這次經驗中學習到了動畫製作的不同細節、透過分鏡和角色說故事的方法，熟悉軟體「Ｓtoryboarder」操作，以及團隊合作與互動",
    url: "https://i.imgur.com/i1HfxbZ.png"
  },
  {
    date: "2019",
    company: "速速製衣",
    position: "製衣美術",
    discription:
      "速速製衣為一個清大學生經營的製衣公司，主要業務為製作團體服裝。我在速速製衣的半年中，工作內容為協助客戶製作客製化t-shirt、帽t、旗子等織品，工作內容包括設計圖案、描圖、微調、轉檔、概念圖製作等，經手約20餘組客戶。",
    url: "https://i.imgur.com/pAqWoTG.png"
  },
  {
    date: "2019",
    company: "清大ocw",
    position: "海報與文宣品設計",
    discription:
      "清大ocw是清大的線上課程平台，我在此單位做美術工讀生為期兩年的時間。清大online course website 課程海報繪製以及周邊文宣商品設計，製作過六堂課程宣傳、三組文宣品與數次文宣圖。",
    url: "https://i.imgur.com/i5KMjEx.png"
  },
  // {
  //   date: "2019",
  //   company: "清大小菜籃",
  //   position: "海報與文宣品設計",
  //   discription: "清大小菜籃為提倡友善食材的學生企劃，在團隊中擔任視覺設計與各樣宣傳圖文製作。",
  //   url: "https://i.imgur.com/sPbI9Sp.png"
  // },
  {
    date: "2019",
    company: "清大拾穗計畫",
    position: "logo設計",
    discription:
      "為清大教務處課組設計清大拾穗計畫logo，應用於官方網站、宣傳印刷品，以及各式文件。此為一次性的案件。",
    url: "https://i.imgur.com/NefUScP.png"
  },
  {
    date: "2019",
    company: "清交柏克萊學生團契",
    position: "網路宣傳圖文",
    discription:
      "清交柏克萊學生團契為一學校社團，在社團中擔任宣傳美編，負責各項活動的網路宣傳與印刷品。",
    url: "https://i.imgur.com/vpaWaYr.png"
  },
  // {
  //   date: "2019",
  //   company: "Photoshop 家教",
  //   position: "Photoshop 軟體基礎操作認識與熟悉",
  //   discription: "一對一授課，家教對象為國小生。",
  //   url: "https://i.imgur.com/qDSKXfO.png"
  // },
  {
    date: "2018",
    company: "力和博創業工作坊",
    position: "角色設計",
    discription:
      "參與力和博創業工作坊中，密室逃脫角色設計。七個角色分別代表七項創業因素，以探險遠征隊為設計概念。",
    url: "https://i.imgur.com/zCdE8wL.png"
  },
  {
    date: "2018",
    company: "ZU創意教學",
    position: "教材插圖與宣傳圖文",
    discription: "繪製針對小學生科普教育的教材插圖，以及經營粉專宣傳圖文。",
    url: "https://i.imgur.com/wGbr8T5.png"
  },
  {
    date: "其他",
    company: "電繪創作",
    position: " ",
    discription: "更多photoshop創作",
    url: "https://i.imgur.com/ZH3kJNU.png"
  }
  // ,{
  //   date: "",
  //   company: "",
  //   position: "",
  //   discription: ""
  // }
];
var vm_job = new Vue({
  el: "#section1",
  data: {
    jobs: job_data
  },
  methods: {
    tm: function (url) {
      console.log(url);
      $(".imgboard").slideToggle(300);
      // $('.imgboard').toggleClass("allflex")
      $("#imgB").attr("src", url);
    }
  }
});
var web_data = [
  {
    title: "珍珠奶茶Demo網頁",
    url: "https://yun-chien-lo.github.io/Boba/dist/index.html",
    img: "https://i.imgur.com/fnBifj1.png"
  },
  {
    title: "產品回饋頁(Ajax)",
    url: "https://yun-chien-lo.github.io/ajax-costumer/dist/index.html",
    img: "https://i.imgur.com/TOIL495.png"
  },
  {
    title: "Gelato Demo網頁",
    url: "https://yun-chien-lo.github.io/gelato/dist/index.html",
    img: "https://i.imgur.com/y9NDTYX.png"
  },
  {
    title: "靜態履歷網站",
    url: "https://yun-chien-lo.github.io/skill-page/dist/index.html",
    img: "https://i.imgur.com/FBPOka9.png"
  },
  {
    title: "Stack/Queue Demo網頁",
    url: "https://yun-chien-lo.github.io/stack-queue/dist/index.html",
    img: "https://i.imgur.com/1uCbEUe.png"
  },
  {
    title: "音樂記憶遊戲",
    url: "https://yun-chien-lo.github.io/memory-block/dist/index.html",
    img: "https://i.imgur.com/pZ7pvKG.png"
  },
  {
    title: "反彈球遊戲",
    url: "https://yun-chien-lo.github.io/Bouncine-Ball-Game/dist/index.html",
    img: "https://i.imgur.com/1aybrKA.png"
  },
  {
    title: "標靶遊戲",
    url: "https://yun-chien-lo.github.io/target/dist/index.html",
    img: "https://i.imgur.com/Y7VuXne.png"
  },
  {
    title: "摩斯密碼線上轉換器",
    url: "https://yun-chien-lo.github.io/morse-code/dist/index.html",
    img: "https://i.imgur.com/W3Fq6CZ.png"
  },
  {
    title: "小怪獸網站動畫",
    url: "https://codepen.io/ycl/full/jObMbwb",
    img: "https://i.imgur.com/BUerJT2.png"
  }
];

var vm_web = new Vue({
  el: "#section2",
  data: {
    webs: web_data
  },
  methods: {
    tm: function (url) {
      window.open(url);
    }
  }
});

var skill_data = [
  {
    item: "Photoshop",
    percentage: "95",
    discription: "非常熟悉軟體操作、修圖、電腦繪圖、模板製作"
  },
  {
    item: "Illustrator",
    percentage: "90",
    discription: "熟悉基本操作、文宣製圖、字體設計、模板製作"
  },
  {
    item: "網頁前端設計",
    percentage: "85",
    discription:
      "熟悉 Html、css、js語法，bootstrap、vue.js等相官套件，可獨立完成一個網站的前端視覺。"
  },
  {
    item: "平面設計",
    percentage: "85",
    discription: "各式排版，包括主視覺、網頁圖文、海報、手卡、紀念品等等"
  },
  {
    item: "風格插畫",
    percentage: "90",
    discription: "電腦繪圖插畫，包含角色設計、場景設計、文字插圖等等"
  },
  {
    item: "程式語言",
    percentage: "80",
    discription: "熟悉Ｃ、C++、C#、Python、Matlab等程式語言"
  }
];

var vm_skill = new Vue({
  el: "#section3",
  data: {
    skills: skill_data
  }
});

$(".linkg").click(function () {
  $(".mailbox").slideToggle("slow");
  $(".mailbox").toggleClass("allflex");
});

$(".cancelEmail").click(function () {
  $(".mailbox").slideToggle("slow");
  $(".mailbox").toggleClass("mailflex");
});
$("#cancelImg").click(function () {
  $(".imgboard").slideToggle("slow");
});

function sendemail() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var content = document.getElementById("content").value;
  // alert(email);
  // alert(name);
  // alert(content);
  Email.send({
    SecureToken: "41e639c1-716d-42dc-b5fb-5d7a4e746d24",
    To: "yunchienlo@gmail.com",
    From: email,
    Subject: name,
    Body: content
  }).then(function () {
    // message => alert(message)
    $(".sended").slideDown("slow");
    setTimeout(function () {
      $(".mailbox").toggle("slow");
      $(".mailbox").toggleClass("mailflex");
    }, 3000);
  });
}
Vue.filter("reverse", function (value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse();
});

$(document).ready(function () {
  $(".button-toggle").click(function (e) {
    e.preventDefault();
    $(".navbar-menu").toggleClass("active");
  });
});

var flag = false;
$(document).ready(function () {
  time = setInterval(function () {
    var h = $(window).height(),
      w = $(window).width();
    // console.log(w)
    // console.log(flag)
    if (w < 712) {
      if (!flag) {
        $(".navbar-menu").hide();
      }
      $(".button-toggle").show();
    } else {
      $(".navbar-menu").removeClass("nav_sm");
      $(".navbar-menu").show();
      $(".button-toggle").hide();
    }
  }, 50);
});

$(".button-toggle").click(function () {
  $(".navbar-menu").toggleClass("nav_sm");
  $(".navbar-menu").slideToggle();
  flag = !flag;
});

var s = skrollr.init({
  mobileCheck: function () {
    //hack - forces mobile version to be off
    return false;
  }
});