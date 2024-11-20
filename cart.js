document.addEventListener('DOMContentLoaded', () => {
    const decrementButtons = document.querySelectorAll('.decrement');
    const incrementButtons = document.querySelectorAll('.increment');
  
    decrementButtons.forEach(button => {
      button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        const value = parseInt(input.value, 10) || 0;
        const min = parseInt(input.min, 10) || -Infinity;
  
        if (value > min) input.value = value - 1;
      });
    });
  
    incrementButtons.forEach(button => {
      button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const value = parseInt(input.value, 10) || 0;
        const max = parseInt(input.max, 10) || Infinity;
  
        if (value < max) input.value = value + 1;
      });
    });
  });
  