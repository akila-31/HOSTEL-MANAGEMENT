import React, { useEffect, useState } from 'react';

const OutsidersData = () => {
    const [outsiders, setOutsiders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchOutsiders();
    }, []);

    const fetchOutsiders = async () => {
        try {
            const response = await fetch('http://localhost:8080/outsider/all'); // Adjust your endpoint accordingly
            const data = await response.json();
            setOutsiders(data);
        } catch (error) {
            console.error('Error fetching outsiders:', error);
        }
    };

    const filteredData = outsiders.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const totalRows = 10;
    const rows = filteredData.slice(0, totalRows);
    const emptyRows = totalRows - rows.length;

    return (
        <div>
            <div style={headerContainerStyle}>
                <h2 style={{ margin: '15px 0' }}>Outsiders Registration Data</h2>
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
                        {[
                            "Full Name", "Age", "Gender", "Contact Number", "Address", 
                            "Date of Birth", "Guardian Name", "Guardian Contact", 
                            "Purpose of Stay", "Physical Limitations"
                        ].map((header, index) => (
                            <th key={index} style={headerStyle}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, index) => (
                        <tr
                            key={index}
                            style={{
                                backgroundColor: index % 2 === 0 ? '#ffffff' : '#eaf4fb',
                            }}
                        >
                            <td style={cellStyle}>{item.fullName}</td>
                            <td style={cellStyle}>{item.age}</td>
                            <td style={cellStyle}>{item.gender}</td>
                            <td style={cellStyle}>{item.contactNumber}</td>
                            <td style={cellStyle}>{item.address}</td>
                            <td style={cellStyle}>{item.dob}</td>
                            <td style={cellStyle}>{item.guardianName}</td>
                            <td style={cellStyle}>{item.guardianContact}</td>
                            <td style={cellStyle}>{item.purposeOfStay}</td>
                            <td style={cellStyle}>{item.physicalLimitations}</td>
                        </tr>
                    ))}
                    {emptyRows > 0 &&
                        Array.from({ length: emptyRows }, (_, index) => (
                            <tr key={`empty-row-${index}`} style={{ backgroundColor: '#ffffff' }}>
                                {Array.from({ length: 10 }).map((_, colIndex) => (
                                    <td key={colIndex} style={cellStyle}>&nbsp;</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

const headerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Aligns items at the ends of the container
    alignItems: 'center',
    marginBottom: '15px',
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

export default OutsidersData;
