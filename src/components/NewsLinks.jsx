import React, { useState, useEffect, useContext } from "react";
import { List, Divider, Typography } from "antd";
import { DataContext } from "../store/DataContext";
import { fetchNews } from "../api/Api";

const NewsLinks = () => {
  const { weatherData, station } = useContext(DataContext);
  const { Title } = Typography;

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNewData = async () => {
      if (station) {
        const res = await fetchNews(station);
        setNewsData(res?.data?.data?.contentSearch?.results || []);
      } else {
        setNewsData([])
      }
    }
    getNewData();
  }, [station])

  return (
    <div>
      <Title level={4}>Related News in {weatherData[0].name}</Title>
      <List
        size="small"
        bordered
        dataSource={newsData}
        renderItem={(item) => (
          <List.Item>
            <a href={item.webUrl}>{item.webTitle}</a>
          </List.Item>
        )}
      />
      <Divider />
    </div>
  );
};

export default NewsLinks;
