import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';


import { ethers } from 'ethers';
import { Web3Button } from "@thirdweb-dev/react";

import { useContract, useContractRead } from "@thirdweb-dev/react";


const API_KEY = 'sk_live_30dac2d8-19ff-447a-bbe9-24e6a5b4650e';

export function ImageUpload() {
  const [filePath, setFilePath] = useState(null);
  const [allowPlatformToOperateToken, setAllowPlatformToOperateToken] = useState('');
  const [chain, setChain] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState(null);

  const handleFileUpload = (e) => {
    setFilePath(e.target.files[0]);
  }
  
  const handleSubmit = (e) => {
    const form = new FormData();
    form.append('allowPlatformToOperateToken', 'true');
    form.append('chain', 'goerli');
    form.append('name', 'test123');
    data.append('filePath', filePath);
    form.append('description', '123');
    form.append('recipientAddress', '0x372f66206a0f92A2eF3529a3D800Cbe363bfd800');
    form.append('data', '0.000123');

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_30dac2d8-19ff-447a-bbe9-24e6a5b4650e'
      }
    };

    options.body = form;

    fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromFile', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <div className="form-container">
      <h1>Chari3 NFT Minter w/ Verbwire API</h1>
      <h3>Incentivize People to Donate to your organization by rewarding them with NFTS!</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-input" type="file" onChange={handleFileUpload} />
        <input
          className="form-input"
          type="text"
          placeholder="allowPlatformToOperateToken"
          value={allowPlatformToOperateToken}
          onChange={e => setAllowPlatformToOperateToken(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="chain"
          value={chain}
          onChange={e => setChain(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="recipientAddress"
          value={recipientAddress}
          onChange={e => setRecipientAddress(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="form-button" type="submit">Upload</button>
      </form>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
    
);
}



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
        <div className='description-create'>A Chari3 is deployed on the blockchain where all donations are PUBLIC</div>
        <div className='forms-create'>
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
        <div className='footer'></div>
        <div className='footer'></div>


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
      <div className='footer'></div>
      <div className='footer'></div>
      <div>
        <ImageUpload />
      </div>
      <div className='footer'></div>


    </div>
  )
}

export default App