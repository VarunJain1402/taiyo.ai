import { MapComponent } from '../components/ChartsMaps/MapComponent';
import LineGraph from '../components/ChartsMaps/LineGraph';
import Table from '../components/ChartsMaps/table';

export default function Charts() {
  return (
    <div className="charts flex flex-col w-full items-center bg-gray-100 py-10">
      <h2 className="font-bold text-3xl mb-10 text-center text-gray-800 hover:text-blue-500 transition duration-300 cursor-default">
        Charts & Maps View
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-between w-full px-4 lg:px-10">
        {/* LineGraph Section */}
        <div className="flex-1 p-6 bg-white border border-gray-300 rounded-lg shadow-lg mb-10 lg:mb-0">
          <h3 className="font-semibold text-xl mb-4 text-gray-700">Line Graph</h3>
          <LineGraph />
        </div>

        {/* MapComponent Section */}
        <div className="flex-1 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl mb-4 text-gray-700">Map View</h3>
          <MapComponent />
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full px-4 lg:px-10 mt-12">
        <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl mb-6 text-center text-gray-800 hover:text-blue-500 transition duration-300 cursor-default">
            Data Table
          </h2>
          <Table />
        </div>
      </div>
    </div>
  );
}
