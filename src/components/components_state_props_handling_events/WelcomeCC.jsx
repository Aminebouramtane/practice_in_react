import React from "react"

class WelcomeCC extends React.Component {

    state={
        creator:"Phoenix",
        date:"2023"
    }

    render(){
        console.log(this.props);

        return(
            <>
                <h1>Hello Class Component, {this.props.name}</h1>
                <p>Created by: {this.state.creator}({this.state.date})</p>
                <button onClick={()=>{
                    this.setState({creator:'Ahmed'});
                }}>Change Name</button>
            </>
        )
    }

}
export default WelcomeCC 