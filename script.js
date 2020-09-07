var userClick = $('.magnifyingGlass');
var requestArtistText = $('.requestArtist');

var txt = "Hello World!";
var n = 0;

userClick.on('click', redirectToArtistPage);

function redirectToArtistPage(event) {
  event.preventDefault();
  var userSearch = $('.searchbar').val().toLowerCase();

  if (userSearch == 'bad bunny') {
    window.location.href = "https://candor.va1en.repl.co/badBunny.html";
  } else if (userSearch == 'beyonce') {
    window.location.href =
      "https://candor.va1en.repl.co/beyonce.html";
  } else if (userSearch == 'beyoncé') {
    window.location.href =
      "https://candor.va1en.repl.co/beyonce.html";
  } else if (userSearch == 'david bowie') {
    window.location.href =
      "https://candor.va1en.repl.co/davidBowie.html";
  } else if (userSearch == 'lady gaga') {
    window.location.href =
      "https://candor.va1en.repl.co/ladyGaga.html";
  } else if (userSearch == '') {
    requestArtistText.text(`Please type in an artist's name.`);
  } else {
    let one = 'Oops! The artist that you are looking for hasn\'t been added yet. ';
    let two = 'Click here';
    let three = ' to request an artist.'
    let joined = one + two.link("https://forms.gle/5d3kbte9HPDNzKpa6") + three;
    document.getElementById("idReq").innerHTML = joined;

  }
  userClick.toggleClass('magnifyingGlassClick');

  if (n == 0) {
    document.images["switchSearchColor"].src = "https://cdn.discordapp.com/attachments/552638302193319936/733027346751291537/image0.png";
    n = 1;
  }
  else {
    document.images["switchSearchColor"].src = "https://cdn.discordapp.com/attachments/552638302193319936/732987539530449007/1155910E-D013-4C3C-8209-EDE16A9D396D.png";
    n = 0;
  }
}




/* function forceLower(strInput) 
{
  strInput.value=strInput.value.toLowerCase();
}​ 
*/

//var text="this is my text.";
//var lowercase=text.toLowerCase();