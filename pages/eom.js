import Image from "next/image";
import styles from "../styles/EOM.module.css";
import { Toolbar } from "../Components/Toolbar.js";

function eom({ employee }) {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={employee.image} alt={employee.name} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/kristerus/NextJS-News-App/employeeOfTheMonth"
  );
  const data = await response.json();

  return {
    props: {
      employee: data,
    },
  };
};

export default eom;
