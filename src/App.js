import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrainList from './components/TrainList';
import SingleTrain from './components/SingleTrain';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // API call to obtain the authorization token
    axios.post('http://20.244.56.144/train/auth', {
      companyName: 'Train Central',
      clientID: 'b46128a0-fbde-4c16-ad4b1-6ae6ad718e27',
      ownerName: 'Ram',
      ownerEmail: 'ram@abc.edu',
      rollNo: '1',
      clientSecret: 'XOyol0RPayKBOdAN',
    })
    .then(response => {
      setToken(response.data.access_token);
    })
    .catch(error => {
      console.error('Error obtaining token:', error);
    });
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-semibold">John Doe Railways</h1>
        </header>
        <main className="p-4">
          <Switch>
            <Route path="/" exact>
              <TrainList token={token} />
            </Route>
            <Route path="/train/:trainId">
              <SingleTrain token={token} />
            </Route>
          </Switch>
        </main>
        <footer className="bg-blue-600 text-white p-2 text-center">
          &copy; 2023 John Doe Railways
        </footer>
      </div>
    </Router>
  );
}

export default App;
