import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles3.css";
export default function Sources() {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("https://63180168ece2736550be80e7.mockapi.io/smartphones")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPhones(res);
      });
  }, []);
  let cardSources = phones.map((phone) => {
    return (
      <>
        <div class="col-md-3">
          <div
            class="card my-3"
            style={{ width: "18rem", borderRadius: "10px" }}
          >
            <img
              class="card-img-top"
              src={phone.PhoneImage}
              alt={phone.id}
              style={{ height: "16rem", borderRadius: "10px" }}
            />
            <div class="card-body">
              <h5
                class="card-title"
                style={{ color: "crimson", fontWeight: "bold" }}
              >
                {phone.PhoneName}
              </h5>
              <hr />
              <span style={{ fontWeight: "bold" }}>{phone.PhonePrice}</span>
              <hr />
              <table>
                <tr>
                  <td>Model</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{phone.PhoneModel}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{phone.PhoneCompany}</td>
                </tr>
              </table>
              <hr />
              <Link to={"../news/" + phone.id}>
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">
                    &nbsp;&nbsp;&nbsp;View Details
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div align="center">
      <div class="row setBg" style={{ margin: "auto" }}>
        {cardSources}
      </div>
    </div>
  );
}
