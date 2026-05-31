document.addEventListener("DOMContentLoaded", (e) => {
  fetch('Data.json')
  .then(response => response.json())
  .then(data => {
    // Now you can use the data to populate your HTML
    document.getElementById('output').innerText = data.name;
  })
  .catch(error => console.error('Error loading JSON:', error));
});
// Tab switching
function openTab(evt, tabName, group = 'tab') {
const tabcontent = document.getElementsByClassName(group + "content");
for (let i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
const tablinks = document.getElementsByClassName(group + "links");
for (let i = 0; i < tablinks.length; i++) {
tablinks[i].classList.remove("active");
}
const tab = document.getElementById(tabName);
if (tab) {
tab.style.display = "block";
evt.currentTarget.classList.add("active");
}
}
let AssessmentContentData = {};
async function loadData() {
try {
const response = await fetch('Data.json');
const data = await response.json();
// Map Data.json structure to UI
AssessmentContentData = {
'General_ACR': data.General_ACR,
'Trauma_ACR': data.Trauma_ACR,
'Respiratory_ACR': data.Respiratory_ACR,
'Refusal_ACR': data.Refusal_ACR,
};
// Initialize default tab after data loads
attachCopyListeners();
document.getElementById("defaultOpen").click();
} catch (error) {
console.error('Error loading Data.json:', error);
}
} 
// Display data with copy functionality
function displayArray(obj, container) {
container.innerHTML = '';
Object.entries(obj).forEach(([key, value]) => {
if (typeof value === 'object' && value !== null) {
const header = document.createElement('strong');
header.textContent = key;
container.appendChild(header);
displayArray(value, container);
} else {
const sanitizedKey = key.replace(/[^a-zA-Z0-9]/g, '');
const itemDiv = document.createElement('div');
itemDiv.innerHTML = `${key}:<br><button class="copy-btn" data-key="${sanitizedKey}">Copy</button><input type="text" id="input-${sanitizedKey}" value="${value}">`;
container.appendChild(itemDiv);
}
});
}  
// Copy to clipboard
function attachCopyListeners() {
document.querySelectorAll('.copy-btn').forEach(btn => {
btn.removeEventListener('click', handleCopy);
btn.addEventListener('click', handleCopy);
});
}  
function handleCopy() {
const key = this.dataset.key;
const input = document.getElementById(`input-${key}`);
if (input) {
input.select();
navigator.clipboard.writeText(input.value);
}
}  
function updateAncestorPanelHeights(panel) {
// Walk up the DOM tree and update each ancestor panel
let current = panel.parentElement;            
while (current) {
// Find the closest ancestor panel
let ancestorPanel = current.closest(".panel");
if (!ancestorPanel) break;                
// Update it
ancestorPanel.style.maxHeight = ancestorPanel.scrollHeight + "px";               
// Move to next level up
current = ancestorPanel.parentElement;
}
}   
function openAccordion(evt, group = 'accordion') {
const currentAccordion = evt.currentTarget;
const currentPanel = currentAccordion.nextElementSibling;
const wasActive = currentAccordion.classList.contains("active");
// Only target accordion buttons within the same immediate parent container.
// This allows nested accordions to function independently.
const container = currentAccordion.parentElement;
const accordions = Array.from(container.children).filter(el => el.classList.contains(group));
// Close all sibling accordions in this container
accordions.forEach((accordion) => {
accordion.classList.remove("active");
const panel = accordion.nextElementSibling;
if (panel) {
panel.style.maxHeight = null;
}
});
// Re-open the clicked accordion if it was not already active
if (!wasActive) {
currentAccordion.classList.add("active");
if (currentPanel) {
currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
// Update ancestor panels immediately and multiple times to catch all transitions
updateAncestorPanelHeights(currentPanel);
setTimeout(() => updateAncestorPanelHeights(currentPanel), 50);
setTimeout(() => updateAncestorPanelHeights(currentPanel), 150);
setTimeout(() => updateAncestorPanelHeights(currentPanel), 300);
}
} else {
// If closing the accordion, collapse it
if (currentPanel) {
currentPanel.style.maxHeight = null;
// Update ancestor panels after closing
updateAncestorPanelHeights(currentPanel);
setTimeout(() => updateAncestorPanelHeights(currentPanel), 50);
setTimeout(() => updateAncestorPanelHeights(currentPanel), 150);
}
}
}        
// Show assessment content from loaded Data.json
function showAssessmentContent(event, category) {
event.preventDefault();            
// Update content area
const contentArea = document.getElementById('AssessmentContentArea');
contentArea.innerHTML = '';          
// Display the data using the displayArray function
if (AssessmentContentData[category]) {
displayArray(AssessmentContentData[category], contentArea);
}
// Re-attach copy listeners to newly created buttons
attachCopyListeners();          
// Update active menu item styling
const menuLinks = document.querySelectorAll('#AssessmentMenu li a');
menuLinks.forEach(link => {
link.classList.remove('active');
});
event.target.classList.add('active');
}       
function filterAssessmentMenu() {
const input = document.getElementById('AssessmentSearch');
const filter = input.value.toUpperCase();
const ul = document.getElementById('AssessmentMenu');
const li = ul.getElementsByTagName('li');           
for (let i = 0; i < li.length; i++) {
const a = li[i].getElementsByTagName('a')[0];
if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
li[i].style.display = '';
} else {
li[i].style.display = 'none';
}
}
}       
// Load data when page loads
window.addEventListener('DOMContentLoaded', loadData);