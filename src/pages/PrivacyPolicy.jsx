import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="text-center py-16 px-6 bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
            PRIVACY POLICY
          </h1>
          <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Effective Date: October 1, 2023
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
            
            <div>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                Type of website: Informational, Blog, Media, and Marketing
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                www.snshn.co (the "Site") is owned and operated by Sunshine Investments LLC. Sunshine Investments LLC can be contacted at:
              </p>
              <div className="mt-4 space-y-2">
                <a href="mailto:team@snshn.co" className="block font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                  team@snshn.co
                </a>
                <a href="tel:2627355989" className="block font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                  (262) 735-5989
                </a>
                <p className="font-eurostile text-gray-300">
                  2004 N Dr. M.L.K. Jr Drive, Milwaukee, WI 53212
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Purpose</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300">
                <li>The personal data we will collect</li>
                <li>Use of collected data</li>
                <li>Who has access to the data collected</li>
                <li>The rights of Site users</li>
                <li>The Site's cookie policy</li>
              </ul>
              <p className="font-eurostile text-gray-300 leading-relaxed mt-4">
                This Privacy Policy applies in addition to the terms and conditions of our Site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Consent</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                By using our Site users agree that they consent to:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300">
                <li>The conditions set out in this Privacy Policy</li>
                <li>The collection, use, and retention of the data listed in this Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Personal Data We Collect</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect any additional data beyond the data listed below without notifying you first.
              </p>
              
              <h3 className="text-xl font-eurostile font-semibold text-white mb-3 mt-6">Data Collected Automatically</h3>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                When you visit and use our Site, we may automatically collect and store the following information:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300">
                <li>IP address</li>
                <li>Location</li>
                <li>Hardware and software details</li>
                <li>Clicked links</li>
                <li>Content viewed</li>
                <li>Other Usage Data</li>
              </ul>

              <h3 className="text-xl font-eurostile font-semibold text-white mb-3 mt-6">Data Collected in a Non-Automatic Way</h3>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                We may also collect the following data when you perform certain functions on our Site:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
              </ul>
              <p className="font-eurostile text-gray-300 leading-relaxed mt-4">
                This data may be collected using the following methods: Signing up for Newsletter(s) or filling out contact forms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">How We Use Personal Data</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                Data collected on our Site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this Privacy Policy.
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                The data we collect automatically is used for the following purposes:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300">
                <li>Statistics and Usage Behavior Data</li>
              </ul>
              <p className="font-eurostile text-gray-300 leading-relaxed mt-4 mb-3">
                The data we collect when the user performs certain functions may be used for the following purposes:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300">
                <li>Communication and Updates</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Who We Share Personal Data With</h2>
              
              <h3 className="text-xl font-eurostile font-semibold text-white mb-3">Employees</h3>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                We may disclose user data to any member of our organization who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy.
              </p>

              <h3 className="text-xl font-eurostile font-semibold text-white mb-3">Third Parties</h3>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                We may share user data with the following third parties:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300 mb-4">
                <li>Google and Affiliates</li>
                <li>Squarespace and Affiliates</li>
              </ul>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                We may share the following user data with third parties: Basic usage data
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                We may share user data with third parties for the following purposes:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300">
                <li>Targeted advertising</li>
                <li>Usage statistics aggregation</li>
              </ul>
              <p className="font-eurostile text-gray-300 leading-relaxed mt-4">
                Third parties will not be able to access user data beyond what is reasonably necessary to achieve the given purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Other Disclosures</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                We will not sell or share your data with other third parties, except in the following cases:
              </p>
              <ul className="list-decimal list-inside space-y-2 font-eurostile text-gray-300 mb-4">
                <li>If the law requires it</li>
                <li>If it is required for any legal proceeding</li>
                <li>To prove or protect our legal rights</li>
                <li>To buyers or potential buyers of this company in the event that we seek to sell the company</li>
              </ul>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and have no control over their privacy policies and practices.
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed mt-4">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All of the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">How Long We Store Personal Data</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                User data will be stored until the purpose the data was collected for has been achieved. You will be notified if your data is kept for longer than this period.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">How We Protect Your Personal Data</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                In order to protect your security, we use the strongest available browser encryption, as produced and serviced by Google and Squarespace, which store all of our data on servers in secure facilities. All data is only accessible to our employees. Our employees are bound by strict confidentiality agreements and a breach of this agreement would result in the employee's termination.
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed mt-4">
                While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the security of user data beyond what is reasonably practical.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Children</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                We do not knowingly collect or use personal data from children under 13 years of age. If we learn that we have collected personal data from a child under 13 years of age, the personal data will be deleted as soon as possible. If a child under 13 years of age has provided us with personal data their parent or guardian may contact our privacy officer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Cookie Policy</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data relating to the user's browsing habits. You can choose to be notified each time a cookie is transmitted. You can also choose to disable cookies entirely in your internet browser, but this may decrease the quality of your user experience.
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                We use the following types of cookies on our Site:
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed font-semibold mb-2">
                Third-Party Cookies
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                Third-party cookies are created by a website other than ours. We may use third-party cookies to achieve the following purposes: Monitor user preferences to tailor advertisements around their interests.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-eurostile font-bold text-yellow-400 mb-4">Contact Information</h2>
              <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                If you have any questions, concerns or complaints, you can contact our privacy officer, Anna Beckerleg, at:
              </p>
              <div className="space-y-2">
                <a href="mailto:team@snshn.co" className="block font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                  team@snshn.co
                </a>
                <a href="tel:2627355989" className="block font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                  (262) 735-5989 Ext. 7
                </a>
                <p className="font-eurostile text-gray-300">
                  PO Box 1136, Milwaukee, WI 53201
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}