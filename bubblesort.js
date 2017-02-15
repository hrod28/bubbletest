var items = [33, 103, 3, 726, 200, 984, 198, 764, 9];


function bubbleSort(items){
  var swapped;
  do{
    swapped = false;
    for(var i=0; i<items.length-1; i++){
      if(items[i]>items[i+1]){
        var temp = items[i];
        items[i]= items[i+1];
        items[i+1]=temp;
        swapped = true;
      }
    }
  }
  while(swapped);
}
bubbleSort(items);
console.log(items);

















//
