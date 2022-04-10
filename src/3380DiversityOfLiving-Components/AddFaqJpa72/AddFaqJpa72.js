import React from "react";

function AddFaqJpa72(props) {
    return (
        <div className="container col-md-3">
            <h1>Add Faq Form</h1>
            <div className="mb-4">
                <label  className="form-label">Related Country</label>
                <input className="form-control" type="text" id="country" onChange={props.change} placeholder="Enter related country name for faq" />
            </div>
            <div className="mb-4">
                <label  className="form-label">Question</label>
                <input className="form-control" type="text" id="faqquestion" onChange={props.change} placeholder="Enter FAQ question" />
            </div>
            <div className="mb-4">
                <label className="form-label">Answer</label>
                <input className="form-control" type="text" id="faqanswer" onChange={props.change} placeholder="Enter FAQ Answer" />
            </div>
            <button className="btn btn-success" id="userid" onClick={props.action}>Add Faq</button>

            {/* Related Country:    <input type="text" id="country" onChange={props.change} /><br />
        Question: <input type="text" id="faqquestion" onChange={props.change} /><br />
        Answer: <input type="text" id="faqanswer" onChange={props.change} /><br /> */}
        </div>
    )
}

export default AddFaqJpa72