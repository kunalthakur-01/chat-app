export const signup = async (body) => {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    });

    const data = await response.json();
    // console.log(data)

    if(!response.ok) throw new Error(data.message);

    return data;
};

export const login = async (body) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    });

    const data = await response.json();

    if(!response.ok) throw new Error(data.message);

    return data;
};