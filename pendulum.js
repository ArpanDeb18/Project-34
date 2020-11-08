class Pendulum {

    constructor(x,y,color) {

        var options = {
            //isStatic : true,
            restitution : 1,
            density : 100,
            friction : 0.01,
            frictionAir : 0.0,
            slop : 1,
            inertia : Infinity
        };

        this.body = Bodies.circle(x, y, 30, options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.body);
    }

    display(){

        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //noStroke();
        //fill(this.color);
        stroke(this.color);
        ellipse(0, 0, 60, 60);
        pop();
    }

}