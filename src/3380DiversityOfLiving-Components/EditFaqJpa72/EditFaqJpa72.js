import React from "react"

function EditFaqJpa72(props) {
    return (
        <div className="container col-md-3 ">
            <h1>Edit Form - {props.currentFaq.country}</h1>
            <div className="mb-4">
                <label className="form-label">Question</label>
                <input className="form-control" type="text" id="faqquestion" onChange={props.change} value={props.currentFaq.faqquestion} />
            </div>
            <div className="mb-4">
                <label className="form-label">Answer</label>
                <input className="form-control" type="text" id="faqanswer" onChange={props.change} value={props.currentFaq.faqanswer} />
            </div>
            <button className="btn btn-success" onClick={props.action}> Edit Faq <i className="far fa-edit"></i></button>
            {/* Question: <input type="text" id="faqquestion" onChange={props.change} value={props.currentFaq.faqquestion} /><br />
            Answer: <input type="text" id="faqanswer" onChange={props.change} value={props.currentFaq.faqanswer} /><br /> */}

        </div>
    )
}

export default EditFaqJpa72