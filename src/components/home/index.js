import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        // 绑定this  调用可以直接 onClick={this._handleClick}  
        // 或者省略以下的，调用用 onClick={()=>this._handleClick()}
        //我的理解是 匿名函数会把this指向当前组件
        this._handleClick = this._handleClick.bind(this);

    }
    _handleClick() {
        this.state.count++;
        this.setState({
            count: this.state.count
        })
    }
    render() {
        return (
            <div>
                this is home~123
                <button onClick={()=>this._handleClick()}></button>
                {this.state.count}
            </div>
        )
    }
}
