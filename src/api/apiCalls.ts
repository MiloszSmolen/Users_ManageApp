export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

export const getPost = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};

export const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return response.json();
};

export const getPostComments = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return response.json();
};

export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export const getUser = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.json();
};

export const getPhotos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return response.json();
};

export const getPhoto = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return response.json();
};

export const getAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  return response.json();
};

export const getAlbum = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  );
  return response.json();
};
