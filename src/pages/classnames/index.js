// https://github.com/JedWatson/classnames

// 该页面写classname的 使用，css module

import React, {Component} from 'react';

import style from "./style.less";
console.log(style)

// style 为一个对象形式，key为之前的值，value为原值-哈希值，webpack配置
// "css-loader?modules&localIdentName=[name]-[hash:base64:5]"

import classNames from 'classnames/bind'
const classMap = classNames.bind(style)

let classa= style['abc']
let classb = classMap('abc')
console.log(classa === classb) // true


export default class classNamesPage extends Component {

    render() {
        return (
            <div className = "abc">
                
            </div>
        )
    }
}

// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(classNames);

// const mapStateToProps = (state) => {
//     return {
//         userInfo: state.userInfo
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUserInfo: () => {
//             dispatch(getUserInfo())
//         },
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);
