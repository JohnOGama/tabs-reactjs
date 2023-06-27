import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setData(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  const { company, duties, title, dates } = data[value];

  return (
    <>
      <div className="max-w-[500px] mx-auto px-10 text-white">
        <h1 className="text-center text-4xl font-[700] uppercase">Jobs</h1>
        <div className=" w-full flex items-center  justify-between mt-2 rounded-t-md overflow-hidden">
          {data.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={
                index === value
                  ? "bg-gray-200 w-full text-black font-bold py-2"
                  : "w-full font-bold py-2"
              }
            >
              {item.company}
            </button>
          ))}
        </div>
        <div
          className={
            value
              ? "bg-gray-200 text-black rounded-b-md px-4"
              : "bg-gray-200 text-black rounded-b-md px-4"
          }
        >
          <h1 className=" pt-3 text-md font-bold">{title}</h1>

          <p className="text-sm text-gray-500 font-semibold">{dates}</p>
          <h1 className="text-sm font-semibold">{company}</h1>
          <div>
            <div className="pb-3">
              {duties.map((duty, index) => (
                <div key={duty.id} className="text-sm flex gap-2 mt-2">
                  <p>-</p>
                  <p>{duty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-2">Made by @John Ogama</div>
      </div>
    </>
  );
};

export default Tabs;
