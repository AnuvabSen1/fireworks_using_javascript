
var fireworks=[]
let bg=0;

function setup(){
    createCanvas(1500, 700);

}
function draw(){
    colorMode(RGB)
    background(0,0,10,40);
    strokeWeight(0)
    scale(0.7);
    for(let i=0;i<fireworks.length;i++){
        fireworks[i].updateshow();
        if(fireworks[i].crackertimer>200){
            
            fireworks.splice(i, 1);
            
        }
    }
    print(fireworks)
}
function mouseClicked() {
    let choose=parseInt(random(1,11))
    print(choose)
    if(choose==1){
        let cracker=new cracker1(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==2){
        let cracker=new cracker2(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==3){
        let cracker=new cracker3(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }
    else if(choose==4){
        let cracker=new cracker4(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==5){
        let cracker=new cracker5(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==6){
        let cracker=new cracker6(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==7){
        let cracker=new cracker7(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==8){
        let cracker=new cracker8(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==9){
        let cracker=new cracker9(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else if(choose==10){
        let cracker=new cracker10(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }else{
        let cracker=new cracker4(mouseX/0.7,mouseY/0.7);
        fireworks.push(cracker)
    }

}