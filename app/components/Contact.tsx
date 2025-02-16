import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Turnstile } from '@marsidev/react-turnstile'

const Contact: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800/50 py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          {!showContact ? "Have a question or want to work together? Please verify you're human to see my contact information." : "Have a question or want to work together? Feel free to reach out to me directly."}
        </p>
        <div className="flex flex-col items-center gap-6">
          {!showContact ? (
            <div className="flex justify-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? '1x00000000000000000000AA' : '0x4AAAAAAA8_YNqq3tM732Yw'}
                onSuccess={() => setShowContact(true)}
              />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="mailto:austin@austinkoske.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-500 transition-all duration-300 hover:-translate-y-1 transform"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Send me an email
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;