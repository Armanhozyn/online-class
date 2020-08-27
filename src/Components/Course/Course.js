import React from 'react';
const Course = (props) => {
    const { name, price, instructor } = props.course;
    return (
        <div className="course bg-primary px-2 py-3 my-3 text-white rounded">
            <h2>{name}</h2>
            <p>Price : ${price}</p>
            <button onClick={() => props.handleCourse(props.course)} className="btn btn-success">Enroll Now</button>
            <p><small>Instructor: {instructor}</small></p>
        </div>

    );
};

export default Course;