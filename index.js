var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,2,1,1,2,1,3,2],
    [2,1,3,2,1,1,1,1,1,2],
    [2,1,1,2,1,2,2,2,1,2],
    [2,2,1,2,1,2,3,2,1,2],
    [2,1,1,2,2,2,1,2,1,2],
    [2,1,1,2,1,1,1,2,1,2],
    [2,1,1,1,1,2,2,2,1,2],
    [2,3,2,1,1,1,1,4,1,2],
    [2,2,2,2,2,2,2,2,2,2],
];

var pacman = {
    x: 1,
    y: 1,
};

var score = 0;

function displayWorld(){
    var output = "";
    for (var i=0; i < world.length; i++){
        output += "\n<div class='row'>";
        for (var j=0; j <world[i].length; j++){
            if (world[i][j] == 0)
            output +="<div class='empty'></div>";
            if(world[i][j] == 1)
            output +="<div class='coin'></div>";
            if (world[i][j] == 2)
                output +="<div class='brick'></div>";
            if (world[i][j] ==3)
                output +="<div class='cherries'></div>";
            if (world[i][j] ==4)
                output +="<div class='ghost'></div>";
        }
        output +="\n</div>";    
    }
    document.getElementById("world").innerHTML = output;
}

function displayPacman(){
    document.getElementById("pacman").style.top=pacman.y*20+"px";
    document.getElementById("pacman").style.left=pacman.x*20 +"px";
}

function displayScore(){
    document.getElementById("score").innerHTML = score;
}

function died(){
    document.getElementById("container").innerHTML = "You died! <button onClick='window.location.reload()'>Play Again</button>"
    };

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e){
    if(e.key == "ArrowDown" && world[pacman.y+1][pacman.x] !==2) {
        pacman.y ++
        document.getElementById("pacman").style.transform= "rotate(90deg)";
    }
    else if(e.key == "ArrowUp" && world[pacman.y-1][pacman.x] !==2){
        pacman.y --
        document.getElementById("pacman").style.transform= "rotate(-90deg)";
    }
    else if(e.key == "ArrowRight" && world[pacman.y][pacman.x+1] !==2){
        pacman.x ++
        document.getElementById("pacman").style.transform= "rotate(0deg)";
    }
    else if(e.key == "ArrowLeft" && world[pacman.y][pacman.x-1] !==2){
        pacman.x --
        document.getElementById("pacman").style.transform= "scaleX(-1)";
    }
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score +=1;
        displayScore();
        displayWorld();
    }
    if (world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score +=10;
        displayScore();
        displayWorld();
    }
    displayPacman();
}

document.onkeyup = function(f){    
    if (world[pacman.y][pacman.x] == 4){
    died();   
}
}