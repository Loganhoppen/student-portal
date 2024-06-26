"use client";

/**
 * @file addstudentform.js
 * @description This file defines the AddStudentForm component which provides a form for adding new students.
 * @date 2000-11-14
 * @autor Logan Hoppen
 */

import { useState } from 'react';
const AddStudentForm = ({ addStudent }) => {
  const [student, setStudent] = useState({ firstName: '', lastName: '', dob: '', grade: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({ firstName: '', lastName: '', dob: '', grade: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={student.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={student.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="dob" value={student.dob} onChange={handleChange} placeholder="Date of Birth" required />
      <input name="grade" value={student.grade} onChange={handleChange} placeholder="Grade" required />
      <button type="submit">Add Student</button>
    </form>
  );
};
export default AddStudentForm;
