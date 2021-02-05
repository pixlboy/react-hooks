// Demonstrating use reducer and actions
import React, {useReducer, useRef} from "react";

const initialState = {
    message: 'Hello',
    user : ''
};

function reducer(state, action) {
  switch(action.type) {
    case 'YELL':
      return {
          message : `HEY! I JUST CALLED YOU`,
          user: action.payload
      };
    case 'WHISPER':
      return {
          message : `excuse me, i just called you`,
          user: action.payload
      };
    default:  
  }
}

function UserActions() {

  const username = useRef();
  
  // array destructuring
  const [state, dispatch] = useReducer(
      reducer,
      initialState
  );

  return (
        <div>
            <p>{state.message} {state.user}</p>
            <p>I want to : 
                <button onClick={() => {
                    dispatch({
                        type: 'YELL',
                        payload: username.current.value
                    })
                }}>
                        YELL
                </button>
                    or 
                <button onClick={() => dispatch({
                    type: 'WHISPER',
                    payload: username.current.value
                })}>
                    WHISPER
                </button>
                    at 
                <input type="text" ref={username} />
            </p>
        </div>
    );

}

export default UserActions;