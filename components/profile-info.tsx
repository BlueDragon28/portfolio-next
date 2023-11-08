import OutlinedLink from "./outlined-link";

export default function ProfileInfo() {
  return (
    <div className="flex sm:flex-row sm:justify-between flex-col items-center">
      <img 
        className="block rounded sm:w-[300px]"
        src="/images/profile.jpg" 
        alt="Profile picture" 
      />
      <div className="flex flex-col flex-grow justify-center items-center mt-4 sm:mt-0">
        <h1 className="font-bold text-4xl my-1">Erwan Saclier</h1>
        <div className="h-[1px] bg-gray-400 w-40 my-1"></div>
        <p className="my-1">Alternance Technicien Informatique</p>
        <div className="flex flex-row justify-around w-[300px] my-1">
          <OutlinedLink className="hover:text-gray-100" href="CV_ErwanSaclier.pdf">Obtenir CV</OutlinedLink> 
          <OutlinedLink className="hover:text-gray-100" href="/contact">Contact</OutlinedLink>
        </div>
      </div>
    </div>
  );
}
