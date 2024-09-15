import React, {Component} from 'react'

const WithLoggings = (WrappedComponent) => {
    console.log("insdie WithLoggings")
    return class extends Component {
        componentDidMount(prevProps, prevState) {
            console.log('Component re-rendered!');
          }      
          render() {
            return (
                    <WrappedComponent {...this.props}/>
              )
        }
    }
}

export default WithLoggings
