import React, { Component } from 'react';
import {Container, Row, Col} from '../../Components/Grid/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './style.css';


// import ImageUploader from 'react-images-upload';
// import {Image} from 'cloudinary-react';


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name: '',
      middle_name: '',
      last_name: '',
      username:'',
      password:'',
      user_pic: '',
      birthdate: '',
      age: '',
      id: '',
      pictures: [],
      imageURL: ''
      // largeImage
    };
    // this.onDrop = this.onDrop.bind(this);
  }

  // For Images in Registration using 
  // import ImageUploader from 'react-images-upload' above
  // onDrop(picture) {
  //   this.setState({
  //       pictures: this.state.pictures.concat(picture),
  //   });
  // }
  

  uploadFile = async e => {
    console.log(`uploading file...`)
    const files = e.target.files;
    console.log("uploadFile - e.target.files: ", e.target.files);
    console.log("uploadFile - files: ", files);
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'safebook');

    const res = await fetch('https://api.cloudinary.com/v1_1/de2ynheeb/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json();
    console.log(file);
    this.setState({
      imageURL: file.secure_url,
      // largeImage: file.eager[0].secure_url
    });
  }


  handleClick(event, topState) {
    // Single user object
    const newUser = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      username:this.state.username,
      password:this.state.password,
      user_pic: this.state.imageURL,
      birthdate: this.state.birthdate,
      age: this.state.age,
      id: this.state.id,
      pictures: [this.state.imageURL]
    }

    console.log("ENTRY to handleClick - newUser: ", newUser);
    // console.log("ENTRY -  handleClick topState: ", topState);
    return topState(newUser);
  }

  render() {
    const {topLevelState} = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div>
          {/* <AppBar
             title="Login"
           /> */}
          {/* <RoboTitle /> */}

          <Container fluid='fluid'>
            <h2 className='myPageTitle'> Registration</h2>
            <Row className='dataEntry'>
              <Col size='md-4' margin='0rem'>
                <TextField
                  hintText="Enter your FIRST name"
                  floatingLabelText="First Name"
                  onChange = {(event,newValue) => this.setState({first_name:newValue})}
                />
              </Col>
              <Col size='md-4'>
                <TextField
                  hintText="Enter your MIDDLE name"
                  floatingLabelText="Middle Name"
                  onChange = {(event,newValue) => this.setState({middle_name:newValue})}
                />
              </Col>
              <Col size='md-4'>
                <TextField
                  // type="password"
                  hintText="Enter your LAST name"
                  floatingLabelText="Last Name"
                  onChange = {(event,newValue) => this.setState({last_name:newValue})}
                />
              </Col>
            </Row>
            <Row >
              <Col size='md-4' margin='2rem' />
              <Col size='md-4' margin='2rem'>
              <input className='pa4'
                type="file" 
                id="file" 
                name="file"
                placeholder="Upload an Image"
                required
                onChange={this.uploadFile} 
                />
                {/* <ImageUploader
                  withIcon={true}
                  withPreview={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                /> */}
              </Col>
              <Col size='md-4' margin='2rem' />
            </Row>
            <Row>
            </Row>
            <Row >
              <Col size='md-4' margin='2rem' />
              <Col size='md-4' margin='2rem' >
                {this.state.imageURL && <img className='pa4' src={this.state.imageURL} alt="Upload Preview" width="200" height='200'/>}
              </Col>
              <Col size='md-4' margin='2rem' />
            </Row>
          </Container>
          <RaisedButton 
            label="Submit"
            // href="/home"
            href="#"
            primary={true}
            style={style}
            onClick={(event) => this.handleClick(event, topLevelState)}
          />
        </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Register;