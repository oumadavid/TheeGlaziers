import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "254712020924"; // country code + number, no + or spaces
const WHATSAPP_MESSAGE = "Hi Highland Glaziers, I'd like to request a quote.";

const WhatsAppButton = () => {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200 animate-heartbeat"
      >
        <FaWhatsapp className="text-white" size={30} />
      </a>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.12); }
          30% { transform: scale(1); }
          45% { transform: scale(1.12); }
          60% { transform: scale(1); }
        }
        .animate-heartbeat {
          animation: heartbeat 2.2s ease-in-out infinite;
        }
        .animate-heartbeat:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;