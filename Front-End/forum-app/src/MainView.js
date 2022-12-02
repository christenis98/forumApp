import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import DefaultContainer from "./Components/DefaultContainer";

import Thread from "./Components/Thread";

function MainView() {
  const API_URL = "https://localhost:7262/Threads";

  const [threads, setThreads] = useState([]);

  const getThreads = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getThreads().then((data) => setThreads(data));

    console.log(threads);
  }, []);

  return (
    <DefaultContainer>
      {threads.map((thread) => (
        <Thread title={thread.title} description={thread.description}></Thread>
      ))}
    </DefaultContainer>
  );
}

export default MainView;
