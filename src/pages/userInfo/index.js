import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userActions.js";

import "./style.less";

class UserInfo extends Component {

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div className = "abc">
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);

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
