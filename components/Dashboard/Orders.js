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
import axios from 'axios';

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
  export default function Orders() {
    const [music, setMusicData]=useState([]);
    const authToken = localStorage.getItem('x-auth-token');

    const [Forms, setForms] = useState([
     { 
      name : "",
      description : "",
      
      createdAt: "",
      file_path : ""
     },
    ])

    useEffect(async ()=>{
      // setForms(props.musicData);
      loadData();
      // setOrgForms(music);

      
    }, [])
    const setOrgForms=(data)=>{
      setForms(data);
    }
    const deleteData =(id) =>{
    console.log("🚀 ~ file: Orders.js ~ line 67 ~ deleteData ~ id", id)
      
     
      axios.post('http://localhost:9000/api/v1/deletemymusic', {id}, {
        headers:{
          'x-auth-token' : authToken
        }
      })
      .then((response, error)=>{
      console.log("🚀 ~ file: Orders.js ~ line 71 ~ .then ~ response", response)
        
        if(response.success)
        {
          loadData();
        }
      })
      .catch((error)=>{

      })
    }

    const loadData = ()=>{
      



      
        axios.get('http://localhost:9000/api/v1/getmymusic', {
          headers: {
            'x-auth-token' : authToken
          }
        })
        .then((response, error)=>{
        // console.log("🚀 ~ file: Dashboard.js ~ line 139 ~ .then ~ error", error)
        // console.log("🚀 ~ file: Dashboard.js ~ line 139 ~ .then ~ response", response)
    
        setMusicDataFunction(response.data.musicData);
       
    
        
          
        })
        .catch((error)=>{
        // console.log("🚀 ~ file: Dashboard.js ~ line 144 ~ useEffect ~ error", error)
    
        })
      
      }
      const setMusicDataFunction = (data) =>{
        // setMusicData(data);
        setForms(data);
        
    }
    



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
          { title: "Title", field: "name" },
          { title: "Description", field: "description" },
          { title: "Date Uploaded", field: "createdAt" },
        ]}

        style = {{padding: '1.3rem', background: 'rgba(247, 202, 24, 0.2)'}}
        actions={[
          {
            icon: () => <DeleteOutline />,
            tooltip: 'Delete',
            onClick: async (event, rowData) => {
              console.log("🚀 ~ file: Orders.js ~ line 147 ~ onClick: ~ rowData", rowData.file_path)
              // let start = rowData.tableData.id
              
              await deleteData(rowData.file_path);
              // Forms.splice(start,1)
              // setForms(Forms)
            }
          },
          
        ]}
      />
    
    )


  }   