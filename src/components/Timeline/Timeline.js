import styles from "./Timeline.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const timelineExperienceData = [
  {
    date: "2022 - 2023",
    title: "UX Designer",
    subtitle: "Aditerna, Romania",
  },
  {
    date: "2016 - 2020",
    title: "Digital Designer",
    subtitle: "Innovisor, Denmark",
  },
  {
    date: "2015 - 2016",
    title: "Web Designer",
    subtitle: "TK Posters, Denmark",
  },
];

const timelineEducationData = [
  // {
  //   date: "2022 - 2023",
  //   title: "Front-end Development",
  //   subtitle: "IT School, Romania",
  // },
  {
    date: "2020 - 2022",
    title: "MSc IT Web Communication Design",
    subtitle: "University of Southern Denmark, Denmark",
  },
  {
    date: "2017 - 2018",
    title: "BA Top-Up E-Concept Development",
    subtitle: "Lillebaelt Academy, Denmark",
  },
  {
    date: "2013 - 2015",
    title: "AP Multimedia Design & Communication",
    subtitle: "Lillebaelt Academy, Denmark",
  },
];

export default function Timeline({ showEducation }) {
  const timelineData = showEducation
    ? timelineEducationData
    : timelineExperienceData;
  const icon = showEducation ? <MdSchool /> : <MdWork />;
  const timelineClassName = showEducation
    ? `${styles.timeline} ${styles.education}`
    : `${styles.timeline} ${styles.experience}`;

  return (
    <VerticalTimeline
      layout="1-column-left"
      lineColor={"var(--accent-color-grey)"}
      className={timelineClassName}
    >
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={styles.timelineElement}
          contentStyle={{
            background: "var(--secondary-bg-color)",
            color: "var(--body-text-color)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  var(--secondary-bg-color)",
          }}
          date={item.date}
          iconStyle={{
            background: "var(--secondary-bg-color)",
            color: "var(--body-text-color)",
          }}
          iconClassName={styles.timelineIcon}
          icon={icon}
        >
          <h4 className="vertical-timeline-element-title">{item.title}</h4>
          <h5 className="vertical-timeline-element-subtitle">
            {item.subtitle}
          </h5>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
