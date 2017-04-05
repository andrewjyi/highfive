import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollArea from 'react-scrollbar';
import ScrollbarWrapper from 'react-scrollbar';
import ReactDOM from 'react-dom';
import { submitTitle } from '../../actions/company';

class InterviewFormMid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      jobTitle: value,
    });
  }

  handleSubmit(event) {
    this.props.submitTitle(this.state);
    event.preventDefault();
  }

  renderAll() {
    return (
      <div>
      <div>
        <div>
          <div>MID-Level</div>
          <Form horizontal onSubmit={this.handleSubmit}>
            <br />
            <FormGroup>
              <Col componentClass={ControlLabel} sm={1}>
                JobTitle
        </Col>
              <Col sm={4}>
                <FormControl name="name" type="text" value={this.state.jobTitel} onChange={this.handleChange} />
              </Col>
            </FormGroup>
          </Form>
          <div className="spaceQ"></div>
          <h3>Select 3-5 Algorithm Questions</h3>
          <div className="scroll">
            <div className="questions" >
          {this.props.companyProfile.questions.map((item, idx) => {
            if (item.type === 'algorithm' && item.level === this.props.companyProfile.level){
            return (
              <div key={idx}>{item.question}</div>
           )}
          })
        }
            </div>
          </div>
          <div className="spaceQ"></div>
          <h3>Select 3-5 System Design Questions</h3>
          <div className="scroll">
            <div className="questions" >
          {this.props.companyProfile.questions.map((item, idx) => {
            if (item.type === 'data structure' && item.level === this.props.companyProfile.level){
            return (
              <div key={idx}>{item.question}</div>
           )}
          })
        }
        </div>
        </div>
          <div className="spaceQ"></div>
          <h3>Select 3-5 System Behavioral Questions</h3>
           <div className="scroll">
            <div className="questions" >
          {this.props.companyProfile.questions.map((item, idx) => {
            if (item.type === 'behavioral' && item.level === this.props.companyProfile.level){
            return (
              <div key={idx}>{item.question}</div>
           )}
          })
        }
          </div>
         </div>
        </div>
      </div>
    </div>
    )
  }

  render(){
    return (
    <div>{this.renderAll()}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitTitle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormMid);