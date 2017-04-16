import request from 'superagent';
var React = require('react');
var Dropzone = require('react-dropzone');
const axios = require('axios');
const ReactDOMServer = require('react-dom/server');
import { Component } from 'react';
import { updatePicture } from '../../actions/company';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const componentConfig = {
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview">
      <div className="dz-details">
        <div className="dz-filename"><span data-dz-name></span></div>
        <img data-dz-thumbnail />
      </div>
      <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress></span></div>
      <div className="dz-success-mark"><span>✔</span></div>
      <div className="dz-error-mark"><span>✘</span></div>
      <div className="dz-error-message"><span data-dz-errormessage></span></div>
    </div>
  )
}

class myDropzone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
    this.onDrop = this.onDrop.bind(this)
    this.onSending = this.onSending.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {

    //console.log('Accepted files: ', acceptedFiles);
    //console.log('Rejected files: ', rejectedFiles);

    let upload = request.post('https://api.cloudinary.com/v1_1/dyggshpma/image/upload')
      .field('upload_preset', 'oqjbm809')
      .field('file', acceptedFiles[0])

    upload.end((err, response) => {
      if (err) {
        //console.error(err)
      } else {
        //console.log(response.body.secure_url)
        this.props.updatePicture({ profile_img: response.body.secure_url, companyId: this.props.companyProfile.companyReload[0].id })
      }
    })
  }
  onSending(file) {
    // Show the total progress bar when upload starts
    this.totalProgress.style.opacity = "1";
    // And disable the start button
    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
  }

  render() {
    //console.log('this.props in dropzone', this.props.companyProfile.companyReload[0].id)
    return (
      
        <Dropzone onDrop={this.onDrop} config={componentConfig}>
         <form action="/api/upload" className="dropzone dz-progress"><span className="dz-upload" data-dz-uploadprogress id="dropzone"></span>
                <div className="dz-default dz-message text-center">
                    <i className="fa fa-cloud-upload fa-4x"></i></div>         
                    </form>
          <div>Drag and drop a picture here, or click to select files to upload.</div>
        </Dropzone>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePicture }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(myDropzone);
