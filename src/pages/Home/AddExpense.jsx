import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzBaGc1gfvWv29xbp0hHFQ4Eyi3uiRk8GMkA6aojTp0MvdDIJeQH8aF_-hIWp0jpYQs/exec';

const AddExpense = () => {
  const [form, setForm] = useState({ date: '', category: '', description: '', amount: '' });
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${GAS_URL}?action=addExpense`, {
      method: 'POST',
      body: JSON.stringify(form),
    });
    setMessage("✅ Expense added!");
    setForm({ date: '', category: '', description: '', amount: '' });
  };

  return (
    <div>
      <h4>➖ Add Expense</h4>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Control type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required className="mb-2" />
        <Form.Control placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required className="mb-2" />
        <Form.Control placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="mb-2" />
        <Form.Control type="number" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} required className="mb-2" />
        <Button type="submit" variant="primary">Add</Button>
      </Form>
    </div>
  );
};

export default AddExpense;
