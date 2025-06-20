import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Dashboard from './pages/Home/Dashboard';
import AddExpense from './pages/Home/AddExpense';
import AddIncome from './pages/Home/AddIncome';
import Debts from './pages/Home/Debts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">💰 Budget App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/add-expense">Add Expense</Nav.Link>
              <Nav.Link as={Link} to="/add-income">Add Income</Nav.Link>
              <Nav.Link as={Link} to="/debts">Debts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/add-income" element={<AddIncome />} />
          <Route path="/debts" element={<Debts />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
