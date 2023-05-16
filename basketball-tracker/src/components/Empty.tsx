type EmptyProps = Readonly<{
  teamId: number;
  onClose: () => void;
}>

export const Empty: React.FC<EmptyProps> = ({teamId, onClose}) => (
<div id="alert-additional-content-5" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
  <div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">No data for team #{teamId}</h3>
  </div>
  <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
    This team did not play a game in the last 12 days
  </div>
  <button type="button" className="flex-shrink-0 self-start text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onClose}>Close</button>
</div>
  );
  