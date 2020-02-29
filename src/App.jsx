import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import Messages from './components/Messages';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: '/profile',
    };
  }

  handleRouteChange = route => {
    this.setState({
      route: route,
    });
  };

  getContent = () => {
    switch (this.state.route) {
      case '/profile':
        return <Profile />;
      case '/messages':
        return <Messages />;
      default:
        return <></>;
    }
  };

  fetchItems = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    console.log(result);
  };

  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="profileBar">
          <NavBar handleRouteChange={this.handleRouteChange} />
          {this.getContent()}
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="app-wrapper">
//       <Header />
//       <div className="profileBar">
//         <NavBar />
//         <Profile />
//       </div>
//     </div>
//   );
// }

export default App;
