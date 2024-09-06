import { useEffect } from "react";
import { ajaxCall } from "../axios/AjaxCall";
declare const window:any;

const JobPortal = () => {
  const heading = "Jobs Portal";
  const AmazonAPI = () => {
    delete window.document.referrer;
    window.document.__defineGetter__('referrer', function () {
        return "https://www.amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&country%5B%5D=USA&distanceType=Mi&radius=24km&latitude=38.89037&longitude=-77.03196&loc_group_id=&loc_query=United%20States&base_query=&city=&country=USA&region=&county=&query_options=&";
    });

    const headers = {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,tr;q=0.7",
      Connection: "keep-alive",
      Cookie:
        "__Host-mons-sid=133-9906859-9103461; preferred_locale=en-US; advertising_id=0ad0c8d1-46d8-43bd-9ca0-2d2b2622974d; analytics_id=c8b4ca95-4ad5-47b1-992a-5be1afc3e76a; source=%7B%22azref%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%7D; __Host-mons-ubid=134-3383136-7584523; AMCVS_CCBC879D5572070E7F000101%40AdobeOrg=1; cwr_u=72b4ee2a-1402-487d-a4de-71e344684395; _ga=GA1.2.1688527877.1725413306; _gat=1; AMCV_CCBC879D5572070E7F000101%40AdobeOrg=-1124106680%7CMCIDTS%7C19971%7CMCMID%7C55709009227574716984542389694896987102%7CMCAAMLH-1726018105%7C7%7CMCAAMB-1726018105%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1725420505s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.2.0; __Host-mons-st=nCAM38yFJf9xm7vquNBTOVMCbA6fe4VAQJ38CgJkU596M5lbstAWr6B20Ms2XwJ51mEX8XK7LAixCuWUR7HWJZdxY0NZ4F11lEonFnrSjOUslAVWHRG7d7Gu8yqKsq74bAPu6EC+Kb2QCJf8o6dxerI/Yb+JcUjgmCMMgUvVaaJeznCpC7LV0sul3EteuYFXrLyIK+zXPbnvxQ4mQneCnIxlMXpeU/MKE83jHIM2be4HWcsD+30RqRfOf4Der1/7SEWRuxpbvrubwym6QSqK1EViIxaOYl1L+cTaaxKohpugFmzmqD+levLLQIFQhc3mRcA1Su+8nxQ1rzjXiheJXM8/kzeuj2cZ; _gcl_au=1.1.1746509793.1725413306; csm-sid=940-0541917-0996820; s_lv_s=First%20Visit; s_cc=true; cookie_preferences=%7B%22advertising%22%3Atrue%2C%22analytics%22%3Atrue%2C%22version%22%3A2%7D; amazon_jobs_session=cFEzaTRSOWQ2elp4V0Q1aEppTTJ3Tys1WGQzSlZUYTlWdWtjUXY2UytudkZrbTljTUVlWWhQWEg3VHJqeVVUeWNGR0tTNHR6aGFxdVRTYnR0emc3SUkyREJsb3pZczh5UlNvTDIzbnJEeWFhQmxhbUt6MytrRDdjTVgwVXI2VjdQdUNhQzllZmkzdWVmb3NqWUxNZlZMb1JxaUY2d0V6czZxOGVLL0kzRFltVlNlK2JBTXhlaU9rUE85ZGsrRXBrVHZKRVlLbUx4ZHVkSjIxZGgvZXFMRWxDbTk0QUlHUGhzUG5UcXB6UGhuRHJKWlhwbmlLdytGSDVFWks4d0tSWEdSQld2OCt3SGhMbXFoNmp6VzVka01meEhGVFM4RFhjRDhkays3eXZpWXYvZGhreFIxVkdHUGRsWHpLelVOd0EvZGVUeDNYOFJiYWxBenRCalpDRTNJcFJFYTlQRDMycHFzc3Q3V0FEbVRNPS0tdzRiQXV4c0hYWDY0bVhkQm9uSjVxUT09--413f4b4dcd338e8c322176719cb386e3b04e36f9; gpv=Amazon.jobs%20%7C%20Search; s_ppvl=Amazon.jobs%2520%257C%2520Home%2C57%2C25%2C2098%2C823%2C632%2C1280%2C720%2C1.5%2CP; cwr_s_a727750b-28d3-4e1d-81fe-8eece247d35b=eyJzZXNzaW9uSWQiOiIzZjFmY2E3NS1kOGY1LTQwMWEtYTEwZS1lNDczMDRiYzkzMDkiLCJyZWNvcmQiOnRydWUsImV2ZW50Q291bnQiOjMwLCJwYWdlIjp7InBhZ2VJZCI6Ii9lbi9zZWFyY2giLCJwYXJlbnRQYWdlSWQiOiIvZW4vIiwiaW50ZXJhY3Rpb24iOjEsInN0YXJ0IjoxNzI1NDEzMzYyNjUxfX0=; s_ppv=Amazon.jobs%2520%257C%2520Search%2C77%2C15%2C3148%2C823%2C632%2C1280%2C720%2C1.5%2CP; s_lv=1725413404482; s_nr30=1725413404483-New; s_sq=%5B%5BB%5D%5D; amazon_jobs_session=Z1ZQbk1rOEdNZkJFbURaNUNzN1VXV3BlOHFuSlduMGxqcHdXQ1Q4dVN4d3lrZEt0Nm9lZDdwUDJBZFBWUTYyc1BMa3FTenp5ZUh6QVQzVlNRWEJaVUFTc3lsRFlheEZRVDNoNVBrckpwMitUcEJEWmluUHgwQnBDaUpLUC9NQXp4L1F6TkMzSGdaMzJQQ1g0dXdmbUVEVzBWd0RSYnQ5bVo5Kzhibjg0SFo1Ny9EU2Q3NjNWdmJReWt6eERxdXBwZkFycTErT2liOGFodDQ4NDRPMHR1UlhhY0tXT2xuSWRSbnBrNDdtcnRwYz0tLWwwMllqWFZsUENkY0JvZTNwek10Zmc9PQ%3D%3D--42659eb2a71598d154ed4b870c5b602879b2795b; preferred_locale=en-US; __Host-mons-st=Xny8EhAcDz9f6zAoJ6VQvY0c8ZXL7qYilQN5Um74O25eeqGFb6TR9zGFoALr1AmLSEgEVmsTkvV8dftGyzGyJSK9tV8STnr346eujeKZrtBRlNCwnX8WFbGpkRhA06s82LvlrhhlaH3VlAMH3/tY4gWQ5bo59AQTEo05V3IbKvJ6pXghk+zKItpms5FbKuLY7gwFTXeMoElJFvwZth672hAvnA93gYU4/o3UG9M8BYQj1qpozlKa2DU+PjCH9dfDJhF+HjsT9AHVizQXBWd2KZePQ4UiiqLVVmpiaQMu1Z5KQkRzovf/KJthTZRq/xphSNvs2i/FXV2DaYv+bCJAcovg9SA4KqpU",
      Referer:
        "https://www.amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&country%5B%5D=USA&distanceType=Mi&radius=24km&latitude=38.89037&longitude=-77.03196&loc_group_id=&loc_query=United%20States&base_query=&city=&country=USA&region=&county=&query_options=&",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
    };
    // fetch("https://www.amazon.jobs/en/search.json?offset=0&result_limit=100&sort=relevant&latitude=38.89037&longitude=-77.03196&loc_group_id=&loc_query=United%20States&base_query=&city=&country=USA&region=&county=&query_options=&")
    ajaxCall({
      wholeUrl: "https://www.amazon.jobs/en/search.json?offset=0&result_limit=100&sort=relevant&latitude=38.89037&longitude=-77.03196&loc_group_id=&loc_query=United%20States&base_query=&city=&country=USA&region=&county=&query_options=&",
      headers,
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
