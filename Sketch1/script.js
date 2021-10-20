var nums = [100, 35, 22, 72];
var num = 50;


function setup () {
    createCanvas (700, 700);
    let x = random(width);
    let y = random(height);
    let r = random (10, 50);
    

}
function draw () {
    background (0);
    fill (20)
    stroke (255);
    
    for (var i = 0; i < 4; i++ ) {
        ellipse(i * 100 + 100, 100, nums [i], nums [i]);

         ellipse (i * 200 + 100, 200, nums [2], nums [2]);

        ellipse (i * 300 + 100, 300, nums [0], nums [0]);

         ellipse (i * 400 + 100, 400, nums [1], nums [1]);

         ellipse (i * 500 + 100, 500, nums [3], nums [3]);
    

         
    }



}