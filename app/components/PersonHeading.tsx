import TopContributorBadge from '../components/TopContributorBadge.tsx';
function PersonHeading({ person }) {
  return (
  <>
      <div className="flex">
        { person.topContributor? (
          <TopContributorBadge />
        ) :
          null
        }
      <h1> 
        <span style={{display: "inline-block"}}>
        { person.alias } 
        <span className="font-mono text-2xl"> &nbsp; {person.crgaid} </span>
        </span>
      </h1>
      </div>
  </>
  );
}
export default PersonHeading;
