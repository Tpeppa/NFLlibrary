var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/NFL%20Teams.csv"

function getTeamsInDivision(division){
var divisions = getColumn(url, 2);
var team = getColumn(url, 3);
var divisionlist = [];
for ( var i = 0; i < divisions.length; i++){
  if (divisions[i] == division){
    divisionlist.push(team[i]);
  }
}
return divisionlist;
}
console.log(getTeamsInDivision("East"));

function getTeamsInConference(Conference){
var confrences = getColumn(url, 1);
var team = getColumn(url, 3);
var Conferencelist = [];
for ( var i = 0; i < confrences.length; i++){
  if (confrences[i] == Conference){
    Conferencelist.push(team[i]);
  }
}
return Conferencelist;
}
console.log(getTeamsInConference("AFC"));


function getTeamHeadCoach(team){
var headCoaches = getColumn(url, 7);
var teams = getColumn(url, 3);
for ( var i = 0; i < headCoaches.length; i++){
  if (teams[i].includes(team)) {
    return headCoaches[i];
  }
}
}
console.log(getTeamHeadCoach("Vikings"));

function getStadiumAndCapacity(team){
  var Stadium = getColumn(url, 5);
  var teams = getColumn(url, 3);
  var capacity = getColumn(url, 6);
var StadiumlistCapList = [];
for (var i=0; i<Stadium.length; i++){
  if(teams[i].includes(team)){
    StadiumlistCapList.push(capacity[i]);
    StadiumlistCapList.push(Stadium[i])
  }
    
  
}  
  if (!teams[i] == team) {
    return "This is not a valid team";
  }
  
  return StadiumlistCapList;

}
console.log(getStadiumAndCapacity("test"));


function getTeamsImageUrl(team){
  var image=getColumn(url, 8);
  var teams = getColumn(url, 3);
  var imageList = [];
  for (var i=0; i<image.length; i++){
    if(teams[i].includes(team)){
     return image[i]
    }
  }
}
console.log(getTeamsImageUrl("Vikings"));

function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

