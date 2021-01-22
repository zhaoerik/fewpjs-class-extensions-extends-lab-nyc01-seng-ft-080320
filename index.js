// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((acc, cur) => acc + cur)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides != 3) return false
        if (array[0] + array[1] >= array[2] && array[0] + array[2] >= array[1] && array[1] + array[2] >= array[0]) return true
        else return false
    }
}