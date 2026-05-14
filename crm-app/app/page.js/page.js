import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CRMApp() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");

  const addCustomer = () => {
    if (!name) return;
    setCustomers([...customers, { id: Date.now(), name, deals: [] }]);
    setName("");
  };

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">CRM Prototype</h1>

      <Card>
        <CardContent className="p-4 flex gap-2">
          <Input
            placeholder="New customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={addCustomer}>Add</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customers.map((c) => (
          <Card key={c.id}>
            <CardContent className="p-4">
              <h2 className="font-semibold">{c.name}</h2>
              <p className="text-sm text-gray-500">Deals: {c.deals.length}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}