import React from "react";
import { Link } from "react-router-dom";
import "./hostvan.css";

export default function HostVans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, []);

    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single">
                <img src={van.imageUrl /* eslint-disable jsx-a11y/img-redundant-alt */} alt={'' /* eslint-disable jsx-a11y/img-redundant-alt */}/>
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ));

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {vans.length > 0 ? (
                    <section>{hostVansEls}</section>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </section>
    );
}
