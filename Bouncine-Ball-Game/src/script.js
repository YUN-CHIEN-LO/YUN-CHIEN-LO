console.clear()
var GameObj = function(position, size, selector){
  this.$el = $(selector)
  this.position = position
  this.size = size
  this.$el.css("position", "absolute")
  this.updateCss()
  // console.log("has created: [x:"+this.position.x+"][y:"+this.position.y+"][w:"+this.size.width+"][h:"+this.size.height+"]")
}
GameObj.prototype.updateCss = function(){
  this.$el.css("left",this.position.x+"px")
  this.$el.css("top",this.position.y+"px")
  this.$el.css("width",this.size.width+"px")
  this.$el.css("height",this.size.height+"px")
  // console.log("has updated CSS")
}
GameObj.prototype.collide = function(otherObject){
  var inRangeX = otherObject.position.x > this.position.x && otherObject.position.x < this.position.x+this.size.width
  var inRangeY = otherObject.position.y > this.position.y && otherObject.position.y < this.position.y+this.size.height
  return inRangeX&&inRangeY
}

var Ball = function(){
  this.size = {width: 15, height: 15}
  this.position = {x: 250, y: 250}
  this.velocity = {x: 3, y: 5}
  GameObj.call(this,this.position, this.size, ".ball")
}
Ball.prototype = Object.create(GameObj.prototype)
Ball.prototype.constructor = Ball.construcotr
Ball.prototype.update = function(){
  this.position.x += this.velocity.x
  this.position.y += this.velocity.y
  this.updateCss()
  if(this.position.x<0||this.position.x>500){
    this.velocity.x = -this.velocity.x
  }
  if(this.position.y<0||this.position.y>500){
    this.velocity.y = -this.velocity.y
  }
}
Ball.prototype.init=function(){
  console.log("ball init")
  this.position = {x: 250, y: 250}
  var speed = 8
  var angle = Math.random()*Math.PI*2
  this.velocity = {
    x: speed*Math.cos(angle),
    y: speed*Math.sin(angle)
  }
  // this.velocity = {x:5- Math.random()*10, y:5- Math.random()*10}
  this.update()
}
var ball = new Ball()
// setInterval(function(){
//   ball.update()
// }, 30)

var Board=function(position, selector){
  this.size={width: 100, height: 15}
  GameObj.call(this, position, this.size, selector)
}
Board.prototype = Object.create(GameObj.prototype)
Board.prototype.constructor = Board.construcotr
Board.prototype.update=function(){
  if(this.position.x < 0) {this.position.x = 0}
  if(this.position.x > 500-this.size.width) {this.position.x = 500-this.size.width}
  this.updateCss()
}

var board1 = new Board({x: 200, y: 45},".b1")
var board2 = new Board({x: 200, y: 455},".b2")

var Game = function(){
  this.timer = null
  this.grade = 0
  this.initControl()
  this.control = {}
}
Game.prototype.initControl=function(){
  let _this = this
  $(window).keydown(function(evt){
    _this.control[evt.key]=true
    console.log(evt.key)
    console.log(_this.control)
  })
  $(window).keyup(function(evt){
    _this.control[evt.key]=false
    console.log(evt.key)
    console.log(_this.control)
  })
}
Game.prototype.startGame=function(){
  var time = 3
  let _this = this
  this.grade = 0
  ball.init()
  $(".ball").hide()
  var timer_count = setInterval(function(){
    $(".start").hide()
    $(".infotext").text(time)
    time--
    if(time<0){
      clearInterval(timer_count)
      $(".info").hide()
      $(".ball").show()
      _this.mainGame()
    }
  }, 1000)
}
var gametime = 10000
var leveltime = gametime
Game.prototype.mainGame=function(){
  let _this = this
  this.timer=setInterval(function(){
    if(board1.collide(ball)){
      console.log("hit board 1")
      ball.velocity.y = -ball.velocity.y
      ball.velocity.x *= 1.1
      ball.velocity.y *= 1.1
      ball.velocity.x += 0.5 - Math.random()
      ball.velocity.y += 0.5 - Math.random()
    }
    if(board2.collide(ball)){
      console.log("hit board 2")
      _this.grade+=100
      ball.velocity.y = -ball.velocity.y
    }
    if(ball.position.y<0){
      console.log("board 1 lose")
      _this.endGame("Cumputer Lose")
    }
    if(ball.position.y>500){
      console.log("board 2 lose")
      _this.endGame("End Game")
    }
    if(_this.control["ArrowLeft"]){
      board2.position.x-=8
      $(".left").addClass("isPressed")
    }else{
      $(".left").removeClass("isPressed")
    }
    if(_this.control["ArrowRight"]){
      $(".right").addClass("isPressed")
      board2.position.x+=8
    }else{
      $(".right").removeClass("isPressed")
    }
    board1.position.x+=ball.position.x > board1.position.x+board1.size.width/2?12:0
    board1.position.x+=ball.position.x < board1.position.x+board1.size.width/2?-12:0
    ball.update()
    board1.update()
    board2.update()
    $(".grade").text("Score: "+_this.grade)
    // console.log(_this.grade)
  }, 30)
}
Game.prototype.endGame=function(result){
  clearInterval(this.timer)
  $(".info").show()
  $(".infotext").html(result+"<br>Score: "+this.grade)
  $(".start").show()
  $(".start").text("Start Again")
}
var game = new Game()
// game.startGame()