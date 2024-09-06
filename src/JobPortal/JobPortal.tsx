import { useEffect } from "react";
import { ajaxCall } from "../axios/AjaxCall";
declare const window:any;

const JobPortal = () => {
  const heading = "Jobs Portal";
  const AmazonAPI = () => {
    // fetch("https://www.amazon.jobs/en/search.json?offset=0&result_limit=100&sort=relevant&latitude=38.89037&longitude=-77.03196&loc_group_id=&loc_query=United%20States&base_query=&city=&country=USA&region=&county=&query_options=&")
    ajaxCall({
      url: "jobs/amazon"
    }).then((response: any) => {
      console.log("response", response);
    });
  };

  useEffect(() => {
    AmazonAPI();
  }, []);

  return <></>;
};

export default JobPortal;
