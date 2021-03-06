class EasyHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        header: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        header: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        header: { 'Content-type': 'application/json' },
      })
        .then((res) => res.json())
        .then(() => resolve('resource deleted'))
        .catch((err) => reject(err));
    });
  }
}
