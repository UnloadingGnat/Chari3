import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import FormField from '../components/FormField';

const CreateCampaign = () => {


    return (
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
            <form style="background-color: white; padding: 1rem; border-radius: 1rem;">
                <label class="block font-medium mb-2">
                    Email
                    <input
                        style="border: 2px solid #5c6ac4; padding: 0.5rem; border-radius: 0.5rem;"
                        type="email"
                        placeholder="example@email.com"
                    />
                </label>
                <label class="block font-medium mb-2">
                    Password
                    <input
                        style="border: 2px solid #5c6ac4; padding: 0.5rem; border-radius: 0.5rem;"
                        type="password"
                        placeholder="********"
                    />
                </label>
                <button style="background-color: #5c6ac4; color: white; padding: 0.5rem; border-radius: 0.5rem;">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateCampaign