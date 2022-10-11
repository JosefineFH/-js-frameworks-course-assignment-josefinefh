import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataUrl } from "../../api/Api";
import Loader from "../common/Loader";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getPosts() {
      try {
        const response = await axios.get(dataUrl);
        const posts = response.data;
        setPosts(posts);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoader(false);
      }
    }

    getPosts();
  }, []);

  if (loader) {
    return (
      <div className="page__detail">
        <Loader />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return <div>Error: An error occurred</div>;
  }

  return (
    <CardGroup>
      {posts.map((posts) => {
        const formatDate = moment(posts.date).format("DD MMMM YY");

        return (
          <Link to={`/posts/${[posts.id]}`} key={posts.id} value={posts.id}>
            <Card>
              <Card.Title>{posts.title.rendered}</Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{
                  __html: `<p>${posts.excerpt.rendered}</p>`,
                }}
              ></Card.Text>
              <Card.Footer>
                <small className="text-muted">{formatDate}</small>
              </Card.Footer>
            </Card>
          </Link>
        );
      })}
    </CardGroup>
  )

}