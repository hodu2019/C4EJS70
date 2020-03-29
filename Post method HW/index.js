const context = {
    employees: null,
  };
  
  window.onload = async () => {
    await getEmployees();
    renderEmployees();
    clickEmp();
    createEmp();
  }
  
  const getEmployees = async () => {
    const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const employees = await res.json();
    context.employees = employees;
  }
  
  const renderEmployees = () => {
    context.employees.forEach((employee, i) => {
      let li = `
        <li >
          <span id="emp_${i}">${employee.employee_name}</span>
        </li>
      `;
      let ul = document.getElementById('ul_users');
      ul.innerHTML += li;
    })
  };
  
  const clickEmp = () => {
    for (let i = 0; i < context.employees.length; i++) {
      const eachEmp = context.employees[i];
      const employeeName = document.getElementById(`emp_${i}`);
      const salaryDisplay = document.getElementById('salary');
      employeeName.addEventListener('mouseover', () => {
        salaryDisplay.innerHTML = '';
        salaryDisplay.innerHTML += `
        <span>${eachEmp.employee_salary}</span>
        `
      });
    }
  }
  
  const createEmp = () => {
    const btnCreate = document.getElementById('create');
    btnCreate.addEventListener('click', () => {
      fetch(
        'http://dummy.restapiexample.com/api/v1/create',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",                                                                                                
            "Access-Control-Origin": "*"
          },
          body: JSON.stringify(
            {
              "name":"QUAN",
              "salary":"2000",
              "age":"23",
            }
          )
        }
      )
    })
    const req = fetch(
      'http://dummy.restapiexample.com/api/v1/create',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",                                                                                                
          "Access-Control-Origin": "*"
        },
        body: JSON.stringify(
          {
            "name":"QUAN",
            "salary":"2000",
            "age":"23",
          }
        )
      }
    )
  }