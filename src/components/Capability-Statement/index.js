import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import pdf from "../../assets/pdf/MelkenSolutionsCapabilityStatement.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Capability() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <Container id="capability" className="pdf-container">
      <div>
        <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">Melken's Capability Statement</h1>
        <hr/>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="pdf-document">
            <Page pageNumber={pageNumber} renderTextLayer={false} />
          </Document>
          <p>
            Page {pageNumber} of {pageNumber}
          </p>
          <div className="pdf-controls">
            <a href={pdf} download>Download</a>
          </div>
      </div>
    </Container>
  );
};

export default Capability;

