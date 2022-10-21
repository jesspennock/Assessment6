const {shuffleArray} = require('./utils')

const fakeArray = [1,3,5,7,9]

describe('shuffleArray should', () => {
   
    test ("Does the shuffle array function return an array", ()=>
        expect(Array.isArray(shuffleArray(fakeArray))).toBe(true)
    )
   
    test("Is length of randomized array the same length as original array", () =>
        expect(shuffleArray(fakeArray).length).toEqual(fakeArray.length)
    )

})