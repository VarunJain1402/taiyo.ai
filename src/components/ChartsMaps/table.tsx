import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCovidData } from './APIs'; // import the fetch function
function Table() {
  const { data, isLoading, error } = useQuery(['covidData'], fetchCovidData);

  if (isLoading) {
    return <div>Loading Table...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const headers =[
    ['Total Cases', data.cases],
    ['Today\'s Cases', data.todayCases],
    ['Total Deaths', data.deaths],
    ['Today\'s Deaths', data.todayDeaths],
    ['Total Recovered', data.recovered],
    ['Today\'s Recovered', data.todayRecovered],
    ['Active Cases', data.active],
    ['Critical Cases', data.critical],
    ['Tests Conducted', data.tests],
    ['Population', data.population],
    ['Affected Countries', data.affectedCountries],
  ]

  return (
    <div className="flex overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-6 py-3 border border-gray-300">Statistic</th>
            <th className="px-6 py-3 border border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody>
          {headers.map(([label, value], index) => (
            <tr
              key={label}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } hover:bg-gray-200`}
            >
              <td className="px-6 py-4 border border-gray-300 text-left font-medium text-gray-700">
                {label}
              </td>
              <td className="px-6 py-4 border border-gray-300 text-right font-semibold text-gray-900">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
