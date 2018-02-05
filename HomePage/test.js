import React from 'react';
class TestDemo extends React.Component{
	constructor(){
		super()
	}
	componentDidMount(){
		console.log('did');
	}
	render(){
		const {date,num} = this.props;
		console.log(111);
		return(<div>{date}<div>{num}</div></div>)
	}
	componentWillReceiveProps(d){
		console.log(this.props);
        console.log(d);
	}
	componentDidUpdate(){
		console.log('update-----');
	}
}
module.exports = TestDemo;