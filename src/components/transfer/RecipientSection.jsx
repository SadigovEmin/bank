import React, { useState } from "react";
import { Search, UserCheck, CreditCard, ArrowLeft } from "lucide-react";

const mockContacts = [
  {
    id: 1,
    name: "Anar Rzayev",
    bank: "ABB Bank",
    iban: "AZ29NABZ0000000000000001",
    initials: "AR",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Nigar Huseynova",
    bank: "Kapital Bank",
    iban: "AZ77AIIB3808001900000002",
    initials: "NH",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "Tural Aliyev",
    bank: "Bir Bank",
    iban: "AZ96BRES0037010000000003",
    initials: "TA",
    color: "bg-amber-500",
  },
  {
    id: 4,
    name: "Leyla Mammadova",
    bank: "Pasha Bank",
    iban: "AZ04AIIB3808001900000004",
    initials: "LM",
    color: "bg-purple-600",
  },
  {
    id: 5,
    name: "Ferhad Ismayilzade",
    bank: "Kapital Bank",
    iban: "4169738855464040",
    initials: "FI",
    color: "bg-orange-600",
  },
  {
    id: 6,
    name: "Ismayil Ismayilov",
    bank: "Japan Bank",
    iban: "3290134576091247",
    initials: "II",
    color: "bg-green-600",
  },
  {
    id: 7,
    name: "Senan Abdullazade",
    bank: "Georgian Bank",
    iban: "892354630632781",
    initials: "SA",
    color: "bg-yellow-600",
  },
];

export default function RecipientSection({ onSelectRecipient }) {
  const [isManualInput, setIsManualInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [manualIban, setManualIban] = useState("");

  // Filter contacts by search query
  const filteredContacts = mockContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.bank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.iban.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectContact = (contact) => {
    setSelectedRecipient(contact);
    if (onSelectRecipient) onSelectRecipient(contact);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!manualIban) return;
    const manualRecipient = {
      id: "manual",
      name: "Manual Recipient",
      bank: "External Bank",
      iban: manualIban,
      initials: "IB",
      color: "bg-slate-700",
    };
    setSelectedRecipient(manualRecipient);
    if (onSelectRecipient) onSelectRecipient(manualRecipient);
  };

  return (
    <div className="bg-white rounded-3xl p-3.5  transition-all">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base font-semibold text-slate-900 font-serif">
          Recipient
        </h3>

        {/* Toggle Mode Button */}
        <button
          type="button"
          onClick={() => {
            setIsManualInput(!isManualInput);
            setSearchQuery("");
          }}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
        >
          {isManualInput ? "Choose from contacts" : "Enter IBAN or Card Number manually"}
        </button>
      </div>

      {/* MODE 1: Manual IBAN / Card Entry */}
      {isManualInput ? ( 
        <div className="space-y-4 animate-fadeIn">
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={manualIban}
              onChange={(e) => setManualIban(e.target.value)}
              placeholder="AZ00 XXXX 0000 0000 0000 0000 0000 or Card Number"
              className="w-full bg-[#f1f5f9]/60 border border-slate-200/80 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-mono text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <p className="text-[11px] text-slate-400 pl-1">
            Supports official Azerbaijani IBAN formats (e.g. AZ29...) or 16-digit card numbers.
          </p>

          {manualIban && (
            <button
              onClick={handleManualSubmit}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-3 rounded-xl transition-colors cursor-pointer"
            >
              Confirm Recipient
            </button>
          )}
        </div>
      ) : (
        /* MODE 2: Contact Search & Selection List */
        <div className="space-y-4">
          {/* Search Field */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search contacts..."
              className="w-full bg-[#f1f5f9]/70 border border-slate-200/60 rounded-2xl pl-11 pr-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Contact List */}
          <div className="space-y-2 max-h-56 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => {
                const isSelected = selectedRecipient?.id === contact.id;

                return (
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => handleSelectContact(contact)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-2xl transition-all cursor-pointer text-left ${
                      isSelected
                        ? "bg-blue-50/70 border border-blue-200/80 shadow-sm"
                        : "hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Avatar Circle */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${contact.color} text-white font-bold text-xs tracking-wider shadow-xs`}
                      >
                        {contact.initials}
                      </div>

                      {/* Info */}
                      <div>
                        <p className="text-sm font-semibold text-slate-800 leading-tight">
                          {contact.name}
                        </p>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {contact.bank} · {contact.iban.slice(0, 14)}...
                        </p>
                      </div>
                    </div>

                    {/* Checkmark when selected */}
                    {isSelected && (
                      <UserCheck className="w-5 h-5 text-blue-600 mr-2" />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="text-center py-6 text-xs text-slate-400">
                No contacts found matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}