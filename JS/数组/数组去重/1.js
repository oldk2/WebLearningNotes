function unique(arr) {
  var arrs=[];
  for(var sr of arr){
      if(!arrs.includes(sr)){ //������arr��ֵ
          arrs.push(sr); //�����ֵ
      }
  }
  return arrs;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O