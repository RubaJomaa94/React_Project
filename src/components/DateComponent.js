import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

// import css files
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DateComponentStyling.css';

class DatePickerComponent extends React.Component {
  constructor (props) {
    super(props);

    this.childStartDate = moment();
    this.childEndDate = moment();
    this.changeStartDateFromChild = this.changeStartDateFromChild.bind(this);
    this.changeEndDateFromChild = this.changeEndDateFromChild.bind(this);
  }

  changeStartDateFromChild = (startDate) =>
  {
    this.childStartDate = startDate;
    this.props.fromDateToggle(this.childStartDate);
  }

  changeEndDateFromChild = (endDate) =>
  {
    this.childEndDate = endDate;
    this.props.toDateToggle(this.childEndDate);
  }

  render() {
    return(
      <div className="DatePickerDiv form-group">
          <p>
            <label className="fromDateLabel"> First Date: </label>
             <DatePicker className="form-control"
              selected={this.childStartDate}
              onChange={this.changeStartDateFromChild}
              className="FromDate"
            />
          </p>

          <p>
            <label> Second Date: </label>
             <DatePicker
              selected={this.childEndDate}
              onChange={this.changeEndDateFromChild}
              className="ToDate"
            />
          </p>
      </div>
    );
  }
}

export default DatePickerComponent;
