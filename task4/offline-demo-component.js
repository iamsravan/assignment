const OfflineDemoComponent = () => {
  const [demoState, setDemoState] = React.useState(false);
  const [content, setContent] = React.useState("");
  const buttonText = demoState ? "ON" : "OFF";
  const postToggleDemo = (demoState) => {
    fetch(`http://localhost:8089/data/bigquery/search/toggleDemo`, {
      method: "post",
      body: JSON.stringify({ isDemo: demoState }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDemoState(data.isDemo);
      });
  };
  React.useEffect(() => {
    postToggleDemo(demoState);
  }, []);
  const fetchData = () => {
    fetch(`http://localhost:8089/data/bigquery/search/getOfflineData`, {
      method: "post",
      body: JSON.stringify({
        elasticQueryName: "Department_tile_view",
        filters: [],
        filter: [],
        dynamicColumns: [
          { columnName: "{#budget}", columnValue: ["budget"] },
          { columnName: "{#sort}", columnValue: ["desc"] },
          { columnName: "{#fiscal_year}", "column//Value": [2020] },
          { columnName: "{#agency_name}", columnValue: [""] },
        ],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContent(data);
      });
  };
  return (
    <div>
      <div>
        <button
          onClick={() => postToggleDemo(!demoState)}
        >{`Demo Status ${buttonText}`}</button>
      </div>

      <div>
        <button onClick={() => fetchData()}>fetchData</button>
        {content.length > 0 && <div>{JSON.stringify(content)}</div>}
      </div>
    </div>
  );
};

ReactDOM.render(<OfflineDemoComponent />, document.getElementById("root"));
