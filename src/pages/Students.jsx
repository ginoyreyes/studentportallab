import StudentCard from '../components/StudentCard.jsx'

const students = [
  { id: 1, name: 'Juan Dela Cruz', studentNumber: '202310001', course: 'BS Information Technology', yearLevel: '3rd Year' },
  { id: 2, name: 'Maria Santos', studentNumber: '202310002', course: 'BS Computer Science', yearLevel: '3rd Year' },
  { id: 3, name: 'Jose Rizal', studentNumber: '202310003', course: 'BS Information Technology', yearLevel: '2nd Year' },
  { id: 4, name: 'Andrea Reyes', studentNumber: '202310004', course: 'BS Computer Science', yearLevel: '4th Year' },
]

function Students() {
  return (
    <section className="page">
      <h1>Students</h1>
      <div className="card-grid">
        {students.map((s) => (
          <StudentCard
            key={s.id}
            name={s.name}
            studentNumber={s.studentNumber}
            course={s.course}
            yearLevel={s.yearLevel}
          />
        ))}
      </div>
    </section>
  )
}

export default Students