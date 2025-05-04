import React from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
function Page(){
    return (
        <BackgroundBeamsWithCollision>
        <div className="min-h-screen flex flex-col items-center justify-center  text-white px-6 mt-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-center max-w-xl text-gray-300 mb-10">
            Have questions, suggestions, or feedback? We'd love to hear from you.
            Fill out the form below and our team will get back to you shortly.
          </p>
    
          <form className="w-full max-w-xl bg-grey/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        
<BackgroundBeams />
        </div>
        </BackgroundBeamsWithCollision>
    );
}

export default Page;