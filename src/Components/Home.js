// 맨 처음 접속 페이지
import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    return(
        <div>
            {/* <p>로그인</p> */}
            <Link to="/Login"><p>로그인</p></Link>
            <Link to="/Admin"><p>회원가입</p></Link>
        </div>
    )
}

export default Home;