import logo from "./istockphoto-1364620309-612x612-removebg-preview.png";
import "./styles2.css";
import sl1 from "../Slider/slider1.jpg";
import sl2 from "../Slider/slider2.jpg";
import sl3 from "../Slider/slider3.jpg";
// import Tea from "../Slider/Tea.jpeg";
import BBC from "../NewsSites/apple.jpg";
import LAD from "../NewsSites/asus.png";
import TheHindu from "../NewsSites/nothing.png";
import ng from "../NewsSites/oppo.webp";
import reuters from "../NewsSites/realme.png";
import TIME from "../NewsSites/redmipng.png";
import TOI from "../NewsSites/samsung.png";
import WP from "../NewsSites/vivo-agencies.jpg";
import { useEffect, useState } from "react";
export default function Home() {
  let [greetings, setGreetings] = useState();
  useEffect(() => {
    const hour = new Date().getHours();
    const welcomeTypes = ["Good Morning ☀️", "Good Noon 🌞", "Good Evening 🌜"];
    let welcomeText = "";

    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];
    setGreetings(welcomeText);
  }, []);
  return (
    <>
      <div class="row maindivv">
        <div class="col-md-6 coll1">
          <h1 class="title">
            <span class="Vibes">{greetings}</span>
            <br />
            Welcome To Mystic Phone, Keeping You Updated Every Moment.
          </h1>
          <br />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ marginRight: "20px" }}
          >
            <i class="fab fa-apple"></i>
            <br />
            Download
          </button>
          <button type="button" class="btn btn-outline-light btn-lg">
            <i class="fab fa-google-play"></i>
            <br />
            Download
          </button>
        </div>
        <div class="col-md-6 coll2" style={{ textAlign: "center" }}>
          <img
            class="img-fluid"
            src={logo}
            alt=".."
            style={{ height: "90%", width: "50%", transform: "rotate(20deg)" }}
          />
        </div>
      </div>
      <section id="features" class="hava">
        <div class="row">
          <div class="col-lg-4 featurebox">
            <i class="fe-icon fas fa-smile fa-4x"></i>
            <h3 class="count">
              10000 <br />
            </h3>
            <h3> Happy Clients.</h3>
            <p style={{ color: "gray" }}>
              Client's satisfaction is our ultimate motto.
            </p>
          </div>
          <div class="col-lg-4 featurebox">
            <i class="fe-icon fas fa-handshake fa-4x"></i>
            <h3 class="count">
              130 <br />
            </h3>
            <h3> Affiliated Companies</h3>
            <p style={{ color: "gray" }}>
              We only suggest reputed companies and products.
            </p>
          </div>
          <div class="col-lg-4 featurebox">
            <i class="fe-icon fas fa-certificate fa-4x"></i>
            <h3 class="count">
              1000 <br />
            </h3>
            <h3> Ranked</h3>
            <p style={{ color: "gray" }}>
              According to 2018 analysis Just Dial Ranked us #1 all over India.
            </p>
          </div>
        </div>
      </section>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        data-interval="1200"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 img-fluid" src={sl1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={sl2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={sl3} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="intro-prob" id="problem">
        <h3>
          We proudly say that 130+ reputed Smartphone companies are associated with us
          that helps you in choosing best smartphones.
        </h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li class="media">
                <img
                  src={BBC}
                  class="align-self-center mr-3"
                  alt="bbc-news"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">Apple Inc.</h5>
                  </a>
                  <p class="para-prob">
                    A prominent hardware and software company best known for its
                    series of personal computers, the iPod and its innovative
                    marketing strategies for its products.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={TOI}
                  class="align-self-center mr-3"
                  alt="the-t-o-i"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">Samsung Electronics</h5>
                  </a>
                  <p class="para-prob">
                    Samsung, South Korean company that is one of the world's
                    largest producers of electronic devices. Samsung specializes
                    in the production of a wide variety.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={ng}
                  class="align-self-center mr-3"
                  alt="the-wp"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">Oppo Mobile</h5>
                  </a>
                  <p class="para-prob">
                    Oppo Mobile Telecommunications Corp., Ltd, doing business as
                    OPPO, is a Chinese consumer electronics manufacturer
                    headquartered in Dongguan, Guangdong.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={WP}
                  class="align-self-center mr-3"
                  alt="ng"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">Vivo</h5>
                  </a>
                  <p class="para-prob">
                    Vivo is a Chinese multinational manufacturer of smartphones
                    headquartered in Dongguan, Guangdong province, China.
                    Founded in 1995.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li class="media">
                <img
                  src={TheHindu}
                  class="align-self-center mr-3"
                  alt="the-hindu"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">NOTHING</h5>
                  </a>
                  <p class="para-prob">
                    Nothing is a consumer tech company that develops digital
                    technology to connect products and services. The company's
                    digital technology is used to remove barriers.
                  </p>
                </div>
              </li>
              <br />
              <li class="media">
                <img
                  src={TIME}
                  class="align-self-center mr-3"
                  alt="time"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="#">
                    <h5 class="mt-0 mb-1">Redmi</h5>
                  </a>
                  <p class="para-prob">
                  Redmi is a subsidiary company owned by the Chinese electronics company Xiaomi. It was first announced in July 2013 as a budget smartphone line,[1] and became a separate sub-brand of Xiaomi.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={reuters}
                  class="align-self-center mr-3"
                  alt="reuters"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="chef.html">
                    <h5 class="mt-0 mb-1">Realme</h5>
                  </a>
                  <p class="para-prob">
                  Realme is a Chinese smartphone company established on May 4, 2018 (National Youth Day of China), by former Oppo vice-president and head of overseas business department, Sky Li.
                  </p>
                </div>
              </li>
              <li class="media my-4">
                <img
                  src={LAD}
                  class="align-self-center mr-3"
                  alt="The Lad Bible"
                  height="64px"
                  width="64px"
                />
                <div class="media-body">
                  <a href="chef.html">
                    <h5 class="mt-0 mb-1">ASUS</h5>
                  </a>
                  <p class="para-prob">
                  ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989. Dedicated to creating products for today's and tomorrow's smart life, ASUS is the world's No. 1 motherboard and gaming brand.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <ul class="list-unstyled"></ul>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled"></ul>
          </div>
        </div>
      </div>
    </>
  );
}
