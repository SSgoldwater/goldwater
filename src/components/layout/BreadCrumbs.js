import React from 'react';

class BreadCrumbs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      url: this.props.match[0].url
    }
  }

  render() {
    return (
      <div>
        BreadCrumbs
      </div>
    )
  }
}

export default BreadCrumbs;
