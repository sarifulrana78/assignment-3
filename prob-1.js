/*proble-1*/
function newPrice(currentPrice , discount ) {
    if (typeof currentPrice !== "number" || typeof discount !=="number" || discount <0 || discount >100 )
    {
        return "Invalid"
    }
         let discountAmount =(currentPrice * discount) / 100
         let finalPrice =currentPrice-discountAmount 
         return finalPrice.toFixed(3)
}
/* console.log(newPrice("1500", 20)) */

