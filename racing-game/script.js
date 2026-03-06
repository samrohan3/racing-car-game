const car = document.querySelector(".car");
const gameArea = document.querySelector(".gameArea");
const scoreDisplay = document.getElementById("score");

let carX = 175;
let score = 0;

document.addEventListener("keydown", moveCar);

function moveCar(e){

    if(e.key === "ArrowLeft" && carX > 0){
        carX -= 20;
    }

    if(e.key === "ArrowRight" && carX < 350){
        carX += 20;
    }

    car.style.left = carX + "px";
}

function createEnemy(){

    const enemy = document.createElement("div");
    enemy.classList.add("enemy");

    enemy.style.left = Math.floor(Math.random()*350) + "px";
    enemy.style.top = "0px";

    gameArea.appendChild(enemy);

    let enemyY = 0;

    const moveEnemy = setInterval(()=>{

        enemyY += 5;
        enemy.style.top = enemyY + "px";

        if(enemyY > 600){
            enemy.remove();
            score++;
            scoreDisplay.innerText = "Score: " + score;
            clearInterval(moveEnemy);
        }

        // Collision
        if(
            enemyY > 500 &&
            parseInt(enemy.style.left) < carX + 50 &&
            parseInt(enemy.style.left) + 50 > carX
        ){
            alert("Game Over! Score: " + score);
            location.reload();
        }

    },30)
}

setInterval(createEnemy,1500);