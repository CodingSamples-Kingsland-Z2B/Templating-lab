let src=document.getElementById("card").innerHTML;
//console.log(src);
let contactsHTML = document.getElementById("contacts-template").innerHTML;
let template = Handlebars.compile(contactsHTML);
Handlebars.registerPartial('card', src);
document.getElementById("contract-zone").innerHTML=template(contacts);

let buttons = document.getElementsByClassName("detailsBtn");

for(let element of buttons){
  element.addEventListener("click",function(event){
      //console.log(this);
      //console.log(event);
      let detailes = event.path[1].querySelector('.details')
      //console.log(detailes);
      if(detailes.style.display=="none"||detailes.style.display==""){
        detailes.style.display = "block";
      }else{
        detailes.style.display = "none";
      }
  });
}
