import { useRef, useState } from "react";
import rmf from "./images/rmf.png";
import signupimg from "./images/signup.svg";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const InputForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      import.meta.env.VITE_WEB_URL,
      {
        method: "POST",
        body: new FormData(formRef.current),
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setShowPopup(true);
      formRef.current.reset(); 
    })
    .catch((err) => {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    });
  }
  return (
    <>
        {showPopup && (
          <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white p-30 rounded-lg shadow-lg text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-semibold mb-2">Thank you for your interest!</h2>
      <p className="text-md">Look forward to hearing from us soon!</p>
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        onClick={() => setShowPopup(false)}
      >
        Close
      </button>
    </motion.div>
  </motion.div>
)}
      <Fade>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
              <Fade cascade>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <a className="flex items-center mb-6 text-xl font-semibold dark:text-white">
                  <img className=" h-8 mr-2" src={rmf} alt="logo" />
                  RecruitMate
                </a>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Personal Information
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="athlete"
                      id="athlete"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Parent&apos;s email
                    </label>
                    <input
                      type="email"
                      name="parent"
                      id="parent"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="+1-1234567809"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sport"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select Sport
                    </label>
                    <select
                      name="sport"
                      id="sport"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      <option value="">Choose a sport</option>
                      <option value="track_and_field">Track and Field</option>
                      <option value="football">Football</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="advert"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      name="advert"
                      id="advert"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      <option value="">Select an Option</option>
                      <option value="instagram">Instagram</option>
                      <option value="twitter">X(Twitter)</option>
                      <option value="tiktok">TikTok</option>
                      <option value="online">Referral(Friends, Coach, Teammate)</option>
                      <option value="referred">Web Search</option>
                    </select>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div> */}
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign up for early access!!
                  </button>
                </form>
              </div>
              </Fade>
            </div>
            {/* <div>
              <img src={signupimg} />
            </div> */}
          </div>
        </section>
      </Fade>
    </>
  );
};

export default InputForm;
