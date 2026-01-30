const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let tea: {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "adrak chaska",
    price: 30,
    isHot: true
}

//alice type

type Tea = {
    name: string;
    price: number;
    ingedrients: string[]
}

const ilaichiChai: Tea = {
    name: "Ilcahi Chai",
    price: 30,
    ingedrients: ["Ilachi","Tea Leaves","water", "Milk"]
}

// duk typing 

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup == bigCup

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Assam"}
const chaiBrew:Brew = coffee

type User= {
    username: string;
    password: string
}

const u: User = {
    username: "chaicode",
    password: "123"
    // name: "piyush"
}

type Item = {
    name: string,
    quantity: number
}

type address = {
    street: string,
    pincode: number
}

type Order = {
    id:string;
    items:Item[];
    address: address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) =>{
    console.log("updateing chai with", updates);
}

updateChai({price: 25})
updateChai({name: "adrak chai"})
updateChai({isHot: false})

type ChaiOrder = {
    name?: string;
    quantity?:number 
}

const placeOrder = (order: Required<ChaiOrder>) =>{
    name: "adrak chai";
    quantity: 4
}

type PremiumChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<PremiumChai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "ilaichi chai",
    price: 30
}

type ChaiChai = {
    name: string;
    price: number;
    isHot: boolean;
    secreatIngredients: string[]
}

const chaiInfom: Omit<ChaiChai, "secreatIngredient">;