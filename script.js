const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

const numberofEnemies = 100;
const enemies = [];


// enemy1 ={
//     x: 10,
//     y: 50,
//     width: 100,
//     height: 100,
// }

class Enemy {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;   
    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

// const enemy1 = new Enemy();
// const enemy2 = new Enemy();

for(let i = 0; i < numberofEnemies; i++) {
    enemies.push(new Enemy());
}
console.log(enemies);


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update();
    // enemy1.y++;
    // enemy2.x+= 0.5;
    // enemy2.y+= 0.5;
    //    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    //    ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    // enemy1.draw();
    enemies.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate);
}

animate();