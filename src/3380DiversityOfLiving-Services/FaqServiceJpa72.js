export async function getFaqs() {
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/faq`)
        .then(response => response.json());
}
export async function getFaqsByUserID(id) {

    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/faq/${id}`)
        .then(response => response.json());
}

export async function deleteFaq(id) {
    const deleteData = JSON.stringify({ "id": id });
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/faq`,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: deleteData
        })
        .then(response => response.json())
}

export async function editFaq(newFaq) {
    const faqData = JSON.stringify(newFaq)
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/faq`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: faqData
        })
        .then(response => response.json())
}

export async function addFaq(newFaq) {

    const FaqData = JSON.stringify(newFaq)
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/faq`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: FaqData
        })
        .then(response => response.json())
}


