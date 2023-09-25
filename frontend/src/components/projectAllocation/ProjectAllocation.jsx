/* Import Section - Start */

/* React Imports - Start */

import React from "react";
import { useState, useEffect } from "react";
import "./../../App.css";
import projectAllocationService from "../../services/projectAllocation/ProjectAllocationService";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const ProjectAllocation = () => {
  const [isLoading, setisLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortItem, setSortItem] = useState({ key: "", direction: "" });
  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortItem.key === key && sortItem.direction === "ascending") {
      direction = "descending";
    }
    setSortItem({ key, direction });
  };

  const sortedData = projectData
    .filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortItem.key === "") return 0;
      const aValue = a[sortItem.key];
      const bValue = b[sortItem.key];
      if (aValue < bValue) {
        return sortItem.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortItem.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

  const projectDetails = () => {
    const email = localStorage.getItem("email");
    projectAllocationService.fetchData(email).then((res) => {
      setProjectData(res.data);
      setisLoading(false);
    });
  };

  useEffect(() => {
    projectDetails();
  }, []);

  /* Render View Return - Start */
  if (isLoading) {
    return <div>Loading the data</div>;
  }

  return (
    <div className="project-content">
      <h1>Project Allocation</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="project-search"
      />
      <br />
      <br />
      <table>
        <tr className="project-title">
          <th colSpan={7}>Project Details</th>
        </tr>
        <tr>
          <th onClick={() => requestSort("project_id")}>
            Project Id
            {sortItem.key === "project_id" &&
              (sortItem.direction === "ascending" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              ))}
          </th>

          <th onClick={() => requestSort("project_name")}>
            Project Name
            {sortItem.key === "project_name" &&
              (sortItem.direction === "ascending" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              ))}
          </th>

          <th onClick={() => requestSort("start_date")}>
            Start Date
            {sortItem.key === "start_date" &&
              (sortItem.direction === "ascending" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              ))}
          </th>

          <th onClick={() => requestSort("end_date")}>
            End Date
            {sortItem.key === "end_date" &&
              (sortItem.direction === "ascending" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              ))}
          </th>

          <th onClick={() => requestSort("reporting_manger")}>
            Reporting Manager
            {sortItem.key === "reporting_manger" &&
              (sortItem.direction === "ascending" ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              ))}
          </th>

          <th>Status</th>
        </tr>
        {sortedData &&
          sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.project_id}</td>
              <td>{item.project_name}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
              <td>{item.reporting_manager}</td>
              <td
                style={{
                  backgroundColor: function getcolor() {
                    if (
                      item.end_date < new Date().toISOString().split("T")[0]
                    ) {
                      return "red";
                    }
                  },
                }}
              >
                {item.end_date < new Date().toISOString().split("T")[0]
                  ? "Completed"
                  : item.start_date > new Date().toISOString().split("T")[0]
                  ? "Upcoming"
                  : "In-Progress"}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );

  /* Render View Return - End */
};

/* Function - End */

/* Export default functionName */

export default ProjectAllocation;
