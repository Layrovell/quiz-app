export const fetchQuestions = async () => {
    try {
        const response = await fetch(`http://localhost:8008/api/questions/get`, {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        })

        const res = await response.json();
        return res.items;
    } catch (e) { console.warn('Error: ', e) }
}

export const createQuestion = async (question, optionA, optionB, optionC, optionD, answer) => {
    try {
        const response = await fetch(`http://localhost:8008/api/questions/create`, {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({question, optionA, optionB, optionC, optionD, answer}),
        })
        return await response.json();
    } catch (e) { console.warn('Error: ', e) }
}

export const deleteQuestion = async (id) => {
    try {
        const response = await fetch(`http://localhost:8008/api/questions/delete/${id}`, {
            method: 'GET',
        })

        await response.json();
    } catch (e) { console.warn('Error: ', e) }
}