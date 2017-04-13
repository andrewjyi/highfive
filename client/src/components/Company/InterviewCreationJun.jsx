import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitDescription, saveQuestion, createJobPost } from '../../actions/company';
import InterviewForm from './InterviewForm';
import ReactDOM from 'react-dom';

class InterviewFormJun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      description: value,
    });
  }

  handleSubmit(event) {
    this.props.submitDescription(this.state);
    event.preventDefault();
  }

  renderAll() {
    return (
      <div>
        <div>
          <div>
           <div className="spaceQ"></div>
            <h3>Junior Software Engineer</h3>
            <Form horizontal onSubmit={this.handleSubmit}>
              <br />
              <FormGroup>
                <Col componentClass={ControlLabel} sm={1}>
                  Description
                </Col>
                <Col sm={4}>
                  <FormControl name="name" type="text" value={this.state.description} onChange={this.handleChange} onSubmit={()=> this.props.submitDescription(this.state)}/>
                </Col>
              </FormGroup>
            </Form>
            <Button onClick={()=> this.props.createJobPost({company_id: this.props.companyProfile.companyReload[0].id, level: this.props.companyProfile.level, description: this.props.companyProfile.jobDescription.description, industry_id: this.props.companyProfile.companyReload[0].industry_id , location_id: this.props.companyProfile.companyReload[0].location_id } )}>New job position</Button>
            <div className="spaceQ"></div>
            <h3>Select 3-5 Algorithm Questions</h3>
            <div className="scroll">
              <div className="questions" >
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'algorithm' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>
                      <div>
                      {item.title}</div>
                      {item.question}
                      </p>
                    )
                  }
                })
                }
              </div>
            </div>
            <div className="spaceQ"></div>
            <h3>Select 3-5 System Design Questions</h3>
            <div className="scroll">
              <div className="questions">
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'data structure' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>{item.question}</p>
                    )
                  }
                })
                }
              </div>
            </div>
            <div className="spaceQ"></div>
            <h3>Select 3-5 System Behavioral Questions</h3>
            <div className="scroll">
              <div className="questions" >
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'behavioral' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>{item.question}</p>
                    )
                  }
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props, 'INTERVIEWCREATION JUN COMPANYPROFILE');
    return (
      <div>
        <div>{this.renderAll()}</div>
        <div className="spaceQ" />
        <div><InterviewForm /></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitDescription, saveQuestion, createJobPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormJun);