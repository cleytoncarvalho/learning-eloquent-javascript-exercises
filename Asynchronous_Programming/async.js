let posts = [
  { title: "Post 1", description: "This is post 1" },
  { title: "Post 2", description: "This is post 2" },
];

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((post) => console.log(`${post.title} - ${post.description}`));
  }, 1000);
};

const createPost = ({ title, description }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title, description });

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error - Deu bosta!");
      }
    }, 2000);
  });
};

const init = async () => {
  await createPost({
    title: "Post 3",
    description: "This is post 3",
  });
  await createPost({
    title: "Post 4",
    description: "This is post 4",
  });

  getPosts();
};

init();
