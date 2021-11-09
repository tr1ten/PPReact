import ReactDOM from 'react-dom';
import  App from './App';
import './index.css';
import {MyOrdersProvider} from './context/myorders';
ReactDOM.render(<MyOrdersProvider><App /></MyOrdersProvider>, document.getElementById('root'));
