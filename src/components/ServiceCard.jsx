import { Link } from "react-router-dom"

function ServiceCard({ title, description, link }) {
  return (
    <Link
      to={link}
      className="border p-6 rounded hover:shadow-lg transition block"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </Link>
  )
}

export default ServiceCard
