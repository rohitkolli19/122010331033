// src/components/TrainList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainList = ({ token }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://20.244.56.144:80/train/trains', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching trains:', error);
      });
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">All Trains</h1>
      <ul>
        {trains.map(train => (
          <li key={train.id}>{train.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
