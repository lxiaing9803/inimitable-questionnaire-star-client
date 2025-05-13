const HOST = "http://localhost:3005";

export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.json();
}

export async function post(url: string, data: any) {
  const res = await fetch(`${HOST}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
