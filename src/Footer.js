function Footer() {
  return (
    <footer
      class="text-center text-white"
      style={{ backgroundColor: "#222221" }}
    >
      <div class="container p-4 pb-0">
        <div class="companyLogo">
          <img
            src="https://i.postimg.cc/xCxfHgWK/mystic2.png"
            alt="Honor-Copy-removebg-preview"
            border="0"
            style={{ width: "200px" }}
          />
        </div>
        <br />
        <section class="mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "100px", width: "40px" }}
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "100px" }}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "100px" }}
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "100px" }}
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "100px" }}
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Made by:
        <a class="text-white" href="#">
          &nbsp;Pratham Savjani
        </a>
      </div>
    </footer>
  );
}
export default Footer;
