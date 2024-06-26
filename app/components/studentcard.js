"use client";

/**
 * @file studentcard.js
 * @description This file defines the StudentCard component which displays individual student information.
 * @date 2000-11-14
 * @autor Logan Hoppen 
 */

const StudentCard = ({ student }) => (
    <div>
      <h3>{student.firstName} {student.lastName}</h3>
      <p>DOB: {student.dob}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
  export default StudentCard;
  