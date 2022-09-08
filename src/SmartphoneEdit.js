import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SmartphoneEdit() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "https://63180168ece2736550be80e7.mockapi.io/smartphones/" + params.id
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      <div class="container" style={{ textAlign: "center" }}>
        <br />
        <div class="form-row align-items-center">
          <div class="col-md-12 my-1">
            <label class="sr-only" for="inlineFormInputName">
              Name
            </label>
            <input
              onChange={(e) => {
                setData({ ...data, PhoneName: e.target.value });
              }}
              value={data.PhoneName}
              type="text"
              class="form-control"
              id="name"
              placeholder="Smartphone Name"
            />
          </div>
          <div class="col-md-12 my-1">
            <label class="sr-only" for="inlineFormInputGroupUsername">
              Username
            </label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">₹</div>
              </div>
              <input
                onChange={(e) => {
                  setData({ ...data, PhonePrice: e.target.value });
                }}
                value={data.PhonePrice}
                type="text"
                class="form-control"
                id="Username"
                placeholder="Smartphone Price"
              />
            </div>
          </div>
          <div class="col-md-12 my-1">
            <input
              onChange={(e) => {
                setData({ ...data, PhoneImage: e.target.value });
              }}
              value={data.PhoneImage}
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="Smartphone image url"
            />
          </div>
          <div class="col-md-12 my-1">
            <input
              onChange={(e) => {
                setData({ ...data, PhoneCompany: e.target.value });
              }}
              value={data.PhoneCompany}
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="Smartphone Company"
            />
          </div>
          <div class="col-md-12 my-1">
            <input
              onChange={(e) => {
                setData({ ...data, PhoneModel: e.target.value });
              }}
              value={data.PhoneModel}
              type="text"
              class="form-control"
              id="inputPhone"
              placeholder="Smartphone Model"
            />
          </div>
          <div class="col-md-12 my-1">
            <textarea
              onChange={(e) => {
                setData({ ...data, PhoneDescription: e.target.value });
              }}
              value={data.PhoneDescription}
              class="form-control"
              id="Message"
              rows="3"
              placeholder="Smartphone Description"
            ></textarea>
          </div>
          <br />
          <br />
          <div class="col-md-12 my-1">
            <button
              class="btn btn-lg btn-outline-primary"
              onClick={() => {
                fetch(
                  "https://63180168ece2736550be80e7.mockapi.io/smartphones/" +
                    params.id,
                  {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }
                ).then(() => {
                  navigate("/sources");
                });
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
