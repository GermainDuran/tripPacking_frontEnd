import React, { Fragment } from 'react'
import { addBelonging } from '../actions/belongingActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'bk5k3eqw';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ddhavygkh/image/upload';

 class NewBelongingForm extends React.Component {


  state = {
    name: '',
    image: '',
    uploadedFileCloudinaryUrl: ''

  
  }

   handleChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state.name)
    // console.log(this.state.image)
  }

  handleSubmit = (event) => {
   event.preventDefault()

    const { userId, tripId, suitcaseId } = this.props.match.params
    // if (this.state.editing === false) {

    this.props.addBelonging(this.state.name, this.state.uploadedFileCloudinaryUrl, userId, tripId, suitcaseId)
    this.setState({
      name: '',
      uploadedFileCloudinaryUrl: ''
    }) // reset form fields



 }
/////
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    console.log(this.state.uploadedFile,"Vene2 mierco")

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }


/////
   render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row" style={{align: 'center'}} >
          <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              accept="image/*"
              multiple={false}>
              {({getRootProps, getInputProps}) => {
                return (
                  <div
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {
                      <p className="btn waves-effect waves-light #f44336 red" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>Click here to choose photo</p>
                    }

                  </div>
                )
              }}
            </Dropzone>
            <div className="input-field col s6" style={{align: 'left'}} >
              <input onChange={this.handleChange} placeholder="Belonging Name/Description..." name="name" id="belonging_name" type="text" value={this.state.name} autoComplete="off" required/>
            </div>
            <br></br>
        {/*  <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Image Url..." name="image" id="belonging_image" type="file" value={this.state.image} autoComplete="off" />*/}
            <div className="submit-btn">
              <button type="submit" className="btn waves-effect waves-light" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
              <i className="material-icons right">send</i>   add belonging
              </button>
          {/*  <div>
              </div>
            </div>*/}
          </div>
        </form>

      </Fragment>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addBelonging: (name, image, userId, tripId, suitcaseId) => dispatch(addBelonging(name, image, userId, tripId, suitcaseId)),

  }
}
 export default withRouter(connect(null, mapDispatchToProps)(NewBelongingForm))
