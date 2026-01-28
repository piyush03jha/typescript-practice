type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50
}

interface cupSize {
    size: 'small' | 'medium'
}

type Response = {ok: true} | {ok: false}
class myRes implements Response {
    ok: boolean = true;
}

type TeaType = "masala" | "ginger" | "ilaichi"

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type Masala_chai = BaseChai & Extra 

const cup: Masala_chai = {
    teaLeaves: 2,
    masala: 2
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Piyush"}
const u2: User = {username: "Piyush", bio: "its_time"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "tracker",
    version: 1
}