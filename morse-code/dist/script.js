var morseCode = "A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----"

var morseList = morseCode.split("|")
for(var i=0;i<morseList.length;i++){
  morseList[i]=morseList[i].split(";")
  $("ul.translist").append("<li>"+morseList[i][0]+" "+morseList[i][1]+"</li>")
}

function findCode(letter){
  for(var i=0;i<morseList.length;i++){
    if(morseList[i][0]==letter){
      return morseList[i][1]
    }
  }
  return letter
}
function findLetter(code){
  for(var i=0;i<morseList.length;i++){
    if(morseList[i][1]==code){
      return morseList[i][0]
    }
  }
  return code
}

function translateToMorse(text){
  var result=""
  text = text.toUpperCase()
  for(var i=0;i<text.length;i++){
    result+=findCode(text[i])+" "
  }
  return result
}
function translateToEng(text){
  var result=""
  text = text.split(" ")
  for(var i=0;i<text.length;i++){
    result+=findLetter(text[i])
  }
  return result
}

$("#btnMorse").click(function(){
  var input = $("#input").val()
  var result = translateToMorse(input)
  $("#output").val(result)
  $("#output").css({
    backgroundColor: "#292b73"
  }).animate({
    backgroundColor: "transparent"
  }, 500)
  $(".symbol").velocity({
    transform: ["rotate(0deg)", "rotate(360deg)"]
  }, 100)
})

$("#btnEng").click(function(){
  var input = $("#output").val()
  var result = translateToEng(input)
  $("#input").val(result)
  $("#input").css({
    backgroundColor: "#292b73"
  }).animate({
    backgroundColor: "transparent"
  }, 500)
  $(".symbol").velocity({
    transform: ["rotate(0deg)", "rotate(360deg)"]
  }, 100)
})

$("#input").keyup(function(){
  var original = $("#input").val()
  var newtext = original.toUpperCase().split(" ").join("")
  $("#input").val(newtext)
})
$("audio.short")[0].volume = 0.3
$("audio.long")[0].volume = 0.3
function play(texts, nowindex){
  var word = texts[nowindex]
  var lasttime = 300
  if(word=="."){
    $("audio.short")[0].play()
    lasttime = 300
  }else if(word=="-"){
    $("audio.long")[0].play()
    lasttime = 500
  }else{
    lasttime = 1000
  }
  $(".playList span").removeClass("isPlaying")
  $(".playList span").eq(nowindex).addClass("isPlaying")
  if(texts.length>nowindex){
    setTimeout(function(){
      play(texts, nowindex+1)
    }, lasttime)
  }else{
    $(".playList").html("")
  }
}

$("#btnPlay").click(function(){
  var toPlay = $("#output").val()
  $(".playList").html=""
  for(var i=0;i<toPlay.length;i++){
    $(".playList").append("<span>"+toPlay[i]+"</span>")
  }
  play(toPlay, 0)
})