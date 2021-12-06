import React from "react";

class ApprovalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: props.component,
    }
  }
  render() {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            { this.state.component }
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Decline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ApprovalCard;