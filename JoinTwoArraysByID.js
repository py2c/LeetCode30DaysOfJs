/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const idMap = {};

   // Merge arr1 objects into idMap
   for (const obj of arr1) {
       idMap[obj.id] = { ...idMap[obj.id], ...obj };
   }

   // Merge arr2 objects into idMap
   for (const obj of arr2) {
       idMap[obj.id] = { ...idMap[obj.id], ...obj };
   }

   // Convert idMap values back to an array
   const joinedArray = Object.values(idMap);

   // Sort the array based on id key in ascending order
   joinedArray.sort((a, b) => a.id - b.id);

   return joinedArray;
};