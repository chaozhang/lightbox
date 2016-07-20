import React from 'react'

var _isIE = (userAgent) => {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
}

class Icon extends React.Component {
  static defaultProps = {
    iconName: 'alert'
  }

  render() {
    var htmlString = {
      __html: '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/svg/sprite.svg#' + this.props.iconName + '"></use>'
    };

    if (_isIE()) {
    	return <div>{this.props.alt}</div>;
    } else {
    	return <svg dangerouslySetInnerHTML={htmlString}/>;
    }   
  }
}

export default Icon
