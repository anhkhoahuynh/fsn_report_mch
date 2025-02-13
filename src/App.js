import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import jsonFile from "./temp.json";
import ReactDOM from 'react-dom';

var password = "VinhHao";
while (k !== password) {
var k = prompt("Nhập password");
if(k===password){alert('Password đúng, nhấn Ok để tiếp tục')}
else if (k !== password) {
  alert("Sai password! Hihi");
  }
}
  
function App() {
  const [tableData, setTableData] = useState(
    jsonFile
  )
  const columns = [
    { title: "Ngày", field: "Date", sorting: true},
    { title: "Tuần", field: "Week" },
    { title: "Tháng", field: "Month"},
    { title: "Năm", field: "Year"},
    { title: "SP/NVL/BB", field: "Name_of_material"},
    { title: "Nhóm_mối_nguy", field: "Hazard_category"},
    { title: "Mối_nguy", field: "Hazard_name" },
    { title: "Lỗi", field: "Defect"},
    { title: "Giới_hạn_chấp_nhận", field: "Acceptance_level", grouping: false },
    { title: "Kết_quả", field: "Result" },
    { title: "Nước_xuất_xử", field: "Origin_country"},
    { title: "Thị_trường", field: "Market"},
    { title: "Link_gốc", field: "Link", grouping: false,
     render: (rowData: any) => (
        <a
          href={rowData.Link}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          {rowData.Link}
        </a>
      )  }
  ]
  return (
    <div className="App">
      <div className='abc'>
        <h1 align="center">Food safety notification report</h1>
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
