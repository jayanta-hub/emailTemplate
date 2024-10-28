// EditEmailTemplate.js
import React from 'react';

const EditEmailTemplate = ({ title,setTitle, headerImage,setHeaderImage, header,setHeader, body,setBody,setContent, buttonText,setButtonText, buttonUrl,setButtonUrl, footer ,setFooter, onSave }) => {
  // Function to handle saving the updated email template
  const handleSave = () => {
    onSave({
      title,
      headerImage,
      header,
      body,
      buttonText,
      buttonUrl,
      footer,
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', padding: '20px' }}>
      {/* Header Image */}
      <div style={{ marginBottom: '10px' }}>
        <label>Header Image URL:</label>
        <input
          type="text"
          value={headerImage}
          onChange={(e) => setHeaderImage(e.target.value)}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      {/* Title */}
      <div style={{ marginBottom: '10px' }}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      {/* Header */}
      <div style={{ marginBottom: '10px' }}>
        <label>Header:</label>
        <input
          type="text"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      {/* Body */}
      <div style={{ marginBottom: '10px' }}>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ width: '100%', height: '100px', marginTop: '5px' }}
        />
      </div>

      {/* Button Text */}
      <div style={{ marginBottom: '10px' }}>
        <label>Button Text:</label>
        <input
          type="text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      {/* Button URL */}
      <div style={{ marginBottom: '10px' }}>
        <label>Button URL:</label>
        <input
          type="text"
          value={buttonUrl}
          onChange={(e) => setButtonUrl(e.target.value)}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      {/* Footer */}
      <div style={{ marginBottom: '10px' }}>
        <label>Footer:</label>
        <input
          type="text"
          value={footer}
          onChange={(e) => setFooter(e.target.value)}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      {/* Save Button */}
      <button onClick={handleSave} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Save
      </button>
    </div>
  );
};

export default EditEmailTemplate;
