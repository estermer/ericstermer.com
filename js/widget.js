var xhr = new XMLHttpRequest();//create xmlhttprequest object

//create onsteadystatechange callback function
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200){
    var employees = JSON.parse(xhr.responseText);
    var employeeListDiv = document.getElementById('employeeList');
    var statusHTML = document.createElement('ul');
    statusHTML.classList.add('bulleted');
    employeeListDiv.appendChild(statusHTML);
    console.log(employeeListDiv);
    
    for (var i = 0; i < employees.length; i++){
      
      //create <li> element for the first employee
      var employee = document.createElement('li');
      var employeeName = document.createTextNode(employees[i]["name"]);
      employee.appendChild(employeeName);
      
      
      if(employees[i]["inoffice"]){
      //add <li class="in">
        employee.classList.add('in');
      }else{
      //add <li class="out">
        employee.classList.add('out');
      }
      
      //append <li> element to <ul>
      statusHTML.appendChild(employee);
    }
    
  }
};

//open and send request
xhr.open('GET', 'data/employees.json');
xhr.send();//*/


//Solution: Post a List of Employees in the sidebar with their work status

//send a request to the JSON data of employees

//create a <ul class="bulleted"> of those employees
