// .........................task_#1_1.............................................
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumArr(arr){
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return arr.length === 0 ? 0 : sum;
// }
// console.log(sumArr(arr))

// .........................task_#1_2.............................................
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumArr(arr){
//     let sum = 0;
//     if (arr.length === 0) {
//         return 0;
//     } else {
//    for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//    }
//    } 
//    return sum;
// }
// console.log(sumArr(arr));


// .........................task_#2_1.............................................
// function deepCount(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         count += deepCount(arr[i]);
//       }
//       count++;
//     }
//     return count;
//   }
// console.log(deepCount([]));
// console.log(deepCount([1, 2, 3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1, 2, [3, 4, [5]]]));
// console.log(deepCount([[[[]]]]));


// .........................task_#2_2.............................................

// function deepCount(arr) {
//     let count = 0;
//     arr.forEach(item => {
//       count += Array.isArray(item) ? deepCount(item) + 1 : 1;
//     });
    
//     return count;
//   }

// console.log(deepCount([]));
// console.log(deepCount([1, 2, 3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1, 2, [3, 4, [5]]]));
// console.log(deepCount([[[[]]]]));

// .........................task_#3.............................................
// const employees = {
//         development: {
//             backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
//             frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
//         },
//         sales: {
//             marketing: {
//                 internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
//                 promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
//             },
//             sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
//         },
//         designer: [{name: 'Kate', salary: 1800}]
//     }
    
//     function takeSumSallary() {
//         let sum = 0;
//       function sumSallary(obj){ 
//             for(let key in obj){
//                 if (Array.isArray(obj[key])){
//                     obj[key].forEach(employee => sum += employee.salary);
//                 } else {
//                     sumSallary(obj[key]);
//                 }
//             }
//             return sum;
//         }
//         return sumSallary(employees);
//     }
//     console.log(takeSumSallary());


// .........................task_#4.............................................
// let arr1 = [2, 15, 7, 3];
// let arr2 = [9, 3, 17, 12, 4, 8];
// let arr3 = [6, 11, 16, 15, 11];
// let Max = Math.max(...arr1, ...arr2, ...arr3);
// console.log(Max);