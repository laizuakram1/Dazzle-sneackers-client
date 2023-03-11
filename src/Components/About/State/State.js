import React from 'react';

const State = () => {
    return (
        <div className='text-center'>
            <h3 className='text-4xl font-bold text-center mt-20 mb-10'>Customer Statistics</h3>
            <div className="stats shadow grid md:grid-cols-5 mx-20">

                <div className="stat place-items-center">
                    <div className="stat-title">Visitors</div>
                    <div className="stat-value">30+ million</div>
                    <div className="stat-desc">International and local</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Regular Customer</div>
                    <div className="stat-value text-success">42k</div>
                    <div className="stat-desc text-secondary">↗︎ 20 (3%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Foreign Customer</div>
                    <div className="stat-value">2k</div>
                    <div className="stat-desc">↘︎ 10 (4%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">men</div>
                    <div className="stat-value">25k</div>
                    <div className="stat-desc">↘︎ 50 (5%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">women</div>
                    <div className="stat-value">13k</div>
                    <div className="stat-desc">↘︎ 40 (2%)</div>
                </div>

            </div>
        </div>
    );
};

export default State;