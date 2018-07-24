import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    setSearchTerm(searchTerm){
        this.setState({
            searchTerm
        });
    }

    render(){
        const characters = this.props.characters.filter(char =>{
            return char.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        })
        const count = characters.length;

        return (
            <div className="live-search">
                <SearchForm onChange={value => this.setSearchTerm(value)}/>
                <CharacterCount count={count} />
                <CharacterList characters={characters} />
            </div>
    );}
}
