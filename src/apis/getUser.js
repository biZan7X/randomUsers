const fetchUsers = async () => {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = {
    name: data.results[0].name.first,
    email: data.results[0].email,
    image: data.results[0].picture.medium,
  };
  return user;
};

export {fetchUsers};
