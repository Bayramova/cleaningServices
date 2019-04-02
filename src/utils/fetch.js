async function fetchData(resource, method, data) {
  const response = await fetch(`http://localhost:5000/api/${resource}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw response;
  }
  return response.json();
}

function fetchCompanies() {
  return fetchData("companies");
}

function fetchServices() {
  return fetchData("services");
}

function signUp(userData) {
  return fetchData("signup", "POST", userData);
}

function signIn(userData) {
  return fetchData("signin", "POST", userData);
}

function updateUserInfo(updates) {
  return fetchData("user/profile/edit", "PUT", updates);
}

export { fetchCompanies, fetchServices, signUp, signIn, updateUserInfo };
