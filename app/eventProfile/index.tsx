interface Props {
    logo?: string;
    eventTitle: string;
    eventCategory: string;
    inProgress: boolean;
    eventDate?: string;
    registerLink?: string;
    websiteLink?: string;
    registerButtonText?: string;
    leagueName: string;
}

export default function EventProfile(props: Props) {

    return (
        <div className="event-container w-full h-auto px-20">
            <div className="title-logo flex items-center justify-between gap-2">
                <div className="text flex flex-col gap-1">
                    {props.inProgress ? <p className={"font-medium text-green-600"}>In Progress</p> :
                        <p className={"font-medium text-amber-500"}>{props.eventDate}</p>}
                    <h3 className={"font-medium text-xl"}>{props.eventTitle}</h3>
                    <p>{props.leagueName}</p>
                    <p>{props.eventCategory}</p>
                </div>
                {props.logo ? <img className={"object-contain w-auto h-16"} src={props.logo} alt={"league logo"}/> : ""}
            </div>
            <div className="register-visit flex justify-between items-center font-medium text-green-600 h-10 mt-10">
                {props.registerLink ? <a href={props.registerLink} target={"_blank"} className={"bg-green-600 text-white rounded-xl p-2.5 shadow-slide-before transition ease duration-700 hover:shadow-slide-after hover:text-green-600 border border-green-600"}>{props.registerButtonText}</a> : "" }
                {props.websiteLink ? <a href={props.websiteLink} target={"_blank"} className={"relative before:content-none before:absolute before:block before:w-11/12 before:h-1 before:-bottom-1 before:left-0 before:bg-green-600 before:scale-x-0 before:origin-top-left before:transition before:ease before:duration-300 hover:before:scale-x-100"}>Visit Website</a> : "" }
            </div>
        </div>
    )
}