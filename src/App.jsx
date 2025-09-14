import { useEffect, useState } from 'react'
import banner from './assets/banner.jpg'
import section from './assets/section.jpg'

export default function App() {
  const weddingData = {
    groom: "Deep",
    bride: "Priya",
    weddingDate: "23rd October 2025",
    venue: "Grand Palace",
    // 👉 Update with your couple photo path
    coupleImage:section,
    // 👉 Update with your banner image path
    backdropImage: banner,
    events: [
      {
        name: "Wedding Ceremony",
        date: "October 24, 2025",
        time: "10:00 AM onwards",
        venue: "Grand Palace",
        address: "123 Palace Road, Mumbai, Maharashtra"
      },
      {
        name: "Reception",
        date: "October 24, 2025",
        time: "7:00 PM onwards",
        venue: "Grand Palace Banquet",
        address: "123 Palace Road, Mumbai, Maharashtra"
      }
    ]
  };

  // WeddingHeader Component
  const WeddingHeader = ({ coupleImage, brideName, groomName }) => (
    <div className="relative h-screen md:h-72 bg-rose-100 flex items-center justify-center border-b border-rose-200">
      {coupleImage && (
        <img src={coupleImage} alt="Wedding Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      )}
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative text-center px-4 z-10">
        <h1 className="text-3xl md:text-4xl font-serif text-white font-bold drop-shadow-lg shadow-black">{groomName} & {brideName}</h1>
        <p className="text-base md:text-lg text-white mt-2 drop-shadow-md shadow-black">are tying the knot</p>
      </div>
    </div>
  );

  // SaveTheDate Component with mandala watermark
  const SaveTheDate = ({ date, groomName, brideName }) => (
    <div className="py-12 px-6">
      <div className="save-the-date-card text-center">
        <div className="font-script hashtag text-2xl mb-2">We are getting married!</div>
        <h2 className="font-head names text-4xl md:text-5xl font-bold mb-2">{groomName} & {brideName}</h2>
        <p className="font-body date-text text-lg md:text-xl mb-6">save the date <span className="font-head date-strong text-2xl md:text-3xl ml-1">{date}</span></p>
        <button className="btn-save">save</button>
      </div>
    </div>
  );

  // CouplePhoto Component
  const CouplePhoto = ({ coupleImage, brideName, groomName }) => (
    <div className="flex flex-col items-center">
      {coupleImage && (
        <img src={coupleImage} alt="Couple" className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-rose-200" />
      )}
      <p className="mt-4 text-lg text-gray-700 font-serif">{groomName} & {brideName}</p>
    </div>
  );

  // Decorative Section Divider using images from assets
  const SectionDivider = ({ type = 'above' }) => (
    <div className="section-divider">
      <div className={type === 'above' ? 'section-divider-above' : 'section-divider-below'}></div>
    </div>
  );

  // EventDetails Component
  const EventDetails = ({ events }) => (
    <div className="py-16 px-6 bg-white border-t border-b border-rose-200">
      <h2 className="text-3xl font-serif text-rose-700 text-center mb-8">Wedding Events</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-rose-50 p-6 rounded-xl shadow border border-rose-200">
            <h3 className="text-xl text-rose-800 font-serif mb-2">{event.name}</h3>
            <p className="text-gray-700">{event.date} | {event.time}</p>
            <p className="text-gray-600 mt-2">{event.venue}</p>
            <p className="text-gray-500 text-sm">{event.address}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Header Section with Uploadable Banner */}
      <WeddingHeader
        coupleImage={weddingData.backdropImage}
        brideName={weddingData.bride}
        groomName={weddingData.groom}
      />

      {/* Save the Date Section */}
      <SaveTheDate
        date={weddingData.weddingDate}
        groomName={weddingData.groom}
        brideName={weddingData.bride}
      />

      {/* Decorative divider */}
      <SectionDivider type="above" />

      {/* Together Forever Couple Photo Section */}
      <div className="wedding-section">
        <h2 className="section-title text-3xl md:text-4xl mb-6">Together Forever</h2>
        <CouplePhoto
          coupleImage={weddingData.coupleImage}
          brideName={weddingData.bride}
          groomName={weddingData.groom}
        />
      </div>

      {/* Decorative divider */}
      <SectionDivider type="below" />

      {/* Event Details Section */}
      <EventDetails events={weddingData.events} />

      {/* Footer with Ornamental Style */}
      <div className="py-16 px-6 bg-gradient-to-br from-amber-100 via-pink-100 to-rose-100 border-t border-rose-200">
        <div className="max-w-xl mx-auto text-center relative">
          {/* Ornamental Divider */}
          <div className="mb-8 flex justify-center">
          </div>

          <p className="text-xl text-gray-700 italic font-serif mb-4">
            Two hearts, one soul, forever together
          </p>
          <p className="text-base text-gray-600 mb-8">
            With love and blessings from our families
          </p>

          {/* Families */}
          <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md border border-rose-200">
            <div>
              <h4 className="text-lg text-gray-800 mb-2">Groom's Family</h4>
              <p className="text-gray-600">Mr. & Mrs. Sharma</p>
            </div>
            <div>
              <h4 className="text-lg text-gray-800 mb-2">Bride's Family</h4>
              <p className="text-gray-600">Mr. & Mrs. Gupta</p>
            </div>
          </div>

          {/* Closing Ornament */}
          <div className="mt-10 flex justify-center">
          </div>
        </div>
      </div>
    </div>
  );
}

