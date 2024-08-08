import React from 'react';

const OpenPorts = () => {
  return (
    <div className="open-ports">
      <h3>Open Ports</h3>
      <p>alex PC @76.72.149.148</p>
      <p>Open Ports Required for Crack: 4</p>
      <div className="detection-status">
        <p>Proxy Detected</p>
        <p>Firewall Detected</p>
      </div>
      <div className="port-list">
        <div className="port-item">
          <p>Port#: 80 - HTTP WebServer</p>
          <span className="port-status"></span>
        </div>
        <div className="port-item">
          <p>Port#: 25 - SMTP MailServer</p>
          <span className="port-status"></span>
        </div>
        <div className="port-item">
          <p>Port#: 21 - FTP Server</p>
          <span className="port-status"></span>
        </div>
        <div className="port-item">
          <p>Port#: 22 - SSH</p>
          <span className="port-status"></span>
        </div>
      </div>
    </div>
  );
};

export default OpenPorts;