import EventProfile from "@/app/eventProfile";

export default function Home() {
  return (
      <div className="home flex flex-col items-center justify-center w-full p-10">
          <img src="eafa.svg" alt="eafa logo" style={{width: "35rem"}}/>
          <h2 className="slogan font-bold text-3xl mt-24">The Home of American Football in the UAE</h2>
          <p className="mt-8 text-center text-lg">The Alliance: Uniting the pioneers of the most successful American Football programs in the UAE.</p>
          <p className={"text-center mt-4"}>Adults | Youth | Domestic | International</p>
          <p className={"text-center mt-2"}>Tackle Football | Flag Football | Leagues | Tournaments | Year-round Action</p>
          <h2 className={"mt-4 text-2xl font-bold text-center"}>REGISTER NOW TO GET IN THE GAME!</h2>

          <div className=" mt-16 events flex justify-around w-11/12">
              <EventProfile logo={"eafl.png"} eventTitle={"EAFL Fall Season"} eventCategory={"Youth Flag Football"}
                            inProgress={true} registerLink={"https://eafl.ae/blog/football-2024-2025-season/"}
                            websiteLink={"https://eafl.ae"} registerButtonText={"Register Now"} leagueName={"Emirates American Football League"}/>
              <div className="w-px h-auto bg-gray-400"></div>
              <EventProfile logo={"egl.png"} eventTitle={"Eagles @ Hell Hounds"}
                            eventCategory={"Adult American Football"} inProgress={false} eventDate={"16 November"}
                            registerLink={"https://docs.google.com/forms/d/e/1FAIpQLSc1yVyFRnKuFaJNe1cVf4EBEA2gHVprdxtkTJB6onDldEw2kQ/viewform"}
                            websiteLink={"https://egl.ae"} registerButtonText={"Register Now"} leagueName={"Emirates Gridiron League"}/>
              <div className="w-px h-auto bg-gray-400"></div>
              <EventProfile logo={"effl.png"} eventTitle={"EFFL 2024 UAE Championship"} eventCategory={"Youth/Adult Flag Football"}
                            inProgress={false} eventDate={"23 November"} registerLink={"https://docs.google.com/forms/d/e/1FAIpQLSfV3DUy2kRhADidGJSaIRwQI6DJtuhUf8r_Hwn93gRHmgocOw/viewform"}
                            registerButtonText={"Register Your Team"} leagueName={"Emirates Flag Football League"}/>
          </div>

          <p className={"mt-16 text-center"}>The EAFA website is under construction. Tune into our social media for exciting updates and keep checking back here to stay in the game!</p>
          <div className="socials flex gap-5 mt-5">
              <a href="https://www.instagram.com/eafa.me/"><img src="instagram.svg" alt="instagram"/></a>
              <a href="https://x.com/eafa_me"><img src="twitter.svg" alt="twitter"/></a>
              <a href="https://www.facebook.com/people/Emirates-American-Football-Alliance/61568182853507/"><img src="facebook.svg" alt="facebook"/></a>
              <a href="https://www.linkedin.com/company/emirates-american-football-alliance/"><img src="linkedin.svg" alt="linkedin"/></a>
          </div>
      </div>
  );
}
