/*prob-5*/
function  analyzeText(text) {
         if(typeof text !== "string"){
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
/* console.log(analyzeText("12 2324" )) */

