import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import fakeCourseData from './fakeData/onlineCourse';
import Cart from './Components/Cart/Cart';
function App() {
  const first15 = fakeCourseData.slice(0,15);
  const [courses] = useState(first15);
  const [purchase,setPurchase] = useState([]);
  const handleAddCourse = (c) => {
    const newPurchase = [...purchase,c];
    setPurchase(newPurchase);
  }

  return (
    <div className="text-center container">
      <Header className="mb-5"></Header>
      <div className="row">
        <div className="course-main col-md-8">
        <h2 className="text-white bg-warning p-2 m-4 rounded">Course Section</h2>
        {
          courses.map(c => <Course handleCourse={handleAddCourse} course={c}></Course>)
        }
          
        </div>
        <div className="col-md-4">
        <h2 className="text-white bg-warning p-2 m-4 rounded">Cart Section</h2>
        <Cart purchase = {purchase}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
