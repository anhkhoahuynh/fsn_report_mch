import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import jsonFile from "./temp.json";
import ReactDOM from 'react-dom';

var password = "VinhHao";
while (k !== password) {
var k = prompt("Nhập mật khẩu");
if(k===password){alert('Mật khẩu đúng, nhấn Ok để tiếp tục')}
else if (k !== password) {
  alert("Sai mật khẩu! Hihi");
  }
}
  
function App() {
  const [tableData, setTableData] = useState(
    jsonFile
  )
  const columns = [
    { title: "Ngày", field: "Site", sorting: true},
    { title: "Tuần", field: "Product" },
    { title: "Tháng", field: "Parameter"},
    { title: "Năm", field: "Temperature"},
    { title: "Tên SP/NVL/BB", field: "Duration"},
    { title: "Nhóm mối nguy", field: "Trung_bình", grouping: false },
    { title: "Mối nguy", field: "Mode", grouping: false },
    { title: "Lỗi", field: "Median", grouping: false },
    { title: "Giới hạn chấp nhận", field: "Min", grouping: false },
    { title: "Kết quả", field: "Max", grouping: false },
    { title: "Nước xuất xử", field: "Shapiro-Wilk test", grouping: false },
    //{ title: "Cp", field: "Cp", grouping: false },
    //{ title: "Cpk", field: "Cpk", grouping: false },
    { title: "Thị trường", field: "%Retention", grouping: false },
    { title: "Link gốc", field: "%_seperative_reduction", grouping: false }
  ]
  return (
    <div className="App">
      <div className='abc'>
        <h1 align="center">Shelf-life report</h1>
        <h2 align="center">QA MCH</h2>
      </div>
      <MaterialTable columns={columns} data={tableData}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [25, 50, 100], pageSize: 50,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", actionsColumnIndex: -1, selection: false, index :true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#006600",color:"white"}
        }}
        title="Search" />
        <h4>By Huynh Anh Khoa</h4>
    </div>
  );
}

export default App;
