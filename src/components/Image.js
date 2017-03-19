import React from 'react';

class Image extends React.Component {
    render () {
        return <div className ="well">
            <img src={'http://robohash.org/react' + this.props.number + '?bgset=bg1'} />
        </div>
    }
}

export default Image;