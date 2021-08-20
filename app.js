   
// Write a function that extracts a specified number of characters from a string.
// Example: truncate_string("Hello, World",5); // returns "Hello"

const lists = [{
  name: "truncate_string",
  content: function truncate_string(str,n){
      return str.slice(0,n)},
  test: `truncate_string("Hello, World",5) === 'Hello'`,
  output: truncate_string("Hello, World",5) === 'Hello'
  },
  
   {name: "string_parameterize",
  content:function string_parameterize(str){
      return str.toLowerCase().split(" ").join("-")
    },
  test: `string_parameterize("Lorem Ipsum") === 'lorem-ipsum'`,
  output: string_parameterize("Lorem Ipsum") === 'lorem-ipsum'
  },
  
  {name: "sum_of_odd_numbers",
  content: function sum_of_odd_numbers(i,j){
      var sum = 0;
      for (i=i; i <= j; i++) {
        if (i % 2 !== 0) { 
          sum += i;
      }
      }
      return sum;
    }
  ,
  test: `sum_of_odd_numbers(5,20) === 96`,
  output: sum_of_odd_numbers(5,20) === 96
  },
  
    {name: "celcius_to_fahrenheit",
  content:  function celcius_to_fahrenheit(i){
      return Math.round(i * 9/5 + 32);
    }
  ,
  test: `celcius_to_fahrenheit(40) === 104`,
  output: celcius_to_fahrenheit(40) === 104
  },
  
  
   {name: "sum_of_array",
  content:  function sum_of_array(arr){
      var j=0;
      for (var i=0; i<arr.length; i++) {
        j += arr[i];
      } 
      return j;
    }
  ,
  test: `sum_of_array([1,1,2,5,5]) === 14`,
  output: sum_of_array([1,1,2,5,5]) === 14
  },
   
    {name: "mean_of_array",
  content:  function mean_of_array(arr){
      let j=0;
      for (var i=0; i<arr.length; i++) {
        j += arr[i];
      } 
      return j/arr.length;
    }
  ,
  test: `Number.parseFloat(mean_of_array([1,1,2,5,5])).toFixed(1) === '2.8'`,
  output: Number.parseFloat(mean_of_array([1,1,2,5,5])).toFixed(1) === '2.8'
  },
  
   {name: "only_positive",
  content:  function only_positive(arr) {
      
      let j = [];

      for (var i = 0; i < arr.length; i++) {
      if ( arr[i]<0) {
       continue;
     }  
      j.push(arr[i]);
    }
      return j;
    }
  ,
  test: `JSON.stringify(only_positive([1,-1,-2,58,24])) === '[1,58,24]`,
  output: JSON.stringify(only_positive([1,-1,-2,58,24])) === '[1,58,24]'
  },
]



const markup=(lists)=> {
  
  let listsHTML=[];
  
  for (let i=0; i<lists.length; i++) {
    
listsHTML.push(`
  <div class="function">
  <h2><b>Function Name:</b> ${lists[i].name}</h2>
    <h3>Code:</h3>
    <div class="code">
    <pre>
      <code>${lists[i].content}</code>
    </pre>
    <h3><b>Test:</b></h3></div>
    <div class="test">
    <pre>
      <code>${lists[i].test}</code>
    </pre></div>
    <h3><b>Test Result:</b> <div class="review">${lists[i].output}</div></h3>
  </div>`)}
  
  return listsHTML.join("");
    //join here removes comma
}


const main=document.createElement("main");
main.innerHTML=markup(lists);
document.body.appendChild(main);


//functions
function truncate_string(str,n){
 return str.slice(0,n);
  
}
 
 
function string_parameterize(str){
return str.toLowerCase().split(" ").join("-");
  
}

// Calculate the sum of odd numbers greater than X and less than Y.
// Example: sum_of_odd_numbers(1,3) // returns 4
// Example: sum_of_odd_numbers(5,20) // returns 96 

//**pseudocode
//1. IDENTIFY formula for adding up n of consecutive odd numbers when X might not start from 1: X*n+n*(n-1) (uncertain if it's correct)
//2. Find n of consecutive odd numbers taking into account of odd and even scenarios of both X and Y


    function sum_of_odd_numbers_old(i,j) {
      
      let n=0;
      
      (i%2===0 && j%2===0)? n=(j-i)/2 : n=Math.floor((j-i)/2+1);

      return (i*n)+(n-1)*n;
    }
    
//New way using for loop

    function sum_of_odd_numbers(i,j){
      var sum = 0;
      for (i=i; i <= j; i++) {
        if (i % 2 !== 0) { 
          sum += i;
      }
      }
      return sum;
    }


// Create a function that will convert from Celsius to Fahrenheit.
// Example: celsius_to_fahrenheit(40) // returns 104

    function celcius_to_fahrenheit(i){
      return Math.round(i * 9/5 + 32);
    }
    
// Calculate the sum of numbers in an array of numbers.
// Example: sum_of_array([1,1,2]) // returns 4
// Example: sum_of_array([1,1,2,5,5]) // returns 14 


    function sum_of_array(arr){
      var j=0;
      for (var i=0; i<arr.length; i++) {
        j += arr[i];
      } 
      return j;
    }
    
// Calculate the mean of the numbers in an array of numbers (round to the nearest decimal point)
// Example: mean_of_array([1,1,2]) // returns 1.3 
// Example: mean_of_array([1,1,2,5,5]) // returns 2.8

// CHANGED testing section, to_fixed returns a string, also because it's 1 decimal point, to_Fixed (1) vs to_Fixed (2)

    function mean_of_array(arr){
      let j=0;
      for (var i=0; i<arr.length; i++) {
        j += arr[i];
      } 
      return j/arr.length;
    }
    
// Create a function that receives an array of numbers and returns an array containing only the positive numbers.
// Example: only_positive([1,-100,2,-2]) // returns [1,2]
// Example: only_positive([1,-1,-2,58,24]) // returns [1,58,24] 

    function only_positive(arr) {
      
      let j = [];

      for (var i = 0; i < arr.length; i++) {
      if ( arr[i]<0) {
       continue;
     }  
      j.push(arr[i]);
    }
      return j;
    }

    /*
      === TESTS ===
      These will print out "true/false" statements
      in your console so you know if you have the
      correct solution. 
    */
    console.log('Truncate String: ' + (truncate_string("Hello, World",5) === 'Hello'))
    console.log('String Parameterize: ' + (string_parameterize("Lorem Ipsum") === 'lorem-ipsum'))
    console.log('Sum of Odd Num #1: ' + (sum_of_odd_numbers_old(1,3) === 4))
    console.log('Sum of Odd Num #2: ' + (sum_of_odd_numbers_old(5,20) === 96))
       console.log('Sum of Odd Num #1: ' + (sum_of_odd_numbers(1,3) === 4))
    console.log('Sum of Odd Num #2: ' + (sum_of_odd_numbers(5,20) === 96))
    console.log('Celcius: ' + (celcius_to_fahrenheit(40) === 104))
    console.log('Sum of Array #1: ' + (sum_of_array([1,1,2]) === 4))
    console.log('Sum of Array #2: ' + (sum_of_array([1,1,2,5,5]) === 14))
    console.log('Mean of Array #1: ' + (Number.parseFloat(mean_of_array([1,1,2])).toFixed(1) === '1.3'))
    console.log('Mean of Array #2: ' + (Number.parseFloat(mean_of_array([1,1,2,5,5])).toFixed(1) === '2.8'))
    console.log('Only Positive #1: ' + (JSON.stringify(only_positive([1,-100,2,-2])) === '[1,2]'))
    console.log('Only Positive #2: ' + (JSON.stringify(only_positive([1,-1,-2,58,24])) === '[1,58,24]'))