const Profil = () => {
  return (
    <div>
      <p>{Profil.name}</p>
      <div>
        <button>Admin</button>
        <button>Nauczyciel</button>
        <button>Uczeń</button>
        <button
          onClick={() => {
            console.log(localStorage.getItem("loggedIn"));
          }}
        >
          check
        </button>
      </div>
    </div>
  );
};

export default Profil;
