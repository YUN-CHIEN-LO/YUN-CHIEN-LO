console.clear()
var isStack = true
var rootid = 0
var Node = function(num, next, prev){
  this.number = num
  this.next = next
  this.prev = prev
  console.log(this)
}

var rootNode = Node(null, null, null)
var pointer = rootNode
var id=1
function createNode(createnum, next, prev){
  var node = new Node(createnum, next, next)
  // node.number = createnum
  if(next == null)
    node.next = node
  if(prev == null)
    node.prev = node
  console.log(node)
  return node
}
function insertNode(insertnum){
  var newnode = createNode(insertnum)
  console.log(newnode)
  if(!rootNode){
    console.log("create root")
    console.log(pointer)
    var newnode = createNode(insertnum, null, null)
    rootNode = newnode
    rootNode.next = rootNode
    rootNode.prev = rootNode
    pointer = rootNode
    checkArrow(pointer)
  }else{
    console.log("add node")
    var newnode = createNode(insertnum, rootNode, pointer)
    newnode.next = rootNode
    newnode.prev = pointer
    pointer.next = newnode
    pointer = newnode
    pushArrow(pointer)
  }
  // console.log("create: "+newnode.number)
  $(".stack").append("<div class='node'id='id"+id+"'><div class='num'>"+insertnum+"</div><i class='fas fa-arrow-right'id='right"+id+"'></i></div>")
  console.log('insert id: ', id)
  id++
}

function popNode(){
  if(isStack){
    temp = pointer
    pointer = pointer.prev
    pointer.next = rootNode
    temp = undefined
    popArrow(pointer)
  }else{
    temp = rootNode
    root = rootNode.next
    rootNode.prev = pointer
    temp = undefined
    popArrow(pointer)
    rootid+=1
  }
}

function pushArrow(obj){
  console.log('check id: ', id)
  $('#right'+(id-1)).show()
  $('#right'+(id)).hide()
}
function popArrow(obj){
  console.log('check id: ', id)
  $('#right'+(id-1)).hide()
}

$('#pop').click(function(){
  if(isStack){
    if(id>1){
      id--
      console.log('remove id: ', id)
      popNode()
      $("#id"+id).fadeOut(200)
      setTimeout(function(){
        $("#id"+id).remove()
      }, 200)
    }else{
      id = 1
      $('.error1').text("Stack is Empty!")
      $('.error1').slideDown(100)
      setTimeout(function(){
        $('.error1').fadeOut(500)
      }, 1000)
    }
  }else{
    if(rootid!=id){
      console.log('remove id: ', id)
      popNode()
      $("#id"+rootid).fadeOut(200)
      setTimeout(function(){
        $("#id"+rootid).remove()
      }, 200)
    }else{
      rootid = 0
      id = 1
      $('.error1').text("Queue is Empty!")
      $('.error1').slideDown(100)
      setTimeout(function(){
        $('.error1').fadeOut(500)
      }, 1000)
    }
  }
})

$('#push').click(function(){
  var pushnum = $('#inputnum').val()
  if(pushnum == ''){
    $('.error2').slideDown(100)
    setTimeout(function(){
      $('.error2').fadeOut(500)
    }, 1000)
  }else{
    insertNode(pushnum)
    $('#inputnum').val("")
  }
})

$('#stack').click(function(){
  $('#stack').addClass('modeOn')
  $('#queue').removeClass('modeOn')
  isStack = true
})
$('#queue').click(function(){
  $('#queue').addClass('modeOn')
  $('#stack').removeClass('modeOn')
  isStack = false
})