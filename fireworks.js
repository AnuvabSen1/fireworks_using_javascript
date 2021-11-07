class upwork{
    constructor(x,y){
        this.scale=0.5
        this.upcount=0;
        this.posx=x;
        this.posy=700;
        this.maxy=y;
        this.col=random(255)
        this.particles=[]
        this.speed=5;
        this.dense=20
        for(let i=0;i< this.dense;i++){
            this.particles.push([this.posx+random(4,-4),this.posy+(i*4),(this.dense-i)/4])
        }
    }

    update(){
        
        for(let i=0;i< this.dense;i++){
            let slight=noise( this.particles[i][1]/40)
            this.particles[i][0]=this.posx+slight*20+random(2);
            this.particles[i][1]=this.particles[i][1]- this.speed;
            colorMode(HSB)
            fill(this.col,215,215)
            ellipse(this.particles[i][0],this.particles[i][1],this.particles[i][2],this.particles[i][2])
        }
        this.posy=this.posy-this.speed;
        if(this.posy<=this.maxy){
            blast.play()
            
        }
    }
    
};

class cracker1 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        for(let i=0;i< this.designdense;i++){
            let subrules=[[x,y],[random(-10,10),random(-15,10)]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                fill((i*2)%255,255,255)
                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][0]/4.5;
                this.design[i][0][1]=this.design[i][0][1]+this.design[i][1][1]/4.5;

                this.design[i][1][0]=this.design[i][1][0];
                this.design[i][1][1]=this.design[i][1][1]+0.2;


                let radius=2+(this.crackertimer/150)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(this.design[i][0][0],this.design[i][0][1],radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }




}


class cracker2 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        for(let i=0;i< this.designdense;i++){
            let subrules=[[0],[(i/this.designdense)*360,random(5)]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                if(i%2==0){fill(this.crackertimer%255,255,255)}
                else{fill(this.col,this.crackertimer%50,255)}
                
                
                let parx=this.posx+this.design[i][0][0]*Math.cos(this.design[i][1][0]*Math.PI/180)
                let pary=this.maxy+this.design[i][0][0]*Math.sin(this.design[i][1][0]*Math.PI/180)

                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]/2.5

                this.design[i][1][0]=this.design[i][1][0]+1

                let radius=2+(this.crackertimer/150)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}


class cracker3 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        for(let i=0;i< this.designdense;i++){
            let subrules=[[0,0],[(i/this.designdense)*360,random(5)]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                if(i%2==0){fill(255,0,255);}
                else{fill((this.design[i][0][0])%255,255,255);}
                
                
                let parx=this.posx+this.design[i][0][0]*Math.cos(this.design[i][1][0]*Math.PI/180)
                let pary=this.maxy+(this.design[i][0][0]*Math.sin(this.design[i][1][0]*Math.PI/180))+this.design[i][0][1]

                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]/2.5
                this.design[i][0][1]=this.design[i][0][1]+1

                let radius=2+(this.crackertimer/150)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}


class cracker4 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        for(let i=0;i< this.designdense/4;i++){
            let subrules=[[0,0],[(i*4/this.designdense)*360,1]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.75]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.5]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.25]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                
                fill((this.design[i][0][0]*2)%255,255,255)
                
                
                let parx=this.posx+this.design[i][0][0]*Math.cos(this.design[i][1][0]*Math.PI/180)
                let pary=this.maxy+(this.design[i][0][0]*Math.sin(this.design[i][1][0]*Math.PI/180))+this.design[i][0][1]

                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]*2
                //this.design[i][0][1]=this.design[i][0][1]+1

                let radius=2+(this.crackertimer/150)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}


class cracker5 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        for(let i=0;i< this.designdense;i++){
            let subrules=[[x,y],[random(-5,5),random(-20,-15)]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                fill((i*2)%255,255,255)
                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][0]/4.5;
                this.design[i][0][1]=this.design[i][0][1]+this.design[i][1][1]/4.5;

                this.design[i][1][0]=this.design[i][1][0];
                this.design[i][1][1]=this.design[i][1][1]+0.26;


                let radius=2+(this.crackertimer/150)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(this.design[i][0][0],this.design[i][0][1],radius,radius)
                // strokeWeight(1)
                // stroke(this.col,255,255)
                // line(this.posx,this.design[parseInt(this.designdense/2)][0][1],this.design[i][0][0],this.design[i][0][1])
                // strokeWeight(0)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }

}


class cracker6 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=25
        this.design=[]
        this.crackertimer=0;
        this.downmove=0
        for(let i=0;i< this.designdense;i++){
            let subrules=[[0,0],[(i/this.designdense)*360,1.6]]
            this.design.push(subrules)
        
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                
                fill((this.design[i][0][0]*2)%255,255,255)
                
                
                let parx=this.posx+this.design[i][0][0]*Math.cos(this.design[i][1][0]*Math.PI/180)
                let pary=this.maxy+(this.design[i][0][0]*Math.sin(this.design[i][1][0]*Math.PI/180))-this.downmove

                if(this.crackertimer<100){
                    this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]*2
                }else{
                    this.downmove=this.downmove-1
                }
                
                //this.design[i][0][1]=this.design[i][0][1]+1

                let radius=2+(this.crackertimer/20)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}


class cracker7 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        this.downmove=0
        for(let i=0;i< this.designdense/4;i++){
            let subrules=[[0,0],[(i*4/this.designdense)*360,1.5]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.5]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,1]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.25]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                
                fill((this.design[i][0][0]*2)%255,255,255)
                
                
                let parx=this.posx+this.design[i][0][0]*Math.cos(this.design[i][1][0]*Math.PI/180)
                let pary=this.maxy+(this.design[i][0][0]*Math.sin(this.design[i][1][0]*Math.PI/180))-this.downmove

                
                
                    
                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]*2
                this.design[i][0][1]=this.design[i][0][0]+this.design[i][1][1]*4
                this.design[i][1][0]=this.design[i][1][0]+1
                
                //this.design[i][0][1]=this.design[i][0][1]+1

                let radius=2+(this.crackertimer/100)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}


class cracker8 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        this.downmove=0
        for(let i=0;i< this.designdense/4;i++){
            let subrules=[[0,0],[(i*4/this.designdense)*360,1.5]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.5]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,1]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.25]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                if(i%2==0){
                    fill((this.design[i][0][0]*2)%255,255,255)
                }else{
                    fill((this.design[i][0][0]*2)%255,0,255)
                }
                
                
                
                let parx=this.posx+this.design[i][0][1]*Math.cos(this.design[i][1][0]*Math.PI/180)
                let pary=this.maxy+(this.design[i][0][0]*Math.sin(this.design[i][1][0]*Math.PI/180))-this.downmove

                
                
                    
                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]/2
                this.design[i][0][1]=this.design[i][0][1]+this.design[i][1][1]*2
                this.design[i][1][0]=this.design[i][1][0]+1
                
                //this.design[i][0][1]=this.design[i][0][1]+1

                let radius=2+(this.crackertimer/100)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}



class cracker9 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        this.downmove=0
        for(let i=0;i< this.designdense/4;i++){
            let subrules=[[0,0],[(i*4/this.designdense)*360,1]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.75]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.5]]
            this.design.push(subrules)
            subrules=[[0,0],[(i*4/this.designdense)*360,0.25]]
            this.design.push(subrules)
        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                if(i%2==0){
                    fill((this.design[i][0][0]*2)%255,255,255)
                }else{
                    fill((this.design[i][0][0]*2)%255,0,255)
                }
                
                
                
                let parx=this.posx+this.design[i][0][1]*Math.cos((this.design[i][1][0])*Math.PI/180)*Math.sin(this.crackertimer*4*Math.PI/180)
                let pary=this.maxy+(this.design[i][0][0]*Math.sin((this.design[i][1][0])*Math.PI/180))*Math.cos(this.crackertimer*4*Math.PI/180)-this.downmove

                
                
                    
                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]/2
                this.design[i][0][1]=this.design[i][0][1]+this.design[i][1][1]*2
                this.design[i][1][0]=this.design[i][1][0]+1
                
                //this.design[i][0][1]=this.design[i][0][1]+1

                let radius=2+(this.crackertimer/100)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}




class cracker10 extends upwork{
    constructor(x,y){
        super(x,y);
        this.designdense=200
        this.design=[]
        this.crackertimer=0;
        this.downmove=0
        for(let i=0;i< this.designdense;i++){
            let subrules=[[0,0,0],[(i/this.designdense)*360,1,(i/this.designdense)*360,(i/this.designdense)*360]]
            this.design.push(subrules)

        }
        
    }

    updateshow(){
        //console.log("working sub",this.maxy);
        if(this.posy>this.maxy){
            console.log("working sub");
            this.update();
            
        }else{
            console.log("working sub sub");
            colorMode(HSB)
            for(let i=0;i< this.designdense;i++){
                if(i%2==0){
                    fill((this.design[i][0][0]*2)%255,255,255)
                }else{
                    fill((this.design[i][0][0]*2)%255,0,255)
                }
                
                
                
                let parx=this.posx+(this.design[0][0][0]*Math.cos((this.design[i][1][0]*Math.PI)/180)*Math.sin((this.design[i][1][0]*Math.PI)/180))
                let pary=this.maxy+(this.design[i][0][0]*Math.cos((this.design[i][1][0]*Math.PI)/180)*Math.cos((this.design[i][1][0]*Math.PI)/180)
                +this.design[i][0][0]*Math.sin((this.design[i][1][0]*Math.PI)/180))

                
                
                    
                this.design[i][0][0]=this.design[i][0][0]+this.design[i][1][1]
               
                //this.design[i][0][1]=this.design[i][0][1]+1

                let radius=2+(this.crackertimer/100)
                //console.log(this.design[i][0][0],this.design[i][0][1]);
                ellipse(parx,pary,radius,radius)
            }
            this.posy--;
        }
        this.crackertimer++;
        
    }


}
