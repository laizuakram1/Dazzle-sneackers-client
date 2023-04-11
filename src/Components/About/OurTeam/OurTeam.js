import React, { useEffect, useState } from 'react';
import '../OurTeam/OurTeam.css'
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const OurTeam = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch('https://dazzle-sneackers-server.onrender.com/api/v1/ourteam')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
      <div className="bg-white">
        <h3 className="text-4xl text-bold text-center my-10">Our Team</h3>
        <div className="grid md:grid-cols-4">
          {members.map((member, i) => (
            <div className="card member-card w-80 bg-base-100 relative">
              <figure className="px-10 pt-10">
                <img src={member.image} alt="team member" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{member.name}</h2>
                <p>{member.title}</p>
              </div>
              <div className="w-40 grid grid-cols-4 gap-3 member-social absolute left-24 top-52 lg:hidden sm:block">
                <BsFacebook className="text-4xl bg-black text-white p-2 rounded-md hover:bg-red-500 duration-500 ease-in cursor-pointer" />
                <FaLinkedinIn className="text-4xl bg-black text-white p-2 rounded-md hover:bg-red-500 duration-500 ease-in cursor-pointer" />
                <BsYoutube className="text-4xl bg-black text-white p-2 rounded-md hover:bg-red-500 duration-500 ease-in cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default OurTeam;