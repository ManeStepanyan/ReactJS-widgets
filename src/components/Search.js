import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    console.log(results);

    useEffect(() => {
        const search = async() => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
            {
                params:
                {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format : 'json',
                    srsearch: term,
                }
            })
        setResults(data.query.search)};
        if(term && !results.length){
            search();
        }
        else{
            const timeoutid = setTimeout(() => { 
                if(term){
                    search();
                }
            }, 500);
            return () => {clearTimeout(timeoutid)};}
        }
         , [term]);
    
    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        )
    })

    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}></input>
                </div>
            </form>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;