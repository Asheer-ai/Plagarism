import React, { useState } from 'react';

function GetStarted({ onCheckPlagiarism }) {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        // If a file is uploaded, send the file to the backend
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            onCheckPlagiarism(formData);
        } else {
            // If text is entered, send the text to the backend
            onCheckPlagiarism({ text });
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
        </div>
    );
}

export default GetStarted;
