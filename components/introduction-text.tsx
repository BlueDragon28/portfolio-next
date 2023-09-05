export default function IntroductionText(
  { className } : { className?: string }
) {
  return (
    <div className={className}>
      <p className="my-3 text-justify">
        Passionné de programmation et de tout ce qui touche à l'informatique/électronique que j'ai commencé à apprendre à l'âge de 13 ans, j'ai décidé d'en faire mon métier. Étant curieux de nature, j'aime expérimenter et découvrir de nouvelles technologies.
      </p>
      <p className="my-3 text-justify">
        J'ai réalisé de nombreux projets dans de nombreux domaines (programmation, réseaux, machines virtuelles...), je possède donc une connaissance approfondie de la programmation et sais m'adapter rapidement à de nouveaux environnements.
      </p>
    </div>
  );
}
