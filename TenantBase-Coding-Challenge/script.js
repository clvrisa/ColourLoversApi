// assign API URL
const apiUrl = 'http://www.colourlovers.com/api/palettes/new?numResults=8&format=json';

// fetch data from Colour Lovers API
async function getData() {

  const response = await fetch(apiUrl);
  const data = await response.json();

  // test output data
  //console.log(data);

  //fetch only time created out of dateCreated 
  var options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'PST'
  };

  //auto update refresh time with time only no date
  var dt = new Date();
  document.getElementById("currentTime").innerHTML = dt.toLocaleString('en-US', options);  

  //first palette time 
  var dateOne = new Date(data[0].dateCreated);
  var timeStringOne = dateOne.toLocaleString('en-US', options);

  //second palette time 
  var dateTwo = new Date(data[1].dateCreated);
  var timeStringTwo = dateTwo.toLocaleString('en-US', options);

  //third palette time 
  var dateThree = new Date(data[2].dateCreated);
  var timeStringThree = dateThree.toLocaleString('en-US', options);
 
  //fourth palette time 
  var dateFour = new Date(data[3].dateCreated);
  var timeStringFour = dateFour.toLocaleString('en-US', options);

  //fifth palette time 
  var dateFive = new Date(data[4].dateCreated);
  var timeStringFive = dateFive.toLocaleString('en-US', options);

  //sixth palette time 
  var dateSix = new Date(data[5].dateCreated);
  var timeStringSix = dateSix.toLocaleString('en-US', options);

  //seventh palette time 
  var dateSeven = new Date(data[6].dateCreated);
  var timeStringSeven = dateSeven.toLocaleString('en-US', options);

  //first palette time 
  var dateEight = new Date(data[7].dateCreated);
  var timeStringEight = dateEight.toLocaleString('en-US', options);


  //first palette
  document.querySelector("#paletteOneTitle").innerHTML = [data[0].title];
  document.querySelector("#paletteOneAuthor").innerHTML = "by " + [data[0].userName];
  document.querySelector("#paletteOneDateCreated").innerHTML = "at " + [timeStringOne];
  document.querySelector("#paletteOneViews").innerHTML = 
    [data[0].numViews] + " views " + [data[0].numVotes] + " votes";
  document.querySelector("#paletteOneImage").innerHTML = "<img src =" + [data[0].imageUrl] + ">";

  //second palette
  document.querySelector("#paletteTwoTitle").innerHTML = [data[1].title];
  document.querySelector("#paletteTwoAuthor").innerHTML = "by " + [data[1].userName];
  document.querySelector("#paletteTwoDateCreated").innerHTML = "at " + [timeStringTwo];
  document.querySelector("#paletteTwoViews").innerHTML = 
    [data[1].numViews] + " views " + [data[1].numVotes] + " votes";
  document.querySelector("#paletteTwoImage").innerHTML = "<img src =" + [data[1].imageUrl] + ">";

  //third palette
  document.querySelector("#paletteThreeTitle").innerHTML = [data[2].title];
  document.querySelector("#paletteThreeAuthor").innerHTML = "by " + [data[2].userName];
  document.querySelector("#paletteThreeDateCreated").innerHTML = "at " + [timeStringThree];
  document.querySelector("#paletteThreeViews").innerHTML = 
    [data[2].numViews] + " views " + [data[2].numVotes] + " votes";
  document.querySelector("#paletteThreeImage").innerHTML = "<img src =" + [data[2].imageUrl] + ">";

  //fourth palette
  document.querySelector("#paletteFourTitle").innerHTML = [data[3].title];
  document.querySelector("#paletteFourAuthor").innerHTML = "by " + [data[3].userName];
  document.querySelector("#paletteFourDateCreated").innerHTML = "at " + [timeStringFour];
  document.querySelector("#paletteFourViews").innerHTML = 
    [data[3].numViews] + " views " + [data[3].numVotes] + " votes";
  document.querySelector("#paletteFourImage").innerHTML = "<img src =" + [data[3].imageUrl] + ">";

  //fifth palette
  document.querySelector("#paletteFiveTitle").innerHTML = [data[4].title];
  document.querySelector("#paletteFiveAuthor").innerHTML = "by " + [data[4].userName];
  document.querySelector("#paletteFiveDateCreated").innerHTML = "at " + [timeStringFive];
  document.querySelector("#paletteFiveViews").innerHTML = 
    [data[4].numViews] + " views " + [data[4].numVotes] + " votes";
  document.querySelector("#paletteFiveImage").innerHTML = "<img src =" + [data[4].imageUrl] + ">";

  //sixth palette
  document.querySelector("#paletteSixTitle").innerHTML = [data[5].title];
  document.querySelector("#paletteSixAuthor").innerHTML = "by " + [data[5].userName];
  document.querySelector("#paletteSixDateCreated").innerHTML = "at " + [timeStringSix];
  document.querySelector("#paletteSixViews").innerHTML = 
    [data[5].numViews] + " views " + [data[5].numVotes] + " votes";
  document.querySelector("#paletteSixImage").innerHTML = "<img src =" + [data[5].imageUrl] + ">";

  //seventh palette
  document.querySelector("#paletteSevenTitle").innerHTML = [data[6].title];
  document.querySelector("#paletteSevenAuthor").innerHTML = "by " + [data[6].userName];
  document.querySelector("#paletteSevenDateCreated").innerHTML = "at " + [timeStringSeven];
  document.querySelector("#paletteSevenViews").innerHTML = 
    [data[6].numViews] + " views " + [data[6].numVotes] + " votes";
  document.querySelector("#paletteSevenImage").innerHTML = "<img src =" + [data[6].imageUrl] + ">";

  //eighth palette
  document.querySelector("#paletteEightTitle").innerHTML = [data[7].title];
  document.querySelector("#paletteEightAuthor").innerHTML = "by " + [data[7].userName];
  document.querySelector("#paletteEightDateCreated").innerHTML = "at " + [timeStringEight];
  document.querySelector("#paletteEightViews").innerHTML = 
    [data[7].numViews] + " views " + [data[7].numVotes] + " votes";
  document.querySelector("#paletteEightImage").innerHTML = "<img src =" + [data[7].imageUrl] + ">";     
}
getData();

