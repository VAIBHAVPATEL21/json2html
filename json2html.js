// Exporting the function as a module
export default function json2html(data) {
    // Start the table with the data-user attribute
    let html = '<table data-user="vaibhavpatel21072004@gmail.com">';
    
    // Add table headers
    html += '<thead><tr>';
    // Extract the keys from the first object to create the header row
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    
    // Add table body
    html += '<tbody>';
    // Loop through each object in the data array and create a table row for each
    data.forEach(item => {
      html += '<tr>';
      headers.forEach(header => {
        html += `<td>${item[header] || ''}</td>`;  // In case a key is missing, add an empty cell
      });
      html += '</tr>';
    });
    html += '</tbody>';
    
    // Close the table
    html += '</table>';
    
    // Return the generated HTML string
    return html;
  }
  