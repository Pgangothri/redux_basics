import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {IncAction,DecAction} from './actions';
const App=({local_variable,IncAction,DecAction})=> {
  return (
    <div>
      <center>
       <h1>{local_variable}</h1> 
       <button onClick={()=>IncAction(5)}>Increment</button>
       <button onClick={DecAction}>Decrement</button>
      </center>
    </div>
  );
}
const mapStateToProps=state=>({
  local_variable:state
})
export default connect(mapStateToProps,{IncAction,DecAction})(App);
