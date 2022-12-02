import DefaultContainer from "./Components/DefaultContainer";
import Container from "react-bootstrap/Container";

const ThreadView = (props) => {
  const params = useParams();
  const threadId = params.threadId;

  return (
    <DefaultContainer>
      <Post threadId></Post>
    </DefaultContainer>
  );
};

export default ThreadView;
