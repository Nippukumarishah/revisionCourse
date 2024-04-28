let filterDept = document.getElementById("depFilter");
let genderFilter = document.getElementById("gender");
let sort = document.getElementById("sortBySalary");

let tBody = document.getElementById("emplyee-table-body");


  let currentPage = 1;
  let flag;
let totalPages;
  async function fetchData(URL) {
    let res = await fetch(URL);
    let data = await res.json();
    totalPages=data.totalPages;
    displayData(data.data);
  }

  fetchData(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10"
  );

  function displayData(arr) {
    tBody.innerHTML = null;
    arr.forEach((ele, i) => {
      let row = document.createElement("tr");
      let sNo = document.createElement("td");
      sNo.innerText = i + 1;
      let name = document.createElement("td");
      name.innerText = ele.name;
      let gender = document.createElement("td");
      gender.innerText = ele.gender;
      let department = document.createElement("td");
      department.innerText = ele.department;
      let salary = document.createElement("td");
      salary.innerText = ele.salary;

      row.append(sNo, name, gender, department, salary);

      tBody.append(row);
    });
  }

  // Filter By Department


  filterDept.addEventListener("change", () => {
    
    flag = false;
    handleDep(filterDept.value);
  });
  function handleDep(value) {
    fetchData(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${currentPage}&limit=10&filterBy=department&filterValue=${value}&sort=salary&order=${sort.value}`
    );
  }

  // Filter By Gender

  genderFilter.addEventListener("change", () => {

    flag = true;
    handleGender(genderFilter.value);
  });

  function handleGender(value) {
    fetchData(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${currentPage}&limit=10&filterBy=gender&filterValue=${value}&sort=salary&order=${sort.value}`
    );
  }


  // Sorting By Salary

  sort.addEventListener("change", () => {
   
    handleSort(sort.value);
  });

  function handleSort(value) {
    fetchData(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${currentPage}&limit=10&sort=salary&order=${value}`
    );
  }

  let previous = document.getElementById("prev");
let nextPage = document.getElementById("next");

  nextPage.addEventListener("click", () => {
    currentPage++;

    if (currentPage <= totalPages && flag == true) {
      fetchData(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${currentPage}&limit=10&filterBy=gender&filterValue=${genderFilter.value}&sort=salary&order=${sort.value}`
      );
      nextPage.disabled = false;
      
    }  else {
      nextPage.disabled = true;
     
    }
  });

  previous.addEventListener("click", () => {
    currentPage--;
    if (currentPage > 0 && flag == true) {
      fetchData(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${currentPage}&limit=10&filterBy=gender&filterValue=${genderFilter.value}&sort=salary&order=${sort.value}`
      );
      previous.disabled = false;
     
    } else {
      previous.disabled = true;
      
    }
  });