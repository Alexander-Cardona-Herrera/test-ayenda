import SearchBar from "../components/searchbar";
import Buttons from "../components/buttons";
import Header from "../components/header";
import Link from 'next/link';

import { useState, Fragment } from "react";

export default function Home({ comics }) {
    let data = comics.data.results
    const [name, setName] = useState(null)
    return (
        <div className="body-custom text-center">

            <Header />
            <SearchBar />
            <h2 className="new-user text-uppercase">Are you new here? let us suggest our most popular characters!</h2>
            <Buttons setName={setName} name={name} />
            <div className='d-flex justify-content-center row'>
                {data.map(comic => {
                    return (
                        <Fragment>
                            {name == null ?
                                <Link href={`/[id]`} as={`/${comic.id}`} key={comic.id}>
                                    <a className="card col-6 col-sm-4 col-md-2 p-0 shadow">
                                        {comic.images.length == 0 ? <img className="img-custom" src="/placeholder_img.jpg" /> : <img className="img-custom" src={comic.images[0].path + '/detail.' + comic.images[0].extension} />}
                                        <div className="card-body p-2 flex">
                                            <h3 className="card-title">{comic.title}</h3>
                                            {comic.creators.available == 0 ? <h4 className="creators">No creators available</h4> : comic.creators.available == 1 ? <h4 className="creators">{comic.creators.items[0].name}</h4> : <h4 className="creators">{comic.creators.items[0].name + ' and ' + (comic.creators.available - 1) + ' more'}</h4>}
                                            {comic.prices[0].price == 0 ? <span className="price btn-danger">N/A</span> : <span className="price float-right btn-danger">{comic.prices[0].price + ' USD'}</span>}
                                        </div>
                                    </a>
                                </Link> : comic.characters.items.some((characters) => characters.name == name) == true ?
                                <Link href={`/[id]`} as={`/${comic.id}`} key={comic.id}>
                                    <a className="card col-6 col-sm-4 col-md-2 card-custom p-0 shadow">
                                        {comic.images.length == 0 ? <img className="img-custom" src="/placeholder_img.jpg" /> : <img className="img-custom" src={comic.images[0].path + '/detail.' + comic.images[0].extension} />}
                                        <div className="card-body p-2">
                                            <h3 className="card-title">{comic.title}</h3>
                                            {comic.creators.available == 0 ? <h4 className="creators">No creators available</h4> : comic.creators.available == 1 ? <h4 className="creators">{comic.creators.items[0].name}</h4> : <h4 className="creators">{comic.creators.items[0].name + ' and ' + (comic.creators.available - 1) + ' more'}</h4>}
                                            {comic.prices[0].price == 0 ? <span className="price btn-danger">N/A</span> : <span className="price btn-danger">{comic.prices[0].price + ' USD'}</span>}
                                        </div>
                                    </a>
                                    </Link> : null}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=62409551d28a89027fa0350af24e2e7b&hash=c0db667da47e9de9218c6dc9236fcee1');
    const comics = await res.json();
    return {
        props: {
            comics
        }
    }
}