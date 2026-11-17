
function StudentCard({ name, studentNumber, course, yearLevel }) {
  return (
    <div className="card student-card">
      <h3>{name}</h3>
      <p><strong>Student No.:</strong> {studentNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year Level:</strong> {yearLevel}</p>
    </div>
  )
}

export default StudentCard