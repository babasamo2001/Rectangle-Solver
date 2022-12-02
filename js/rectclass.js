export default class Rectangle {
    constructor(len,bre){
         this.length=len;
        this.breadth=bre;
    }
    
     getArea(){
    return this.length*this.breadth;
    }
    getPerimeter(){
        return 2*(Number(this.length)+Number(this.breadth));
        }

    }
    
    