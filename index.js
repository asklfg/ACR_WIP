document.addEventListener("DOMContentLoaded", (e) => {
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Now you can use the data to populate your HTML
    document.getElementById('output').innerText = data.name;
  })
  .catch(error => console.error('Error loading JSON:', error));
});