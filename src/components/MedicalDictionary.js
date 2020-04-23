import React from "react";
import SearchForMedicalDictionary from "./SerachForMedicalDictionary"



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
  //wordHandler 
  getWordHandler(event){
      event.preventDefault();
      this.setState({searchWord: event.target.value})
  }
  submitButton(event){
    event.preventDefault();
    this.setState({search: true});
  }

   render(){
        return (
        <div id="mainDivMedicalDictionary">
        <form onSubmit={this.submitButton}>
            <input type="text" value={this.state.searchWord} onChange={this.getWordHandler} />
            <input type="submit" />
        </form>
        <button type="button" onClick={()=>{this.setState({searchWord: initialState, search:false})}}>Clear</button>
        <div>
       {this.state.search ? (<SearchForMedicalDictionary id={this.state.searchWord} />) : "Please enter word to start a search"}
        </div>
        </div>)
   }  
}

export default MedicalDictionary;