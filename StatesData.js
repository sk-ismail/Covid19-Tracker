import React, { useState, useEffect } from "react";
import axios from "./axios";
import sclasses from "./StatesData.module.css";
import { Card } from "react-bootstrap";
//import { Button } from "react-bootstrap";
function StatesData({ fetchUrl }) {
  const [statesData, setstatesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setstatesData(request.data);
      // console.table(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  var count = 1;
  // console.table(statesData.districtData);

  //var distBtn = statesData.map((item) => {
  //  item.districtData.forEach((element, pos) => {
  //    console.log(element.name);
  //    <Card className={sclasses.card} key={pos}>
  //      <Card.Header>
  //        {count++}.{element.name}
  //      </Card.Header>
  //      <Card.Body>
  //        <Card.Title>
  //          Confirmed Cases:- <br></br>
  //          {element.confirmed}
  //          <div className={sclasses.cchanges}>
  //            (<i class="fa fa-arrow-up"></i>
  //            {element.cChanges})
  //          </div>
  //        </Card.Title>
  //        <Card.Text>
  //          Active Cases:- <br></br>
  //          {element.active}
  //          <div className={sclasses.achanges}>
  //            (<i class="fa fa-arrow-up"></i>
  //            {element.aChanges})
  //          </div>
  //        </Card.Text>
  //        <Card.Text>
  //          Recovered:- <br></br>
  //          {element.recovered}
  //          <div className={sclasses.rchanges}>
  //            (<i class="fa fa-arrow-up"></i>
  //            {element.rChanges})
  //          </div>
  //        </Card.Text>
  //        <Card.Text>
  //          Deaths:- <br></br>
  //          {element.deaths}
  //          <div className={sclasses.dchanges}>
  //            (<i class="fa fa-arrow-up"></i>
  //            {element.dChanges})
  //          </div>
  //        </Card.Text>
  // <Button variant="primary">
  //                 Districts
  //               </Button>
  //      </Card.Body>
  //    </Card>;
  //  });
  //});

  return (
    <div className={sclasses.main}>
      <div className={sclasses.states}>
        {statesData.map((item, pos) => {
          return (
            <Card className={sclasses.card} key={pos}>
              <Card.Header>
                {count++}.{item.state}
              </Card.Header>
              <Card.Body className={sclasses.body}>
                <Card.Title>
                  Confirmed Cases:- <br></br>
                  {item.confirmed}
                  <div className={sclasses.cchanges}>
                    (<i class="fa fa-arrow-up"></i>
                    {item.cChanges})
                  </div>
                </Card.Title>
                <Card.Text>
                  Active Cases:- <br></br>
                  {item.active}
                  <div className={sclasses.achanges}>
                    (<i class="fa fa-arrow-up"></i>
                    {item.aChanges})
                  </div>
                </Card.Text>
                <Card.Text>
                  Recovered:- <br></br>
                  {item.recovered}
                  <div className={sclasses.rchanges}>
                    (<i class="fa fa-arrow-up"></i>
                    {item.rChanges})
                  </div>
                </Card.Text>
                <Card.Text>
                  Deaths:- <br></br>
                  {item.deaths}
                  <div className={sclasses.dchanges}>
                    (<i class="fa fa-arrow-up"></i>
                    {item.dChanges})
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default StatesData;
