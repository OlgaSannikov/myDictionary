import React from "react";
import SearchForMedicalDictionary from "./SerachForMedicalDictionary"
import "../styles/MedicalDictionary.scss"
import "../styles/SharebleClasses.scss"


const initialState=""; //create global variable with initial state empty wtring to using it over again in my code

class MedicalDictionary extends React.Component{
  constructor(props){
      super(props);
      this.state={
          searchWord:initialState,
          search: false
      }
      //bind my button and input handler in order to use it and manipulate the state
      this.getWordHandler=this.getWordHandler.bind(this);
      this.submitButton=this.submitButton.bind(this);
  } 

  //wordHandler will update the state of the searchWord , the word which user want to search
  getWordHandler(event){
      event.preventDefault();
      this.setState({searchWord: event.target.value})
  }

  //submitButton function will setState 
  submitButton(event){
    event.preventDefault();// prevent restart of the page 
    this.setState({search: true}); //set search to true, thats means that user inputed value for search
  }

   render(){
        return (
                <div id="main-div-medical"> 
                  <div className="form-button-dictionaries">
                    <form className="form-dictionaries" onSubmit={this.submitButton} >
                      <p className="p-form-dictionaries">Please enter word and then press submit</p>
                      {/* <input /> will have the event  value, such as word that user want to search*/}
                      <input className="input-search-dictionaries" type="text" value={this.state.searchWord} onChange={this.getWordHandler} placeholder="Enter word" />
                      <div className="button-clear-dictionaries">
                        <input className="submit-button-dictionaries" type="submit" />
                        {/* clear button will clear the state, put values to initial state in order to do a new search */}
                        <button className="clear-button-dictionaries" type="button" onClick={()=>{this.setState({searchWord: initialState, search:false})}}>Clear</button>
                        <p className="clear-text">If you need to start new search please press clear</p>
                      </div>
                    </form>
                  </div>
                  <div className="search-result-dictionaries">
                    {/* by clicking submit button we are changing the state of search , when search is true we are calling 
                    <SearchForMedicalDictionary /> and send the id as the word which user want to look for, 
                    if the search is false just return the phrase */}
                    {this.state.search ? (<SearchForMedicalDictionary id={this.state.searchWord.toLowerCase()} />) : ""}
                  </div>
                </div>)
   }  
}

export default MedicalDictionary;