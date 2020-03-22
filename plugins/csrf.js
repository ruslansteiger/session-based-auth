export default () => {
  fetch('http://127.0.0.1:8000/api/csrf-cookie', {
    credentials: 'include',
  })
}
