localStorage.setItem("hello", "world")

// while closing the browserTab clear the local storage  
window.addEventListener("beforeunload", () => {
  localStorage.removeItem('hello')
});
