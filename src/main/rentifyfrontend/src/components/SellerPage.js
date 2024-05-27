import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';



export default function Seller() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    hospital: '',
    colleges: '',
    role: '',
  });
 

  return (
    <>
     
      <div className="flex  flex-col justify-center items-center min-h-screen bg-gray-100 sign">
        <Navbar/>
        <div className='w-[450px] h-[70px] bg-slate-600 flex items-center justify-evenly'>
            <span className='w-auto h-[40px] p-2 bg-green-600 rounded-lg font-bold text-white cursor-pointer' onClick={()=>navigate('/Homepage')}>BuyerPage</span>
            <span className='w-auto h-[40px] p-2 bg-blue-600 rounded-lg font-bold text-white cursor-pointer'>SellerPage</span>

        </div>
        <div className="bg-transparent p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Property Details</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Form data:', formData);
             
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="place">
                Place
              </label>
              <input
                type="text"
                name="place"
                id="place"
                value={formData.place}
                onChange={(e) =>
                  setFormData({ ...formData, place: e.target.value })
                }
                className="w-full bg-slate-400 px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
                Area (sq ft)
              </label>
              <input
                type="text"
                name="area"
                id="area"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                className="w-full bg-slate-400 px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bedrooms">
                Number of Bedrooms
              </label>
              <input
                type="number"
                name="bedrooms"
                id="bedrooms"
                value={formData.bedrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bedrooms: e.target.value })
                }
                className="w-full bg-slate-400 px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bathrooms">
                Number of Bathrooms
              </label>
              <input
                type="number"
                name="bathrooms"
                id="bathrooms"
                value={formData.bathrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bathrooms: e.target.value })
                }
                className="w-full bg-slate-400 px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hospital">
                Nearby Hospital
              </label>
              <input
                type="text"
                name="hospital"
                id="hospital"
                value={formData.hospital}
                onChange={(e) =>
                  setFormData({ ...formData, hospital: e.target.value })
                }
                className="w-full bg-slate-400 px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="colleges">
                Nearby Colleges
              </label>
              <input
                type="text"
                name="colleges"
                id="colleges"
                value={formData.colleges}
                onChange={(e) =>
                  setFormData({ ...formData, colleges: e.target.value })
                }
                className="w-full bg-slate-400 px-3 py-2 border rounded"
                required
              />
            </div>
           
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
              Submit
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
}