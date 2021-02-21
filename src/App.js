import React, { useState } from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
    const [showDropdown, setShowDropdown] = useState(true);
    return (
    <div>
    
        {/*<Search /> */
        /*<Accordian items={items}/>*/}
        <Translate />
    </div>);
};