// document.getElementById("Submit").addEventListener("click", function (e) {
//     e.preventDefault();
  
//     // Grab values from the form
//     const firstName = document.getElementById("firstName").value.trim();
//     const lastName = document.getElementById("lastName").value.trim();
//     const destination = document.getElementById("destination").value;
//     const location = document.getElementById("location").value;
//     const routes = document.getElementById("routes").value;
//     const description = document.getElementById("description").value;
  
//     // Combine content into a string
//     const content = `Destination: ${destination}\nLocation: ${location}\nRoutes: ${routes}\nDescription: ${description}\n`;
  
//     // Format current date/time as MMDDYY_HHMM
//     const now = new Date();
//     const month = ("0" + (now.getMonth() + 1)).slice(-2);
//     const day = ("0" + now.getDate()).slice(-2);
//     const year = now.getFullYear().toString().slice(-2);
//     const hour = ("0" + now.getHours()).slice(-2);
//     const minute = ("0" + now.getMinutes()).slice(-2);
//     const formattedDate = `${month}${day}${year}_${hour}${minute}`;
  
//     // Create the filename: LastName_FirstName_MMDDYY_HHMM_suggestion.txt
//     const filename = `${lastName}_${firstName}_${formattedDate}_suggestion.txt`;
  
//     // Create a Blob with the text content
//     const blob = new Blob([content], { type: 'text/plain' });
    
//     // Create a download link, set its URL and filename, then trigger the download
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   });

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission
  
    // Hide form
    document.getElementById("form").style.display = "none";
  
    // Show confirmation message
    document.getElementById("confirmation-message").style.display = "flex";
  });