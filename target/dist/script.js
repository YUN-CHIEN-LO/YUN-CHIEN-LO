var score = 0
$("[class^=cir]").click(function(evt){
  var num = $(this).attr("data-label")
  score+=parseInt(num*10)
  update()
})
function update(){
   $(".score").text("Score: "+score)
}
function reset(){
  score = 0
  update()
  $(".spot").remove()
  $("target").removeClass("moving")
}
$(window).keydown(function(evt){
  if(evt.key=='r'){
    reset()
  }
  if(evt.key=='k'){
    $(".target").toggleClass("moving")
  }
})
$(window).mousemove(function(evt){
  $(".mouseText").text(evt.pageX+","+evt.pageY)
  $(".mouse")
    .css("left", evt.pageX)
    .css("top", evt.pageY)
})

$(".target").click(function(evt){
  var spot = $("<div class=spot></div>")
  spot.css("left", evt.pageX-$(this).offset().left+"px")
      .css("top", evt.pageY-$(this).offset().top+"px")
  $(this).append(spot)
})