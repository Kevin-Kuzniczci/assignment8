//STEP 1
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// console.log(movies[1]);

//STEP 2
// let movies = new Array(5);

// movies[0] = 'Hot Fuzz';
// movies[1] = 'Everything Everywhere';
// movies[2] = 'Dungeons and Dragons';
// movies[3] = 'Knives Out';
// movies[4] = 'John Wick';

// console.log(movies[0]);

//STEP 3

// movies.splice(2, 0, "Cocaine Bear");

// console.log(movies.length);

//STEP 4

// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];

// delete movies[0];

// console.log(movies);

//STEP 5
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// for (let movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// for (let i of movies) {
//     console.log(i)
// }

//STEP 7
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// movies.sort();
// console.log(movies);

//STEP 8
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// let leastFavMovies = ['Morbius', 'The Room', 'Troll 2'];

// console.log("Movies I like:  \n\n" + movies[0] + "\n" + movies[1] + "\n" + movies[2] + "\n\nMovies I don't like: \n\n" + leastFavMovies[0] + "\n" + leastFavMovies[1] + "\n" + leastFavMovies[2])

//STEP 9
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// let leastFavMovies = ['Morbius', 'The Room', 'Troll 2'];

// let Movies = movies.concat(leastFavMovies);

// console.log(Movies.reverse());

//STEP 10
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// let leastFavMovies = ['Morbius', 'The Room', 'Troll 2'];

// let Movies = movies.concat(leastFavMovies);

// console.log(Movies.slice(-1));

//STEP 11
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// let leastFavMovies = ['Morbius', 'The Room', 'Troll 2'];

// let Movies = movies.concat(leastFavMovies);

// console.log(Movies[0]);

//STEP 12
// let movies = ['Hot Fuzz', 'Everything Everywhere', 'Dungeons and Dragons', 'Knives Out', 'John Wick'];
// movies[5] = 'Cocaine Bear';
// movies[6] = 'Nope';

// let leastFavMovies = ['Morbius', 'The Room', 'Troll 2'];

// let Movies = movies.concat(leastFavMovies);

// let leastFavMoviesIndices = leastFavMovies.map(movie => Movies.indexOf(movie));

// leastFavMoviesIndices.forEach(index => {
//     Movies.splice(index, 0, "Shrek")
// })

// console.log(Movies);

//STEP 13
// let movies = [["HotFuzz", 1], ["Everything Everywhere", 2], ["Dungeons and Dragons", 3], ["Knives Out", 4], ["John Wick", 5]];
// let movieText = movies.filter(movie => movie[0]).forEach(movie => console.log(movie[0]));

//STEP 14
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployee = (function (emp) {
//     console.log("Employees: \n\n" + emp.join("\n"))
// });

// showEmployee(employees);

//STEP 15

// let myArrayItems = [false, null, 0, '', 'hello', 42]
// let result = myArrayItems.filter(checkType);

// function checkType(myArrayItem) {
//     if(myArrayItem !== false || myArrayItem !== null || myArrayItem !== 0 || myArrayItem !== "") {
//         return myArrayItem
//     }
// };

// console.log(result);

//STEP 16
// function getRandomItemFromArray(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }
  

// let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let randomItem = getRandomItemFromArray(numericArray);
// console.log(randomItem); 
  

//STEP 17
// function getLargestNumber(arr) {
//     let largestNumber = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largestNumber) {
//         largestNumber = arr[i];
//       }
//     }
//     return largestNumber;
//   }
  
 
// let numericArray = [4, 8, 2, 9, 3, 7, 1, 6, 5];
// let largestNumber = getLargestNumber(numericArray);
// console.log(largestNumber); 
  