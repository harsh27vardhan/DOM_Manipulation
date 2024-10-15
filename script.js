const container = document.querySelector(".container");
const rows = document.querySelector("#rows");
const cols = document.querySelector("#cols");
const submit = document.querySelector("#submit");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const rowsNum = parseInt(rows.value);
    const colsNum = parseInt(cols.value);
    if(rowsNum==0 || colsNum==0 || isNaN(rowsNum) || isNaN(colsNum)){
        alert("Please Enter valid Inputs!")
    }
    else{
        console.log(rowsNum,colsNum);
        const newTable = document.createElement("table");
        for(let i=0;i<rowsNum;i++){
            const newRow = document.createElement("tr");
            for(let j=0;j<colsNum;j++){
                const newCol = document.createElement("td");
                newCol.innerText = "explorin";
                newRow.append(newCol);
            }
            newTable.append(newRow);
        }
        container.append(newTable);
    }
})