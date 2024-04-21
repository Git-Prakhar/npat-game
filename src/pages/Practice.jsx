import { useEffect } from 'react'
import generateRound from '../config/GenerateRound';
import { useNavigate } from 'react-router-dom';

export default function Practice({ setRound, data, setMember , currentUser, setScore}) {

    const navigate = useNavigate();

    useEffect(() => {
        setMember(null);
        setRound(null);
        setScore(0);

        setRound(generateRound(1, data));
        createRandomMember();
        navigate('/game/name');
    }, [])

    const createRandomMember = () => {
        const names = ['John', 'Jane', 'Doe', 'Jenny', 'Micheal', 'Tom', 'Jerry', 'Harry', 'Hermione', 'Ron', 'Ginny', 'Luna', 'Neville', 'Draco', 'Dobby', 'Hagrid', 'Snape', 'Sirius', 'Remus', 'Tonks', 'Lupin', 'Bellatrix', 'Voldemort', 'Lucius', 'Narcissa', 'Dumbledore', 'McGonagall', 'Flitwick', 'Sprout', 'Trelawney', 'Lockhart', 'Moody', 'Kingsley', 'Percy', 'Fred', 'George', 'Charlie', 'Bill', 'Fleur', 'Krum', 'Cedric', 'Cho', 'Lavender', 'Parvati', 'Padma', 'Seamus', 'Dean', 'Colin', 'Nigel', 'Ernie', 'Justin', 'Zacharias', 'Marietta', 'Pansy', 'Millicent', 'Blaise', 'Theo', 'Greg', 'Vincent', 'Crabbe', 'Goyle', 'Daphne', 'Astoria', 'Tracey', 'Susan', 'Hannah', 'Ernie', 'Justin', 'Cedric', 'Cho', 'Lavender', 'Parvati', 'Padma', 'Seamus', 'Dean', 'Colin', 'Nigel', 'Ernie', 'Justin', 'Zacharias', 'Marietta', 'Pansy', 'Millicent', 'Blaise', 'Theo', 'Greg', 'Vincent', 'Crabbe', 'Goyle', 'Daphne', 'Astoria', 'Tracey', 'Susan', 'Hannah', 'Ernie', 'Justin', 'Cedric', 'Cho', 'Lavender', 'Parvati', 'Padma', 'Seamus', 'Dean', 'Colin', 'Nigel', 'Ernie', 'Justin', 'Zacharias', 'Marietta', 'Pansy', 'Millicent', 'Blaise', 'Theo', 'Greg', 'Vincent', 'Crabbe', 'Goyle', 'Daphne', 'Astoria', 'Tracey', 'Susan', 'Hannah', 'Ernie', 'Justin', 'Cedric', 'Cho', 'Lavender', 'Parvati', 'Padma', 'Seamus', 'Dean', 'Colin'];
        let members = [];
        for (let i = 0; i < 5; i++) {
            members.push({
                username: names[Math.floor(Math.random() * names.length)],
                avatar: Math.floor(Math.random() * 6),
                role: 'player',
                score: Math.floor(Math.random() * 4000) + 1000 
            })
        }
        members.push({
            username: currentUser.username,
            avatar: currentUser.avatar,
            role: 'Host',
        })
        setMember(members);
    }
    return;
}

/*

round : [
    {
        roundId: 1,
        roundLetter: 'A'
    },
    {
        roundId: 2,
        roundLetter: 'B'
    },
    {
        roundId: 3,
        roundLetter: 'C'
    }
]
*/
