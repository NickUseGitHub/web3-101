import { useEffect, useRef, useState } from "react";
import Web3 from "web3";

declare global {
  interface Window {
    ethereum: any;
  }
}

type EthereumAccount = string;

export default function LoginWeb3() {
  const [accounts, setAccounts] = useState<EthereumAccount[]>([]);
  const w3Instance = useRef<Web3 | null>(null);

  const onBtnLoginClick = async () => {
    if (!w3Instance.current || !window.ethereum) {
      return;
    }

    try {
      await window.ethereum.enable();
      const accounts = await w3Instance.current.eth.getAccounts();

      setAccounts(accounts);
    } catch (err) {
      console.error(err);
    }
  };
  const onBtnLogoutClick = () => setAccounts([]);

  const isShowLoginButton = accounts && accounts.length === 0;
  const isShowLogoutButton = isShowLoginButton !== true;

  useEffect(function getWeb3Instance() {
    if (window.ethereum) {
      w3Instance.current = new Web3(window.ethereum);
    }
  }, []);

  return (
    <div>
      <h1>Test Login</h1>
      {accounts && accounts.length > 0 && (
        <ul>
          {accounts.map((account) => (
            <li>{account}</li>
          ))}
        </ul>
      )}
      <br />
      {isShowLoginButton && (
        <div>
          <button onClick={onBtnLoginClick}>Login w3</button>
        </div>
      )}
      {isShowLogoutButton && (
        <div>
          <button onClick={onBtnLogoutClick}>Logout w3</button>
        </div>
      )}
    </div>
  );
}
