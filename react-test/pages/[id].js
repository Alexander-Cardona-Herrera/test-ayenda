import Header from "../components/header";

export default function Comic({ issue }) {
    let comic = issue.data.results
    return (
        <div className="body-custom text-center">
            <Header />
            <div className='row justify-content-center'>
                <div className="col-10 col-md-5 cover">
                    {comic[0].images.length == 0 ? <img className="cover-custom" src="/placeholder_img.jpg" /> : <img className="cover-custom" src={comic[0].images[0].path + '/detail.' + comic[0].images[0].extension} />}
                </div>
                <div className="col-10 col-md-5 justify-content-center">
                    <div className="col description">
                        <h3 className="full-title mt-md-3 pb-3 border-bottom">{comic[0].title}</h3>
                        {comic[0].creators.available == 0 ? <h4 className="creators-id"><strong>No creators available</strong></h4> : comic[0].creators.available == 1 ? <h4 className="creators-id"><strong>Creator:</strong> {comic[0].creators.items[0].name}</h4> : <h4 className="creators-id"><strong>Creators:</strong> {comic[0].creators.items.map((author) => author.name + ' (' + author.role + ') ')}</h4>}
                        {comic[0].characters.available == 0 ? <h4 className="creators-id"><strong>No characters available</strong></h4> : comic[0].characters.available == 1 ? <h4 className="creators-id"><strong>Protagonist:</strong> {comic[0].characters.items[0].name}</h4> : <h4 className="creators-id"><strong>Protagonists:</strong> {comic[0].characters.items.map((characters) => characters.name + ' ')}</h4>}
                        {comic[0].textObjects[0] == null ? <h4 className="creators-id"><strong>No description available</strong></h4> : <h4 className="creators-id"><strong>Description: </strong>{comic[0].textObjects[0].text}</h4>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://gateway.marvel.com/v1/public/comics/${context.params.id}?ts=1&apikey=62409551d28a89027fa0350af24e2e7b&hash=c0db667da47e9de9218c6dc9236fcee1`);
    const issue = await res.json();
    return {
        props: {
            issue
        }
    }
}