import React,{ useState } from 'react';

export const TwoPaneList = ({ data }) => {
  const [listData, setlistData] = useState(null);
  // Declaring a useState Hook and assigning it Null intially. But it will contain the entire List of Data is coming from App.js

  // Looping through the data Array which I'm receiving as a Prop from App.js
  // Taking the Key as the Title name. And when the user clicks on each Title, using setlistData function and I'm setting the content to the listData variable.
  // At the end, I'm printing a Title of each content using div tag so that we get every Title to each separate line because div is a block level element.
  const listOfTitles = data.map(response => (
    <div className='mb-4' key={response.title} onClick={() => setlistData(response.content)}>
      <div>{response.title}</div>
    </div>
  ));
  
  // Making a Card like structure for the List of Titles and List of Content.
  // Whenever the user clicks on the Titles, the List of Title will shrink to the half of the page.
  // And listData will not be Null, as now it contains data.
  // Then using ES6 Ternary operator, I'm rendering the Content for each individual Titles.
  return (
    <div className='columns'>
      <div className='column'>
        <h1 className='is-size-4 is-underlined has-text-weight-bold has-text-centered is-family-monospace'>List of Titles</h1>
        <div className='card'>
          <div className='card-content'>
            <div className='content is-family-monospace is-clickable'>{listOfTitles}</div>
          </div>
        </div>
      </div>
      {
        listData ? <div className='column'>
        <h1 className='is-size-4 is-underlined has-text-weight-bold has-text-centered is-family-monospace'>Content</h1>
        <div className='card has-background-primary'>
          <div className='card-content'>
            <div className='has-text-primary-light is-family-monospace'>
              <Data listOfContent={listData}/>
            </div>
          </div>
        </div>
      </div> : null
      }
    </div>
  );
};

// Declared a Small Component so that I can get Awesome, Line break for content.
// And as soon as it comes across a comma or a line break in App.js.
// A new line will be printed and then it will look very neat and clean
function Data({ listOfContent }) {
  const result = listOfContent.map(response => (
    <p key={response}>{response}</p>
  ));
  return <div>{result}</div>;
}
