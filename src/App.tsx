import * as React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    camps :[],
    search: ""
  }


  componentDidMount() {
    axios.get('http://13.71.86.210/api/v1/getCamps')
    .then(res => {
      console.log('>> res', res);
      const camps = res.data.camps;
      this.setState({ camps });
    })
  }

  enteredText=(event:any) => {
  this.setState({
    search:event.target.value
  })
  }

  render() {
   // console.log(this.state.search)
   
    return (
      <div>
        <form>
          <input 
          type="text" 
          placeholder="Search" 
          name="camp_name"
          value={this.state.search}
          onChange={this.enteredText}
          /> 
        </form>

     {/*   {this.state.camps.map((data: any,i,arr) => {
          return (
          <div key={i}>
            {data.campVenue}  -  {data.territoryName} 
          </div> )
        }
      )} */}

    {/*   {this.state.camps.map((data: any,i,arr) => {
        if(this.state.search === data.territoryName) 
        return (
          <div key={i}>
            {data.campVenue} - {data.territoryName}
          </div> 
          )
       }
      )} */}
      
     {this.state.camps.map((data: any,i,arr) => {
        if(data.territoryName.toLowerCase().includes(this.state.search.toLowerCase()) || data.campVenue.toLowerCase().includes(this.state.search.toLowerCase())) 
        return (
          <div key={i}>
            {data.campVenue} - {data.territoryName}
          </div> 
          )
       }
      )} 
      </div>
    )
  }
}

export default App;
