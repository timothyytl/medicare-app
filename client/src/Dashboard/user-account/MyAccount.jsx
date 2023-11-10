import { useContext, useState } from "react"
import { authContext } from "../../context/AuthContext"
import MyBookings from "./MyBookings"
import Profile from "./Profile"
import useGetProfile from "../../hooks/useFetchData.js"
import { BASE_URL } from "../../config"
import Loading from "../../components/Loader/Loading.jsx"
import Error from "../../components/Error/Error.jsx"

export default function MyAccount() {
  const { dispatch } = useContext(authContext)
  const [tab, setTab] = useState("bookings")

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`)

  console.log(userData, "userdata")

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error />}

        {!loading && error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-customPrimary">
                  <img
                    src={userData.photo}
                    alt="user-img"
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:{" "}
                  <span className="ml-2 text-headingColor text-[12px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 text-white rounded-md"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 text-white rounded-md">
                  Delete account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={` ${
                    tab === "bookings" &&
                    "bg-customPrimary text-white font-normal"
                  }" p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-customPrimary"`}
                >
                  My Bookings
                </button>

                <button
                  onClick={() => setTab("settings")}
                  className={` ${
                    tab === "settings" &&
                    "bg-customPrimary text-white font-normal"
                  }" py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-customPrimary"`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <Profile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
