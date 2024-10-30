import EventProfile from "@/app/eventProfile";

export default function Home() {
  return (
      <div className="home flex flex-col items-center justify-center w-full h-svh">
          <img src="eafa.svg" alt="eafa logo" style={{width: "35rem"}}/>
          <h2 className="slogan font-bold text-2xl mt-4">The Home of American Football in the UAE</h2>
          <p className="mt-16 text-center">The Alliance: Reuniting the pioneers of the most successful American football programs in the UAE.</p>
          <p className={"text-center mt-10"}>Adults | Youth | Domestic | International</p>
          <p className={"text-center mt-2"}>Tackle football | Flag football | Leagues | Tournaments | Year-round action</p>
          <h2 className={"mt-10 text-3xl font-bold text-center"}>REGISTER NOW TO GET IN THE GAME!</h2>
          <div className="socials"></div>
          <div className=" mt-16 events flex justify-around w-10/12">
              <EventProfile logo={"eafl.png"} eventTitle={"EAFL Fall Season"} eventCategory={"Youth Flag Football"} inProgress={true} registerLink={"https://eafl.ae/blog/football-2024-2025-season/"} websiteLink={"https://eafl.ae"} registerButtonText={"Register Now"}/>
              <EventProfile logo={"egl.png"} eventTitle={"Eagles @ Hell Hounds"} eventCategory={"Adult American Football"} inProgress={false} eventDate={"16 November"} registerLink={"https://docs.google.com/forms/d/e/1FAIpQLSc1yVyFRnKuFaJNe1cVf4EBEA2gHVprdxtkTJB6onDldEw2kQ/viewform"} websiteLink={"https://egl.ae"} registerButtonText={"Register Now"}/>
              <EventProfile eventTitle={"EFFL UAE Championship"} eventCategory={"Youth/Adult Flag Football"} inProgress={false} eventDate={"23 November"} registerLink={"http://eafa.me"} registerButtonText={"Register Your Team"}/>
          </div>
          <p className={"mt-16 text-center"}>The EAFA website is under construction. Tune into our social media for exciting updates and keep checking back here to stay in the game!</p>
          <div className="socials flex gap-5 mt-5">
              <a href="https://www.instagram.com/eafa.me/"><img src="instagram.svg" alt="instagram"/></a>
              <a href="https://x.com/eafa_me"><img src="twitter.svg" alt="twitter"/></a>
              <a href=""><img src="facebook.svg" alt="facebook"/></a>
              <a href="https://www.linkedin.com/company/emirates-american-football-alliance/"><img src="linkedin.svg" alt="linkedin"/></a>
          </div>
      </div>
  );
}
