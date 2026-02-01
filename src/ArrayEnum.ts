const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string
    price: number
}

const menu: Chai[] = [
    {name: "masala", price:14},
    {name: "adrak", price:30}
]

const cities: readonly string[]= ["Delhi", "jaipur"]

const tabel: number[][] =[
    [1,2,3],
    [4,5,6]
]

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean?]

userInfo = ["piyush", 1]
userInfo = ["piyush", 2, false]

const location: readonly [number, number] = [28.66, 32.45]

const chaiItems: [name: string, price: number] = ["masala",24]

//enums

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.LARGE

enum status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)

enum RandomEnum { //not a standard practice
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH =3
}

let t: [string, number] = ["chai", 10]
t.push("extra")