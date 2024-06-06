//theme-toggle


const toggleButton = document.getElementById('toggle-theme'); 

// console.log(document.body.getAttribute('data-theme'));

toggleButton.textContent = document.body.getAttribute('data-theme');

// toggleButton.textContent = currentTheme
  
function toggleTheme() {
  const body = document.body; 
  const currentTheme = body.getAttribute('data-theme'); 
  toggleButton.textContent = currentTheme; 

  const newTheme = currentTheme === 'Light' ? 'Dark' : 'Light';
  

  if (newTheme === 'Dark') {
    toggleButton.style.color = "black";
    toggleButton.style.backgroundColor = "white"; 
  } else {
    toggleButton.style.backgroundColor = "black";
    toggleButton.style.color = "white";


  }
  
  body.setAttribute('data-theme', newTheme);
}

//event listener for toggle theme

toggleButton.addEventListener('click', toggleTheme);

// Additional setup to ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
});