import React, { Component } from 'react'

import './content-container.styles.scss';

export default class ContentContainer extends Component {

  render() {
    return (
    <div className="content-container">
      <span className="content-container-heading">{this.props.heading}</span>
      {this.props.children}  
    </div>
    )
  }
}
