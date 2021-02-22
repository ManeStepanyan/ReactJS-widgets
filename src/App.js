import React, { useState } from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is your name?',
        content: 'My name is Mane'
    },
    {
        title: 'What is your profession?',
        content: 'I am a software engineer'
    },
    {
        title: 'What about personal life?',
        content: 'I am engaged with gazan Vanik'
    }
]
const options = [{
    label: 'The Color Red',
    value : 'red'
},
{
    label: 'The Color Green',
    value: 'green'
},
{
    label: 'a Shade of Blue',
    value: 'blue'
}];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    //const [showDropdown, setShowDropdown] = useState(true);
    return (
    <div>     
        <Header />   
        <Route path="/">
            <Accordian items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown label="Select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}  />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
    </div>);
};