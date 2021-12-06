import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './CommentDetail';
import ApprovalCard from './ApprovalCard';
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude }}) => console.log(latitude, longitude),
    (error) => console.log(error)
  );
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
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
