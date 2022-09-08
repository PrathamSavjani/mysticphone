import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellPhone() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
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
                  setData({ ...data, PhonePrice: "₹" + e.target.value });
                }}
                type="text"
                class="form-control"
                id="Username"
                placeholder="Smartphone Price"
              />
            </div>
          </div>
          <div class="col-md-12 my-1">
            <input
              type="text"
              class="form-control"
              id="inputEmail"
              placeholder="Your Email"
            />
          </div>
          <div class="col-md-12 my-1">
            <textarea
              class="form-control"
              id="Textarea"
              rows="3"
              placeholder="Your Address"
            ></textarea>
          </div>
          <div class="col-md-12 my-1">
            <input
              onChange={(e) => {
                setData({ ...data, PhoneImage: e.target.value });
              }}
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
              class="btn btn-lg btn-outline-dark"
              onClick={() => {
                console.log(data);
                fetch(
                  "https://63180168ece2736550be80e7.mockapi.io/smartphones/",
                  {
                    method: "POST",
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
              Submit
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
