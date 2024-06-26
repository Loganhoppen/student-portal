"use client";

/**
 * @file studentlist.js
 * @description This file defines the StudentList component which renders a list of StudentCard components.
 * @date 2000-11-14
 * @autor Logan Hoppen
 */


import StudentCard from './studentcard';
const StudentList = ({ students }) => (
  <div>
    {students.map((student, index) => (
      <StudentCard key={index} student={student} />
    ))}
  </div>
);
export default StudentList;
