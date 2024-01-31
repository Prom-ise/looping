function checkEvenOrOdd() {
    const numberInput = document.getElementById('numberInput').value;
    const answer = document.getElementById('answer');
  
    // Check if the input is a valid number
    if (isNaN(numberInput) || numberInput === '') {
      answer.innerHTML = 'Please enter a valid number.';
      return;
    }
  
    const number = parseInt(numberInput);
  
    // Check if the number is even or odd
    if (number % 2 === 0) {
      answer.innerHTML = number + ' is even.';
    } else {
      answer.innerHTML = number + ' is odd.';
    }
  }
  

  function checkDivisibility() {
    const numberInput = document.getElementById('numberInput').value;
    const show = document.getElementById('show');
  
    
  
    // Check if the number is divisible by 3, 5, or both
    if (number%3==0 && number% 5==0) {
      show.innerHTML = 'FizzBuzz';
    } else if (number%3==0 ) {
      show.innerHTML = 'Fizz';
    } else if (number%5==0) {
      show.innerHTML = 'Buzz';
    } else {
      show.innerHTML = 'The number is neither divisible by 3 nor 5.';
    }
  }
  