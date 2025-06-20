import React, { useEffect, useState } from 'react';
import { Card, Badge } from 'react-bootstrap';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzBaGc1gfvWv29xbp0hHFQ4Eyi3uiRk8GMkA6aojTp0MvdDIJeQH8aF_-hIWp0jpYQs/exec';

const Debts = () => {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    fetch(`${GAS_URL}?action=getUpcomingDebts`)
      .then(res => res.json())
      .then(data => setDebts(data));
  }, []);

  return (
    <div>
      <h4>📅 Upcoming Debts</h4>
      {debts.map((d, idx) => (
        <Card key={idx} className="p-2 mb-2">
          <strong>{d[1]}</strong> — ₱{d[2]} due on {d[3]}
          <Badge bg="warning" className="ms-2">{d[4]}</Badge>
        </Card>
      ))}
    </div>
  );
};

export default Debts;
