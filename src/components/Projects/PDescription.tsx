interface Props {
    project:string;
    description:string;
}

const PDescription = ({project, description}:Props) =>{
    return(
        <div className="my-10">
            <h2 className="text-3xl font-black">{project}</h2>
            <p className="text-2xl">{description}</p>
        </div>
    )
}

export default PDescription