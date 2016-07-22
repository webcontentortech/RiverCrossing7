$(document).ready(function() {
    var isThiefRight = true;
    var isThiefInBoat = false;
    var isBoatRight = true;
    var whoIsInBoatFirst;
    var isRight=true;


    $("#thief").click(function() {
        var thiefRightLocation = "0px";
        var thiefInBoatRightLocation = "-250px"; 
        console.log(thiefInBoatRightLocation);
        var thiefLeftLocation = "-950px";
        var thiefInBoatLeftLocation = "-650px";
        var thiefId = "#thief"

        if (isThiefRight && isBoatRight) {
            console.log(isThiefRight && isBoatRight);
            if (! isThiefInBoat) {
                doOnClickThiefRightNotInBoat(thiefId, thiefInBoatRightLocation)
                                
            } else {
                doOnClickThiefRightInBoat(thiefId,thiefRightLocation)
            }
        }

        if(! isThiefRight && ! isBoatRight){
            console.log(! isThiefRight && ! isBoatRight);
            if (isThiefInBoat) {
                doOnClickThiefLeftInBoat(thiefId,thiefLeftLocation)

            } else {
                doOnClickThiefLeftNotInBoat(thiefId,thiefInBoatLeftLocation)
            }
        }
    });

    $("#let").click(function() {
        if (isBoatRight) {
            console.log("isBoatRight",isBoatRight);
            $("#boat").animate({marginLeft: '-400px'}, {duration: 2000,queue: false}); 
            isBoatRight = false;
            if (whoIsInBoatFirst != "") {
                $(whoIsInBoatFirst).animate({marginLeft: '-650px'}, {duration: 2000,queue: false});
                makePersonInBoatStateChange(whoIsInBoatFirst, false);
            }
            console.log("isBoatRight",isBoatRight);
        } else {
            $("#boat").animate({marginLeft: '0px'}, {duration: 2000,queue: false});
            isBoatRight = true;
            if (whoIsInBoatFirst != "") { 
                $(whoIsInBoatFirst).animate({marginLeft: '-250px'}, {duration: 2000,queue: false});
                makePersonInBoatStateChange(whoIsInBoatFirst, true);
            }
        }
    });
    function makePersonInBoatStateChange(whoIsInBoatFirst, isRight) {
        
        var res = whoIsInBoatFirst.replace("#", "");
        var thiefstring = "isThiefRight";

        if (thiefstring.indexOf(res) > -1) {
            isThiefRight = false;
            console.log(isThiefRight);
        }
    }

    var doOnClickThiefRightNotInBoat = function(thiefId, thiefInBoatRightLocation) {
        console.log(thiefInBoatRightLocation);
        $(thiefId).animate({marginLeft: thiefInBoatRightLocation}, 500);
        console.log(thiefId);
        console.log(thiefInBoatRightLocation);
        isThiefInBoat = true;
        whoIsInBoatFirst = "#thief";
        isThiefRight = true;
    };

    var doOnClickThiefRightInBoat = function(thiefId,thiefRightLocation){
        $(thiefId).animate({marginLeft: thiefRightLocation}, 500);
        isThiefInBoat = false;
        whoIsInBoatFirst = "";
        isThiefRight = true;
    };

    var doOnClickThiefLeftInBoat = function (thiefId,thiefLeftLocation) {
        $(thiefId).animate({marginLeft: thiefLeftLocation}, 500);
        isThiefInBoat = false;
        whoIsInBoatFirst = "";
        isThiefRight = false;
    };

    var doOnClickThiefLeftNotInBoat = function (thiefId,thiefInBoatLeftLocation) {
        $(thiefId).animate({marginLeft: thiefInBoatLeftLocation}, 500);
        isThiefInBoat = true;
        whoIsInBoatFirst = "#thief";
        isThiefRight = false;
    };      
      
});