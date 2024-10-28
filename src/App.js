// App.js or main component
import React,{useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from './email-template/email-template/EmailTemplate';
import EditEmailTemplate from './email-template/email-template/EditEmailTemplate';

const emailData = {
  title: 'Welcome to Our Platform!',
  headerImage: 'https://example.com/header-image.jpg',  // Optional: Header image URL
  content: {
    header:'Hello,',
    body:'We’re excited to have you join us. Our platform offers a wide range of features that we think you’ll find useful.'
  },
  buttonText: 'Get Started',
  buttonUrl: 'https://example.com/get-started',
  footer: 'You’re receiving this email because you signed up on our website. © 2023 Our Company'
};
const App = () => {
    // Local state to handle each editable field
    const [title, setTitle] = useState(emailData.title || '');
    const [headerImage, setHeaderImage] = useState(emailData.headerImage || '');
    const [header, setHeader] = useState(emailData.content.header || '');
    const [body, setBody] = useState(emailData.content.body || '');
    const [buttonText, setButtonText] = useState(emailData.buttonText || '');
    const [buttonUrl, setButtonUrl] = useState(emailData.buttonUrl || '');
    const [footer, setFooter] = useState(emailData.footer || '');
  const emailHtml = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplate
      title={title}
      headerImage={headerImage}
      header={emailData.content.header}
      body={emailData.content.body}
      buttonText={buttonText}
      buttonUrl={buttonUrl}
      footer={footer}
    />
  );
  const handleSave = (data) => {
    console.log('data', data)
  }
console.log('emailHtml', emailHtml)
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <EmailTemplate
        title={title}
        headerImage={headerImage}
        header={header}
        body={body}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        footer={footer}
      />
      <EditEmailTemplate 
      title={title}
      setTitle={setTitle}
      headerImage={headerImage}
      setHeaderImage={setHeaderImage}
      header={header}
      setHeader={setHeader}
      body={body}
      setBody={setBody}
      buttonText={buttonText}
      setButtonText={setButtonText}
      buttonUrl={buttonUrl}
      setButtonUrl={setButtonUrl}
      footer={footer}
      setFooter={setFooter}
      onSave={handleSave}/>
    </div>
  );
};

export default App;
