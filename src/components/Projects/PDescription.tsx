interface Props {
    project:string;
    description:string;
}

const PDescription = ({project, description}:Props) =>{
    return(
        <div>
            <h2>{project}</h2>
            <p>{description}</p>
        </div>
    )
}

export default PDescription