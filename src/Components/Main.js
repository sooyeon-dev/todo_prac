// 달력 보이는 메인 페이지
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
// import '.'
import '../Styles/CustomCalendar.scss'

function Main(props) {
    const { mainId } = useParams();
    const [ date, setDate ] = useState(new Date());
    const [ todos, setTodos ] = useState([{id: '0', text: '', checked: false}]);

    const todoId = useRef(1);
    // const {id, text, checked} = todos;

    const todoAdd = () => {
        setTodos([
            ...todos,
            {id: todoId.current++, text: '', bClick: false}
        ])
        console.log(todoId.current);
    }

    const todoInput = (e) => {
        console.log(e.target.value);
        console.log(e.target.id)
        // setTodos({
        //     ...todos,
        //     [text]: e.target.value,
        // })
    }

    return(
        <div>
            <div className="text-gray-500 mt-4">
                <Calendar onChange={setDate} value={date}></Calendar>
                {moment(date).format("YYYY년 MM월 DD일")}
            </div>
            <button onClick={todoAdd}>추가</button>
            <div className="todoList">
                {
                    todos.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.index}
                                <input type="checkbox" id={item.id}/>
                                <input style={{width: '200px'}} placeholder="할 일 입력" onChange={todoInput} id={item.id}></input>
                                <p>
                                    {item.value}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main;