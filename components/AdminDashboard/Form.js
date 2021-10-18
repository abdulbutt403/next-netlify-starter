import React , {useState, useEffect} from 'react' ;

import MaterialTable from "material-table";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  export default function Form() {

    const [Forms, setForms] = useState([
     { 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },
     { 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Badshah",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },{ 
      title : "Vol 1, Yo Yo Honey Singh",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },
     { 
      title : "Bohemia",
      description : "Romantic song",
      Music: "Pure Hip Hop",
      Date_Uploaded: "12/12/12"
     },
    ])

    return (
      <MaterialTable
        icons={tableIcons}
        data= {Forms}
        options={{
          rowStyle: {
            backgroundColor: 'rgba(247, 202, 24, 0.1)',
          },
          actionsColumnIndex: -1
        }}
        title="MUSIC LIST"
        columns={[
          { title: "Title", field: "title" },
          { title: "Description", field: "description" },
          { title: "Music", field: "Music" },
          { title: "Date Uploaded", field: "Date_Uploaded" },
        ]}

        style = {{padding: '1.3rem', background: 'rgba(247, 202, 24, 0.2)'}}
        actions={[
          {
            icon: () => <Edit />,
            tooltip: 'Edit',
            onClick: (event, rowData) => {
              // Do save operation
            }
          },
          {
            icon: () => <DeleteOutline />,
            tooltip: 'Delete',
            onClick: (event, rowData) => {
              let start = rowData.tableData.id
              Forms.splice(start,1)
              setForms(Forms)
            }
          },
          
        ]}
      />
    
    )


  }   