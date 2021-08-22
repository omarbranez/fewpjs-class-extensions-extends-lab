// Your code here
class Polygon {
    constructor(sidesArray){
        this.sidesArray = sidesArray
    }
    
    get countSides() {
        return this.sidesArray.length
    }

    get perimeter() {
       return this.sidesArray.reduce(function(accumulator, currentValue) { return accumulator + currentValue}, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sidesArray.length === 3) {
            if ((this.sidesArray[0] + this.sidesArray[1]) > this.sidesArray[2] && (this.sidesArray[1] + this.sidesArray[2]) > this.sidesArray[0] && (this.sidesArray[0] + this.sidesArray[2]) > this.sidesArray[1]) {
                return true
            } else {
                return false
            }
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sidesArray.length === 4) {
            if (this.sidesArray.every( side => side === this.sidesArray[0])) {
                return true
            } else {
                return false 
            }
        } else {
            return false
        }
    }

    get area() {
        if (this.isValid) {
            return this.sidesArray[0] ** 2
        } else {
            return "Invalid Square"
        }
    }
    
}