function Header(props) {
  return (
    <header className="nav">
      <h1 className="nav__header">Snaps</h1>
      <button onClick={props.setStatus} className="nav__button">
        Filter
      </button>
    </header>
  );
}

export default Header;
