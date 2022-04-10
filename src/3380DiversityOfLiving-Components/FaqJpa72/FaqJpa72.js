import React, { useState, useEffect } from "react";
import { getFaqsByUserID, deleteFaq, editFaq, addFaq } from "../../3380DiversityOfLiving-Services/FaqServiceJpa72";
import AddFaqJpa72 from "../AddFaqJpa72/AddFaqJpa72"
import EditFaqJpa72 from "../EditFaqJpa72/EditFaqJpa72";
import { Accordion, Card } from "react-bootstrap";
import { getCurrentUser } from '../../3380DiversityOfLiving-Services/GetCurrentUserAra65';


function FaqJpa72() {

    const [faqs, setFaqs] = useState({});
    const [UserData, setUserData] = useState("");
    const [action, setAction] = useState("insert");
    const [newfaq, setNewFaq] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [LogedinUserID, setLodedInUser] = useState("");

    useEffect(() => {
        getFaqData()
    }
        , [])

    function getFaqData() {
        setLoading(true);
        getCurrentUser(sessionStorage.getItem('token'))
            .then(data => {
                setUserData(data);
                console.log("User data" + JSON.stringify(data));
                let loggedInUserInfo = data._id;
                setLodedInUser(data._id);

                getFaqsByUserID(loggedInUserInfo)
                    .then(data => {
                        setFaqs(data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error(err)
                        setError(err)
                    });
            });
    }

    function updateFaq(e) {
        setNewFaq({
            ...newfaq,
            [e.target.id]: e.target.value
        })
    }

    async function addFaqData(e) {
        setNewFaq({
            ...newfaq,
            [e.target.id]: LogedinUserID
        })
        await addFaq(newfaq);
        getFaqData();
    }

    async function editFaqData(e) {
        await editFaq(newfaq);
        setAction("insert");
        getFaqData();
    }

    function getEditFaqForm(e) {
        e.preventDefault();

        let FaqToEdit = {};
        faqs.forEach((faq) => {
            if (faq._id === e.target.value) {
                FaqToEdit = faq;
            }
        });
        setNewFaq(FaqToEdit);
        setAction("edit")
    }

    async function deleteFaqData(e) {
        await deleteFaq(e.target.value);
        getFaqData();
    }


    if (loading) return (<div className="alert alert-info">Please stand by while we connect your call....</div>)
    if (error) return (<div className="alert alert-danger">There was an error loading...</div>)

    return (
        <div className="row">
            <div className="container col-md-8">


                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="p-3 "> Welcome {UserData.name}</div>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-4">
                            <div className="p-3 "> {UserData.email}</div>
                        </div>
                    </div>
                </div>
                <Accordion>
                    {faqs.map((faq, key) => (
                        <Card key={key}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey={faq._id}>
                                    FAQ Related : {faq.country}. click to see it.
                         </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={faq._id}>
                                <Card.Body><h5 className="card-text">Faq Related: {faq.country}</h5>
                                    <h5 className="card-title">Question:{faq.faqquestion}</h5>
                                    <h6 className="card-text">Answer: : {faq.faqanswer}</h6>
                                    <button type="button" className="btn btn-primary card-link" onClick={getEditFaqForm} value={faq._id}>Edit</button>
                                    <button type="button" className="btn btn-secondary card-link" onClick={deleteFaqData} value={faq._id}>Delete</button><br /><br /><br />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>))}

                </Accordion>

            </div>

            { (action === "insert") ?
                <AddFaqJpa72 action={addFaqData} change={updateFaq} /> : <EditFaqJpa72 action={editFaqData} change={updateFaq} currentFaq={newfaq} />
            }

        </div>

    )
}

export default FaqJpa72