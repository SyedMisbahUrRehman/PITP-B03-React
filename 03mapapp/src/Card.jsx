
export default function Card({data}) {
    console.log(data);
    return(
        <div>
                    <div className="Card">
                    <h1>{data.title}</h1>
                    <h2>{data.subtitle}</h2>
                    <p>{data.description}</p>
                </div>
        
        </div>
    )
}