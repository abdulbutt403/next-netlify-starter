import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ScrollAnimation } from 'react-animate-on-scroll';
import axios from 'axios';
// import fs from 'fs';
// const fs = require('file-system')






const useStyles = makeStyles((theme) => ({
  form: {
    display : 'flex',
    flexDirection : 'column',  
    marginTop: 100,
    width: '100ch',
  },
  button: {
    margin: theme.spacing(3),
    width: '12ch',
  },

}));


export default function Form() {
  const [music, setMusic] = useState('');
  // const [filename, setFileName] = useState('');
  const [musicDetail, setMusicDetail]=useState({
    name : "",
    description: "",
    artist : "",
   
  })

  

  const [errorMessage, seterrorMessage] =  useState("")
  const classes = useStyles();
  let orgfile;
    // const handleInput = (event) =>{
    //   setMusic(event.target.files[0]);


      
    // }

    const onInputChange = event => {
      const { name, value } = event.target;
          // console.log("🚀 ~ file: register.js ~ line 21 ~ Register ~ value", value)
    
          setMusicDetail({
        ...musicDetail,
        [name]: value
      });
      };

    const uploadMusic = (event) =>{
      event.preventDefault();
      const authToken = localStorage.getItem('x-auth-token');
      let formData = new FormData();

        formData.append("file",music);
        formData.append("name",musicDetail.name )
        formData.append("description",musicDetail.description )

        // console.log("🚀 ~ file: Form.js ~ line 66 ~ uploadMusic ~ music", music)
        // console.log("🚀 ~ file: Form.js ~ line 66 ~ uploadMusic ~ formData", formData)

        
        
        
        
      
      axios.post('http://localhost:9000/api/v1/newmusic',  formData,  {
        headers: {
          'x-auth-token' : authToken
        }
      })
      .then((response, error)=>{
        console.log("🚀 ~ file: Form.js ~ line 76 ~ .then ~ response", response)
        // setFileName(response.data.name);
        // createMusic(response.data.name);
      })
      .catch((error)=>{
      console.log("🚀 ~ file: Form.js ~ line 81 ~ uploadMusic ~ error", error)

      })



    }

    // const setFile = (name) => {
    //   setFileName('/public/music'+name);
    // }
    const onMusicInputChange =(event)=>{
      console.log(event.target.files[0])
      setMusicfile(event.target.files[0]);
      orgfile=event.target.files[0];
  
  
  
  
  
  
    }

  
  

 const setMusicfile =(ab)=>{
   setMusic(ab);
 }

  return (
    <div className="d-flex justify-content-center align-items-center p-3 register-main music">
    <form onSubmit ={uploadMusic} className={classes.form}  autoComplete="off" >
         <div className="row"> 
                        <div className="col-lg-12"> 
                            <div className="section-title" style={{marginTop: '-20px'}}> 
                                    <h2>Upload Music</h2>
                                </div>
                        </div>
                    </div>

                              <div class="form-group">
                                    <input type="text" class="form-input" name="name" id="name" placeholder="Title" onChange={onInputChange}  value={musicDetail.name}/>
                                </div>
         
                                <div class="form-group">
                                    <input type="text" class="form-input" name="description" id="description" placeholder="Description" onChange={onInputChange}  value={musicDetail.description}/>
                                </div>


                                <input type="file" name="music_file" onChange={onMusicInputChange} />
                              

                                <div class="form-group">
                                    <input type="submit" name="submit" id="submit" class="form-submit" value="Submit"/>
                                </div>

                                <br/>
                            <p className="form-error">{errorMessage}</p>
             
 
    </form>
    </div>
  );
}