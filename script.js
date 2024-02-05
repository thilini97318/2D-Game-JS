var boy = document.getElementById("boy");
idleImageNumber = 1;
idleAnimationNumber = 0;

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber == 11){
        idleImageNumber= 1;
    }

    boy.src ="resourcs/idle ("+ idleImageNumber+").png";
}

function idleAnimationstart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}

runAnimationNumber = 1;
runAnimationNumber = 0;

function runAnimation() {
    runImgeNumber = runImgeNumber + 1;

    if(runImgeNumber == 11){
        runImgeNumber = 1;
    }

    boy.src = "resources/run("+runImgeNumber+").png";
}

function runAnimationSatart(){
    runAnimationNumber = setInterval(runAnimation,200);
    clearInterval(idleAnimationNumber);
}

function keycheck(event){
    //alert(event.which);
    //enter=13

    var keyCode=event.which;

    if(keyCode == 13){
        if(runAnimationNumber == 0){
            runAnimationSatart();
        }
        if(moveBackgroundAnimatoinId == 0){
            moveBackgroundAnimatoinId = setInterval(moveBackground,100);
       }

    }
}

var backgroundPositionX = 0;
var moveBackgroundAnimatoinId = 0;

function moveBackground(){

    backgroundPositionX = backgroundPositionX -20;

     document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";
}