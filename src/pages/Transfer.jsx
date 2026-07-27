import { useState } from "react";
import Navbar from "../components/Navbar";
import BankCardforTransferPage from "../components/transfer/BankCardforTransferPage";
import FromAccountSection, {
  initialCardList,
} from "../components/transfer/FromAccountSection";
import RecipientSection from "../components/transfer/RecipientSection";
import TransferSummarySection from "../components/transfer/TransferSummarySection";
import RecentTransfersSection from "../components/transfer/RecentTransfersSection";
import AmountAndDetailsSection from "../components/transfer/AmountDetailsSection";
import ConfirmTransferModal from "../components/transfer/ConfirmTransferModal";
import TransferSuccessModal from "../components/transfer/TransferSuccessModal";

function Transfer() {
  const [step, setStep] = useState("form");

  const [selectedCard, setSelectedCard] = useState(initialCardList[0]);
  const [recipient, setRecipient] = useState();
  const [amount, setAmount] = useState();
  const [note, setNote] = useState();

  const handleReviewTransfer = () => {
    if (!recipient) {
      alert("Please select or enter a recipient first!");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid transfer amount.");
      return;
    }
    setStep("confirm");
  };

  const handleConfirmTransfer = () => {
    setStep("success");
  };

  const handleReset = () => {
    setRecipient(null);
    setAmount("");
    setNote("");
    setStep("form");
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        <div className="min-h-[calc(100vh-64px)] p-4 md:p-6">
          {step === "form" && (
            <div
              id="main-container"
              className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 lg:grid-rows-7"
            >
              {/*Box1*/}
              <div className="rounded-xl bg-white p-4 shadow lg:col-span-4 lg:row-span-2">
                <FromAccountSection
                  selectedCard={selectedCard}
                  onSelectCard={setSelectedCard}
                />
              </div>

              {/*Box2*/}
              <div className="rounded-xl bg-white p-4 shadow lg:col-span-2 lg:col-start-5 lg:row-span-2">
                <TransferSummarySection
                  sender={selectedCard}
                  recipient={recipient}
                  amount={amount}
                />
              </div>
              {/*Box3*/}
              <div className="rounded-xl bg-white p-4 shadow lg:col-span-4 lg:row-span-2 lg:row-start-3">
                <RecipientSection onSelectRecipient={setRecipient} />
              </div>

              {/*Box4*/}
              <div className="rounded-xl bg-white p-4 shadow lg:col-span-2 lg:col-start-5 lg:row-span-2 lg:row-start-3">
                <RecentTransfersSection />
              </div>

              {/*Box5*/}
              <div className="rounded-xl bg-white p-4 shadow lg:col-span-4 lg:row-span-2 lg:row-start-5">
                <AmountAndDetailsSection
                  onAmountChange={setAmount}
                  onSubmit={handleReviewTransfer}
                  onNoteChange={setNote}
                />
              </div>

              {/*Box6*/}
              <div className="rounded-xl bg-white p-4 shadow lg:col-span-2 lg:col-start-5 lg:row-start-5">
                <p>🔒 Secure Transfer</p>All transfers are protected by 256-bit
                SSL encryption and monitored for fraud in real time.
              </div>
            </div>
          )}
          {step === "confirm" && (
            <ConfirmTransferModal
              transferData={{ recipient: recipient, amount, note }}
              onBack={() => setStep("form")}
              onConfirm={handleConfirmTransfer}
            />
          )}

          {step === "success" && (
            <TransferSuccessModal
              transferData={{ recipient: recipient, amount }}
              onNewTransfer={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Transfer;
