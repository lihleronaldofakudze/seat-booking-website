import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ people }) {
  return (
    <div>
      {people?.map((person) => (
        <div className="card">
          <h3>{person.username}</h3>
          <h6>{person.email}</h6>
          <p>{person.phone}</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  // http://localhost:3000/api/employee/employee
  const res = await fetch("http://localhost:3000/api/user/user");
  const data = await res.json();

  return {
    props: {
      people: data,
    },
  };
};
