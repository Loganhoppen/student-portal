"use client"; 

/**
 * @file page.js
 * @description This file is the main entry point for the student portal application. It renders the Navbar, StudentList, AddStudentForm, and Footer components. It also manages the state for the list of students and handles adding new students.
 * @date 2000-11-14
 * @author logan Hoppen
 */

import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import StudentList from './components/studentlist';
import Footer from './components/footer';
import AddStudentForm from './components/addstudentform';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/students.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setStudents(data))
      .catch(error => setError(error.message));
  }, []);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Student List</h2>
          {error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            <StudentList students={students} />
          )}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Add New Student</h2>
          <AddStudentForm addStudent={addStudent} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
