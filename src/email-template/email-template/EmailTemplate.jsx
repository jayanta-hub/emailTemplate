// EmailTemplate.js
import React from 'react';
import './EmailTemplate.css';
const EmailTemplate = ({ title, headerImage, header,body, buttonText, buttonUrl, footer }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', padding: '20px' }}>
      {/* Header Image */}
      {headerImage && <img src={headerImage} alt="Header" style={{ width: '100%', height: 'auto' }} />}

      {/* Title */}
      {title && <h1 style={{ color: '#333', textAlign: 'center' }}>{title}</h1>}

      {/* Content */}
      <div style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
      <p>{header}</p>
      <p>{body}</p>
      </div>

      {/* Button */}
      {buttonText && buttonUrl && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <a href={buttonUrl} style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block'
          }}>
            {buttonText}
          </a>
        </div>
      )}

      {/* Footer */}
      {footer && (
        <footer style={{ color: '#888', fontSize: '12px', marginTop: '20px', textAlign: 'center' }}>
          {footer}
        </footer>
      )}
    </div>
  );
};

export default EmailTemplate;
