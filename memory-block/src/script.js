console.clear()
var blockdata = [
  {selector: ".block1", name: "1", pitch: "1"},
  {selector: ".block2", name: "2", pitch: "2"},
  {selector: ".block3", name: "3", pitch: "3"},
  {selector: ".block4", name: "4", pitch: "4"},
  {selector: ".block5", name: "5", pitch: "5"},
  {selector: ".block6", name: "6", pitch: "6"},
  {selector: ".block7", name: "7", pitch: "7"}
]
var soundsetdata = [
  {name: "correct", sets: [1, 3, 5, 8]},
  {name: "wrong", sets: [2, 4, 5.5, 7]}
]
var levelDatas = [
  '1234',
  '7654321',
  '5334221234555',
  '3726154',
  '625713735423651'
]
var Blocks = function(blockAssign, setAssign){
  this.allOn = false
  this.blocks = blockAssign.map((d, i)=>({
    name: d.name,
    el: $(d.selector),
    audio: this.getAudioObj(d.pitch)
  }))
  this.soundSets = setAssign.map((d, i)=>({
    name: d.name,
    sets: d.sets.map((pitch)=>this.getAudioObj(pitch))
  }))
}
Blocks.prototype.flash = function(note){
  let block = this.blocks.find(d=>d.name==note)
  if(block){
    block.el.addClass('active')
    block.audio.currentTime = 0
    block.audio.play()
    setTimeout(()=>{
      if(!this.allOn){
        block.el.removeClass('active')
      }
    }, 100)
  }
}
Blocks.prototype.turnAllOn = function(){
  this.allOn = true
  this.blocks.forEach((block)=>{
    block.el.addClass('active')
  })
}
Blocks.prototype.turnAllOff = function(){
  this.allOn = false
  this.blocks.forEach((block)=>{
    block.el.removeClass('active')
  })
}
Blocks.prototype.getAudioObj = function(pitch){
  return new Audio("https://awiclass.monoame.com/pianosound/set/"+pitch+".wav")
}
Blocks.prototype.playSet = function(type){
  let sets = this.soundSets.find(set=>set.name==type).sets
  sets.forEach((obj)=>{
    obj.currentTime=0
    obj.play()
  })
}

var Game = function(){
  this.blocks = new Blocks(blockdata, soundsetdata)
  this.levels = levelDatas
  this.currentLevel = 0
  this.playInterval = 400
  this.mode = 'waiting'
}
Game.prototype.loadLevel = function(){
  let _this = this
  $.ajax({
    url:"https://2017.awiclass.monoame.com/api/demo/memorygame/leveldata",
    success: function(res){
      _this.levels = levelDatas
    }
  })
}
Game.prototype.startLevel = function(){
  this.blocks.turnAllOff()
  this.showMessage("Level " + this.currentLevel)
  this.startGame(this.levels[this.currentLevel])
}
Game.prototype.showMessage = function(mes){
  console.log(mes)
  $('.status').text(mes)
}
Game.prototype.startGame = function(answer){
  this.mode = 'gamePlay'
  this.answer = answer
  this.showStatus("")
  let notes = this.answer.split('')
  this.timer = setInterval(()=>{
    let char = notes.shift()
    // console.log(char)
    this.playNote(char)
    if(!notes.length){
      console.log("audio play end")
      this.startUserInput()
      clearInterval(this.timer)
    }
  },this.playInterval)
}
Game.prototype.playNote = function(note){
  console.log(note)
  this.blocks.flash(note)
}
Game.prototype.startUserInput = function(){
  this.userInput = ''
  this.mode = 'userInput'
}
Game.prototype.userSendInput = function(inputChar){
  if(this.mode == 'userInput'){
    let tempString = this.userInput + inputChar
    this.playNote(inputChar)
    this.showStatus(tempString)
    if(this.answer.indexOf(tempString)==0){
      console.log('good job')
      if(this.answer==tempString){
        console.log('correct')
        this.showMessage("Correct")
        this.currentLevel+=1
        this.mode = 'waiting'
        setTimeout(()=>{
          this.startLevel()
        }, 1000)
      }
    }else{
      console.log('wrong')
      this.showMessage("Wrong")
      this.currentLevel=0
      this.mode = 'waiting'
      setTimeout(()=>{
        this.startLevel()
      }, 1000)
    }
    console.log(tempString)
    this.userInput+=inputChar
  }
}
Game.prototype.showStatus = function(tempString){
  $('.inputStatus').html("")
  this.answer.split("").forEach((d, i)=>{
    var circle = $("<div class='circle'></div>")
    if(i<tempString.length){
      circle.addClass('correct')
    }
    $('.inputStatus').append(circle)
  })
  if(tempString==this.answer){
    setTimeout(()=>{
      this.blocks.turnAllOn()
      this.blocks.playSet("correct")
      $('.inputStatus').addClass("correct")
    }, 500)
  }else{
    $('.inputStatus').removeClass("correct")
  }
  if(this.answer.indexOf(tempString)!=0){
    setTimeout(()=>{
      this.blocks.turnAllOn()
      this.blocks.playSet("wrong")
      $('.inputStatus').addClass("wrong")
    }, 500)
  }else{
    $('.inputStatus').removeClass("wrong")
  }
}
var game = new Game()
game.loadLevel()
setTimeout(()=>{
  game.startLevel()
}, 3000)
// var blocks = new Blocks(blockdata, soundsetdata)