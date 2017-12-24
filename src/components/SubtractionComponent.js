import React, { Component } from 'react';
import moment from 'moment';

//import css files here
import '../css/SubButtonStyling.css';

class Subtract extends Component
{
  constructor(props)
  {
    super(props);
    this.result = null;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    var startDate = moment(this.props.fromDate).format("YYYY/MM/DD");
    var endDate = moment(this.props.endDate).format("YYYY/MM/DD");
    if(startDate == null || endDate == null )
    {
      alert("please select Both Dates");
    }
    else if (startDate == endDate)
    {
      alert("You Entered The Same Dates, Please Select Different Dates");
    }
    else
    {
      if (startDate > endDate)
      {
        var numberOfDays = moment(this.props.fromDate).diff(this.props.endDate, 'days');
      }
      else if (startDate < endDate)
      {
        var numberOfDays = moment(this.props.endDate).diff(this.props.fromDate, 'days');
      }
      alert("the result is " + numberOfDays);
    }
  }
  render()
  {
    return (
      <div className="SubButton">
        <button className=".btn-primary" onClick={this.handleClick} > Find Difference </button>
      </div>
    );
  }
}

export default Subtract;
