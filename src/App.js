import React,{Component, Fragment}from 'react';
import Login from './components/Login/index'
// import AntdLolist from './AntdTodoList/index';
// import AnswerArea from './AnswerArea/index';
// import TodoList from './TodiList/TodoList';
// import ActionApp from './ActionApp/index';
// import Flexbox from './Flexbox/index';
// import GuokaiBlog from './GuokiaBlog/index';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      answernum: 5,
      isHidden: 0,
      isChoose:true,
    };
    this.handleClicknum = this.handleClicknum.bind(this);
  }
  render(){
  return (  
   <Fragment>
       {/* <button onClick = {this.handleClicknum.bind(this,'null')}>清空</button>
       <button onClick = {this.handleClicknum.bind(this, 2)}>2个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 3)}>3个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 4)}>4个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 5)}>5个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 6)}>6个选项</button> */}
      {/* <p>选择的项目个数 : {this.state.answernum}</p> */}
      {/* <TodoList/> */}
      {/* <AnswerArea 
         optionsCount ={this.state.answernum}
         onClickHideButton = {this.isHidden}
         enbleChoose = {this.state.isChoose}
         onChoose = {this.onChoose}
      />  */}
      {/* <ActionApp/> */}
      {/* <Flexbox/> */}
      {/* <GuokaiBlog/> */}
      {/* <AntdLolist/> */}
      <Login />
   </Fragment>
  )
  }
  handleClicknum(choose){
    this.setState({
     answernum: choose,
   })
  }
  onChoose(){
    alert("123");
    // alert(this.state.choosenOption)
  }
  isHidden(){
   alert("隐藏");
  }
}
export default App;

