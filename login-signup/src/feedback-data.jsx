import React, { useState, useEffect } from 'react';

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const totalRows = 10;

  useEffect(() => {
    // Fetch feedback data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/feedback/all');
        if (response.ok) {
          const data = await response.json();
          setFeedbackData(data);
        } else {
          console.error('Failed to fetch feedback data');
        }
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter the feedback data based on the search term
  const filteredData = feedbackData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const rows = filteredData.slice(0, totalRows);
  const emptyRows = totalRows - rows.length;

  if (loading) {
    return <p>Loading feedback data...</p>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{ margin: 0 }}>Feedback Data</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchBarStyle}
        />
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            {["Register Number", "Category", "Heading", "Summary"].map((header, index) => (
              <th key={index} style={headerStyle}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#eaf4fb' }}>
              <td style={cellStyle}>{item.registerNumber}</td>
              <td style={cellStyle}>{item.category}</td>
              <td style={cellStyle}>{item.heading}</td>
              <td style={cellStyle}>{item.summary}</td>
            </tr>
          ))}
          {emptyRows > 0 && (
            Array.from({ length: emptyRows }, (_, index) => (
              <tr key={`empty-row-${index}`} style={{ backgroundColor: '#ffffff' }}>
                {Array.from({ length: 4 }).map((_, colIndex) => (
                  <td key={colIndex} style={cellStyle}>&nbsp;</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const searchBarStyle = {
  width: '200px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
  backgroundColor: '#f3f3f3',
};

const headerStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  backgroundColor: '#007BA7',
  color: '#ffffff',
  fontWeight: 'bold',
  textAlign: 'center',
};

const cellStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'center',
  color: '#333',
};

export default FeedbackTable;
