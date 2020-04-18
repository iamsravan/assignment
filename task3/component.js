const SimpleForm = () => {
  const [firstName, setFistName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const logMessage = (event) => {
    event.preventDefault();
    alert(`${firstName} ${lastName}`);
  };

  return (
    <form onSubmit={(event) => logMessage(event)}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFistName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.render(<SimpleForm />, document.getElementById("root"));
