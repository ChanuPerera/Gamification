import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class UserStatistic extends Component {
	render() {
		const options = {
            backgroundColor:'#331497',
			animationEnabled: true,
			
			axisX: {
				
				labelFontColor: "white",
				interval: 1, 
				tickLength: 0, 
				intervalType: "day", 
				valueFormatString: " ", 
				labelFormatter: function (e) {
				
					const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"];
				
					return dayNames[e.value];
				}
			},
			axisY: {
				
				prefix: "h",
                labelFontColor: "white",
                
			},
			data: [{
				type: "spline",
			dataPoints: [
				    { x: 0, y: 2 }, 
					{ x: 1, y: 1 }, 
					{ x: 2, y: 4 }, 
					{ x: 3, y: 8 }, 
					{ x: 4, y: 34 },  
					{ x: 5, y: 2 }, 
					{ x: 6, y: 3 } 
				
			
			],
                lineColor: "white",
			}]
		}
		return (
		<div>
			<CanvasJSChart options={options}/>
		</div>
		);
	}
}

export default UserStatistic;