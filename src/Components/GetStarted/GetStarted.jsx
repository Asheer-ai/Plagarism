import React, { useState } from 'react';

function GetStarted() {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        const url = 'http://localhost:5000/check-plagiarism';

        if (file) {
            
            const formData = new FormData();
            formData.append('file', file);

            fetch(url, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                setResult(data.result); 
            })
            .catch(error => console.error('Error:', error));
        } else {
            
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            })
            .then(response => response.json())
            .then(data => {r
                setResult(data.result); 
            })
            .catch(error => console.error('Error:', error));
        }
    };

    return (
        <div style={{ backgroundColor: '#c7ecee', padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
            <h1>Upload your file or paste text below</h1>
            <input type="file" onChange={handleFileChange} />
            <textarea
                placeholder="Or paste your text here"
                style={{ width: '100%', minHeight: '300px', margin: '10px 0', padding: '10px', boxSizing: 'border-box' }}
                value={text}
                onChange={handleTextChange}
            ></textarea>
            <button
                style={{
                    backgroundColor: '#0984e3',
                    color: '#ffffff',
                    padding: '10px 20px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '20px'
                }}
                onClick={handleSubmit}
            >
                Check for Plagiarism
            </button>

            
            {result && (
                <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#dfe6e9' }}>
                    <h2>Plagiarism Check Result:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}

export default GetStarted;
