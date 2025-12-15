import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-eurostile text-yellow-400 mb-8">
            Terms and Conditions
          </h1>
          
          <div className="space-y-8 font-eurostile text-gray-300 leading-relaxed">
            <p className="text-lg">
              These terms and conditions (the "Terms and Conditions") govern the use of www.snshn.co (the "Site"). 
              This Site is owned and operated by Sunshine Investments LLC. This Site is a news or media website.
            </p>
            
            <p className="text-lg">
              By using this Site, you indicate that you have read and understand these Terms and Conditions and agree 
              to abide by them at all times.
            </p>
            
            <p className="text-lg font-semibold text-yellow-400">
              THESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION CLAUSE THAT IMPACTS YOUR RIGHTS ABOUT HOW TO 
              RESOLVE DISPUTES. PLEASE READ IT CAREFULLY.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p>
                All content published and made available on our Site is the property of Sunshine Investments LLC 
                and the Site's creators. This includes, but is not limited to images, text, logos, documents, 
                downloadable files and anything that contributes to the composition of our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                Sunshine Investments LLC and our directors, officers, agents, employees, subsidiaries, and affiliates 
                will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal 
                fees from your use of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnity</h2>
              <p>
                Except where prohibited by law, by using this Site you indemnify and hold harmless Sunshine Investments 
                LLC and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, 
                losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your 
                violation of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Applicable Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of the State of Wisconsin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
              <p className="mb-4">
                Subject to any exceptions specified in these Terms and Conditions, if you and Sunshine Investments LLC 
                are unable to resolve any dispute through informal discussion, then you and Sunshine Investments LLC 
                agree to submit the issue first before a non-binding mediator and to an arbitrator in the event that 
                mediation fails. The decision of the arbitrator will be final and binding. Any mediator or arbitrator 
                must be a neutral party acceptable to both you and Sunshine Investments LLC. The costs of any mediation 
                or arbitration will be shared equally between you and Sunshine Investments LLC.
              </p>
              <p>
                Notwithstanding any other provision in these Terms and Conditions, you and Sunshine Investments LLC 
                agree that you both retain the right to bring an action in small claims court and to bring an action 
                for injunctive relief or intellectual property infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Additional Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Consent to Receive SMS Messages</h3>
                  <p>
                    You consent to receive SMS messages (including text messages), and telephone calls (including 
                    prerecorded and artificial voice and autodialed) from us, our agents, representatives, affiliates, 
                    or anyone communicating on our behalf at the specific number(s) you have provided to us, with 
                    service-related information, questions about your use of the Services, and/or Even Account and 
                    marketing information. You certify, warrant, and represent that the telephone number you have 
                    provided to us is your contact number and not someone else's. You represent that you are permitted 
                    to receive calls and text messages at the telephone number you have provided to us. You agree to 
                    promptly alert us whenever you stop using a telephone number. Even and our agents, representatives, 
                    affiliates, and anyone calling on our behalf may use such means of communication described in this 
                    section even if you will incur costs to receive such phone messages, text messages, e-mails, or 
                    other means. Standard message and data rates may apply to all SMS messages (including text messages). 
                    We may modify or terminate our SMS messaging services from time to time, for any reason, and without 
                    notice, including the right to terminate SMS messaging with or without notice, without liability to you.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
              <p>
                If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent 
                or invalid under applicable laws, those provisions will be deemed void and will be removed from these 
                Terms and Conditions. All other provisions will not be affected by the removal and the rest of these 
                Terms and Conditions will still be considered valid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes</h2>
              <p>
                These Terms and Conditions may be amended from time to time in order to maintain compliance with the 
                law and to reflect any changes to the way we operate our Site and the way we expect users to behave 
                on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice 
                on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Details</h2>
              <p className="mb-4">
                Please contact us if you have any questions or concerns. Our contact details are as follows:
              </p>
              <div className="space-y-2 pl-4">
                <p>(262) 735-5989</p>
                <p>
                  <a href="mailto:team@snshn.co" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                    team@snshn.co
                  </a>
                </p>
                <p>2004 N. Dr M.L.K. Jr Dr, Milwaukee, WI 53212</p>
              </div>
              <p className="mt-4">
                You can also contact us through the feedback form available on our Site.
              </p>
            </section>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                Effective Date: 1st day of October, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}