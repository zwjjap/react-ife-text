/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Table,DatePicker,Breadcrumb,Row,Col,Card,Icon,Radio} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import HomeContainer from './style';
import TestDemo from './test';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
       date:(new Date()).getTime(),

    };
    this.num = 0;

  }

  componentWillMount () {

    
  }

  componentDidMount () {
    console.log('did');
    setInterval(() => {
       this.num += 1;
       //console.log(this.state.num);
       this.setState({
        date:(new Date()).getTime()
       });
    },1000)
   
  }

  render() {
    console.log('render');
    return (
      <HomeContainer>
       <Helmet
          title="运行情况"
          meta={[
            {name: 'description', content: 'Description of DeviceStatus'},
          ]}
        />
        <div className="bc-con">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>运行情况</Breadcrumb.Item>
          </Breadcrumb>
          
        </div>
        <div className="wrapper">
           11111
           <div>
               <TestDemo date={this.state.date} num={this.num}/>
           </div>
           
        </div>
      </HomeContainer>
    );
  }
  componentWillReceiveProps(nextprops){

     //console.log(',,,,,,,,');
  }
  // shouldComponentUpdate(){
  //   console.log(',,,,,,,,');
  // }
  componentWillUpdate(){
    //console.log('0');
  }
  componentDidUpdate(){
   
  }
}
