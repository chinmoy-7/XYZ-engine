import React, { useContext } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import 'jspdf-autotable';

export  const generatePDF = (data) => {
    const doc = new jsPDF();

    // Add header
    doc.setFontSize(18);
    doc.text('Array to PDF', 105, 15, 'center');

    // Create table
    const columns = ['KP', 'X','Y','Z'];
    const rows = data.map(item => [item.KP, item.X,item.Y,item.Z]);

    doc.autoTable({
      startY: 30, // Start table below header
      head: [columns],
      body: rows,
    });

    doc.save('output.pdf');
  };

