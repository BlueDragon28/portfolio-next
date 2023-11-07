export default function IntroductionText(
  { className } : { className?: string }
) {
  return (
    <div className={className}>
      <p className="my-3 text-justify">
        Passionné de programmation et de tout ce qui touche à l&apos;informatique/électronique que j&apos;ai commencé à apprendre à l&apos;âge de 13 ans, j&apos;ai décidé d&apos;en faire mon métier. Étant curieux de nature, j&apos;aime expérimenter et découvrir de nouvelles technologies.
      </p>
      <p className="my-3 text-justify">
        J&apos;ai réalisé de nombreux projets dans de nombreux domaines (programmation, réseaux, machines virtuelles...), je possède donc une connaissance approfondie de la programmation et sais m&apos;adapter rapidement à de nouveaux environnements.
      </p>
    </div>
  );
}
