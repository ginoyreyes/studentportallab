import CourseCard from '../components/CourseCard.jsx'

const courses = [
  { id: 1, code: 'DCIT 26', title: 'Application Development and Emerging Technologies', units: 3, instructor: 'Marlo N. Ortiz' },
  { id: 2, code: 'ITEC 85B', title: 'Information Assurance and Security 1', units: 3, instructor: 'Adrian Sanchez' },
  { id: 3, code: 'DCIT 60', title: 'Methods of Research', units: 3, instructor: 'Charlotte Carandang' },
  { id: 4, code: 'ITEC 90A', title: 'Network Fundamentals', units: 3, instructor: 'Truit Crusis' },
]

function Courses() {
  return (
    <section className="page">
      <h1>Courses</h1>
      <div className="card-grid">
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            code={c.code}
            title={c.title}
            units={c.units}
            instructor={c.instructor}
          />
        ))}
      </div>
    </section>
  )
}

export default Courses