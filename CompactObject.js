/**
 Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array. 
 
  
 */
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(typeof obj==='object'){
        if(Array.isArray(obj)){
            let temp=[]
            for(let i=0;i<obj.length;i++){
                if(Boolean(obj[i])) temp.push(compactObject(obj[i]))
            }
            return temp
        }
        else{
            let temp={}
            for(let i in obj){

                if(Boolean(obj[i])) temp[i]=compactObject((obj[i]))
            }
            return temp
        }
    }
    return obj
};