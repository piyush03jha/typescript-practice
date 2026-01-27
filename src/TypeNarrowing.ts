function getChai(kind: string | number){
    if(typeof kind === "string"){
        return `Making ${kind} chai ...`;
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `serving ${msg}`
    }
    return `serving default masala chai`
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size === "medium" || size === "large"){
        return `make extra chai`
    }
    return `chai order #${size}`
}

class kulhadChai{
    serve(){
        return `Serving cutting Chai`
    }
}

class cutting{
    serve(){
        return `Serving cutting chai`
    }
}

function serve(chai: kulhadChai | cutting){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `serving custom chai ${item}`
}

type MasalaChai = { type: "masala"; spicelevel: number};
type GingerChai = { type: "ginger"; amount: number};
type ElaichiChai = { type: "elaichi"; aroma: number};

type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai){
    switch (order.type){
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elaichi":
            return ` Elaichi Chai`
            break;

    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

function isStringArray(arr: unknown): arr is string[]{
    //
}