
window.addEventListener("appinstalled", () => {
  swal("Thank you for installing our app!");
});
window.violetexts = false;
const spf = new Spacefriends();
//var converter = new showdown.Converter({tables: true,simpleLineBreaks:true,simplifiedAutoLink:true,strikethrough:true,emoji:true,ghCompatibleHeaderId:true,requireSpaceBeforeHeadingText:true});
//var html = converter.makeHtml('text');
function startVioletUp() {
document.getElementById('lockscreen').remove();
document.getElementById('xVioletOS').removeAttribute('hidden');
document.getElementById('topUIsearch').removeAttribute('hidden');
document.getElementById('topUIextensions').removeAttribute('hidden');
}
function search() {
  swal("Here's the title!", "...and here's the text!");
}
function vextensions() {
  if(window.violetexts == true) {
    // idk
  } else {
    swal("Extensions are not availale right now");
  }
}
