// paste in the console of the page inspector 
// generated using gpt-4o-mini in https://duck.ai/

// Create a new div element for the summary
var summaryDiv = document.createElement('div');
var toggleButton = document.createElement('button');

// Set attributes for styling the summary
summaryDiv.style.position = 'fixed';
summaryDiv.style.top = '10px';
summaryDiv.style.right = '10px';
summaryDiv.style.backgroundColor = 'white';
summaryDiv.style.border = '1px solid #ccc';
summaryDiv.style.padding = '10px';
summaryDiv.style.zIndex = 1000;

// Create the summary title
summaryDiv.innerHTML = '<h2>Summary</h2><ul></ul>';
var summaryList = summaryDiv.querySelector('ul');

// Select all h3 elements
var headers = document.querySelectorAll('h3.h');

// Iterate over each h3 element to create links
headers.forEach(function(header) {
    var id = header.id; // Get the ID of the h3 element
    var spans = header.getElementsByTagName('span');
    var lastSpanText = spans[spans.length - 1]?.textContent; // Get text from the last span

    // Create an anchor element
    if (id && lastSpanText) {
        var listItem = document.createElement('li');
        var anchor = document.createElement('a');
        
        anchor.href = '#' + id; // Set the href to the ID
        anchor.textContent = lastSpanText; // Set the link text
        listItem.appendChild(anchor); // Append the anchor to the list item
        summaryList.appendChild(listItem); // Append the list item to the summary list
    }
});

// Add toggle button to show/hide the summary
toggleButton.textContent = 'Hide Summary';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = 'calc(10px + 100px)'; // Position next to the summary
toggleButton.style.zIndex = 1001; // Ensure button is above all elements
toggleButton.onclick = function() {
    if (summaryDiv.style.display === 'none') {
        summaryDiv.style.display = 'block';
        toggleButton.textContent = 'Hide Summary';
    } else {
        summaryDiv.style.display = 'none';
        toggleButton.textContent = 'Show Summary';
    }
};

// Append the summary div and the button to the body of the document
document.body.appendChild(summaryDiv);
document.body.appendChild(toggleButton);
