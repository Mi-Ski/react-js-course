import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title={"Persons Manager"}/>, document.getElementById('root'));
registerServiceWorker();

// if (module.hot) {
//    module.hot.accept('./containers/App', () => {
//      const NextApp = require('./containers/App').default
//      ReactDOM.render(
//        <NextApp />,
//       document.getElementById('root')
//      )
//    })
//  }