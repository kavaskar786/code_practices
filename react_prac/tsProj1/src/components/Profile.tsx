import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "https://via.placeholder.com/1500x400"
  );
  const [profileUrl, setProfileUrl] = useState<string>(
    "https://via.placeholder.com/100"
  );
  const handleBannerChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="backgrojnd image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      {/* channel logo */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="channel Logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-[3.6rem] mt-[9rem] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
      </div>
    </div>
  );
};
export default Profile;
