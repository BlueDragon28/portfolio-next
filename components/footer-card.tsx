import Anchor from "./anchor";

export default function FooterCard() {
  return (
    <footer className="bg-blue-600 p-4">
      <div className="sm:max-w-[800px] sm:mx-auto">
        <p>Site web réalisé avec Next.js et hébergé sur une instance VPS AWS.</p>
        <p>
          Pour toutes informations, vous pouvez me contacter à l&apos;adresse email <Anchor 
            url="mailto:erwansaclierdelabatie@yahoo.fr">erwansaclierdelabatie@yahoo.fr</Anchor>
        </p>
        <p>
          Certaines des images utilisées et parfois modifiées ont été récupérées sur <Anchor 
            url="https://www.w3.org/html/logo/index.html">W3</Anchor> <Anchor 
            url="https://commons.wikimedia.org/wiki/File:CSS3_and_HTML5_logos_and_wordmarks.svg">Wikipedia</Anchor> <Anchor
            url="https://www.python.org/community/logos/">Python</Anchor> <Anchor
            url="https://dart.dev/">Dart</Anchor> <Anchor
            url="https://vercel.com/design/brands#next-js">Vercel</Anchor> <Anchor 
            url="https://www.apache.org">Apache</Anchor>
        </p>
      </div>
    </footer>
  );
}
