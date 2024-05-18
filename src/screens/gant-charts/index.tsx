import React from "react";
import { useState } from "react";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import DateFilterComponent from "./DateFilterComponent";
// import enDayjsTranslations from "dayjs/locale/en";

// const langs: any = [
//   {
//     id: "en",
//     lang: {
//       feelingEmpty: "I feel so empty...",
//       free: "Free",
//       loadNext: "Next",
//       loadPrevious: "Previous",
//       over: "over",
//       taken: "Taken",
//       topbar: {
//         filters: "Filters",
//         next: "next",
//         prev: "prev",
//         today: "Today",
//         view: "View"
//       },
//       search: "search",
//       week: "week"
//     },
//     translateCode: "en-EN",
//     dayjsTranslations: enDayjsTranslations
//   }
// ];

const mockedSchedulerData: SchedulerData = [
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/24",
      title: "Joe Doe",
      subtitle: "Frontend Developer",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date())
        ),
        endDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date("05/29/2024"))
        ),
        occupancy: 3600,
        title: "kaif A",
        subtitle: "Subtitle A",
        description: "array indexing Salad West Account",
        bgColor: "rgb(225,85,27)",
      },

      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        bgColor: "rgb(216,183,82",
        startDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date("05/25/2024"))
        ),
        endDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date("06/29/2024"))
        ),
        occupancy: 3600,
        title: "Project A",
        subtitle: "Subtitle A",
        description: "array indexing Salad West Account",
      },
    ],
  },
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/24",
      title: "kaif",
      subtitle: "Frontend Developer",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date())
        ),
        endDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date("05/29/2024"))
        ),
        occupancy: 3600,
        title: "kaif A",
        subtitle: "Subtitle A",
        description: "array indexing Salad West Account",
        bgColor: "rgb(254,165,177)",
      },

      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        bgColor: "rgb(216,183,82",
        startDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date("05/25/2024"))
        ),
        endDate: new Date(
          new Intl.DateTimeFormat("en-US").format(new Date("06/29/2024"))
        ),
        occupancy: 3600,
        title: "Project A",
        subtitle: "Subtitle A",
        description: "array indexing Salad West Account",
      },
    ],
  },
];

const GantCharts = () => {
  const [_filterButtonState, setFilterButtonState] = useState(0);
  return (
    <div className="flex gap-4 h-screen justify-center  pt-10 px-10">
     
      <div className="flex w-1/4 bg-gray-100  p-4">
      <DateFilterComponent />
      </div>
      <div className="flex w-full bg-gray-100  p-4">
        <section className="w-full  relative ">
          <Scheduler
            data={mockedSchedulerData}
            isLoading={false}
            // onRangeChange={(newRange) => alert(JSON.stringify(newRange))}
            onTileClick={(clickedResource) =>
              alert(JSON.stringify(clickedResource))
            }
            onItemClick={(item: any) => alert(JSON.stringify(item))}
            onFilterData={() => {
              // Some filtering logic...
              setFilterButtonState(1);
            }}
            onClearFilterData={() => {
              // Some clearing filters logic...
              setFilterButtonState(0);
            }}
            config={{
              zoom: 0,

              filterButtonState: -1, // to hide undie filter button 0 or 1
              // includeTakenHoursOnWeekendsInDayView : false// boolean
              // maxRecordsPerPage
              // mart5
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default React.memo(GantCharts);
