import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
const {id} = useParams()
    return(
        <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>
            <p className="text-lg text-gray-600">User ID: {id}</p>
        </div>
    )
}