import React, {Component} from 'react';
const login_form = (
    <form>
        <div>
            <label>이메일 주소</label>
            <input type={"email"}/>
        </div>
        <div>
            <label>비밀번호 </label>
            <input type={"password"}/>
        </div>
        <button type={"submit"}>로그인</button>
    </form>
)


class login extends Component{
    render() {
        return (
            login_form
        )
    }
}

export default login;