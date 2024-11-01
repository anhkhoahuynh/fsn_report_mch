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
    { title: "Ngày", field: "Ngày", sorting: true},
    { title: "Tuần", field: "Tuần" },
    { title: "Tháng", field: "Tháng"},
    { title: "Năm", field: "Năm"},
    { title: "SP/NVL/BB", field: "Tên SP/NVL/BB"},
    { title: "Nhóm_mối_nguy", field: "Nhóm_mối_nguy"},
    { title: "Mối_nguy", field: "Mối_nguy" },
    { title: "Lỗi", field: "Lỗi"},
    { title: "Giới_hạn_chấp_nhận", field: "Giới_hạn_chấp_nhận", grouping: false },
    { title: "Kết_quả", field: "Kết_quả" },
    { title: "Nước_xuất_xử", field: "Nước_xuất_xử},
    { title: "Thị_trường", field: "Thị_trường"},
    { title: "Link_gốc", field: "Link_gốc", grouping: false }
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
