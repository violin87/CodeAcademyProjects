const randomPhrase = (arr, arr2, arr3) => {

     
      

        let word = arr[Math.floor(Math.random() * arr.length)]
        let word2 = arr2[Math.floor(Math.random() * arr2.length)]
        let word3 = arr3[Math.floor(Math.random() * arr3.length)]


        return `${word} ${word2} ${word3}`
    

    
    
}
console.log(randomPhrase(['I am', 'He is', 'You are', 'She is'], [ 'beaiutiful', 'kind', 'amazing', 'brave'], ['Capricorn', 'Pisces', 'Scorpio', 'Virgo']))