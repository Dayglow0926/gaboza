

let themeTit=document.querySelectorAll('.banner-nav nav ul li button');

themeTit.forEach((val)=>{
    let themeTitArray=val.filter(function(el){
        return el;
    })
})

/* 슬라이드에 기능 넣고 이미지 네브에*/

let arr1 = [1, 2, 3, 4, 5];
arr1.push('six');
arr1.push('seven');
console.log(arr1);

arr1.pop();
console.log(arr1.pop());
console.log(arr1);

let arr2=[' quakka', 'puppy','rabbit','hamster'];
arr2.unshift('고양이');
arr2.unshift('쥐');
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);