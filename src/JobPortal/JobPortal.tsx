import { useContext, useEffect, useState } from "react";
import { ajaxCall } from "../axios/AjaxCall";
import Search from "antd/es/input/Search";
import { DatePicker, Select, Skeleton } from "antd";
import { dummyData } from "./DummyData";
import "./JobPortal.scss";
import OpenLink from "../Pictures/OpenLink.svg";
import ProtectedRoute from "../CommonFiles/ProtectedRoute";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";

declare const window: any;

const JobPortal = () => {
  const [userDetails, updateUserDetails] = useContext<any>(UserContext);

  const heading = "Jobs Portal";
  const [state, updateState] = useState<any>({
    allJobs: [],
    searchTitle: "",
    searchLocation: "",
    startDate: "",
    endDate: "",
    loader: true,
  });
  const AmazonAPI = () => {
    // fetch("https://www.amazon.jobs/en/search.json?offset=0&result_limit=100&sort=relevant&latitude=38.89037&longitude=-77.03196&loc_group_id=&loc_query=United%20States&base_query=&city=&country=USA&region=&county=&query_options=&")
    ajaxCall({
      url: "jobs/amazon",
    }).then((response: any) => {
      console.log("response", response);
    });
  };

  const JobsAPI = (
    title?: string,
    location?: string,
    startDate?: string,
    endDate?: string
  ) => {
    updateState((prev: any) => ({ ...prev, loader: true }));
    // let url=new URLSearchParams("");
    // let urlStr: string = `jobs/alljobs?title=${title}&location=${location}&startDate=${startDate}&endDate=${endDate}`;
    // if (title && title.length > 0) {
    //   urlStr += `title=${title}`;
    // }
    // if (location && location.length > 0) {
    //   urlStr+=``
    // }
    const sessionData: any = sessionStorage.getItem(
      `${title}-${location}-${startDate}-${endDate}-JobsData`
    );
    if (sessionData && JSON.parse(sessionData)) {
      updateState((prev: any) => ({
        ...prev,
        allJobs: JSON.parse(sessionData),
        loader: false,
      }));
    } else {
      ajaxCall({
        url: `jobs/alljobs?title=${title}&location=${location}&startDate=${startDate}&endDate=${endDate}`,
      })
        .then((response: any) => {
          console.log("all response", response);
          if (response.status === 200) {
            updateState((prev: any) => ({
              ...prev,
              allJobs: response.data,
              loader: false,
            }));
            sessionStorage.setItem(
              `${title}-${location}-${startDate}-${endDate}-JobsData`,
              JSON.stringify(response.data)
            );
          } else {
            updateState((prev: any) => ({ ...prev, allJobs: dummyData }));
          }
        })
        .catch((e) => {
          updateState((prev: any) => ({
            ...prev,
            allJobs: dummyData,
            loader: false,
          }));
        });
      // if (Object.keys(state.allJobs).length === 0) {
      //   updateState((prev: any) => ({
      //     ...prev,
      //     allJobs: dummyData,
      //     loader: false,
      //   }));
      // }
    }
  };

  const onSearch = (key: string, label: string) => {
    updateState((prev: any) => ({ ...prev, [label]: key }));
  };

  const onDateChange = (dates: any) => {
    updateState((prev: any) => ({
      ...prev,
      startDate: dates[0].format().split("T")[0],
      endDate: dates[1].format().split("T")[0],
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("active")==="true" && userDetails?.active) {
      AmazonAPI();
      JobsAPI(
        state.searchTitle,
        state.searchLocation,
        state.startDate,
        state.endDate
      );
    }
  }, [state.searchTitle, state.searchLocation, state.startDate, state.endDate]);

  return (
    <ProtectedRoute>
      <div className="d-flex-col gap-25 jobs">
        <b className="mainTitle">Job Portal</b>
        <div className="d-flex-row gap10">
          <Search
            onPressEnter={(event: any) => {
              console.log("event", event);
              onSearch(event?.target?.value, "searchTitle");
            }}
            onSearch={(value: any) => {
              onSearch(value, "searchTitle");
            }}
            placeholder="Search by title"
            style={{ width: "20%" }}
          />
          <Search
            onPressEnter={(event: any) => {
              onSearch(event?.target?.value, "searchLocation");
            }}
            onSearch={(value: any) => {
              onSearch(value, "searchLocation");
            }}
            placeholder="Search by location"
            style={{ width: "20%" }}
          />
          <DatePicker.RangePicker onChange={onDateChange} />
          {/* <DatePicker
          onBlur={(e) => {
            console.log(`[LOG] 🚀 ~~ onBlur e:`, e);
          }}
          onChange={(e) => {
            console.log(`[LOG] 🚀 ~~ onChange e:`, e);
          }}
        /> */}
          {/* <Select
        options={[{label:"Search by Title"}]}
        /> */}
        </div>
        <div className="d-flex-wrap gap-25">
          {state.loader ? (
            <Skeleton active />
          ) : (
            state.allJobs &&
            Object.keys(state.allJobs).length > 0 &&
            state.allJobs.results.map((item: any) => (
              <div className="eachJobBody">
                <div className="logoNtitle">
                  <div className="compLogo">
                    <img src={item?.company?.logo} width={20} height={20} />
                  </div>
                  <div className="titleNcompany">
                    <a
                      title={item.title}
                      rel="noreferrer"
                      target="_blank"
                      href={item.application_url}
                      style={{
                        textDecoration: "none",
                        // display: "grid",
                        // maxWidth: "fit-content",
                      }}
                    >
                      <div className="jobTitle">{item.title}</div>
                    </a>
                    <a
                      title={item.title}
                      rel="noreferrer"
                      target="_blank"
                      href={item?.company?.website_url ?? "/"}
                      className="compTitle"
                    >
                      {item?.company?.name ?? "Unrecognized Company"}
                    </a>
                  </div>
                </div>
                <a
                  title="LinkedIn"
                  rel="noreferrer"
                  target="_blank"
                  href={item?.application_url}
                  style={{ marginLeft: "15px" }}
                >
                  <img
                    src={OpenLink}
                    alt="Open Link"
                    style={{ width: "14px" }}
                  />
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default JobPortal;
