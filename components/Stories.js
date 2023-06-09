"use client"
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story'
function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);

    console.log(suggestions);
    }, []);

    return (
        <div className='flex space-x-2 border-gray-200 border rounded-sm overflow-x-scroll p-2 scrollbar-thin scrollbar-thumb-black'>
            {suggestions.map(profile => (
                
                <Story key={profile.id} img={profile.avatar} username={profile.username}/>
            ))}
        </div>
    )
}

export default Stories;