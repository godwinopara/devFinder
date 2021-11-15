const SearchUser = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <input type="text" placeholder="Search github for users repo..." />
      <button>Search Users</button>
    </form>
  );
};

export default SearchUser;
