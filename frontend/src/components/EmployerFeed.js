const employerFeed = ( { employerFeed } ) => {
    return (
        <>
            {employerFeed.map( employer => (
                <h3 key={employer.id}> {employer.name} {employer.age} </h3>
            ))}
        </>
    )
}

export default employerFeed