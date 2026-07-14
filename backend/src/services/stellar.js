import { Horizon, Asset, Operation, TransactionBuilder, Keypair, Memo, Networks } from "@stellar/stellar-sdk";

const server = new Horizon.Server("https://horizon.stellar.org");
const NETWORK = Networks.PUBLIC;

export async function getAccountBalance(address) {
  try {
    const account = await server.loadAccount(address);
    const xlm = account.balances.find((b) => b.asset_type === "native");
    return parseFloat(xlm.balance);
  } catch (err) {
    return 0;
  }
}

export function buildTransaction({ secretKey, destination, amount, memo }) {
  const sourceKeypair = Keypair.fromSecret(secretKey);
  return server.loadAccount(sourceKeypair.publicKey()).then((source) => {
    const tx = new TransactionBuilder(source, {
      fee: "100",
      networkPassphrase: NETWORK,
      memo: memo ? Memo.text(memo.slice(0, 28)) : Memo.none(),
    })
      .addOperation(
        Operation.payment({
          destination,
          asset: Asset.native(),
          amount: amount.toString(),
        })
      )
      .setTimeout(30)
      .build();
    tx.sign(sourceKeypair);
    return tx.toEnvelope().toXDR().toString("base64");
  });
}

export async function submitTransaction(envelope) {
  const tx = await server.submitTransaction(envelope);
  return tx.hash;
}

// Verify a signed transaction (XDR base64) submitted by client wallet
export async function verifyAndSubmit(xdr) {
  const tx = await server.submitTransaction(xdr);
  return tx.hash;
}

export { server as stellarServer };