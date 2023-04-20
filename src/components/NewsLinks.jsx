import React, { useContext } from "react";
import { List, Divider, Typography } from "antd";
import { DataContext } from "../store/DataContext";

const NewsLinks = () => {
  const { weatherData } = useContext(DataContext);
  const { Title } = Typography;
  const data = [
    {
      webTitle:
        "ACTU will not push for spot on RBA board as review released – as it happened",
      webUrl:
        "https://www.theguardian.com/australia-news/live/2023/apr/20/australia-news-live-jim-chalmers-rba-review-interest-rates-total-solar-eclipse-population-statistic-abs-foreign-interference-security-indigenous-voice-medicare",
    },
    {
      webTitle:
        "‘Otherworldly’ hybrid solar eclipse reaches totality over Australia – as it happened",
      webUrl:
        "https://www.theguardian.com/australia-news/live/2023/apr/20/total-solar-eclipse-2023-live-updates-april-20-today-hybrid-when-what-time-is-how-to-view-watch-in-australia-india-indonesia-vietnam-singapore-exmouth-latest-news",
    },
    {
      webTitle:
        "The Queensland destinations that helped inspire Cub Sport’s new album",
      webUrl:
        "https://www.theguardian.com/queensland-unlock-the-unexpected/2023/apr/20/the-queensland-destinations-that-helped-inspire-cub-sports-new-album",
    },
    {
      webTitle:
        "UK deportation centre used force 18 times to stop self-harm last year, figures show",
      webUrl:
        "https://www.theguardian.com/uk-news/2023/apr/19/brook-house-gatwick-uk-deportation-centre-18-self-harm-attempts-documents-show",
    },
    {
      webTitle:
        "What time is the total solar eclipse? Here’s how and when to view it around Australia",
      webUrl:
        "https://www.theguardian.com/science/2023/apr/20/what-time-is-the-total-solar-eclipse-heres-how-and-when-to-view-it-around-australia",
    },
    {
      webTitle: "Fighting in Sudan in maps, satellite imagery and video how and when to view it around Australia",
      webUrl:
        "https://www.theguardian.com/world/2023/apr/18/fighting-in-sudan-in-maps-satellite-imagery-and-video",
    },
  ];
  return (
    <div>
      <Title level={4}>Related News in {weatherData[0].name}</Title>
      <List
        size="small"
        bordered
        dataSource={data}
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
