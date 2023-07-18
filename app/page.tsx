"use client"
import { useState, useEffect } from 'react';
import { getInitialDate } from '../api/dates';
import moment from 'moment';


export default function Home() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateDifference, setDateDifference] = useState<number | null>(null);

  useEffect(() => {
    async function fetchInitialDate() {
      const initialDate = await getInitialDate();
      setStartDate(initialDate);
    }

    fetchInitialDate();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const startDateMoment = moment(startDate, 'YYYY-MM-DD');
    const endDateMoment = moment(endDate, 'YYYY-MM-DD');

    if (startDateMoment.isValid() && endDateMoment.isValid()) {
      const difference = endDateMoment.diff(startDateMoment, 'days');
      if (difference >= 0) {
        setDateDifference(difference);
      } else {
        // Gérer le cas où la différence est négative (erreur)
        setDateDifference(null); // Réinitialise la valeur de dateDifference à null
        // Affiche un message d'erreur à l'utilisateur
        alert('La date de fin doit être superieur à la date de début.');
      }
    }
  };


  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Start Date:
            <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {dateDifference && <p>Number of days between the dates: {dateDifference}</p>}
      </div>
  );
}
