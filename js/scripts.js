const myFavs=["chocolate", "cherry", "mint"];

$(document).ready(function(){
  myFavs.forEach(function(fav){
    $("#fav").append("<li>"+fav+"</li>");
  });
  $("#new-flavor").submit(function(event){
    event.preventDefault();
    $("#fav").append("<li>"+($("#new").val())+"</li>");
  });
});
