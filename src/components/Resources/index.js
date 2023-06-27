import React from "react";
import { Row, Accordion, useAccordionButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import JsonNewsList from '../../assets/json/news.json';
import JsonSuccessStories from '../../assets/json/success.json';

function NewsToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <button
      type='button'
      style={{ backgroundColor: '#6D214F'}}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function SuccessToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <button
      type='button'
      style={{ backgroundColor: '#6D214F'}}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Resources = () => {
  const newsList = JsonNewsList;
  const successList = JsonSuccessStories;

  return (
    <section id="resources">
      <Row>
        <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">Resources</h1>
        <hr/>
      </Row>
      <div id="news" xs={1} md={2} className="g-4">
        <Row>
          <h1 className="text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">News</h1>
        </Row>
        <Row>
          {newsList.map((news, i) => (
            <Card key={i} id={news.id} style={{ width: '20rem' }}>
              <Card.Img
                variant="top"
                src={require(`../../assets/news/${i}.jpg`)}
                alt={news.heading}
              />
              <Card.Body>
                <Card.Title>{news.heading}</Card.Title>
                <Card.Text>
                  {news.article}
                  <Accordion flush>
                    <Accordion.Item eventKey={news.id}>
                      <NewsToggle eventKey={news.id}>Read More</NewsToggle>
                      <Accordion.Body>{news.detail}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
      <hr />
      <div id="success" xs={1} md={2} className="success g-4">
        <Row>
          <h1 className="text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">Success Cases</h1>
        </Row>
        <Row>
          {successList.map((success, i) => (
            <Card key={i} id={success.id} style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title>Project Name: {success.name}</Card.Title>
                <Card.Text>
                  Summary: {success.summary}
                  <Accordion flush>
                    <Accordion.Item eventKey={success.id}>
                      <hr />
                      <SuccessToggle eventKey={success.id}>Explore</SuccessToggle>
                      <Accordion.Body>Problem: {success.problem}</Accordion.Body>
                      <Accordion.Body>Objective: {success.objective}</Accordion.Body>
                      <Accordion.Body>Solution: {success.solution}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
      <hr/>
    </section>
  );
};

export default Resources;
