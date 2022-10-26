import { Link, useLoaderData } from "react-router-dom";
import AllTopic from "./AllTopic";
const Topic = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <div className="text-center">
      {topics.map((topic) => (
        <AllTopic key={topic.cat_id} topic={topic}></AllTopic>
      ))}
      <span> If you Learn some premium .</span>
      <span> Then click premiun access and filup the form</span>
      <Link to="/premium">
        <button
          type="button"
          className="flex items-center justify-center w-80 my-10 mx-auto p-3 font-semibold tracking-wide rounded-md bg-yellow-400 text-gray-900"
        >
          Get Premium Access
        </button>
      </Link>
    </div>
  );
};

export default Topic;
