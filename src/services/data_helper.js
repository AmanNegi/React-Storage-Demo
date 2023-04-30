export function saveToLocalStorage(fieldData) {
  localStorage.setItem(fieldData.key, fieldData.value);
  console.log("Saved to Local Storage", localStorage.getItem(fieldData.key));
}

export function saveToSessionStorage(fieldData) {
  sessionStorage.setItem(fieldData.key, fieldData.value);
  console.log(
    "Saved to session storage",
    sessionStorage.getItem(fieldData.key)
  );
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
export function saveToCookies(fieldData) {
  const aDayInMillis = 60 * 60 * 24 * 1000;
  document.cookie = `${fieldData.key}=${fieldData.value}; expires=${new Date(
    Date.now() + aDayInMillis
  ).toUTCString()}`;

  console.log("Saved Cookie" + document.cookie);
}
