import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

export class ImageSearch extends Component {
    state = {
        topic: '',
    }

   

    handleSearchChange = e => {
        this.setState({
            topic: e.target.value,
        });
    };

   
    handleSubmit = async e => {
        e.preventDefault();
        const {topic} = this.state; 
        const {onSearchSubmit} = this.props;

        if (topic.trim() === ''){
            return; 
        }
     
        onSearchSubmit(topic, 1); 
        this.setState({topic: ''})
       
        console.log('react file:Search.js gallery: ', this.state.gallery)
         
    }
    render() {
        const { topic } = this.state;
        const {handleSubmit, handleSearchChange} = this;
        return (
            <div>
                <header className={s.searchbar}>
                
                    <form className={s.form}>
                        <button type="submit"
                            className={s.button}
                            onClick={handleSubmit}>
                            <span className={s.buttonLabel}><BsSearch fill="#3f51b5"/></span>
                        </button>

                        <input
                            className={s.input}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={topic}
                            onChange={handleSearchChange}
                        />
                    </form>
                    </header>

            </div>
        )
    }
}
ImageSearch.propTypes = {
    onSubmit:PropTypes.func.isRequired
}