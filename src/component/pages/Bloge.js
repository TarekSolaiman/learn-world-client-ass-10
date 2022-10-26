import React from "react";

const Bloge = () => {
  return (
    <div>
      <div className=" w-4/5 mx-auto bg-gray-900 my-5 rounded-xl shadow-xl p-5">
        <h1 className="text-2xl pb-4 font-semibold">What is cors ?</h1>
        <p>
          {
            "Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF)."
          }
        </p>
      </div>
      <div className=" w-4/5 mx-auto bg-gray-900 my-5 rounded-xl shadow-xl p-5">
        <h1 className="text-2xl pb-4 font-semibold">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          {
            "Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together."
          }
        </p>
        <ul className="pt-3">
          <li>MongoDB.</li>
          <li>Oracle Database.</li>
          <li>Amazon Redshift.</li>
          <li>DataStax Enterprise.</li>
          <li>Redis Enterprise Cloud.</li>
          <li>Cloudera Enterprise Data Hub.</li>
          <li>Db2.</li>
          <li>Couchbase Server.</li>
        </ul>
      </div>
      <div className=" w-4/5 mx-auto bg-gray-900 my-5 rounded-xl shadow-xl p-5">
        <h1 className="text-2xl pb-4 font-semibold">
          How does the private route work?
        </h1>
        <p>
          {
            "The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)."
          }
        </p>
      </div>
      <div className=" w-4/5 mx-auto bg-gray-900 my-5 rounded-xl shadow-xl p-5">
        <h1 className="text-2xl pb-4 font-semibold">
          {" "}
          What is Node? How does Node work?
        </h1>
        <p>
          {
            "Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser."
          }
        </p>
        <p>
          {
            "It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive."
          }
        </p>
      </div>
    </div>
  );
};

export default Bloge;
