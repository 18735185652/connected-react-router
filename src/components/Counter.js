import React from 'react';
import actions from '../store/actions/counter'
import { connect } from 'react-redux';

class Counter extends React.Component{
  
   render(){
    console.log('props',this.props);
        return (
            <div>
                <div>{this.props.number}</div>
                <button onClick={this.props.add }>+</button>
                <button onClick={()=>{this.props.go('/')}}>跳转到/</button>
            </div>
        )
   }
}

export default connect(state=>state.counter,actions)(Counter)