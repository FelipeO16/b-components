export default async function (
  url: string,
  method: string,
  body?: any
): Promise<any> {
  let options = {
    method: method,
    url: "https://jsonplaceholder.typicode.com/" + url,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  let response = await fetch(options.url, options);
  let data = await response.json();
  return data;
}
