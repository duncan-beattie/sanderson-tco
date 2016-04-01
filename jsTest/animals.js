(function (){
  "use strict";
  // array of list items
  var animalArray = Array.prototype.slice.call(document.querySelectorAll(".animal"));

  // determine area (width * height) of given elements
  // sort array in ascending size
  function customSort(a,b){
    // determine area of the elements
    var areaA = a.offsetWidth * a.offsetHeight;
    var areaB = b.offsetWidth * b.offsetHeight;
    
    // find largest of the 2 areas
    if(areaA < areaB){
      return -1;
    }
    if(areaA > areaB){
      return 1;
    }

    // sort elements of same area alphabetically
    if(a.innerText < b.innerText){
      return -1;
    }
    if(a.innerText > b.innerText){
      return 1;
    }
    return 0;
  }

  // update the dom
  function updateAnimalList(arr){
    for(var item in arr){
      // take each item
      if(arr.hasOwnProperty(item)){
        // reposition it in the list
        document.querySelector('.animals').appendChild(arr[item]);
      }
    }
  }

  animalArray.sort(customSort);
  updateAnimalList(animalArray);

})();
