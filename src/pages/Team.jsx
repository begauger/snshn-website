import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Team() {
  const testimonials = [
    {
      quote: "Anna helped me sell a multi-family property and acquire two mixed-use properties through a 1031 exchange. The process of selling the multi-family and identifying and buying the exchanged properties was smooth. Anna put me in touch with a local 1031 exchange company that played the role of accommodator very well. Anna negotiated seller repairs as a contingency to the sale. The properties are cashing flowing and I'm delighted. You should seriously consider her for your next transaction. Her knowledge as a real estate agent, real estate investor, property manager, and local resident, makes her an excellent partner, whether you are looking to purchase your next home or investment property."
    },
    {
      quote: "I've worked with Anna on multiple transactions as a remote investor and she is fantastic! Great communicator, always makes things super easy/clear, and is skilled at finding and negotiating great deals. She really cares about her clients and has an extensive network within the Milwaukee area. I would highly recommend working with Anna!!"
    },
    {
      quote: "We had Anna for both the purchase of our new home and the sale of our condo. She was exceptional! Knowledgeable, responsive and great at negotiation! We would absolutely call her again if we need a realtor and will happily recommend her to friends!"
    },
    {
      quote: "I just had a wonderful experience with Anna helping me sell a multi unit apartment building. She went above and beyond in terms of answering all of my questions. She was also an excellent communicator and did a great job keeping me in the loop and providing guidance throughout the process. In the end I was very happy with where we ended up! I highly recommend working with her, I know I will again in the future."
    },
    {
      quote: "Very knowledgeable and great communication made the process really easy. She helped me find my first investment and guided me through the whole process. Her experience shows and she's the best will be definitely coming back for my next investment."
    },
    {
      quote: "Anna was so patient as she helped me find the perfect home and so helpful during the buying process. I appreciated her consistent kindness and understanding as she assisted me. I highly recommend her and will be reaching out to her in the future if I ever want to move!"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="text-center py-16 px-6 bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
            MEET OUR TEAM
          </h1>
          <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The dedicated professionals behind SNSHN, committed to delivering exceptional real estate experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/annasnshn.webp"
                  alt="Anna Cihla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-eurostile font-bold text-yellow-400 mb-2">Anna Cihla</h2>
                <p className="text-lg font-eurostile text-gray-400 mb-6">Broker - Owner</p>
                
                <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                  I grew up in Madison and moved to Milwaukee in 2016 to work as an emergency room nurse. It didn't take long to realize the potential in Milwaukee and to make roots here by purchasing my first investment property. While working in the hospital and spending my days off managing a few investment portfolios, I quickly fell in love with real estate and decided to transition to real estate full time.
                </p>
                
                <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                  I created SNSHN Realty so that I can provide the best full service real estate experience for all of my clients. Having lived in California for a few years as a remote investor, I understand the hardships of being a remote buyer and the importance of having an agent who has your best interest in mind. From working critical cases in the hospital to now navigating complex and stressful business situations, I am committed to being a reliant and trusting advocate for my clients whether they are buying, selling or investing.
                </p>
                
                <div className="space-y-2">
                  <a href="mailto:anna@snshn.co" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 font-eurostile transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    anna@snshn.co
                  </a>
                  <a href="tel:6083332827" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 font-eurostile transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    608-333-2827
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/tiffanysnshn.webp"
                  alt="Tiffany Pfeilsticker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-eurostile font-bold text-yellow-400 mb-2">Tiffany Pfeilsticker</h2>
                <p className="text-lg font-eurostile text-gray-400 mb-6">Licensed Sales Associate</p>
                
                <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                  Tiffany has been a resident of Milwaukee since 2009, where she pursued a Bachelor's degree from Marquette University. She fell in love with Milwaukee and all the city has to offer. Tiffany began her journey as a Realtor because of her interest in real estate investing, which has also led her to a dual career in property management.
                </p>
                
                <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                  Tiffany is excited to pass on her knowledge and assist those who may be considering investing in real estate and those who are interested in growing their portfolios. Tiffany's passions other than real estate include spending time with her son, Royce, grabbing a coffee, reading, and cooking or baking.
                </p>
                
                <div className="space-y-2">
                  <a href="mailto:tiffany@snshn.co" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 font-eurostile transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    tiffany@snshn.co
                  </a>
                  <a href="tel:4148883208" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 font-eurostile transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    414-888-3208
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-gradient-to-b from-black to-zinc-900 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Pirulen, sans-serif' }}>
                CLIENT TESTIMONIALS
              </h2>
              <p className="text-lg font-eurostile text-gray-300">
                Hear what our clients have to say about working with SNSHN
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-eurostile text-gray-300 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.google.com/search?sca_esv=a0bb12506671175f&rlz=1C1RXQR_enUS1176US1176&sxsrf=AE3TifNYxU3t3mCqDzruhotIVt54ZE_R3A:1765745174149&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1e3EgCjtcw_xsTMfTotAloZApz1SMFRaGhW-mlQt4zRPvqd8MMjHB4HE73EK_OSSoUw8R0yC_qK5G8WIlk1SeQPFnlmWB27FfWRrajtLAoXCpl1yfT51kdWoeXb6PeFIyvAAPk%3D&q=SNSHN+Management+%26+Realty+-+Milwaukee+Reviews&sa=X&ved=2ahUKEwiHzfmu-b2RAxVwM0QIHU0nBNEQ0bkNegQIJxAE&biw=1920&bih=945&dpr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300"
              >
                Read More Reviews
              </a>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}