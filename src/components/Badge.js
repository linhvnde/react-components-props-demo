import React,{Component} from 'react';

class Badge extends Component {
  render() {
    return <span className="Badge"> {this.props.badgeText} </span>;
  }
}

export default Badge;
