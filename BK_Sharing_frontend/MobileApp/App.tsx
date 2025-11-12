import React, { useState } from 'react';
// NOTE: This code is a merged, self-contained file for simplicity.
// In a real React Native environment, you would use:
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const API_BASE_URL = 'http://localhost:8080/api/test';

// Utility for displaying messages (Toast notification)
const Toast = ({ message, show, onClose }) => {
  if (!show) return null;

  // Using a simple fixed web UI component to display the toast message
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
      onClick={onClose}
    >
      <div className="max-w-sm w-full bg-white shadow-xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-indigo-500">
        <div className="p-4">
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-bold text-gray-900">API Status</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App component containing all states and logic
function App() {
  const [helloResponse, setHelloResponse] = useState('Awaiting /hello response...');
  const [greetResponse, setGreetResponse] = useState('Awaiting /greet response...');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  const closeToast = () => setToast({ show: false, message: '' });

  const callApi = async (endpoint, setter) => {
    setLoading(true);
    setter('Loading...');
    try {
      const url = `${API_BASE_URL}${endpoint}`;

      // Attempt to fetch data from the Spring Boot API
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // API returns plain text (String)
      const data = await response.text();
      setter(data);
      setToast({ show: true, message: `Successfully fetched data from ${endpoint}.` });
    } catch (error) {
      // Handles network errors or non-200 HTTP statuses
      const errorMessage = `Failed to connect to API: ${error.message}. Ensure your Spring Boot server is running on ${API_BASE_URL}.`;
      setter(errorMessage);
      setToast({ show: true, message: errorMessage });
      console.error('API Call Error:', error);
    } finally {
      setLoading(false);
      // Auto-hide toast after 3 seconds
      setTimeout(closeToast, 3000);
    }
  };

  const fetchHello = () => callApi('/hello', setHelloResponse);
  const fetchGreet = () => callApi('/greet?name=MobileUser', setGreetResponse);

  // The UI that replaces the default React Native welcome screen
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Spring Boot API Tester
        </h1>

        {loading && (
          <div className="flex justify-center items-center p-4">
            <svg className="animate-spin h-6 w-6 mr-3 text-indigo-500" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-semibold text-indigo-500">Connecting...</span>
          </div>
        )}

        {/* Hello Endpoint Test */}
        <div className="border border-indigo-300 p-5 rounded-xl bg-indigo-50 shadow-md">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">/hello</h2>
          <button
            onClick={fetchHello}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 ease-in-out shadow-lg disabled:opacity-50"
          >
            Test /api/test/hello
          </button>
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-300">
            <p className="text-sm font-medium text-gray-700 mb-1">Response:</p>
            <p className="text-base font-mono whitespace-pre-wrap break-words text-green-700">{helloResponse}</p>
          </div>
        </div>

        {/* Greet Endpoint Test */}
        <div className="border border-purple-300 p-5 rounded-xl bg-purple-50 shadow-md">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">/greet</h2>
          <p className="text-sm text-gray-600 mb-3">
            Using parameter: <code>?name=MobileUser</code>
          </p>
          <button
            onClick={fetchGreet}
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 ease-in-out shadow-lg disabled:opacity-50"
          >
            Test /api/test/greet
          </button>
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-300">
            <p className="text-sm font-medium text-gray-700 mb-1">Response:</p>
            <p className="text-base font-mono whitespace-pre-wrap break-words text-green-700">{greetResponse}</p>
          </div>
        </div>
      </div>
      <Toast
        show={toast.show}
        message={toast.message}
        onClose={closeToast}
      />
    </div>
  );
}

export default App;