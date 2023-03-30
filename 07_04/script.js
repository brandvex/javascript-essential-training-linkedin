/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


const stuff = ["Liz", "airCon", "Computer", "Guitar", "Bed", "TV", "Microphone", "Blanket"]
console.log(stuff)

stuff.pop()  //removes last item in array
console.log(stuff)

stuff.unshift(stuff.pop()) //moves the last item to the first position
console.log(stuff)

stuff.sort() //sorts the items alphabetically
console.log(stuff)

findString = () => {    //finds a specific item in the array
    item = stuff[stuff.indexOf("Guitar")]
    return item
}
console.log(stuff.find(findString))

stuff.splice(stuff.indexOf("TV"), 1) //removes an item with specific content from the array
console.log(stuff)
