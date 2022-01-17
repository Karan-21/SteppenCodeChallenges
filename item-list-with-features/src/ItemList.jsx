import React, { useState } from "react";

import Data from './Data';

import InputBox from './InputBox';

export const ItemList = ({ data }) => {
  const [result, setResult] = useState([]);
  const [presentVal, setPresentval] = useState("");
  // Declaring a useState Hook which is intially containing an Empty Array, and in future it will the entire list.
  // And the string which  is intially empty but in future it will be contaning New value as the User enteres in the Input field.

  // This function will be used if the EDIT button is clicked.
  // Firstly, I'm taking the initial array and storing in an variable newResult.
  // Then I'm updating the value at that Index of the Arrray by the new "value" entered by the user.
  // Finally, assigning it to the main Result array using the setResult function.
  const updateVal = (index, value) => {
    let newResult = [...result];
    newResult[index] = value;
    setResult(newResult);
  };

  // This function will be used to GET the value of the Input field.
  const onChange = (event) => {
    setPresentval(event.target.value);
  };

  // This function will be used to DELETE the value from the list.
  // Firstly, I'm taking the initial array and storing in an variable newResult.
  // Using the Splice function, I'm passing the index of that value and passing next argument 1 because I want to delete only ONE value.
  // As the instruction says It should asks for confirmation before deleting. So, I'm using Alert for this and then after that I'm removing the item from the list.
  // Finally, assigning it to the main Result array using the setResult function.
  const deleteVal = (index) => {
    let newResult = [...result];
    newResult.splice(index, 1);
    alert("Do you want to Delete");
    setResult(newResult);
  };

  // This function will be used to ADD the value from the list.
  // preventDefault() is used because we don't want the Page to refresh after I click Enter or Click ADD.
  // Firstly, I'm checking if there is any value inside the input box which should be appended to the List.
  // If Yes, I'm directly calling setResult to set the New value to the Result array by first taking the initial array and then adding the new value at the end to it.
  // Lastly, I'm cleaning by Input Field for next input to come in.
  const onSubmit = (event) => {
    event.preventDefault();
    if (presentVal) {
      setResult((initalVal) => [...initalVal, presentVal]);
      setPresentval("");
    }
  };

  // Using the Ordered Like strucuture for displaying the List Items.
  // I have made One Component to Display the Items from the List named Data.
  // Another for the Input Box named InputBox.
  // And I'm passing all the states and the functions by Props to these components.
  return (
    <div class="content">

      <ol type="1">

        {
          result.map((value, index) => (
            <li className="is-family-monospace is-size-5">
              <Data
                updateVal={updateVal}
                idxOfList={index}
                deleteList={() => deleteVal(index)}
                valueOfList={value}
                key={value}
              />
            </li>
          ))
        }
      </ol>

      <InputBox
        currentText={presentVal}
        onSubmit={(event) => onSubmit(event)}
        onChange={(event) => onChange(event)}
      />

    </div>
  );
};
