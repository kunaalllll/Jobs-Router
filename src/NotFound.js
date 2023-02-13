import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores tempora, aperiam autem perferendis quam neque quis dignissimos itaque aspernatur id nobis reprehenderit voluptas quaerat! Totam laborum animi dicta in ducimus.</p>

        <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
