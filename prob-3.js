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
/* console.log(finalScore({ right: 0, wrong: 0, skip:100 })) */

