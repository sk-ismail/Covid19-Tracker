import React, { useState, useEffect } from "react";
import axios from "./axios";
import dclasses from "./TotalData.module.css";

function TotalData({ title, fetchUrl }) {
  const [stateData, setstateData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setstateData(request.data);
      // console.table(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //function thousands_separators() {
  //  var num_parts = stateData.confirmed.toString().split(".");
  //  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //  return num_parts.join(".");
  //}

  return (
    <div className={dclasses.main}>
      <div className={dclasses.smain}>
        <h1 className={dclasses.title}>{title}</h1>
        <div>
          <td className={dclasses.table}>
            <td className={dclasses.innertable}>
              <td className={dclasses.head}>TotalCases:</td>
              <tr>
                {stateData.confirmed}
                <br></br>
                <div className={dclasses.small}>
                  (<i class="fa fa-arrow-up"></i>
                  {stateData.cChanges})
                </div>
              </tr>
            </td>
            <td className={dclasses.innertable}>
              <td className={dclasses.head}>Recovered:</td>
              <tr>
                {stateData.recovered}
                <br></br>
                <div className={dclasses.small}>
                  (<i class="fa fa-arrow-up"></i>
                  {stateData.rChanges})
                </div>
              </tr>
            </td>
            <td className={dclasses.innertable}>
              <td className={dclasses.head}>Deaths:</td>
              <tr>
                {stateData.deaths}
                <br></br>
                <div className={dclasses.small}>
                  (<i class="fa fa-arrow-up"></i>
                  {stateData.dChanges})
                </div>
              </tr>
            </td>
            <td className={dclasses.innertable}>
              <td className={dclasses.head}>Active:</td>
              <tr>
                {stateData.active}
                <br></br>
                <div className={dclasses.small}>
                  (<i class="fa fa-arrow-up"></i>
                  {stateData.aChanges})
                </div>
              </tr>
            </td>
          </td>
        </div>
      </div>
    </div>
  );
}

export default TotalData;
