
function sum(...n){
   let c=0
   for(let i=0; i<n.length; i++){
    c+=n[i]
   }
   return c
}

test("sum of n number",()=>{
   expect(sum(1,2,3,4)).toBe(10)
})
