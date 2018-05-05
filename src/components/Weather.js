import React from "react";

class Weather extends React.Component{
	render(){
		return (
			<div className="weather__info">
				{
					this.props.city && this.props.country && <p className="weather__key">Location:
					<span className="weather__value">{this.props.city}, {this.props.country}</span>
					</p>
				}	
				{
					this.props.temp &&	<p className="weather__key">Temperature:
					<span className="weather__value">{this.props.temp} </span>
					</p>
				}
				{
					this.props.humidity &&	<p className="weather__key">Humidity:
					<span className="weather__value">{this.props.humidity}</span>
					</p>
				}
				{
					this.props.description && <p className="weather__key">Description:
					<span className="weather__value">{this.props.description}</span>
					</p>
				}
				{
					this.props.error && <p className="weather__key">Error:
					<span className="value">{this.props.error}</span>
					</p>
				}
				{
					this.props.message && <p className="weather__key">
					<span className="value">{this.props.message}</span>
					</p>
				}
			</div>

		);
	}
};
export default Weather;
