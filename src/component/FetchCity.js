import React, { Component } from "react";
import axios from "axios";
import SearchField from "./SearchField";
import ZipSearch from "./ZipSearch"

export class FetchCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: "",
      prevousState: "",
      searching: true,
    };
  }

  handleSearch=()=> {
    const input = this.state.search.replace(/ /g,'');
    if (this.state.search !== this.state.prevousState) {
        const url = `http://ctp-zip-api.herokuapp.com/city/${input.toUpperCase()}`;
        const fetch = async () => {
        await axios
            .get(url)
            .then((response) => {
            this.setState({ cities: response.data });
            })
            .catch((err) => console.log(err));
        };
        fetch();
        this.setState({ prevousState: this.state.search });
    }
  }

  handleChange = (e) => {
      this.setState({ search: e.target.value, searching: false });
  };

  render() {
    
    return (
      <div>
        <SearchField
          value={this.state.search}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
        />
        {this.state.cities.map((city, index) => {
          return (<div key={index}>{city}</div>);
        })}
        {/* <ZipSearch zips={this.state.cities}/> */}

      </div>
    );
  }
}

export default FetchCity;