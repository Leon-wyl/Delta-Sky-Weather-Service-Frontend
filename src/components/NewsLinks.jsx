import React, { useContext } from "react";
import { List, Divider } from "antd";

const NewsLinks = () => {
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
      webTitle: "Fighting in Sudan in maps, satellite imagery and video",
      webUrl:
        "https://www.theguardian.com/world/2023/apr/18/fighting-in-sudan-in-maps-satellite-imagery-and-video",
    },
    {
      webTitle:
        " Groups fear landlords may use loophole to bypass Queensland’s new once-a-year rent-rise law",
      webUrl:
        "https://www.theguardian.com/australia-news/2023/apr/19/groups-fear-landlords-may-use-loophole-to-bypass-queenslands-new-once-a-year-rent-rise-law",
    },
    {
      webTitle:
        "Ryanair proves clueless about terms of its own Flexi Plus flight offer",
      webUrl:
        "https://www.theguardian.com/money/2023/apr/19/ryanair-proves-clueless-about-terms-of-its-own-flexi-plus-flight-offer",
    },
    {
      webTitle:
        "Solar eclipse chasers descend on tiny Western Australian town to experience ‘wonders of the universe’",
      webUrl:
        "https://www.theguardian.com/science/2023/apr/19/2023-total-solar-eclipse-chasers-western-australia-town-exmouth-ningaloo-reef",
    },
    {
      webTitle:
        "Queensland among worst violators of children’s rights in youth justice system, research finds",
      webUrl:
        "https://www.theguardian.com/australia-news/2023/apr/19/queensland-among-worst-violators-of-childrens-rights-in-youth-justice-system-research-finds",
    },
  ];
  return (
    <>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item><a href={webUrl}>{item.webTitle}</a></List.Item>}
      />
      <Divider />
    </>
  );
};

export default NewsLinks;
