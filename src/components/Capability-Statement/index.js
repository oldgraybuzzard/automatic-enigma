import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import capabilitypdf from "../../assets/pdf/MelkenSolutionsCapabilityStatement.pdf";
import gsapdf from "../../assets/pdf/MelkenSolutionsGSAContract.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Capability() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <section className="pdf-container my-5">
      <Row>
        <Col>
          <div id="capability">
            <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-3">Capability Statement</h1>
            <hr/>
              <Document file={capabilitypdf} onLoadSuccess={onDocumentLoadSuccess} className="pdf-document">
                <Page pageNumber={pageNumber} renderTextLayer={false} />
              </Document>
              <p>
                Page {pageNumber} of {pageNumber}
              </p>
              <div className="pdf-controls">
                <a href={capabilitypdf} download>Download</a>
              </div>
          </div>
        </Col>
        <Col>
          <div id="contract-vehicles">
            <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">Contract Vehicle: GSA</h1>
            <hr/>
              <Document file={gsapdf} onLoadSuccess={onDocumentLoadSuccess} className="pdf-document">
                <Page pageNumber={pageNumber} renderTextLayer={false} />
              </Document>
              <p>
                Page {pageNumber} of {pageNumber}
              </p>
              <div className="pdf-controls">
                <a href={gsapdf} download>Download</a>
              </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Capability;

