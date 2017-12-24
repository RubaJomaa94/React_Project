import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DatePickerComponent from './components/DateComponent';
import Subtract from './components/SubtractionComponent';

//import css files here
import './App.css';



class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      startDate : moment(),
      endDate : moment()
    };
    this.CallBackForStartDate = this.CallBackForStartDate.bind(this);
    this.CallBackForEndDate = this.CallBackForEndDate.bind(this);
  }

  CallBackForStartDate = (startDateFromDatePicker) => {
    this.setState({startDate: startDateFromDatePicker});
  }

  CallBackForEndDate = (endDateFromDatePicker) => {
    this.setState({endDate: endDateFromDatePicker });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Dates Subtractor
        </header>
        <p>
        Select Two Dates and Find the Difference between them in days
        <br/>
        <br/>
        <DatePickerComponent
        fromDateToggle={this.CallBackForStartDate}
        toDateToggle= {this.CallBackForEndDate}
        startDateValue={this.state.startDate}
        endDateValue={this.state.endDate}
        />

        </p>
        <p>
          <Subtract fromDate={this.state.startDate} endDate={this.state.endDate}/>
        </p>
      </div>
    );
  }
}

export default App;
