function unique(arr) {
  var arrs=[];
  for(var sr of arr){
      if(!arrs.includes(sr)){ //不包含arr键值
          arrs.push(sr); //插入键值
      }
  }
  return arrs;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O