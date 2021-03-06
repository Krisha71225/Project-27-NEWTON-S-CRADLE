class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 80;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate (this.body.angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(3);
        stroke("white");
        circle(0, 0, this.radius);
        pop();
    }
}