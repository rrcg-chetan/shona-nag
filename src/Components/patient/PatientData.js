import React, { useState } from "react";
import PatientsData from '../Components/patinet/PatientsData';

const UserData = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3>User Data</h3>
                    <PatientsData />
                </div>
            </div>            
        </>
    );
};

export default UserData;