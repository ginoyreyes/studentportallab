
function CourseCard({ code, title, units, instructor }) {
  return (
    <div className="card course-card">
      <h3>{code}</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Units:</strong> {units}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
    </div>
  )
}

export default CourseCard