import React, { useState } from "react";

export default function CRMApp() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");

  const addCustomer = () => {
    if (!name) return;
    setCustomers([
      ...customers,
      { id: Date.now(), name, deals: [] }
    ]);
    setName("");
  };

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>CRM Prototype</h1>

      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <input
          placeholder="New customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, marginRight: 8 }}
        />
        <button onClick={addCustomer} style={{ padding: 8 }}>
          Add
        </button>
      </div>

      <div>
        {customers.map((c) => (
          <div
            key={c.id}
            style={{
              border: "1px solid #ccc",
              padding: 12,
              marginBottom: 10,
            }}
          >
            <h2>{c.name}</h2>
            <p>Deals: {c.deals.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}