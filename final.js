/*problem-1*/
function newPrice(currentPrice , discount ) {
    if (typeof currentPrice !== "number" || typeof discount !=="number" || discount <0 || discount >100 )
    {
        return "Invalid"
    }
         let discountAmount =(currentPrice * discount) / 100
         let finalPrice =currentPrice-discountAmount 
         return finalPrice.toFixed(3)
}



/*prob.2 */
function validOtp(otp) {
          if (typeof otp !=="string"){
            return "Invalid"
          }
        if (otp.length===8 && otp.startsWith("ph-")){
            return true ;
        } 
        else{
            return false
        }
    }

    /*prob-3 */
function finalScore (omr) {
         let right=omr.right
         let wrong=omr.wrong
         let skip=omr.skip

         if ((right+wrong+skip) !==100){
            return "Invalid"
        
         }
         let totalScore=(right*1)-(wrong*0.5)
         return Math.round(totalScore)
}

/*prob-4 */
function gonoVote(array) {
          if (!Array.isArray(array)){
            return "Invalid"
          }
          let haCount=0
          let naCount=0

          for (let i=0; i<array.length; i++){
            if (array[i] ==="ha"){
                haCount++

            }
            else if (array[i]==="na") {
                naCount++
            }
          }
          if(haCount > naCount){
            return true
          }
          else if (haCount === naCount){
            return "equal"
          }
          else {
            return false
          }

          
}

/*prob-5*/
function  analyzeText(text) {
         if(typeof text !== "string" || text.trim().length===0){
            return "Invalid"
         }
         let words=text.split(" ")
         let longestWord=words[0]

         for(let i=1; i<words.length; i++){
            if(words[i].length>longestWord.length){
               longestWord=words[i]
            } 
         } 
         let characterCount=text.split(" ").join("").length

         return {
           longwords: longestWord,
           token: characterCount
         }

}

