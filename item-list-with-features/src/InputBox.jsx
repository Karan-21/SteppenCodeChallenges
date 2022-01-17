import React from "react";

const InputBox = ({ currentText, onChange, onSubmit }) => {
  return (
    <div class="columns">

      <form onSubmit={onSubmit} class="column">

        <input
          class="input is-medium is-info"
          type="text"
          placeholder="Add Item List Here ✍"
          value={currentText}
          onChange={(event) => onChange(event)}
        />

      </form>

      <div class="column is-one-fifth">

        <button class="button is-medium is-info is-outlined" onClick={(event) => onSubmit(event)}>
          ADD
        </button>

      </div>
      
    </div>
  );
};

  export default InputBox;
