import React from "react";

const ApprovalCard = ({ component }) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          { component }
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
};

export default ApprovalCard;
