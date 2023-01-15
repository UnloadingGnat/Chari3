import React from 'react'
import { Route, Routes } from 'react-router-dom';

import CreateCampaign from './pages/CreateCampaign';

import { ethers } from 'ethers';
import { Web3Button } from "@thirdweb-dev/react";

import { useContract, useContractRead } from "@thirdweb-dev/react";


export function Donate() {
  return (
    <Web3Button
      contractAddress="0xB28cca2E051ae85504FC2ad747bAea008338fBb3"
      action={(contract) => {
        contract.call("donate", 3, { value: ethers.utils.parseEther("0.00001") })
      }}
    >
      donate
    </Web3Button>
  )
}


export function Component() {
  const _owner = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const _title = "Me"
  const _description = "Test"
  const _target = 100
  const _deadline = 100
  const _image = "Test"

  return (
    <Web3Button
      contractAddress="0xB28cca2E051ae85504FC2ad747bAea008338fBb3"
      action={(contract) => {
        contract.call("createCharity", _owner, _title, _description, _target, _deadline, _image)
      }}
    >
      createCharity
    </Web3Button>
  )
}

const App = () => {

  return (
    <div className="main">
      <div className='header'>
        <div className='title'>
          Chari3
        </div>
        
        <div className='subtitle'></div>  
Introducing the first ever Decentralized Web3 Charity Solution
        </div>
        <div className='info'>
          <img className='scandal' src="scandal.png" alt="" />
          <div className='account'>
            <div className='text'>This is the problem with current charities:</div>
            <div className='text2'>Lack Of Accountability</div>
          <div className='text3'>Using distributed ledger technology will result in promoting donator trust for charitable organizations. </div>

          </div>
        </div>
        <div className='info2'>
          <div className='monarchy'>

          </div>

        </div>


      <div className='create'>
        <form class="form-container">
        <div className='title'>Create a Chari3!</div>
        <div className='description'>A Chari3 is deployed on the blockchain where all donations are PUBLIC</div>
        <div className='forms'>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a charity name" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a Description" />
            </div>

            <div className='buttoncreate'>
              <Component />
            </div>
         
        </div>
        </form>

      </div>
      <div className='donate'>
        <form class="form-container">
        <div className='title'>Donate to a Chari3!</div>
        <div className='left'>
          <div className='description'>Donation to a Chari3 are PUBLIC</div>
          <div className='forms'>
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a charity name" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter an Amount" />
              </div>

              <div className='buttoncreate'>
                <Donate />
              </div>
          
          </div>

        </div>
        </form>

      </div>
      <div className='footer'></div>

      </div>
  )
}

export default App