import React from 'react';
import Accordion from './components/Accordion';
import Search from "./components/Search";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript library'
  },
  {
    title: 'Why use React?',
    content: 'React is a fav library among engineers'
  },
  {
    title: 'Lorem Ipsum',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  }
];

export default () => {
  return(
    <div>
      <br />
      {/*<Accordion items={items} />*/}
      <div className={'ui container'}>
        <Search />
      </div>
    </div>
  );
}
