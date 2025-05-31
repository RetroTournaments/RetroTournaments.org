import TopContributorBadge from '../components/TopContributorBadge.tsx';
function PersonHeading({ person }) {
  return (
  <>
    <article className="prose p-4">
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
    </article>
  </>
  );
}
export default PersonHeading;
