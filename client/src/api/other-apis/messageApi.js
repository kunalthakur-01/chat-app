export const sendMessage = async(body) => {
    const response = await fetch('http://localhost:5000/api/message/send', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    });

    const data = await response.json();
    console.log(data)

    if(!response.ok) throw new Error(data.message);

    return data;
};