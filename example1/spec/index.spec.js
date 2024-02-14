const {sum,removeDuplicate}=require('../index')
// import {sum} from '../index.js'

//suite
describe('Test Sum Function',()=>{
    //testcases
    it('Test if parameters are number sum should return result of sumtion',()=>{
    //    functioncall(parametare) => expected result
    //    expect(functioncall(parametare)).matcher(expected result)
         expect(sum(1,2)).toBe(3)
    })
    it('Test sum  with negative parameters sum should return result of sumtion',()=>{
         expect(sum(-1,2)).not.toEqual(4)
    })
    it('Test sum will throw error when parameter are strings',()=>{
        expect(()=>{sum('a','b')}).toThrow()
    })

})



describe('Test removeDuplicate Function',()=>{
   it('test if parameter is [1,1,2,2,3,4,4] the result should be [1,2,3,4]',()=>{
       expect(removeDuplicate([1,1,2,2,3,4,4])).toEqual([1,2,3,4])
   })
   it('test if parameter is [3,3,3,5] the result should be array with length 2',()=>{
       expect(removeDuplicate([3,3,3,5])).toHaveSize(2)
   })
   it('test if parameter is [3,3,3,5] the result should be contain 5',()=>{
       expect(removeDuplicate([3,3,3,5])).toContain(5)
   })
   it('test should return array',()=>{
       expect(removeDuplicate([3,3,3,5])).toEqual(jasmine.any(Array))
   })
})