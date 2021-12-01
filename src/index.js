import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './CommentDetail';
import ApprovalCard from './ApprovalCard';
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApprovalCard
        component={
          <Comment
            name="Tach"
            text="First comment"
            comments={
              <ApprovalCard
                component={
                  <Comment name="Nick" text="Some comment" />
              }
            />
            }
          />
        }
      />
      <ApprovalCard
        component={
          <Comment name="Nick" text="Some comment" />
        }
      />
      <ApprovalCard
        component={
          <Comment name="Leen" text="Some cool comment" />
        }
      />
      <ApprovalCard
        component={
          <Comment name="Maks" text="Text about" />
        }
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
