# Chari3

## Inspiration 💡
The controversy in 2020 that the WE Charity was funneling $900 million in federal COVID relief for students [1], was extremely detrimental to the charity sector as people began to lose trust in these organizations as they began to rightly ask questions related to a charity's governance, finance, lobbying, conflicts of interest, salaries and structure.

I began to realize that a pain point many prospective donators face is whether there will be transparency in if their money will go to the people they are donating to. Which is why I realized this lack of transparent accountability could be solved by using the **blockchain** which will result in promoting donator trust for charitable organizations.

## What it does 🔍 

Chari3 is my solution to solve the distrust some people might have with charitable organizations to promote donations to people in need. The first part of Chari3 is creating a Charity, this can be done by using an optimized smart contract that will create a charity on the Goerli Testnet Network. The contract is also able to hold a description which will also be stored on the blockchain. The next part is the ability to donate to a "Chari3", this what where the power of the blockchain shines, since all transactions are recorded on a public ledger organization are now unable to funnel money since they can actively be tracked on the blockchain, which will gives donators the assurance that their money is being put to good use.The final part of Chari3 is the Chari3 NFT minter using the Verbwire API. Another problem I discovered was that for some people they're wasn't enough incentive to donate to charities. Some charities reward donators with certificates but these could easily be forged, so what if donators were rewarded with an Non-Fungible Token an asset that is unique. 

## How I built it ⚙️ 

The Chari3 front end was built on Vite and CSS3.

The Chari3 Web3 back end was coded in Solidity, used the Thirdweb framework and deployed on the Goerli Testnet Network'

Chari3 NFT Minter was coded in React with the Verbwire API

## Challenges I ran into 🚧 

Many many challenges. To start off, I was not very familiar with Web3 technologies, meaning I had to learn everything from scratch. After I miraculously coded the smart-contract I had to deploy it to the Goerli Testnet, one problem though I needed GoerliETH to pay for the gas fees. After scouring the web for a working ETH faucet I finally got the smart-contract deployed to the blockchain. Finally, the ThirdWeb framework was fairley new, so there was still very limited documentation. And that was just the Web3 Backend. I also had quite a bit of trouble using the implementing the Verbwire API call in react, since this is a very new API there was not much documentation, however after a lot of trial and error I was able to get it to work! The frontend went a little bit more smoothly, but was still an incredible learning experience. I had previous experience with Next.js, but I really wanted to try something new so I decided to use Vite for this project.

## Accomplishments that I'm proud of ✔️ 

I am extremely proud of overcoming the seemingly endless stream of difficulties that come with using new, cutting edge technologies in Web3. However, I was most proud of the meaning of this project I have met many people who refuse to donate to charities, saying how most of the money is taken by administrative costs. However after building this project all those excuses are null, since there is now complete transparency in a charities finance.  All in all, I am proud to be an innovator, exploring the uncharted territories of Web3, and using it for the benefit of society!

## What I learned 📚 

I can wholeheartedly say that I have come out with significantly more knowledge on Web3 compared to when I came in! For starters, before I even began designing this project, I read multiple articles on Solidity, Smart-contracts,ThirdWeb and Verbwire. Last but not least, I learned many core skills, imperative to a software developer. Whether it’s learning to navigate extremely new documentation, or implementing a completely new smart contract within a short time span, or to invent an innovative way to fix deep rooted societal problems. I can confidently say that I have inarguably become a better developer throughout Deltahacks!

## What's next for Chari3 🚀 

I have a few things in mind to bring Chari3! to the next level:

- Make a more comprehensive Create Charity Page with the ability to add images and a charity's logo to the blockchain via ipfs
- Deploy my Chari3 smart-contracts to the ethereum mainnet
- Support even more chains
- Make a fully fledged NFT minter, so only registered charities can mint

### Verbwire Submission Video Demo: https://youtu.be/D4gyNO6Itos

### References
[1] G. Picco, “The biggest charity scandal in Canada’s history?,” The Charity Report, Aug. 14, 2020. https://www.thecharityreport.com/features/the-biggest-charity-scandal-in-canadas-history/ (accessed Jan. 15, 2023).

‌
