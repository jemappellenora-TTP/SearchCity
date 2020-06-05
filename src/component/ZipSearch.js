import React, { Component } from "react";
import axios from "axios";
// import ZipCard from "./ZipCard";

export default class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cityInfo: []
    };
  }

  searchByZip=(eachZip)=> {
    let url = `http://ctp-zip-api.herokuapp.com/zip/${eachZip}`;
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const updateinfo = {
          name: data.LocationText,
          state: data.State,
          population: data.EstimatedPopulation,
          total: data.TotalWages
        }
        this.setState({ cityInfo: [...this.state.cityInfo, updateinfo]});
      }).catch((err) => console.log(err));
  }
      


  render() {
    
    const zipCodes = this.props.zips;
    let zipList;
    if (zipCodes.length === 0) {
      zipList = <></>;
    } else {
      zipList = (
        <ol>
          {zipCodes.map((eachZip) => 
            this.searchByZip(eachZip.toString())
          )}
        </ol>
      );
    }
    return (
      <>
        <div className="Result">
          
        <p>zipcode prev{this.props.zips}</p>
        <p>current state {zipCodes}</p>
        
          zipList: {zipList}
        
          {/* <>
            {this.state.cityInfo?this.state.cityInfo.map((each) =>{
            return(
              <ZipCard 
                location= {each.LocationText}
                population= {each.EstimatedPopulation}
                totalwage= {each.TotalWages}
                />
            );
            }):""}
          </>  */}
        </div>
      </>
    );
}
}