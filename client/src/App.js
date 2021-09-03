import { ethers } from "ethers";
import { useState } from "react";
import CalculatorAbi from "./Calculator.sol-[ABI]/Calculator.json";
import { Footer } from "./components/Footer";

function App() {
  const contractAddress = "0x706Cc77e8C7Cfcc4bc6a68B7183E0e6A3e94c59a";

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [resultMsg, setResultMsg] = useState(0);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function addition() {
    if (!num1 && !num2) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        CalculatorAbi.abi,
        signer
      );
      try {
        const result = await contract.add(num1, num2);
        console.log(result);
        setResultMsg(result.toString());
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function subtraction() {
    if (!num1 && !num2) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        CalculatorAbi.abi,
        signer
      );
      try {
        const result = await contract.sub(num1, num2);
        console.log(result);
        setResultMsg(result.toString());
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function multiplication() {
    if (!num1 && !num2) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        CalculatorAbi.abi,
        signer
      );
      try {
        const result = await contract.mul(num1, num2);
        console.log(result);
        setResultMsg(result.toString());
      } catch (e) {
        console.log(e);
      }
    }
  }

  let mystle = {
    minHeight: "90vh",
  };

  return (
    <>
      <div className="container" style={mystle}>
        <h1 className="text-center my-5">
          Welcome to World's most useless Dapp! Calculator!
        </h1>

        <p className="text-center my-2">
          This project is part of my{" "}
          <a href="https://github.com/jaydeepdholakia/30-Days-Of-Smart-Contract">
            30 Days Of Smart Contract
          </a>
          . Where I code 10 different smart contract but with a UI for anyone to
          interact with.
          <br />
          Ok so while you read this, I'm in my room worrying about the
          impression which I have just set of mine on you! While I write this
          line, I am so feeling embarrassed! Out there in world people are
          making generative NFTs and here I am! Anyways...
        </p>

        <hr />

        <div className="alert alert-danger my-3">
          <center>
            <strong>NOTE: </strong> Please be connected to a test network (like
            Mumbai, Ropsten, Rinkeby), as you would not want to spend real ETH
            for Calculator!
            <br />
            (You can send it to me if you have extra 😅 (check footer) | Or you
            can just hire me!)
          </center>
        </div>

        <hr />

        <p>Number 1: </p>

        <input
          className="form-control my-3"
          id="num1"
          onChange={(e) => {
            setNum1(e.target.value);
          }}
          placeholder="Enter any number"
          type="number"
        />

        <p>Number 2: </p>

        <input
          className="form-control my-3"
          id="num2"
          onChange={(e) => {
            setNum2(e.target.value);
          }}
          placeholder="Enter any number"
          type="number"
        />

        <p>Now choose what you want to do with those numbers: </p>

        <button
          className="btn btn-primary my-2"
          onClick={() => {
            addition();
          }}
        >
          Add
        </button>
        <br />
        <button
          className="btn btn-primary my-2"
          onClick={() => {
            subtraction();
          }}
        >
          Subtract
        </button>
        <br />
        <button
          className="btn btn-primary my-2"
          onClick={() => {
            multiplication();
          }}
        >
          Multiply
        </button>
        <div className="alert my-3 shadow alert-primary">
          <p>Current value is: {resultMsg}</p>
        </div>
        <center className="my-5">
          <p>
            (If the value is not changing, then do wait for some time, it will
            work!)
          </p>
        </center>
      </div>
      <Footer />
    </>
  );
}

export default App;
