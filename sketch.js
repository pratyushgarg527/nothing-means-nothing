const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var drops=[];
var maxDrops=100;
function preload() {

}

function setup() {
    var canvas = createCanvas(600, 800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,500);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Raindrop(random(0,400), random(0,400)));
        }

    }
}

function draw() {

    background("black")
    Engine.update(engine);

    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }
}

