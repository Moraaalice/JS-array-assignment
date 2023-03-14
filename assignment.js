const arr1 = [3,7,34,90,12];
let arr = arr1[arr1.length -1];
console.log(arr);
//
const arr2 = [true,"green","where",12,56];
let ar = arr2[arr2.length -1];
console.log(ar);
//
const mypet = ["Cow","Bird","Snake","Dog"];
let pet = mypet.join();
console.log(pet);
//
const arr3 = [-5,9,3,2,-3,2,-3,6,8,4,1];
let ary = arr3.sort();
console.log(ary);
//
function func(){
    let word = "sevink"
    console.log(word.sort);
    console.log(word);
}
//
let arrie = ["mango","apple","apple","orange","mango","mango"];
function removeDuplicates(arrie){
    return [... new Set(arrie)];
}
console.log(removeDuplicates(arrie));
//
let arr5 = ["the","way","x",4];
let arr4 = "x"
if(arr5.includes(arr4)){
    console.log(arr5);
}
else{
    console.log("the search word was not found")
}
