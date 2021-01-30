import {ADD,MINUS} from '../action-types'
import {push} from 'connected-react-router'
const actions = {
    add(){
        console.log(11);
        return {type:ADD}
    },
    go(targetPath){
        // this.props.history.push(targetPath) 这个文件里面没有history 只能通过push
       console.log('targetPath',targetPath);
        return push(targetPath)
    }
}

export default actions