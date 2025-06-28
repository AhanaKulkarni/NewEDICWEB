
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Download, FileText } from 'lucide-react';
import jsPDF from 'jspdf';

interface InvoiceData {
  invoiceNumber: string;
  date: string;
  clientName: string;
  clientAddress: string;
  items: Array<{
    description: string;
    quantity: number;
    rate: number;
    amount: number;
  }>;
  total: number;
}

export default function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: '',
    date: new Date().toISOString().split('T')[0],
    clientName: '',
    clientAddress: '',
    items: [{ description: '', quantity: 1, rate: 0, amount: 0 }],
    total: 0
  });

  const updateItem = (index: number, field: string, value: any) => {
    const newItems = [...invoiceData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    if (field === 'quantity' || field === 'rate') {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }
    
    const total = newItems.reduce((sum, item) => sum + item.amount, 0);
    setInvoiceData({ ...invoiceData, items: newItems, total });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: '', quantity: 1, rate: 0, amount: 0 }]
    });
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    
    // Header
    pdf.setFontSize(20);
    pdf.text('TCET EDIC', 20, 20);
    pdf.setFontSize(16);
    pdf.text('INVOICE', 20, 35);
    
    // Invoice details
    pdf.setFontSize(12);
    pdf.text(`Invoice #: ${invoiceData.invoiceNumber}`, 20, 50);
    pdf.text(`Date: ${invoiceData.date}`, 20, 60);
    
    // Client details
    pdf.text('Bill To:', 20, 80);
    pdf.text(invoiceData.clientName, 20, 90);
    const addressLines = invoiceData.clientAddress.split('\n');
    addressLines.forEach((line, index) => {
      pdf.text(line, 20, 100 + (index * 10));
    });
    
    // Items table
    let yPosition = 130 + (addressLines.length * 10);
    pdf.text('Description', 20, yPosition);
    pdf.text('Qty', 100, yPosition);
    pdf.text('Rate', 130, yPosition);
    pdf.text('Amount', 160, yPosition);
    
    yPosition += 10;
    pdf.line(20, yPosition, 190, yPosition);
    yPosition += 10;
    
    invoiceData.items.forEach((item) => {
      pdf.text(item.description, 20, yPosition);
      pdf.text(item.quantity.toString(), 100, yPosition);
      pdf.text(`$${item.rate.toFixed(2)}`, 130, yPosition);
      pdf.text(`$${item.amount.toFixed(2)}`, 160, yPosition);
      yPosition += 10;
    });
    
    // Total
    yPosition += 10;
    pdf.line(20, yPosition, 190, yPosition);
    yPosition += 10;
    pdf.setFontSize(14);
    pdf.text(`Total: $${invoiceData.total.toFixed(2)}`, 130, yPosition);
    
    pdf.save(`invoice-${invoiceData.invoiceNumber || 'draft'}.pdf`);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Invoice Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="invoiceNumber">Invoice Number</Label>
            <Input
              id="invoiceNumber"
              value={invoiceData.invoiceNumber}
              onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNumber: e.target.value })}
              placeholder="INV-001"
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={invoiceData.date}
              onChange={(e) => setInvoiceData({ ...invoiceData, date: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              value={invoiceData.clientName}
              onChange={(e) => setInvoiceData({ ...invoiceData, clientName: e.target.value })}
              placeholder="Client Name"
            />
          </div>
          <div>
            <Label htmlFor="clientAddress">Client Address</Label>
            <Textarea
              id="clientAddress"
              value={invoiceData.clientAddress}
              onChange={(e) => setInvoiceData({ ...invoiceData, clientAddress: e.target.value })}
              placeholder="Client Address"
              rows={3}
            />
          </div>
        </div>

        <div>
          <Label>Items</Label>
          <div className="space-y-2">
            {invoiceData.items.map((item, index) => (
              <div key={index} className="grid grid-cols-5 gap-2">
                <Input
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  className="col-span-2"
                />
                <Input
                  type="number"
                  placeholder="Qty"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
                />
                <Input
                  type="number"
                  placeholder="Rate"
                  value={item.rate}
                  onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value) || 0)}
                />
                <Input
                  placeholder="Amount"
                  value={`$${item.amount.toFixed(2)}`}
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            ))}
          </div>
          <Button onClick={addItem} variant="outline" className="mt-2">
            Add Item
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            Total: ${invoiceData.total.toFixed(2)}
          </div>
          <Button onClick={generatePDF} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
