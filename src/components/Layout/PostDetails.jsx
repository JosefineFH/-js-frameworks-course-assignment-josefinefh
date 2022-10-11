import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataUrl } from "../../api/Api";
import Loader from "../common/Loader";


 function GetPostDetails(){
  const [page, setPage] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    navigate.push("/");
  }

  useEffect(function () {
    async function getPosts() {
      try {
        const response = await axios.get(dataUrl + `/${id}?_embed`);
        console.log(response)
        setPage(response.data);
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
    return <div>Error: An error occurred</div>;
  }
  return (
    <div className="container">
      <h1>{page.title.rendered}</h1>
      <p className="author_name">Writer: {page._embedded.author[0].name}</p>
      <div className="blog_content"
        dangerouslySetInnerHTML={{
          __html: `<p>${page.content.rendered}</p>`,
        }}
      ></div>
    </div>
  );
}
export default GetPostDetails;