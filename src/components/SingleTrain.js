// src/components/SingleTrain.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleTrain = ({ token }) => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios.get(`http://20.244.56.144:80/train/trains/${trainId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error('Error fetching train:', error);
      });
  }, [token, trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">{train.name}</h1>
      {/* Display train details */}
    </div>
  );
};

export default SingleTrain;
