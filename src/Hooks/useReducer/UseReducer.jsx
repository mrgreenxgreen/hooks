import {useReducer} from 'react'


export default function UseReducer(){


    const initialState = [

    ];

    function reducer(state, action){
        switch(action.type){
            case "ADD_TASK" : return[
                ...state,
                {
                    id:state.length + 1,
                    name:action.payload
                }
            ]

            default:return state;
        }
    }

    const [todos, dispatch] = useReducer(reducer, initialState);



    return(
        <>
            <h1> TODO APP: {todos.length}</h1>
            Add new task:
            <input
                type="text"
                onBlur={(e)=> dispatch({
                    type:'ADD_TASK',
                    payload: e.target.value
                })}
            />
            <hr/>

            {todos.map(todo => <li key={todo.id}>{todo.name}</li> )}

        </>
    )
}