import rmf from "./images/rmf.png";
import signupimg from "./images/signup.svg";
import { Fade } from "react-awesome-reveal";

export default function Login() {
  return (
    <>
    <Fade>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <a
                className="flex items-center mb-6 text-xl font-semibold dark:text-white"
              >
                <img className=" h-8 mr-2" src={rmf} alt="logo" />
                RecruitMate
              </a>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Personal Information
              </h1>
              <form method="POST" 
  action="https://script.google.com/macros/s/AKfycby30DeLaffAMs918RzYgKcSRBFeuPmVElSHaSijj_QAkxN9izp5F0Q8onNFR1gRqm2aWA/exec" className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="athlete_email"
                    id="athlete_email"
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
                    name="parent_email"
                    id="parent_email"
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
                    name="parent_phone"
                    id="parent_phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+1-1234567809"
                    required=""
                  />
                </div>
                <div className="flex items-start">
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
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign up for early access!!
                </button>
              </form>
            </div>
          </div>
          <div>
            <img src={signupimg} />
          </div>
        </div>
      </section>
      </Fade>
    </>
  );
}
