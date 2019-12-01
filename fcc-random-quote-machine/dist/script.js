// Random background image //

const numAvailable = 983  //how many photos are total in the collection
const imgToGen = 1; //how many photos you want to display
const collectionID = 148982   //the collection ID from the original url
const imageContainer = document.querySelector('.image-container')
function getImages(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
    .then((response) => {
      console.log(response.url)
      document.body.style.backgroundImage = `url(${response.url})`;
      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundPosition = "center center"
    document.body.style.backgroundAttachment = "fixed"
      document.body.style.backgroundSize = "cover"
    })
  }
for(let i=0; i < imgToGen; i++){
    let randomIndex = Math.floor(Math.random() * numAvailable);
 getImages(randomIndex);
  }

//end random image generator

//set up for if tumbler/twitter in Frame

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

//array of colors for background/text

var colors = ['#16a085', '#0066ff', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9933ff', '#9b59b6', '#FB6964', '#ff0066', '#342224', "#472E32",  "#5da299", "#00cc00"];

//below variables used later when setting up post/tweet- initialized as an empty string

var currentQuote = '', currentAuthor = '';

//function for opening Links/ small pop up window
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}


//API call for quote data

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: "application/json"
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function(data) {
      if (typeof data === 'string') {
        quotesData = JSON.parse(data);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

//randomize quote data

function randomizeQuotes() {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote() {

  let randomQuote = randomizeQuotes();
  
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  if(inIframe())
  {
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

    $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
  }
  
  $(".quote-text").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#text').text(randomQuote.quote);
    }
  );

  $(".quote-author").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#author').html(randomQuote.author);
    }
  );

  var color = Math.floor(Math.random() * colors.length);
  $("html body").animate(
    {
      
      color: colors[color]
    },
    1000
  );
  $(".button").animate(
    {
     backgroundColor: colors[color]
    },
    1000
  );
}

function changeOnclick() {
  getImages();
  getQuote();
  
}

$(document).ready(function() {
  getQuotes().then(() => {
    getQuote();
    
  });

  $('#new-quote').on('click', getQuote());
  
  
  
  
  
 
  

  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });

  $('#tumblr-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    }
  });
});