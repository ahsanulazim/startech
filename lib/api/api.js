const serverUrl = process.env.NEXT_PUBLIC_API_BASE;

export const apiPost = async (path, body) => {
    const res = await fetch(`${serverUrl}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
}

export const apiGet = async (path) => {
    const res = await fetch(`${serverUrl}${path}`, {
        credentials: 'include'
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
}
