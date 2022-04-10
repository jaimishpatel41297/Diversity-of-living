import React, { useState, useEffect } from "react";
import { getFaqs } from "../../3380DiversityOfLiving-Services/FaqServiceJpa72";
import { Accordion, Card } from "react-bootstrap";


function CommonFaqJpa72() {

    const [faqs, setFaqs] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFaqData()
    }
        , [])

    function getFaqData() {
        setLoading(true);

        getFaqs()
            .then(data => {
                setFaqs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err)
                setError(err)
            });
    }


    if (loading) return (<div className="alert alert-info">Please stand by while we connect your call....</div>)
    if (error) return (<div className="alert alert-danger">There was an error loading...</div>)

    return (
        <div className="row">
            <div className="container col-md-9">
                <Accordion>
                    {faqs.map((faq, key) => (
                        <Card key={key}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey={faq._id}>
                                    FAQ Related : {faq.country}. click to open it.
                         </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={faq._id}>
                                <Card.Body><h5 className="card-text">Faq Related: {faq.country}</h5>
                                    <h5 className="card-title">Question: {faq.faqquestion}</h5>
                                    <h6 className="card-text">Answer: {faq.faqanswer}</h6>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>))}
                </Accordion>
            </div>
        </div>
    )
}

export default CommonFaqJpa72