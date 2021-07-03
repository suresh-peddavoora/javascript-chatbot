$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})

var button = document.getElementById('button');
var textbox = document.getElementById('textbox');


button.addEventListener("click",function(){ 
  var newMessages=document.createElement("li");  
  newMessages.innerHTML=textbox.value;
  
  document.getElementById("messages").appendChild(newMessages);
  textbox.value="";

  
})
