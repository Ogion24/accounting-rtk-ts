import {useState} from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleClickSave = () =>{
        //TODO implement edit profile save and close func
        alert('Profile updated successfully!');
    }
    const handleClickClose = ()=> {
        ////TODO implement edit profile  close  without saving func
        alert('Profile update canceled!');
    }
    const handleClickClear = ()=> {
        ////TODO implement edit profile clear func
        alert('Profile update cleared!');
    }
    return (
        <>
            <label>First Name
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>Last Name
                <input type="text"
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={handleClickClose}>Close without saving</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;