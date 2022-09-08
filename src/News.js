import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function News() {
  let params = useParams();
  const nevigate = useNavigate();
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch(
      "https://63180168ece2736550be80e7.mockapi.io/smartphones/" + params.id
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setNews(res);
      });
  }, []);

  console.log(news);
  return (
    <>
      <br />
      <div
        class="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          class="card border-dark mb-3"
          style={{ maxWidth: "35rem", textAlign: "center" }}
        >
          <img
            class="card-img-top"
            src={news.PhoneImage}
            alt="Card image cap"
            style={{ height: "27rem" }}
          />
          <div
            class="card-header"
            style={{ color: "crimson", fontWeight: "bold", fontSize: "1.3rem" }}
          >
            {news.PhoneName}
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title">{news.PhonePrice}</h5>
            <hr />
            <table>
              <tr>
                <td>Model</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{news.PhoneModel}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{news.PhoneCompany}</td>
              </tr>
            </table>
            <hr />
            <p class="card-text">{news.PhoneDescription}</p>
            <hr />
            <table align="center">
              <tr>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    onClick={() => {
                      fetch(
                        "https://63180168ece2736550be80e7.mockapi.io/smartphones/" +
                          params.id,
                        {
                          method: "DELETE"
                        }
                      ).then((res) => {
                        nevigate("/sources");
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={() => {
                      nevigate("/sources/edit/" + params.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
