import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzBaGc1gfvWv29xbp0hHFQ4Eyi3uiRk8GMkA6aojTp0MvdDIJeQH8aF_-hIWp0jpYQs/exec';

const AddIncome = () => {
  const [form, setForm] = useState({ date: '', source: '', amount: '' });
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${GAS_URL}?action=addIncome`, {
      method: 'POST',
      body: JSON.stringify(form),
    });
    setMessage("✅ Income added!");
    setForm({ date: '', source: '', amount: '' });
  };

  return (
    <div>
      <h4>➕ Add Income</h4>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Control type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required className="mb-2" />
        <Form.Control placeholder="Source" value={form.source} onChange={e => setForm({ ...form, source: e.target.value })} required className="mb-2" />
        <Form.Control type="number" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} required className="mb-2" />
        <Button type="submit" variant="success">Add</Button>
      </Form>
    </div>
  );
};

export default AddIncome;
