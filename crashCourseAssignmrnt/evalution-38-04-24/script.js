document.addEventListener("DOMContentLoaded", function() {
let filterDept = document.getElementById("filter");
let genderFilter = document.getElementById("gender");
let sortBySalary = document.getElementById("sortBySalary");
let previous = document.getElementById("prev");
let pageNo = document.getElementById("page-no");
let nextPage = document.getElementById("next");
let tBody = document.getElementById("emplyee-table-body");


let currentPage = 1;
let limitPage = 10;
let currentFilterBy = "";
let currentFilterValue = "";
let currentSort = "";
let currentOrder = "";


async function fetchNewApi(){
    const data = await fetchData(currentPage,limitPage,currentFilterBy,currentFilterValue, currentSort, currentOrder);
    displayData(data);
    updatePage();
}

async function fetchData(page,limit,filterBy,filterValue, sort, order){
   try {
let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=${limit}&filterBy=${filterBy}&filterValue=${filterValue}&sort=${sort}&order=${order}`);
    let data = await res.json();
    console.log(data)
   
    return data;
   } catch (error) {
    console.log("error", error);
   
   }
}

function displayData(data){
tBody.innerHTML = "";

data.forEach((ele, i) => {

    let row = document.createElement("tr");
    row.innerHTML =`
    <td>${index + 1}</td>
    <td>${ele.name}</td>
    <td>${ele.gender}</td>
    <td>${ele.department}</td>
    <td>${ele.salary}</td>
    `
    tBody.append(row);
    
    
});

}
function updatePage(){
    pageNo.textContent = `Page ${currentPage}`;
    previous.disabled = currentPage === 1;
}

filterDept.addEventListener("change", function(){
    currentFilterBy = "department";
    currentFilterValue = this.value;
    currentPage = 1;
    fetchNewApi();

});
genderFilter.addEventListener("change", function(){
    currentFilterBy = "gender";
    currentFilterValue = this.value;
    currentPage = 1;
    fetchNewApi();

});
sortBySalary.addEventListener("change", function(){
    currentSort = "salary";
    currentOrder = this.value;
    currentPage = 1;
    fetchNewApi();
});
previous.addEventListener("click", function(){
    if(currentPage > 1){
        currentPage--;
        fetchNewApi();
    }
});
nextPage.addEventListener("click", function(){
    currentPage++
    fetchNewApi();

})
fetchNewApi();

});