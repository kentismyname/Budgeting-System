import React, { useEffect, useState } from 'react';
import { Card, Alert } from 'react-bootstrap';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzBaGc1gfvWv29xbp0hHFQ4Eyi3uiRk8GMkA6aojTp0MvdDIJeQH8aF_-hIWp0jpYQs/exec';

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [warning, setWarning] = useState(null);

  useEffect(() => {
    fetch(`${GAS_URL}?action=getSummary`)
      .then(res => res.json())
      .then(data => {
        setSummary(data);
        if (data.balance < 0) {
          setWarning("⚠️ You're going negative! Please check your budget.");
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h4>📊 Budget Dashboard</h4>
      {summary && (
        <Card className="p-3 mb-3">
          <p><strong>Income:</strong> ₱{summary.income}</p>
          <p><strong>Expenses:</strong> ₱{summary.expenses}</p>
          <p><strong>Balance:</strong> ₱{summary.balance}</p>
        </Card>
      )}
      {warning && <Alert variant="danger">{warning}</Alert>}
    </div>
  );
};

export default Dashboard;
