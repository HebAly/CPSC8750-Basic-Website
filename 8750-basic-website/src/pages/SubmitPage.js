import { useNavigate } from "react-router";

function SubmitPage() {
  const history = useNavigate();

  const LoginPage = () => {
    history("/");
  }

  return (
    <div style={styles.main}>
      <div style={styles.primaryContainer}>
        <p style={styles.heading}>Welcome</p>
        <div style={styles.fieldContainer}>
          <p style={styles.loginText}>Home Page</p>
          <button onClick={LoginPage} style={styles.buttons}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
  },
  primaryContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b2bac2",
    borderRadius: 10,
    marginTop: 250,
    padding: 25,
    paddingTop: 10,
  },
  heading: {
    color: "black",
    fontSize: 20,
    marin: 0,
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#95a1ad",
    padding: 15,
    borderRadius: 10,
  },
  loginText: {
    padding: 0,
    margin: 0,
    fontSize: 14,
  },
  fields: {
    padding: 10,
    borderRadius: 5,
    margin: 0,
    marginBottom: 5,
  },
  buttons: {
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  login: {

  },
  submit: {

  }
}