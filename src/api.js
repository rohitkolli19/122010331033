// TrainList.js
import React, { useState, useEffect } from 'react';
import { getAllTrains } from '../api';

const TrainList = ({ token }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const fetchedTrains = await getAllTrains(token);
        setTrains(fetchedTrains);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">All Trains</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render train cards */}
      </div>
    </div>
  );
};

export default TrainList;
