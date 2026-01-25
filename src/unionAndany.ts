let apiRequestStatus: 'pending'| 'success' | 'error' = 'success'

let airLineSeat: 'alise' | 'window' | 'middle' = 'window'

airLineSeat = 'middle'

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === "28"){
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}

console.log(currentOrder);