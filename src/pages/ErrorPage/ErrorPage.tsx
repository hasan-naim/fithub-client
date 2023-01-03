import React from "react";
import ErrorImg from "../../assets/errorPage.svg";

function ErrorPage() {
  return (
    <main className="my-12">
      <div className="container">
        <div>
          <img
            src={ErrorImg}
            className="mx-auto w-full max-w-[700px]"
            alt="error"
          />
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
