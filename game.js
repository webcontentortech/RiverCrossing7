$(document).ready(function() {
    
    var isBoatRight = true;
    var isRight = true;
    var boatData = {
        id: 'boat',
        noOfPersonInBoat: 0,
        isRight: true,
        rightLocation: "0px",
        leftLocation: "-400px",
        person: { 
            first: {
                id: "",
            },
            second: {
                id: ""
            },
            location: { 
                leftLocation: "-650px",
                rightLocation: "-250px"
            }
        }
    }

    var personData = {
        thief: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        },
        police: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        },
         redwoman: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        },
        yellowwoman: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        },
    };

    var DoOnletclick = function () {
        console.log('boatData -----------', boatData);
        if (boatData.isRight) {
            moveBoatLeft()
        } else {
            moveBoatRight()
        }
    }

    var moveBoatLeft = function () {
        $(getBoatId()).animate({marginLeft: boatData.leftLocation}, {duration: 2000,queue: false});
            boatData.isRight = false;
            if (getElementId(boatData.person.first.id)!= "") {
                console.log("personId", getElementId(boatData.person.first.id));
                $(getElementId(boatData.person.first.id)).animate({marginLeft: boatData.person.location.leftLocation}, {duration: 2000,queue: false});
                personData[boatData.person.first.id].isRight = false;
            }
            if (getElementId(boatData.person.second.id)!= "") {
                console.log("personId", getElementId(boatData.person.second.id));
                $(getElementId(boatData.person.second.id)).animate({marginLeft: boatData.person.location.leftLocation}, {duration: 2000,queue: false});
                personData[boatData.person.second.id].isRight = false;
            }
    }

    var moveBoatRight = function () {
        $(getBoatId()).animate({marginLeft: boatData.rightLocation}, {duration: 2000,queue: false});
            boatData.isRight = true;
            if (getElementId(boatData.person.first.id)!= "") {
                console.log("personId", getElementId(boatData.person.first.id));
                $(getElementId(boatData.person.first.id)).animate({marginLeft: boatData.person.location.rightLocation}, {duration: 2000,queue: false});
                personData[boatData.person.first.id].isRight = true;
            }
            if (getElementId(boatData.person.second.id)!= "") {
                console.log("personId", getElementId(boatData.person.second.id));
                $(getElementId(boatData.person.second.id)).animate({marginLeft: boatData.person.location.rightLocation}, {duration: 2000,queue: false});
                personData[boatData.person.second.id].isRight = true;
            }
    }

    var getElementId = function (personId) {
        return personId === "" ? "" : "#" + personId;
    }

    var getBoatId = function () {
        return boatData.id === "" ? "" : "#" + boatData.id;
    }

     var doOnPersonClick = function(personId){
        
            if (personData[personId].isRight && boatData.isRight) {
                doOnClickPersonRightBoatRight(personId)
            }
            if (!personData[personId].isRight && !boatData.isRight) {
                doOnClickPersonLeftBoatLeft(personId)
            }
        
    }

    var doOnClickPersonRightBoatRight = function (personId) {
        console.log('AAAAAA -------------', personData[personId].isInBoat);
       if (!personData[personId].isInBoat) {
                doOnClickPersonRightNotInBoat(personId, personData[personId].location.rightInBoat)
                personData[personId].isInBoat = true;
                if (boatData.noOfPersonInBoat === 0 ) {
                    boatData.person.first.id = personId;
                } else {
                    boatData.person.second.id = personId;
                }
                
                boatData.noOfPersonInBoat++;

            } else {
                doOnClickPersonRightInBoat(personId, personData[personId].location.right)
                personData[personId].isInBoat = false;
                if (boatData.person.first.id == personId) {
                    boatData.person.first.id = "";
                } else {
                    boatData.person.second.id = "";
                }
                --boatData.noOfPersonInBoat;
            }
    }

    var doOnClickPersonRightNotInBoat = function(personId,location) {
        if (boatData.noOfPersonInBoat < 2) {
            $(getElementId(personId)).animate({marginLeft: location}, 500);
        }
    };

     var doOnClickPersonRightInBoat = function(personId,location) {
        $(getElementId(personId)).animate({marginLeft: location}, 500);
    };

    var doOnClickPersonLeftBoatLeft = function (personId) {
        if (personData[personId].isInBoat) {
                doOnClickPersonLeftInBoat(personId, personData[personId].location.left)
                personData[personId].isInBoat = false;
                if (boatData.person.first.id == personId) {
                    boatData.person.first.id = "";
                } else {
                    boatData.person.second.id = "";
                }
                --boatData.noOfPersonInBoat;
            } else {
                doOnClickPersonLeftNotInBoat(personId, personData[personId].location.leftInBoat)
                personData[personId].isInBoat = true;
                if (boatData.noOfPersonInBoat === 0 ) {
                    boatData.person.first.id = personId;
                } else {
                    boatData.person.second.id = personId;
                }   
                boatData.noOfPersonInBoat++;
            }
    }

    var doOnClickPersonLeftInBoat = function(personId, location) {
        $(getElementId(personId)).animate({marginLeft: location}, 500);
    };

    var doOnClickPersonLeftNotInBoat = function(personId,location) {
        if (boatData.noOfPersonInBoat < 2) {
        $(getElementId(personId)).animate({marginLeft: location}, 500);
        }
    };

    $("#thief").click(function() {
        doOnPersonClick("thief")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
    $("#police").click(function() {
        doOnPersonClick("police")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
    $("#redwoman").click(function() {
        doOnPersonClick("redwoman")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
    $("#yellowwoman").click(function() {
        doOnPersonClick("yellowwoman")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
   
    $("#let").click(function() {
        DoOnletclick();
    });

});
