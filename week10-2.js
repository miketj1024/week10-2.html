function addData() {
    // Get input values from form
    var number = document.getElementById("number").value;
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var handle = document.getElementById("handle").value;
    // Get table reference
    var table = document.getElementById("myTable");
  
    // Insert new row at the end of the table
    var row = table.insertRow(-1);
  
    // Insert new cells in the row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    // Add values to the cells
    cell1.innerHTML = number;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = handle;
  
    // Clear input fields
    document.getElementById("name").value = " ";
    document.getElementById("age").value = " ";
    document.getElementById('lastname').value = ' ';
    document.getElementById('handle').value = ' ';
  }
  