import React, { useState } from "react";
import InputBox from './InputBox';

const Data = ({ updateVal, idxOfList, deleteList, valueOfList }) => {
    const [hover, setHover] = useState(false);
    const [presentVal, setPresentval] = useState(valueOfList);
    const [update, setUpdate] = useState(false);
    // Declaring a useState Hook inorder to manage the states of these componenets.

    const onSubmit = (event) => {
      event.preventDefault();
      updateVal(idxOfList, presentVal);
      setUpdate(false);
    };

    // This function will be used to NEW Input Box to Edit the existing List Item.
    const updateMe = () => {
      setUpdate((prevState) => !prevState);
    };
    
    // This function will be used to GET the value of the Input field.
    const onChange = (event) => {
      setPresentval(event.target.value);
    };
    
    // Using ES6 Ternary operator, I'm rendering the Specify Content according to the User action.
    return (
      <div class="columns"
        onMouseEnter={(event) => {
          setHover(true)
        }}

        onMouseLeave={(event) => {
          setHover(false)
        }}>

        <p class="column is-narrow">
          {
            update ? (
              <InputBox
                currentText={presentVal}
                onChange={(event) => onChange(event)}
                onSubmit={(event) => onSubmit(event)}
              />
            ) 
            : (
            valueOfList
            )
          }
        </p>

        <div
          className="column is-narrow"
          style={{ display: hover && !update ? "block" : "none" }}>

          <button class="button is-success is-rounded is-small mr-2" onClick={updateMe}>
            EDIT
          </button>

          <button class="button is-link is-rounded is-small" onClick={() => deleteList()}>
            DELETE
          </button>

        </div>

      </div>
    );
  };

  export default Data;
