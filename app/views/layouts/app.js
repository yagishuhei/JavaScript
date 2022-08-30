let hello = 'Hello World';
alert(hello);

function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;

};

$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});