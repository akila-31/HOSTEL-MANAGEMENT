import React, { useState, useEffect } from 'react';

const RegistrationTable = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const totalRows = 10; // Number of rows to display

  // Fetch data from the backend
  const fetchRegistration = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/registration/all'); // Update endpoint as needed
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchRegistration();
  }, []);

  // Filter data based on the search term
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Limit displayed rows to totalRows or the number of filtered items if less
  const rows = filteredData.slice(0, totalRows);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Registration Data</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchBar}
        />
      </div>

      {loading && <div style={styles.loading}>Loading data...</div>}
      {error && <div style={styles.error}>Error: {error}</div>}

      {!loading && !error && data.length > 0 ? (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                {Object.keys(data[0] || {}).map((key, index) => (
                  <th key={index} style={styles.headerCell}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => (
                <tr
                  key={index}
                  style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}
                >
                  {Object.keys(data[0] || {}).map((key, colIndex) => (
                    <td key={colIndex} style={styles.cell}>{item[key] || '—'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <div style={styles.noData}>No data available.</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9fbfd',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%', // Cover the full width of the page
    height: '100vh', // Cover the full height of the page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align the content at the top
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%', // Increase width to match the table
    marginBottom: '10px',
  },
  title: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#2c3e50',
  },
  searchBar: {
    width: '250px',
    padding: '8px',
    border: '1px solid #dcdde1',
    borderRadius: '6px',
    fontSize: '14px',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  tableWrapper: {
    overflowX: 'auto', // Enable horizontal scrolling
    overflowY: 'hidden',
    border: '1px solid #e1e1e1',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    width: '105%', // Increase width to cover most of the page
    maxWidth: '1400px', // Set a max width for very large screens
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '12px',
    backgroundColor: '#ffffff',
  },
  headerCell: {
    border: '1px solid #e1e1e1',
    padding: '8px',
    backgroundColor: '#007BA7',
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontSize: '14px',
  },
  cell: {
    border: '1px solid #e1e1e1',
    padding: '6px',
    textAlign: 'center',
    color: '#34495e',
    fontSize: '12px',
    wordWrap: 'break-word',
  },
  loading: {
    fontSize: '16px',
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: '100px',
  },
  error: {
    fontSize: '14px',
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: '20px',
  },
  noData: {
    fontSize: '16px',
    color: '#555',
    textAlign: 'center',
    marginTop: '20px',
  },
};





export default RegistrationTable;
