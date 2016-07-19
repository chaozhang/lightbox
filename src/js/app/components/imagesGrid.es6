import React from 'react'


class ImagesGrid extends React.Component {

  render() {
  	let images = [];

  	for(let item of this.props.images){
  		images.push(
  			<li title={item.title}>
  				<img src={item.link}/>
  			</li>
  		);
  	}

    return <div className="images-grid">
      <ul>
      	{images}
      </ul>
    </div>;
  }
}
 
export default ImagesGrid