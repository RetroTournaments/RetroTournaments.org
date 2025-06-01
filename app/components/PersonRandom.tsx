import { Link } from "@remix-run/react";

function PersonRandom() {
  return (
    <>
      <p>
        <Link to="/persons/random">Go to a random person...</Link>
      </p>
    </>
  );
}
export default PersonRandom;
