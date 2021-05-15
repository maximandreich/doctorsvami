import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class WeatherForecast extends React.Component {

constructor(props) {
super(props);
this.state = { news: [] };

this.handleReload = this.handleReload.bind(this);
}


async handleReload(Article) {
const response = await api.news({ date: '' });
this.setState({ news: response });
}


render() {
return <div>
<button onClick={this.handleReload}>Reload</button>
<ul>
{this.state.news.map((Article) => <li>{Article.image} {Article.theme}</li>)}
</ul>
</div>
}
}

export default WeatherForecast;
